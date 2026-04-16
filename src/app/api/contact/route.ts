import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, business } = body;

    // Validate inputs
    if (!name || !email || !business) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Configure the email transporter using environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER, // Your email
        pass: process.env.SMTP_PASS, // Your app password/password
      },
    });

    // You can customize standard email options here
    const mailOptions = {
      from: process.env.SMTP_USER || '"ALYZR Agency" <noreply@alyzr.com>',
      to: process.env.CONTACT_EMAIL || process.env.SMTP_USER, // Where you want to receive emails
      subject: `New Lead: ${name} from ALYZR Website`,
      text: `
        You have received a new contact request!
        
        Name: ${name}
        Email: ${email}
        Business/Request: ${business}
      `,
      html: `
        <h3>New Contact Request</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Business/Request:</strong> ${business}</p>
      `,
    };

    // Attempt to send email. In development, if SMTP isn't configured,
    // this will fail, but we'll return a 500 error gracefully.
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Error sending email:', error);
    
    // Check if error is related to unconfigured SMTP to provide a better message
    if (error.code === 'EAUTH' || error.message.includes('auth')) {
      // For development purposes when SMTP is not configured
      console.warn("SMTP authentication failed. Please configure your .env file.");
      return NextResponse.json(
        { error: 'SMTP Authentication failed. Check your environment variables.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
