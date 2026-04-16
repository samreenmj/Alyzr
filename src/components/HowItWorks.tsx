import React from "react";

const STEPS = [
  {
    step: "01",
    title: "Consultation",
    desc: "We analyze your current bottlenecks, workflows, and communication channels to find leverage points."
  },
  {
    step: "02",
    title: "Setup & Integration",
    desc: "We build custom AI models or deploy automation pipelines seamlessly into your existing tools."
  },
  {
    step: "03",
    title: "Go Live & Scale",
    desc: "Launch the system, monitor the performance, and instantly handle 10x more volume with zero extra headcount."
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative w-full py-24 px-4 z-20 bg-black/40 border-y border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-sans font-bold text-4xl sm:text-5xl text-white mb-4">How It Works</h2>
          <p className="font-mono text-zinc-400">From discovery to deployment in weeks.</p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start gap-8 relative">
          {/* Subtle linking line for desktop */}
          <div className="hidden md:block absolute top-[28px] left-10 right-10 h-[1px] bg-white/10 z-0"></div>

          {STEPS.map((item, idx) => (
            <div key={idx} className="relative flex-1 flex flex-col items-center text-center z-10 w-full fade-in-up" style={{ animationDelay: `${idx * 0.2}s` }}>
              <div className="w-14 h-14 rounded-full bg-[#1c1b1b] border-2 border-white/20 flex items-center justify-center font-mono text-xl text-white shadow-[0_0_20px_rgba(255,255,255,0.1)] mb-6">
                {item.step}
              </div>
              <h3 className="font-sans font-bold text-2xl text-white mb-3">{item.title}</h3>
              <p className="font-mono text-sm text-zinc-400 max-w-xs">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
