import React from "react";

export default function CtaSection() {
  return (
    <section className="relative w-full py-32 px-4 z-20 flex items-center justify-center text-center">
      <div className="absolute inset-0 bg-white/[0.02] filter blur-[40px] pointer-events-none -z-10"></div>
      
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        <h2 className="font-sans font-bold text-5xl md:text-7xl text-white mb-8 tracking-tight drop-shadow-lg">
          Stop Wasting Time on Manual Work
        </h2>
        <p className="font-mono text-zinc-300 mb-10 max-w-lg">
          Let AI handle your operations while you focus on growth.
        </p>

        <div className="flex flex-col items-center gap-2">
          <a 
            href="#contact" 
            className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-black font-sans font-bold text-lg rounded-full hover:bg-zinc-200 transition-all duration-300 hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.4)]"
          >
            ✅ Book a Call
          </a>
          <span className="font-mono text-xs text-zinc-500 mt-2 uppercase tracking-widest">No commitment consultation</span>
        </div>
      </div>
    </section>
  );
}
