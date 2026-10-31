"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#methodology", label: "Approach" },
    { href: "#work", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] border-b border-[#2e2d29] bg-[#171715] backdrop-blur-none">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#E7DED5]"
        >
          <span className="font-serif text-2xl md:text-3xl tracking-[0.01em] text-[#E7DED5] group-hover:text-white transition-colors">
            Alyzr Labs
          </span>
        </Link>

        {/* Center: Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-sans text-xs uppercase tracking-[0.2em] text-[#B2AAA2] hover:text-[#E7DED5] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#E7DED5] py-1"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Side: CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link
            href="#contact"
            className="hidden sm:inline-block px-5 py-2.5 text-xs font-sans uppercase tracking-[0.2em] text-[#E7DED5] bg-[#242321] border border-[#3a3935] hover:bg-[#E7DED5] hover:text-[#171715] hover:border-[#E7DED5] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#E7DED5]"
          >
            Start Project
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#E7DED5] hover:text-white border border-[#2e2d29] bg-[#242321] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#E7DED5]"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                  strokeWidth="1.5"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                  strokeWidth="1.5"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#2e2d29] bg-[#171715] px-6 py-8">
          <nav className="flex flex-col gap-6" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-sans text-sm uppercase tracking-[0.2em] text-[#B2AAA2] hover:text-[#E7DED5] transition-colors py-1"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-block mt-4 text-center px-6 py-3 text-xs font-sans uppercase tracking-[0.2em] text-[#E7DED5] bg-[#242321] border border-[#3a3935] hover:bg-[#E7DED5] hover:text-[#171715] transition-colors"
            >
              Start Project
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}