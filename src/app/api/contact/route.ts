import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Helper to escape untrusted HTML characters to prevent HTML/XSS injection in emails
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

const MAX_REQUEST_BODY_BYTES = 32 * 1024;

export async function POST(request: Request) {
  try {
    if (request.method !== 'POST') {
      return NextResponse.json(
        { error: 'Method not allowed.' },
        { status: 405, headers: { Allow: 'POST' } }
      );
    }

    const contentType = request.headers.get('content-type');
    if (!contentType || contentType.split(';', 1)[0].trim().toLowerCase() !== 'application/json') {
      return NextResponse.json(
        { error: 'Content-Type must be application/json.' },
        { status: 415 }
      );
    }

    const origin = request.headers.get('origin');
    let requestOrigin: string;
    try {
      requestOrigin = new URL(request.url).origin;
      if (!origin || new URL(origin).origin !== requestOrigin) {
        return NextResponse.json(
          { error: 'Cross-origin requests are not allowed.' },
          { status: 403 }
        );
      }
    } catch {
      return NextResponse.json(
        { error: 'Invalid request origin.' },
        { status: 403 }
      );
    }

    const contentLength = request.headers.get('content-length');
    if (contentLength !== null) {
      if (!/^\d+$/.test(contentLength) || !Number.isSafeInteger(Number(contentLength))) {
        return NextResponse.json(
          { error: 'Invalid Content-Length header.' },
          { status: 400 }
        );
      }

      if (Number(contentLength) > MAX_REQUEST_BODY_BYTES) {
        return NextResponse.json(
          { error: 'Payload too large.' },
          { status: 413 }
        );
      }
    }

    const reader = request.body?.getReader();
    if (!reader) {
      return NextResponse.json(
        { error: 'Invalid JSON request body.' },
        { status: 400 }
      );
    }

    const chunks: Uint8Array[] = [];
    let bodySize = 0;
    let bodyBytes: Uint8Array;
    try {
      while (true) {
        const { done, value } = await reader.read();
        if (done) {
          break;
        }

        if (!value) {
          continue;
        }

        bodySize += value.byteLength;
        if (bodySize > MAX_REQUEST_BODY_BYTES) {
          try {
            await reader.cancel();
          } catch (error: unknown) {
            console.warn(
              'Unable to cancel oversized contact request body stream.',
              error instanceof Error ? error.name : 'Unknown error'
            );
          }

          return NextResponse.json(
            { error: 'Payload too large.' },
            { status: 413 }
          );
        }

        chunks.push(value);
      }

      bodyBytes = new Uint8Array(bodySize);
      let offset = 0;
      for (const chunk of chunks) {
        bodyBytes.set(chunk, offset);
        offset += chunk.byteLength;
      }
    } catch {
      return NextResponse.json(
        { error: 'Unable to read request body.' },
        { status: 400 }
      );
    }

    let body: unknown;
    try {
      const bodyText = new TextDecoder('utf-8', { fatal: true }).decode(bodyBytes);
      body = JSON.parse(bodyText);
    } catch {
      return NextResponse.json(
        { error: 'Invalid JSON request body.' },
        { status: 400 }
      );
    }

    if (!body || typeof body !== 'object' || Array.isArray(body)) {
      return NextResponse.json(
        { error: 'Invalid request body format.' },
        { status: 400 }
      );
    }

    const rawBody = body as Record<string, unknown>;

    // Honeypot check: automated spambots frequently populate hidden fields.
    if (
      (typeof rawBody.honeypot === 'string' && rawBody.honeypot.trim() !== '') ||
      (typeof rawBody.website === 'string' && rawBody.website.trim() !== '')
    ) {
      // Return simulated success without sending email to drop bot traffic silently
      return NextResponse.json({ success: true });
    }

    const { name, email, business } = rawBody;
    if (typeof name !== 'string' || typeof email !== 'string' || typeof business !== 'string') {
      return NextResponse.json(
        { error: 'Missing required fields or invalid input.' },
        { status: 400 }
      );
    }

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedBusiness = business.trim();

    if (!trimmedName || !trimmedEmail || !trimmedBusiness) {
      return NextResponse.json(
        { error: 'All fields are required.' },
        { status: 400 }
      );
    }

    if (trimmedName.length > 100) {
      return NextResponse.json(
        { error: 'Name cannot exceed 100 characters.' },
        { status: 400 }
      );
    }

    if (trimmedEmail.length > 254) {
      return NextResponse.json(
        { error: 'Email cannot exceed 254 characters.' },
        { status: 400 }
      );
    }

    if (trimmedBusiness.length > 3000) {
      return NextResponse.json(
        { error: 'Business/Request description cannot exceed 3000 characters.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
    if (!emailRegex.test(trimmedEmail) || /[\r\n]/.test(trimmedEmail)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    const safeSubjectName = trimmedName.replace(/[\r\n]+/g, ' ');

    const host = process.env.SMTP_HOST || 'smtp.gmail.com';
    const port = Number(process.env.SMTP_PORT) || 587;
    const secure = process.env.SMTP_SECURE === 'true' || port === 465;

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        minVersion: 'TLSv1.2',
        rejectUnauthorized: true,
      },
    });

    const recipient = process.env.CONTACT_EMAIL || process.env.SMTP_USER;
    if (!recipient) {
      console.error('Contact email recipient is not configured.');
      return NextResponse.json(
        { error: 'Failed to send message. Please try again later.' },
        { status: 500 }
      );
    }

    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER || '"Alyzr Labs" <noreply@alyzr.com>',
      to: recipient,
      replyTo: trimmedEmail,
      subject: `New Lead: ${safeSubjectName} from Alyzr Labs Website`,
      text: `You have received a new contact request!\n\nName: ${trimmedName}\nEmail: ${trimmedEmail}\nBusiness/Request: ${trimmedBusiness}`,
      html: `
        <h3>New Contact Request</h3>
        <p><strong>Name:</strong> ${escapeHtml(trimmedName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(trimmedEmail)}</p>
        <p><strong>Business/Request:</strong></p>
        <p style="white-space: pre-wrap;">${escapeHtml(trimmedBusiness)}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    // Avoid logging secrets or raw request payloads; do not expose internal details to client.
    if (error instanceof Error) {
      const errCode = (error as { code?: string }).code;
      console.error('Contact email error:', {
        name: error.name,
        code: errCode,
      });
    } else {
      console.error('Unknown contact email error occurred.');
    }

    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
