"use client";

import React, { useState, useSyncExternalStore } from "react";

function subscribeToHashChange(callback: () => void) {
  window.addEventListener("hashchange", callback);
  return () => window.removeEventListener("hashchange", callback);
}

function getHashSnapshot() {
  return window.location.hash;
}

function getServerHashSnapshot() {
  return "";
}

function projectTypeFromHash(hash: string): string {
  if (hash.includes("review")) {
    return "Production Readiness Review";
  }

  if (hash.includes("mvp")) {
    return "MVP Build Sprint";
  }

  if (hash.includes("agents") || hash.includes("workflow")) {
    return "Business AI Agent / Workflow";
  }

  if (hash.includes("support")) {
    return "Ongoing Engineering Support";
  }

  return "Production Readiness Review";
}

export default function Contact() {
  const [manualProjectType, setManualProjectType] = useState<string | null>(null);
  const hash = useSyncExternalStore(
    subscribeToHashChange,
    getHashSnapshot,
    getServerHashSnapshot,
  );
  const projectType = manualProjectType ?? projectTypeFromHash(hash);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      // Package project type into the business field to preserve the exact API contract.
      const submissionPayload = {
        name: formData.name,
        email: formData.email,
        business: `[${projectType}] ${formData.business}`,
      };

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionPayload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
      setFormData({ name: "", email: "", business: "" });

      window.setTimeout(() => {
        setStatus("idle");
      }, 6000);
    } catch (error: unknown) {
      setStatus("error");
      const message = error instanceof Error ? error.message : "Failed to send message.";
      setErrorMessage(message);
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full border-b border-[#2e2d29] bg-[#171715] px-6 py-28 md:py-36"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left: Studio Inquiry Context */}
          <div className="flex flex-col justify-between lg:col-span-5">
            <div>
              <span className="mb-3 block font-sans text-[11px] uppercase tracking-[0.25em] text-[#A9A39A]">
                Project Intake
              </span>
              <h2 className="font-serif text-4xl tracking-tight text-[#C9BDB1] sm:text-5xl md:text-6xl">
                Let&apos;s Build.
              </h2>
              {/* Short decorative coral accent divider */}
              <div className="my-6 h-[1px] w-12 bg-[#A66F70]" />

              <p className="mb-4 font-sans text-sm leading-relaxed text-[#A9A39A] sm:text-base">
                Tell us what you need: a prototype review, an MVP, a business AI workflow, or ongoing engineering support.
              </p>
              <p className="font-sans text-xs leading-relaxed text-[#A9A39A]">
                We&apos;ll reply with next steps and scheduling availability.
              </p>
            </div>

            <div className="mt-8 border-t border-[#2e2d29] pt-8">
              <span className="mb-3 block font-sans text-[10px] uppercase tracking-[0.25em] text-[#A9A39A]">
                Fast Technical Response
              </span>
              <a
                href="https://wa.me/919830957700"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 border border-[#2e2d29] bg-[#242321] px-5 py-3 font-sans text-xs uppercase tracking-[0.15em] text-[#C9BDB1] transition-colors hover:border-[#C9BDB1] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C9BDB1]"
              >
                <span>Direct WhatsApp Technical Chat &rarr;</span>
              </a>
            </div>
          </div>

          {/* Right: Studio Form Surface */}
          <div className="border border-[#2e2d29] bg-[#242321] p-8 sm:p-12 lg:col-span-7">
            <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
              {/* Specific Project Journey Selector */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="projectTypeSelect"
                  className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#C9BDB1]"
                >
                  Inquiry Focus / Project Journey
                </label>
                <select
                  id="projectTypeSelect"
                  value={projectType}
                  onChange={(e) => setManualProjectType(e.target.value)}
                  className="w-full border border-[#3a3935] bg-[#171715] p-3 font-sans text-xs uppercase tracking-[0.15em] text-[#C9BDB1] transition-colors focus:border-[#C9BDB1] focus:outline-none"
                >
                  <option value="Production Readiness Review">
                    Production Readiness Review (Code &amp; Security Audit)
                  </option>
                  <option value="MVP Build Sprint">
                    MVP Build Sprint (Turn Concept into Production Software)
                  </option>
                  <option value="Business AI Agent / Workflow">
                    Business AI Agent / Workflow (Targeted Automation)
                  </option>
                  <option value="Ongoing Engineering Support">
                    Ongoing Engineering Support
                  </option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#A9A39A]"
                >
                  Your Name / Founder Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Jane Smith"
                  className="w-full border-b border-[#3a3935] bg-transparent pb-3 font-sans text-sm text-[#C9BDB1] placeholder-[#555] transition-colors focus:border-[#C9BDB1] focus:outline-none"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#A9A39A]"
                >
                  Direct Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="jane@company.com"
                  className="w-full border-b border-[#3a3935] bg-transparent pb-3 font-sans text-sm text-[#C9BDB1] placeholder-[#555] transition-colors focus:border-[#C9BDB1] focus:outline-none"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="business"
                  className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#A9A39A]"
                >
                  Project Details / Current Code State
                </label>
                <textarea
                  id="business"
                  rows={4}
                  value={formData.business}
                  onChange={handleChange}
                  required
                  placeholder="Briefly describe your stack, repo link (if ready to share), tools used (Cursor, v0, Next.js), and what you need production-ready..."
                  className="w-full resize-none border-b border-[#3a3935] bg-transparent pb-3 font-sans text-sm text-[#C9BDB1] placeholder-[#555] transition-colors focus:border-[#C9BDB1] focus:outline-none"
                />
              </div>

              <div className="flex flex-col pt-4">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="flex w-full items-center justify-center bg-[#C9BDB1] py-4 font-sans text-xs font-medium uppercase tracking-[0.2em] text-[#171715] transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {status === "loading" ? (
                    <span className="flex items-center gap-2">
                      <svg
                        className="h-4 w-4 animate-spin text-[#171715]"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l-3-2.647z"
                        />
                      </svg>
                      Transmitting Inquiry...
                    </span>
                  ) : (
                    "Submit Project Scope"
                  )}
                </button>

                <span className="mt-4 text-center font-sans text-[10px] uppercase tracking-[0.2em] text-[#A9A39A]">
                  Direct engineering response &bull; No sales pressure
                </span>
              </div>

              {status === "success" && (
                <div
                  role="status"
                  aria-live="polite"
                  aria-atomic="true"
                  className="border border-[#2e2d29] bg-[#171715] p-4 text-center font-sans text-xs text-[#C9BDB1]"
                >
                  Inquiry received. We&apos;ll be in touch with scoping feedback within 24 hours.
                </div>
              )}

              {status === "error" && (
                <div
                  role="alert"
                  aria-live="assertive"
                  aria-atomic="true"
                  className="border border-[#e57373]/40 bg-[#171715] p-4 text-center font-sans text-xs text-[#e57373]"
                >
                  {errorMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
