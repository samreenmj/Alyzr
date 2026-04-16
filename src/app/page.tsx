import React from "react";
import Loader from "@/components/Loader";
import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Portfolio from "@/components/Portfolio";
import Pricing from "@/components/Pricing";
import CtaSection from "@/components/CtaSection";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-grid flex flex-col items-center overflow-x-hidden">
      {/* 2-Second AI Orb Loader */}
      <Loader />

      {/* Main Single Page Content */}
      <div className="w-full relative z-10 flex flex-col items-center">
        <Hero />
        <TrustSection />
        <Services />
        <HowItWorks />
        <Portfolio />
        <Pricing />
        <CtaSection />
        <Contact />
      </div>

      {/* Footer minimal */}
      <footer className="w-full py-8 border-t border-white/5 text-center bg-black/50 z-20">
        <p className="font-mono text-xs text-zinc-600 uppercase tracking-widest">
          © {new Date().getFullYear()} ALYZR AUTOMATION. All rights reserved.
        </p>
      </footer>

      {/* Cinematic Vignette Overlay */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_20%,_#0a0a0a_100%)] z-0 mix-blend-multiply opacity-80"></div>
    </main>
  );
}
