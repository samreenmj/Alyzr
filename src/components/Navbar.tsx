import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-[100] border-b border-white/[0.05] bg-[#0a0a0a]/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        {/* Left Side: Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          {/* We use a mix of our font styles for the logo to reflect the brand */}
          <span className="font-cursive text-3xl text-white transform -rotate-2 group-hover:text-zinc-300 transition-colors">A</span>
          <span className="font-sans font-bold text-xl tracking-widest text-white group-hover:text-zinc-300 transition-colors uppercase">
            Alyzr
          </span>
        </Link>

        {/* Center: Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#services" className="font-mono text-xs uppercase tracking-widest text-zinc-400 hover:text-white transition-colors">
            Services
          </Link>
          <Link href="#how-it-works" className="font-mono text-xs uppercase tracking-widest text-zinc-400 hover:text-white transition-colors">
            Process
          </Link>
          <Link href="#portfolio" className="font-mono text-xs uppercase tracking-widest text-zinc-400 hover:text-white transition-colors">
            Work
          </Link>
          <Link href="#pricing" className="font-mono text-xs uppercase tracking-widest text-zinc-400 hover:text-white transition-colors">
            Pricing
          </Link>
        </nav>

        {/* Right Side: CTA */}
        <div className="flex items-center gap-4">
          <Link
            href="#contact"
            className="px-6 py-2.5 bg-white text-black font-sans font-semibold text-sm rounded-full hover:bg-zinc-200 hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]"
          >
            Let's Talk
          </Link>
        </div>
      </div>
    </header>
  );
}
