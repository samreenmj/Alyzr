import type { Metadata } from "next";
import { Cormorant_Garamond, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const cormorantGaramond = Cormorant_Garamond({
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-editorial",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alyzr Labs | Production-Ready Software & Business AI",
  description:
    "Alyzr Labs helps founders and small businesses review and harden vibe-coded prototypes, build focused MVPs, and implement reliable business AI workflows.",
  openGraph: {
    title: "Alyzr Labs | Production-Ready Software & Business AI",
    description:
      "Production-readiness reviews, focused MVP builds, and reliable business AI workflows for founders and small businesses.",
    type: "website",
    locale: "en_US",
    siteName: "Alyzr Labs",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alyzr Labs | Production-Ready Software & Business AI",
    description:
      "Production-readiness reviews, focused MVP builds, and reliable business AI workflows for founders and small businesses.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorantGaramond.variable} ${jetbrainsMono.variable} h-full antialiased dark`}
      style={{ colorScheme: "dark" }}
    >
      <body className="min-h-full flex flex-col bg-[#171715] text-[#C8C0B8] overflow-x-hidden selection:bg-[#242321] selection:text-[#E7DED5]">
        <Navbar />
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}