import React from "react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center text-center px-4 pt-10 z-20">
      {/* Background Animated Glow */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.03] rounded-full blur-[120px] pointer-events-none -z-10"></div>
      
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center fade-in-up">
        {/* Pre-title */}
        <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.1] bg-white/[0.03] backdrop-blur-md">
          <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
          <span className="text-xs font-mono tracking-widest uppercase text-white/70">Alyzr Automation</span>
        </div>

        {/* Main Headline */}
        <h1 className="font-sans font-bold text-5xl sm:text-6xl md:text-7xl tracking-tighter text-white leading-tight mb-6 drop-shadow-lg text-center w-full [text-wrap:balance]">
          Automate Leads, Sales <br className="hidden lg:block" />
          <span className="lg:hidden"> </span>& Support with AI
        </h1>
        
        {/* Subtext */}
        <p className="font-mono text-base sm:text-lg text-zinc-300 max-w-2xl leading-relaxed mb-10">
          We build WhatsApp bots, AI voice agents, and automated systems that run your business 24/7 — so you don’t have to.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col items-center gap-4 w-full sm:w-auto">
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <a href="#contact" className="px-10 py-5 bg-white text-[#111] font-sans font-bold rounded-full hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.4)] text-lg">
              ✅ Book a Call
            </a>
            <a href="#services" className="text-zinc-400 hover:text-white font-mono text-sm underline underline-offset-4 transition-colors duration-300 mt-2 sm:mt-0 sm:ml-4">
              View Services
            </a>
          </div>
          <span className="font-mono text-xs text-zinc-500 mt-2 tracking-widest uppercase">No commitment consultation</span>
        </div>
      </div>
    </section>
  );
}
