"use client";

import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: ""
  });
  
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
      setFormData({ name: "", email: "", business: "" });
      
      // Reset success message after a few seconds
      setTimeout(() => {
        setStatus("idle");
      }, 5000);
      
    } catch (error: any) {
      setStatus("error");
      setErrorMessage(error.message || "Failed to send message.");
    }
  };

  return (
    <section id="contact" className="relative w-full py-24 px-4 z-20 bg-black/40 border-t border-white/5">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-16 justify-between">
        
        <div className="flex-1">
          <h2 className="font-sans font-bold text-4xl sm:text-5xl text-white mb-4">Let's Talk.</h2>
          <p className="font-mono text-zinc-300 mb-2 max-w-sm">
            We respond within 24 hours.
          </p>
          <p className="font-mono text-zinc-500 mb-8 max-w-sm text-sm">
            Fill out the form to discuss your next big workflow upgrade.
          </p>
          <a href="https://wa.me/9830957700" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white hover:text-[#25D366] transition-colors font-mono uppercase tracking-widest text-sm bg-white/5 px-4 py-2 rounded-lg border border-white/10 hover:border-[#25D366]/50">
             <span className="text-xl">✆</span> Or chat instantly on WhatsApp
          </a>
        </div>

        <div className="flex-1 bg-white/[0.03] backdrop-blur-md border border-white/10 p-8 rounded-3xl shadow-ambient mt-8 md:mt-0">
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="font-mono text-xs text-zinc-500 uppercase tracking-widest">Name</label>
              <input 
                type="text" 
                id="name" 
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe" 
                className="w-full bg-transparent border-b border-white/20 pb-2 text-white font-sans focus:outline-none focus:border-white transition-colors" 
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-mono text-xs text-zinc-500 uppercase tracking-widest">Email</label>
              <input 
                type="email" 
                id="email" 
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@company.com" 
                className="w-full bg-transparent border-b border-white/20 pb-2 text-white font-sans focus:outline-none focus:border-white transition-colors" 
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="business" className="font-mono text-xs text-zinc-500 uppercase tracking-widest">Business / Request</label>
              <input 
                type="text" 
                id="business" 
                value={formData.business}
                onChange={handleChange}
                required
                placeholder="We need an AI voice agent for..." 
                className="w-full bg-transparent border-b border-white/20 pb-2 text-white font-sans focus:outline-none focus:border-white transition-colors" 
              />
            </div>

            <div className="flex flex-col mt-4">
              <button 
                type="submit" 
                disabled={status === "loading"}
                className="w-full px-6 py-3 bg-white text-black font-sans font-bold rounded-xl hover:bg-zinc-200 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center shadow-[0_0_20px_rgba(255,255,255,0.2)]"
              >
                {status === "loading" ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : "Submit Request"}
              </button>
              <span className="text-center font-mono text-[10px] text-zinc-500 mt-3 uppercase tracking-widest">
                Free strategy call
              </span>
            </div>

            {status === "success" && (
              <p className="text-sm text-[#25D366] font-mono mt-2 text-center">
                Message sent successfully! We'll be in touch.
              </p>
            )}

            {status === "error" && (
              <p className="text-sm text-red-500 font-mono mt-2 text-center">
                {errorMessage}
              </p>
            )}

          </form>
        </div>
      </div>
    </section>
  );
}
