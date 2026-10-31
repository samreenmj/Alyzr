import React from "react";
import Image from "next/image";

const PROJECTS = [
  {
    title: "Scrible — Real-time Collaborative Whiteboard",
    category: "Independent Product",
    description:
      "A shared digital canvas for teams to sketch, organize ideas, and collaborate in real time. Built with live synchronization and a full-stack architecture designed for collaborative work.",
    technologies: [
      "Next.js",
      "React",
      "Node.js",
      "Express",
      "WebSockets",
      "PostgreSQL",
      "Prisma",
    ],
    image: "/portfolio/images/projects/scrible-preview.svg",
    imageAlt:
      "Illustrative product visualization of Scrible's shared whiteboard with connected notes, shapes, and drawing tools.",
    imageCaption: "Illustrative product preview · not a screenshot",
  },
  {
    title: "RelayGraph — Graph-backed Memory & Agent Coordination",
    category: "Agentic AI · Hackathon Project",
    description:
      "A graph-backed persistent memory and agent coordination system built with FalkorDB. Specialized AI workers collaborate across investigation, implementation, and verification while maintaining shared task context.",
    technologies: ["FalkorDB", "Graph Database", "AI Agents", "TypeScript"],
    image: "/portfolio/images/projects/relaygraph.png",
    imageAlt:
      "RelayGraph interface showing an investigation task, coordinated agents, workflow progress, and graph-backed knowledge.",
  },
  {
    title: "LeakOps — Payment Recovery Infrastructure for SaaS Businesses",
    category: "Product Collaboration",
    description:
      "A product collaboration focused on payment recovery infrastructure for SaaS businesses. LeakOps aims to help businesses manage failed payments and recurring-revenue recovery through a dedicated platform.",
    technologies: [
      "SaaS",
      "Payment Recovery",
      "Recurring Revenue",
      "Revenue Operations",
    ],
    image: "/portfolio/images/projects/leakops.png",
    imageAlt:
      "LeakOps website presenting its payment recovery platform for SaaS businesses.",
    website: "https://leakops.online/",
  },
];

export default function Portfolio() {
  return (
    <section
      id="work"
      className="w-full border-b border-[#2e2d29] bg-[#171715] px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid grid-cols-1 items-end gap-6 border-b border-[#2e2d29] pb-8 md:mb-16 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-7">
            <span className="mb-3 block font-sans text-[11px] uppercase tracking-[0.25em] text-[#B2AAA2]">
              Selected Work
            </span>
            <h2 className="font-serif text-4xl tracking-tight text-[#E7DED5] sm:text-5xl md:text-6xl">
              Projects &amp; Products.
            </h2>
            <div className="mt-4 h-px w-12 bg-[#A66F70]" />
          </div>
          <p className="font-sans text-sm leading-relaxed text-[#C8C0B8] sm:text-base md:col-span-5">
            Selected work across collaborative software, agentic systems, and
            SaaS infrastructure.
          </p>
        </div>

        <div>
          {PROJECTS.map((project, index) => (
            <article
              key={project.title}
              className={`grid grid-cols-1 items-center gap-8 py-10 md:grid-cols-12 md:gap-12 md:py-14 ${
                index < PROJECTS.length - 1
                  ? "border-b border-[#2e2d29]"
                  : ""
              }`}
            >
              <figure
                className={`min-w-0 md:col-span-7 ${
                  index === 1 ? "md:order-2" : ""
                }`}
              >
                <div
                  className={`relative overflow-hidden border border-[#3a3935] bg-[#242321] p-1.5 ${
                    index === 1 ? "aspect-[1271/552]" : "aspect-[16/7]"
                  }`}
                >
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 58vw"
                    className={`object-contain ${
                      index === 1
                        ? ""
                        : "transition-transform duration-500 ease-out hover:scale-[1.015]"
                    }`}
                  />
                </div>
                {project.imageCaption && (
                  <figcaption className="mt-2 font-sans text-[10px] uppercase tracking-[0.16em] text-[#B2AAA2]">
                    {project.imageCaption}
                  </figcaption>
                )}
              </figure>

              <div
                className={`md:col-span-5 ${
                  index === 1 ? "md:order-1" : ""
                }`}
              >
                <span className="mb-3 block font-sans text-[10px] uppercase tracking-[0.22em] text-[#B2AAA2]">
                  {project.category}
                </span>
                <h3 className="font-serif text-2xl leading-tight tracking-tight text-[#E7DED5] sm:text-3xl">
                  {project.website ? (
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noreferrer"
                      className="transition-colors hover:text-white focus-visible:outline focus-visible:outline-1 focus-visible:outline-[#B2AAA2]"
                    >
                      {project.title}
                    </a>
                  ) : (
                    project.title
                  )}
                </h3>
                <p className="mt-4 font-sans text-sm leading-relaxed text-[#C8C0B8] sm:text-base">
                  {project.description}
                </p>
                <p className="mt-5 font-mono text-[10px] leading-6 text-[#B2AAA2] sm:text-[11px]">
                  {project.technologies.join(" · ")}
                </p>
                {project.website && (
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-2 font-sans text-xs text-[#E7DED5] transition-colors hover:text-white focus-visible:outline focus-visible:outline-1 focus-visible:outline-[#B2AAA2]"
                  >
                    Visit LeakOps
                    <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
