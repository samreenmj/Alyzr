import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full pt-32 md:pt-44 pb-20 md:pb-28 px-6 border-b border-[#2e2d29] bg-[#171715]">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-8 h-[1px] bg-[#A66F70]"></div>
          <span className="font-sans text-[11px] uppercase tracking-[0.25em] text-[#B2AAA2]">
            For founders, vibe coders &amp; small businesses
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-8">
            <h1 className="font-serif font-normal text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#E7DED5] tracking-tight leading-[0.98] text-balance">
              Engineering your ideas into production-grade SaaS, MVPs & AI agents
            </h1>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-between pt-2 lg:pt-4">
            <div>
              <div className="w-12 h-[1px] bg-[#A66F70] mb-6"></div>

              <p className="font-sans text-base sm:text-lg text-[#C8C0B8] leading-relaxed mb-8">
                Production-readiness reviews for vibe-coded apps, focused MVPs, and reliable business AI workflows.
              </p>
            </div>

            <div className="flex flex-col items-start gap-5">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-4 bg-[#E7DED5] text-[#171715] font-sans text-xs uppercase tracking-[0.2em] font-medium hover:bg-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
              >
                Discuss your project
              </Link>
              <Link href="#services" className="font-sans text-xs uppercase tracking-[0.2em] text-[#B2AAA2] hover:text-[#E7DED5] transition-colors">
                Explore services &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}