import React from "react";

const SERVICES = [
  {
    title: "WhatsApp Automation",
    desc: "Convert leads instantly with 24/7 AI chat that never misses a message.",
    icon: "💬"
  },
  {
    title: "AI Voice Agents",
    desc: "Book meetings and handle calls automatically with human-like AI agents.",
    icon: "🎙️"
  },
  {
    title: "Workflow Automation",
    desc: "Eliminate manual work by connecting your CRM, tools, and processes.",
    icon: "⚡"
  },
  {
    title: "Custom AI Solutions",
    desc: "Build tailored AI systems designed specifically for your business goals.",
    icon: "🧠"
  }
];

export default function Services() {
  return (
    <section id="services" className="relative w-full py-24 px-4 z-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-sans font-bold text-4xl sm:text-5xl text-white mb-4">Our Services</h2>
          <p className="font-mono text-zinc-400">Intelligent systems built for leverage.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 auto-rows-fr">
          {SERVICES.map((srv, idx) => (
            <div key={idx} className="glass-card p-8 rounded-3xl flex flex-col justify-start text-left cursor-default transform transition-all duration-500 hover:-translate-y-2">
              <div className="text-4xl mb-6 bg-white/[0.05] w-16 h-16 rounded-2xl flex items-center justify-center border border-white/10 shadow-inner">
                {srv.icon}
              </div>
              <h3 className="font-sans font-bold text-2xl text-white mb-3 tracking-tight">
                {srv.title}
              </h3>
              <p className="font-mono text-sm text-zinc-400 leading-relaxed">
                {srv.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
