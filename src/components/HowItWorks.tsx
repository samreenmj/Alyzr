import React from "react";

const PHASES = [
  {
    phase: "01",
    title: "Scope",
    tagline: "Agree on the outcome",
    desc: "Review the codebase or define a focused product scope, milestones, and acceptance criteria.",
  },
  {
    phase: "02",
    title: "Build or review",
    tagline: "Work in the open",
    desc: "Improve the existing app or build core workflows in focused milestones with inspectable progress.",
  },
  {
    phase: "03",
    title: "Verify & hand over",
    tagline: "Ready for the next step",
    desc: "Check critical flows, prepare for launch, and hand over the code and practical next steps.",
  },
];

export default function HowItWorks() {
  return (
    <section id="methodology" className="relative w-full py-24 md:py-28 px-6 border-b border-[#2e2d29] bg-[#171715]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end mb-16 pb-8 border-b border-[#2e2d29]">
          <div className="md:col-span-7">
            <span className="font-sans text-[11px] uppercase tracking-[0.25em] text-[#B2AAA2] block mb-3">
              How We Work
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#E7DED5] tracking-tight">
              Clear from day one.
            </h2>
            <div className="w-12 h-[1px] bg-[#A66F70] mt-4"></div>
          </div>
          <div className="md:col-span-5">
            <p className="font-sans text-sm sm:text-base text-[#C8C0B8] leading-relaxed">
              A compact, transparent process for reviews, builds, and workflow projects.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {PHASES.map((p) => (
            <div
              key={p.phase}
              className="bg-[#242321] border border-[#2e2d29] p-7 sm:p-8 flex flex-col justify-between group hover:border-[#3a3935] transition-colors"
            >
              <div>
                <span className="font-serif text-3xl sm:text-4xl text-[#E7DED5] block mb-4 tracking-tight">
                  {p.phase}
                </span>

                <div className="w-6 h-[1px] bg-[#A66F70] mb-4"></div>

                <h3 className="font-serif text-xl text-[#E7DED5] mb-1 tracking-tight">
                  {p.title}
                </h3>
                <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#B2AAA2] block mb-4">
                  {p.tagline}
                </span>

                <p className="font-sans text-xs sm:text-sm text-[#C8C0B8] leading-relaxed">
                  {p.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#2e2d29] flex items-center justify-between text-[#B2AAA2]">
                <span className="font-sans text-[10px] uppercase tracking-[0.2em]">Step {p.phase}</span>
                <span className="font-mono text-xs">&rarr;</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}