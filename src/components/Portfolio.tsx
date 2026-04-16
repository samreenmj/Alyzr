import React from "react";

const PROJECTS = [
  {
    id: 1,
    title: "WhatsApp AI Assistant",
    category: "Lead Capture",
    gradient: "from-[#2A4B3A] to-[#132A1F]",
    image: "/portfolio/whatsapp.png",
    result: "Handled 1,000+ conversations/month"
  },
  {
    id: 2,
    title: "Centralized Sync Dashboard",
    category: "Workflow Automation",
    gradient: "from-[#2B3A4F] to-[#121A2A]",
    image: "/portfolio/sync.png",
    result: "Automated full lead pipeline"
  },
  {
    id: 3,
    title: "Outbound Voice Agent",
    category: "AI Voice",
    gradient: "from-[#4A2B42] to-[#251221]",
    image: "/portfolio/voice.png",
    result: "Increased conversion rate by 35%"
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative w-full py-24 px-4 z-20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6 border-b border-white/10 pb-8">
          <div>
            <h2 className="font-sans font-bold text-4xl sm:text-5xl text-white mb-2">Featured Systems</h2>
            <p className="font-mono text-zinc-400">Glimpses of deployed automation interfaces.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROJECTS.map((proj) => (
            <div key={proj.id} className="group cursor-pointer">
              {/* Mock UI Frame */}
              <div className={`w-full aspect-[4/3] rounded-3xl bg-[#050505] border border-white/10 shadow-ambient relative overflow-hidden mb-6 transition-transform duration-500 group-hover:scale-[1.02]`}>
                <img 
                  src={proj.image} 
                  alt={proj.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                />
                {/* Subtle gradient overlay to match brand */}
                <div className={`absolute inset-0 bg-gradient-to-br ${proj.gradient} opacity-20 pointer-events-none mix-blend-color`}></div>
              </div>

              {/* Descriptions */}
              <div>
                <p className="font-mono text-xs uppercase text-zinc-500 mb-1 tracking-widest">{proj.category}</p>
                <h3 className="font-sans font-semibold text-xl text-white group-hover:text-zinc-300 transition-colors mb-2">{proj.title}</h3>
                <div className="inline-block px-3 py-1 bg-[#2A4B3A]/30 border border-[#2A4B3A]/50 rounded-full font-mono text-[10px] sm:text-xs text-[#25D366] mt-1 shadow-[0_0_10px_rgba(37,211,102,0.1)]">
                  ✓ {proj.result}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
