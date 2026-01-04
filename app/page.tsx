"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

/* ================= MOTION PRESETS (INLINE SAFE) ================= */

const easeSmooth: [number, number, number, number] = [0.16, 1, 0.3, 1];

/* ================= TECH GEAR ================= */

function TechGearWheel() {
  const services = [
    "Push-to-Talk",
    "IoT Connectivity",
    "Dispatch Platforms",
    "Fleet Communications",
    "Device Management",
    "Managed Services",
  ];

  return (
    <div
      onClick={() =>
        document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
      }
      className="relative w-[420px] h-[420px] mx-auto cursor-pointer group"
    >
      <svg viewBox="0 0 200 200" className="w-full h-full animate-gear-spin">
        <path
          d="M100 10 L112 18 L128 14 L138 28 L154 32 L156 48 L170 58 L164 74 L176 90
             L164 106 L170 122 L156 132 L154 148 L138 152 L128 166 L112 162 L100 190
             L88 162 L72 166 L62 152 L46 148 L44 132 L30 122 L36 106 L24 90 L36 74
             L30 58 L44 48 L46 32 L62 28 L72 14 L88 18 Z"
          fill="none"
          stroke="#0EA5E9"
          strokeWidth="4"
          opacity="0.6"
        />
        <circle
          cx="100"
          cy="100"
          r="60"
          fill="none"
          stroke="rgba(255,255,255,0.25)"
          strokeWidth="2"
        />
      </svg>

      {services.map((label, i) => {
        const angle = (360 / services.length) * i;
        return (
          <div
            key={label}
            style={{ transform: `rotate(${angle}deg)` }}
            className="absolute inset-1/2 origin-left"
          >
            <div className="flex items-center transition-all duration-500 group-hover:translate-x-[210px]">
              <div className="w-24 h-px bg-[#0EA5E9]/50" />
              <div className="ml-3 px-3 py-1 text-xs uppercase tracking-widest font-mono text-[#0EA5E9] bg-black/70 border border-[#0EA5E9]/40 whitespace-nowrap">
                {label}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ================= INDUSTRY SLIDER ================= */

const industries = [
  {
    title: "Security & Private Security",
    image: "/images/industries/security.jpg",
    desc:
      "Mission-critical Push-to-Talk communications, dispatch control, body-worn devices, and real-time situational awareness for security operations.",
  },
  {
    title: "Logistics & Fleet Operations",
    image: "/images/industries/logistics.jpg",
    desc:
      "Fleet coordination, asset tracking, telemetry, and real-time communications enabling efficient, accountable logistics operations.",
  },
  {
    title: "Utilities & Smart Metering",
    image: "/images/industries/utilities.jpg",
    desc:
      "IoT-enabled water and energy metering, remote monitoring, and network-wide visibility for utility providers.",
  },
  {
    title: "Agriculture & Rural Operations",
    image: "/images/industries/agriculture.jpg",
    desc:
      "Livestock tracking, environmental sensing, remote connectivity, and communications for farms and rural enterprises.",
  },
  {
    title: "Construction, Mining & Infrastructure",
    image: "/images/industries/construction.jpg",
    desc:
      "Site communications, asset visibility, worker coordination, and operational monitoring in demanding environments.",
  },
  {
    title: "Public Safety & Municipal Services",
    image: "/images/industries/public-safety.jpg",
    desc:
      "Reliable communications, monitoring platforms, and connected infrastructure supporting emergency and municipal services.",
  },
];

function IndustrySlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setIndex((p) => (p + 1) % industries.length),
      6000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex flex-col items-center">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.6, ease: easeSmooth }}
          className="max-w-[90rem] w-full mx-4 rounded-3xl overflow-hidden bg-white/6 backdrop-blur-xl border border-white/15"
        >
          <div className="relative h-[420px] w-full overflow-hidden">
            <img
              src={industries[index].image}
              alt={industries[index].title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/45" />
          </div>

          <div className="p-16 text-center">
            <h3 className="text-2xl md:text-3xl font-semibold mb-6">
              {industries[index].title}
            </h3>
            <p className="text-white/80 text-lg leading-relaxed">
              {industries[index].desc}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/* ================= HOME PAGE ================= */

export default function Home() {
  return (
    <main className="min-h-screen bg-[#151A21] text-slate-100">

      {/* ================= HERO ================= */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center px-6 pt-40 overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/30" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-[90rem] w-full mx-4 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_0_80px_rgba(14,165,233,0.35)] p-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-semibold mb-8">
                Mission-Critical Communications
                <br />
                <span className="text-[#0EA5E9]">& IoT Systems</span>
              </h1>
              <p className="text-lg text-white/85 max-w-xl mb-10">
                Signal One Integrated Systems designs and delivers secure Push-to-Talk,
                IoT connectivity, and operational control platforms.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ================= INDUSTRIES ================= */}
      <section
        id="industry-solutions"
        className="relative pt-20 pb-20 px-6 overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative max-w-[90rem] mx-auto">
          <IndustrySlider />
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-[#0F131A] px-6 py-24 text-white/40 text-sm">
        <div className="max-w-[90rem] mx-auto">
          © 2026 Signal One Integrated Systems. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
