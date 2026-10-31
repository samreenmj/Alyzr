import React from "react";
import Link from "next/link";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <main className="relative min-h-screen bg-[#171715] flex flex-col items-center overflow-x-hidden">
      {/* Main Single Page Content */}
      <div className="w-full relative z-10 flex flex-col items-center">
        <Hero />
        <Services />
        <HowItWorks />
        <Portfolio />
        <Contact />
      </div>

      {/* Studio Editorial Footer */}
      <footer className="w-full py-16 md:py-20 px-6 border-t border-[#2e2d29] bg-[#171715] z-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-baseline gap-3">
            <span className="font-serif text-2xl tracking-[0.02em] text-[#E7DED5]">
              Alyzr Labs
            </span>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs font-sans uppercase tracking-[0.2em] text-[#B2AAA2]">
            <Link href="#services" className="hover:text-[#E7DED5] transition-colors">
              Services
            </Link>
            <Link href="#methodology" className="hover:text-[#E7DED5] transition-colors">
              Approach
            </Link>
            <Link href="#work" className="hover:text-[#E7DED5] transition-colors">
              Prototypes
            </Link>
            <Link href="#contact" className="hover:text-[#E7DED5] transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-4 text-xs font-sans text-[#B2AAA2]">
            <span>&copy; {currentYear} Alyzr Labs.</span>
            <Link href="#" className="hover:text-[#E7DED5] transition-colors">
              &uarr; Top
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}