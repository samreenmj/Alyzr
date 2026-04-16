import React from "react";

export default function TrustSection() {
  return (
    <section className="w-full py-12 px-4 z-20 border-b border-white/5 bg-black/20">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <p className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-8 border-b border-white/10 pb-2">
          Trusted by Growing Businesses
        </p>
        
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="flex flex-col items-center gap-2 fade-in-up" style={{ animationDelay: '0.1s' }}>
            <span className="text-xl">⭐</span>
            <p className="font-sans font-semibold text-zinc-300">“Reduced response time by 80%”</p>
          </div>
          
          <div className="flex flex-col items-center gap-2 fade-in-up" style={{ animationDelay: '0.2s' }}>
            <span className="text-xl">⭐</span>
            <p className="font-sans font-semibold text-zinc-300">“Automated 500+ leads/month”</p>
          </div>
          
          <div className="flex flex-col items-center gap-2 fade-in-up" style={{ animationDelay: '0.3s' }}>
            <span className="text-xl">⭐</span>
            <p className="font-sans font-semibold text-zinc-300">“Saved 20+ hours/week for teams”</p>
          </div>
        </div>
      </div>
    </section>
  );
}
