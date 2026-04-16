"use client";
import React, { useState, useEffect } from "react";

export default function Loader() {
  const [loading, setLoading] = useState(true);
  const [fadeout, setFadeout] = useState(false);

  useEffect(() => {
    // Start fade out after 2 seconds
    const fadeTimer = setTimeout(() => {
      setFadeout(true);
    }, 2000);

    // Completely unmount after 2.5 seconds
    const removeTimer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#0a0a0a] transition-opacity duration-500 ${
        fadeout ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="relative flex items-center justify-center animate-pulse drop-shadow-[0_0_30px_rgba(255,255,255,0.4)]">
        <span className="font-cursive text-5xl md:text-7xl text-white transform -rotate-2">A</span>
        <span className="font-sans font-bold text-3xl md:text-5xl tracking-[0.2em] text-white uppercase ml-3">
          Alyzr
        </span>
      </div>
    </div>
  );
}
