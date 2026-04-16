import React from "react";

const PACKAGES = [
  {
    tier: "Starter",
    desc: "Best for small teams testing automation",
    price: "$999",
    features: ["1 Chatbot deployment", "Basic CRM sync", "Standard Email Support", "1 Revision"],
    popular: false
  },
  {
    tier: "Growth",
    desc: "For businesses ready to scale operations",
    price: "$2,499",
    features: ["WhatsApp + Voice Agents", "Full CRM & n8n Integration", "Priority Support", "Analytics Dashboard"],
    popular: true
  },
  {
    tier: "Custom",
    desc: "For high-volume or enterprise workflows",
    price: "Custom",
    features: ["Custom Action Models", "On-Premise Deployment", "Dedicated Manager", "Unlimited Revisions"],
    popular: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative w-full py-24 px-4 z-20 bg-black/40 border-y border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-sans font-bold text-4xl sm:text-5xl text-white mb-4">Investment</h2>
          <p className="font-mono text-zinc-400">Transparent pricing for measurable ROI.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-stretch justify-center">
          {PACKAGES.map((pkg, idx) => (
            <div 
              key={idx} 
              className={`flex-1 w-full max-w-sm flex flex-col p-8 rounded-[2rem] border transition-transform duration-500 hover:-translate-y-2 relative
                ${pkg.popular ? "bg-white/[0.05] border-white/30 shadow-[0_0_40px_rgba(255,255,255,0.1)]" : "bg-transparent border-white/10"}
              `}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white text-black font-mono text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              
              <h3 className="font-mono text-xl text-white mb-2">{pkg.tier}</h3>
              <p className="font-mono text-sm text-zinc-500 mb-6 h-10">{pkg.desc}</p>

              <div className="flex-1 flex flex-col gap-4 mb-8">
                {pkg.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/50"></div>
                    <span className="font-mono text-sm text-zinc-300">{feat}</span>
                  </div>
                ))}
              </div>

              <a href="#contact" className={`w-full py-4 rounded-xl text-center font-sans font-semibold transition-all ${pkg.popular ? "bg-white text-black hover:bg-zinc-200" : "bg-white/10 text-white hover:bg-white/20"}`}>
                Book Call
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center fade-in-up">
          <p className="inline-block px-4 py-2 border border-red-500/30 bg-red-500/10 text-red-400 font-mono text-sm rounded-full tracking-widest">
            🚨 Limited onboarding slots available each month.
          </p>
        </div>
      </div>
    </section>
  );
}
