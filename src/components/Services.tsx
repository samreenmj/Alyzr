import React from "react";
import Link from "next/link";

const SERVICES = [
  {
    index: "01",
    tag: "FOR VIBE-CODED PROTOTYPES",
    title: "Production Readiness Review",
    desc: "Find and fix reliability, security, and data-handling risks before real users depend on your app.",
    features: [
      "Code, architecture, security, and data-handling review",
      "Prioritized findings with a practical remediation plan",
    ],
  },
  {
    index: "02",
    tag: "FOR FOUNDERS",
    title: "MVP Build Sprint",
    desc: "Turn a validated problem into a focused product through clearly scoped engineering milestones.",
    features: [
      "Build and verify the core product flows",
      "Production deployment and full code handover",
    ],
  },
  {
    index: "03",
    tag: "FOR SMALL BUSINESSES",
    title: "Business AI Agents & Workflows",
    desc: "Automate a specific operational bottleneck with bounded, dependable AI integrations.",
    features: [
      "Connect business tools with scoped data access",
      "Add human approvals, error handling, and execution logs",
    ],
  },
  {
    index: "04",
    tag: "FOLLOW-ON SUPPORT",
    title: "Ongoing Engineering Support",
    desc: "Keep an app we built or reviewed secure, maintained, and moving forward.",
    features: [
      "Planned improvements, maintenance, and security updates",
      "Defined monthly hours and response windows",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative w-full py-24 md:py-28 px-6 border-b border-[#2e2d29] bg-[#171715]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end mb-16 pb-8 border-b border-[#2e2d29]">
          <div className="md:col-span-7">
            <span className="font-sans text-[11px] uppercase tracking-[0.25em] text-[#B2AAA2] block mb-3">
              Core Capabilities
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#E7DED5] tracking-tight">
              What We Build.
            </h2>
            <div className="w-12 h-[1px] bg-[#A66F70] mt-4"></div>
          </div>
          <div className="md:col-span-5">
            <p className="font-sans text-sm sm:text-base text-[#C8C0B8] leading-relaxed">
              Four focused ways to take software from prototype or idea to dependable production.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {SERVICES.map((srv) => (
            <div
              key={srv.index}
              className="bg-[#242321] p-7 sm:p-8 border border-[#2e2d29] hover:border-[#3a3935] transition-colors"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-serif text-xs text-[#E7DED5] tracking-[0.25em]">
                    {srv.index}
                  </span>
                  <div className="w-4 h-[1px] bg-[#A66F70]"></div>
                  <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#B2AAA2]">
                    {srv.tag}
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-[#E7DED5] mb-4 tracking-tight">
                  {srv.title}
                </h3>

                <p className="font-sans text-sm text-[#C8C0B8] leading-relaxed mb-5">
                  {srv.desc}
                </p>

                <div className="space-y-2 border-t border-[#2e2d29] pt-4">
                  {srv.features.map((feat) => (
                    <div key={feat} className="flex items-start gap-3">
                      <span className="text-[#A66F70] font-mono text-xs mt-0.5">&mdash;</span>
                      <span className="font-sans text-xs sm:text-sm text-[#C8C0B8] leading-relaxed">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 border border-[#3a3935] px-6 py-3 font-sans text-xs uppercase tracking-[0.15em] text-[#E7DED5] transition-colors hover:border-[#E7DED5]"
          >
            Scope a project <span>&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}