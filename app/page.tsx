"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";


const sectionMotion = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: {
    duration: 0.8,
    ease: [0.16, 1, 0.3, 1], // 
  },
};

const sectionFlowLeft = {
  initial: { opacity: 0, x: -80 },
  whileInView: { opacity: 1, x: 0 },
  transition: {
    duration: 0.9,
    ease: [0.16, 1, 0.3, 1], //
  },
};


const sectionFlowRight = {
  initial: { opacity: 0, x: 60 },
  whileInView: { opacity: 1, x: 0 },
  transition: {
    duration: 0.8,
    ease: [0.16, 1, 0.3, 1],
  },
};

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
      {/* ===== SVG GEAR ===== */}
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full animate-gear-spin"
      >
        {/* Outer gear */}
        <path
          d="
            M100 10
            L112 18 L128 14 L138 28 L154 32
            L156 48 L170 58 L164 74
            L176 90 L164 106
            L170 122 L156 132
            L154 148 L138 152
            L128 166 L112 162
            L100 190
            L88 162 L72 166
            L62 152 L46 148
            L44 132 L30 122
            L36 106 L24 90
            L36 74 L30 58
            L44 48 L46 32
            L62 28 L72 14
            L88 18 Z
          "
          fill="none"
          stroke="#0EA5E9"
          strokeWidth="4"
          opacity="0.6"
        />

        {/* Inner ring */}
        <circle
          cx="100"
          cy="100"
          r="60"
          fill="none"
          stroke="rgba(255,255,255,0.25)"
          strokeWidth="2"
        />

        {/* Glitch scan */}
        <rect
          x="0"
          y="0"
          width="200"
          height="200"
          fill="url(#scan)"
        />

        <defs>
          <linearGradient id="scan" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="rgba(14,165,233,0.12)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
      </svg>

      {/* ===== SERVICE LABELS ===== */}
      {services.map((label, i) => {
        const angle = (360 / services.length) * i;
        return (
          <div
            key={label}
            style={{
              transform: `rotate(${angle}deg)`,
            }}
            className="absolute inset-1/2 origin-left"
          >
            <div
              className="
                flex items-center
                transition-all duration-500
                group-hover:translate-x-[210px]
              "
            >
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
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % industries.length);
    }, 6000); // 6 seconds per slide

    return () => clearInterval(interval);
  }, []);


  const next = () => setIndex((prev) => (prev + 1) % industries.length);
  const prev = () =>
    setIndex((prev) => (prev === 0 ? industries.length - 1 : prev - 1));

 return (
  <div className="relative flex flex-col items-center">

     <AnimatePresence mode="wait">
  <motion.div
    key={index}
    initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -100 }}
    transition={{
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1], //
    }}
    className="max-w-[90rem] w-full mx-4 rounded-3xl overflow-hidden
      bg-white/6 backdrop-blur-xl
      border border-white/15"
  >

          {/* IMAGE */}
          <div className="relative h-[420px] w-full overflow-hidden">

            <img
              src={industries[index].image}
              alt={industries[index].title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/45" />
          </div>

          {/* CONTENT */}
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

      <div className="flex items-center gap-6 mt-10">
        <button
          onClick={prev}
          className="px-6 py-2 rounded-full border border-white/30
                     hover:border-[#0EA5E9] hover:text-[#0EA5E9] transition"
        >
          Previous
        </button>

        <button
          onClick={next}
          className="px-6 py-2 rounded-full border border-white/30
                     hover:border-[#0EA5E9] hover:text-[#0EA5E9] transition"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#151A21] text-slate-100">

      {/* ================= HEADER ================= */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="mx-auto max-w-7xl mt-6 px-10 py-4 rounded-2xl bg-white/15 backdrop-blur-xl border border-white/20 shadow-[0_0_40px_rgba(14,165,233,0.25)] flex items-center justify-between">

          <div className="flex items-center gap-4">
            <div className="relative w-10 h-10 flex items-center justify-center overflow-visible">
              <div className="absolute w-10 h-10 rounded-full border border-[#0EA5E9]/40" />
              <div
                className="absolute w-10 h-10 rounded-full border border-[#0EA5E9] opacity-60"
                style={{
                  animation: "signal-pulse 2.8s ease-out infinite",
                  zIndex: -1,
                }}
              />
              <div className="w-3 h-3 rounded-full bg-[#0EA5E9] shadow-[0_0_20px_rgba(14,165,233,0.9)]" />
            </div>

            <div className="leading-tight">
              <div className="text-2xl font-semibold tracking-wide">
                SIGNAL <span className="text-[#0EA5E9]">ONE</span>
              </div>
              <div className="text-[11px] uppercase tracking-[0.35em] text-slate-400">
                Integrated Systems
              </div>
            </div>
          </div>

          <nav className="hidden xl:flex items-center gap-10 text-sm font-medium">
  <a href="/" className="signal-hover px-3 py-2 rounded-full hover:text-[#0EA5E9] transition">
    Home
  </a>

  <a href="/systems" className="signal-hover px-3 py-2 rounded-full hover:text-[#0EA5E9] transition">
    Systems
  </a>

  <a href="/solutions" className="signal-hover px-3 py-2 rounded-full hover:text-[#0EA5E9] transition">
    Solutions
  </a>

  <a href="/platforms" className="signal-hover px-3 py-2 rounded-full hover:text-[#0EA5E9] transition">
    Platforms
  </a>

  <a href="/devices" className="signal-hover px-3 py-2 rounded-full hover:text-[#0EA5E9] transition">
    Devices
  </a>

  <a href="/connectivity" className="signal-hover px-3 py-2 rounded-full hover:text-[#0EA5E9] transition">
    Connectivity
  </a>

  <a href="/resellers" className="signal-hover px-3 py-2 rounded-full hover:text-[#0EA5E9] transition">
    Partner With Us
  </a>
</nav>


        </div>
      </header>

      {/* ================= HERO ================= */}
     <section
  id="home"
  className="relative min-h-screen flex items-center justify-center px-6 pt-40 overflow-hidden"
>
  {/* Background Video */}
 {/* Video temporarily removed for deployment */}


  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/30" />

  {/* Glass Panel */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="relative max-w-[90rem] w-full mx-4 rounded-3xl
               bg-white/10 backdrop-blur-xl
               border border-white/20
               shadow-[0_0_80px_rgba(14,165,233,0.35)]
               p-20"
  >
    {/* Content Grid */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

      {/* LEFT: Messaging */}
      <div>
        <h1 className="text-5xl md:text-6xl font-semibold leading-tight mb-8">
          Mission-Critical Communications
          <br />
          <span className="text-[#0EA5E9]"> & IoT Systems</span>
        </h1>

        <p className="text-lg text-white/85 max-w-xl mb-10 leading-relaxed">
          Signal One Integrated Systems designs and delivers secure Push-to-Talk,
          IoT connectivity, and operational control platforms for organisations
          operating in high-risk, high-availability environments.
        </p>

        <div className="flex flex-wrap gap-6">
          <button className="px-10 py-4 rounded-xl bg-[#0EA5E9] hover:bg-[#0284C7] transition
                             shadow-[0_0_30px_rgba(14,165,233,0.6)]">
            Request System Design
          </button>

          <button className="px-10 py-4 rounded-xl border border-white/30
                             hover:bg-white/10 transition">
            Talk to an Engineer
          </button>
        </div>
      </div>

      {/* RIGHT: Hero Video Panel */}
<div className="relative hidden lg:flex items-center justify-center">
  <div
    className="relative w-[560px] h-[420px] rounded-3xl overflow-hidden
               border border-white/15
               bg-black/40
               shadow-[0_0_80px_rgba(0,0,0,0.65)]"
  >
    {/* Video temporarily removed for deployment */}

  </div>
</div>


    </div>
  </motion.div>
</section>

    {/* ================= ENTERPRISE BRAND MARQUEE ================= */}
<motion.section
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="relative py-8 bg-[#151A21] border-y border-white/20 overflow-hidden"
>
  {/* Subtle tech overlay */}
  <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-transparent via-[#0EA5E9]/5 to-transparent" />

  <div
  className="
    relative flex items-center gap-24 whitespace-nowrap px-12
    animate-marquee
    hover:[animation-play-state:paused]
    transition-all duration-300
  "
>

  {[	
    "IoT SIM cards",
    "Network Infrastructure",
    "PoC Platforms",
    "Enterprise Deployments",
    "Security Operations",
    "Mesh Networks",
    "National Coverage",
    "Mission-Critical Use",
  ].map((label) => (
    <span
      key={label}
      className="
        text-slate-400 uppercase tracking-[0.35em] text-sm font-medium
        transition-all duration-300
        hover:text-[#0EA5E9]
        hover:scale-110
        hover:drop-shadow-[0_0_12px_rgba(14,165,233,0.6)]
        cursor-pointer
      "
    >
      {label}
    </span>
  ))}

</div>

</motion.section>
{/* ================= WHAT WE DELIVER ================= */}
<motion.section
  id="what-we-deliver"
  initial={{ opacity: 0, x: -80 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{
    duration: 0.9,
    ease: [0.16, 1, 0.3, 1], //
  }}
  className="relative pt-16 pb-32 px-6 overflow-hidden"
>


  {/* Background image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage: "url('/images/what-we-deliver-bg.jpg')",
    }}
  />

  {/* Dark overlay for readability */}
  <div className="absolute inset-0 bg-black/70" />

  <div className="relative max-w-[90rem] mx-auto">

    {/* Floating Glass Container */}
    <div
      className="
        relative rounded-3xl
        bg-white/8 backdrop-blur-2xl
        border border-white/20
        shadow-[0_40px_120px_rgba(0,0,0,0.65)]
        px-20 py-24
      "
    >
      {/* Subtle glow */}
      <div className="absolute inset-0 rounded-3xl pointer-events-none
                      shadow-[inset_0_0_60px_rgba(14,165,233,0.08)]" />

      {/* Section Header */}
      <div className="max-w-3xl mb-20">
        <h2 className="text-4xl md:text-5xl font-semibold mb-6">
          What We Deliver
        </h2>
        <p className="text-lg text-white/75 leading-relaxed">
          Signal One Integrated Systems delivers complete, mission-critical
          communications and IoT solutions by integrating devices, connectivity,
          and operational control into a single managed system.
        </p>
      </div>

      {/* Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">

        {[
  {
    title: "Communications Systems",
    image: "/images/what-we-deliver/communications.jpg",
    desc:
      "Secure Push-to-Talk over Cellular systems for real-time coordination, dispatch control, and mission-critical voice operations.",
  },
  {
    title: "IoT & Smart Infrastructure",
    image: "/images/what-we-deliver/iot.jpg",
    desc:
      "LoRaWAN and cellular IoT systems enabling real-time sensing, monitoring, metering, tracking, and automation.",
  },
  {
    title: "Connectivity & Networks",
    image: "/images/what-we-deliver/connectivity.jpg",
    desc:
      "National and global connectivity combining cellular, IoT SIM, and LoRaWAN networks with redundancy and lifecycle control.",
  },
  {
    title: "Platforms & Control",
    image: "/images/what-we-deliver/platforms.jpg",
    desc:
      "Centralised platforms for dispatch, device management, analytics, permissions, APIs, and operational oversight.",
  },
].map((item) => (
  <div
    key={item.title}
    className="
      rounded-2xl
      bg-white/6 backdrop-blur-xl
      border border-white/15
      p-8
      transition-all duration-300
      hover:-translate-y-2
      hover:shadow-[0_30px_80px_rgba(0,0,0,0.6)]
      hover:border-[#0EA5E9]/50
    "
  >
    {/* Thumbnail */}
    <div className="mb-6 overflow-hidden rounded-xl">
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-40 object-cover transition-transform duration-300 hover:scale-105"
      />
    </div>

    {/* Title */}
    <h3 className="text-xl font-semibold mb-4">
      {item.title}
    </h3>

    {/* Description */}
    <p className="text-white/75 leading-relaxed">
      {item.desc}
    </p>
  </div>
))}


      </div>
    </div>
  </div>
</motion.section>

{/* ================= SYSTEMS OVERVIEW ================= */}
<section
  id="systems-overview"
  className="relative py-32 px-6 overflow-hidden"
>
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage: "url('/images/systems-overview-bg.jpg')",
    }}
  />

  {/* Dark overlay for readability */}
  <div className="absolute inset-0 bg-black/65" />

  {/* Content wrapper (UNCHANGED) */}
  <div className="relative max-w-[90rem] mx-auto">


    {/* Header */}
    <div className="max-w-4xl mb-24">
      <h2 className="text-4xl md:text-5xl font-semibold mb-6">
        Integrated Systems, Designed for Reliability
      </h2>
      <p className="text-lg text-white/75 leading-relaxed">
        Signal One Integrated Systems delivers complete operational systems by
        combining field devices, secure connectivity, and centralised control
        platforms into a single, managed architecture.
      </p>
    </div>

    {/* System Flow */}
    <div className="grid grid-cols-1 xl:grid-cols-4 gap-10">

      {/* Step 1 */}
<div className="relative rounded-2xl border border-white/15 bg-white/5
                backdrop-blur-xl overflow-hidden">
  {/* Image */}
  <div className="h-48 w-full">
    <img
      src="/images/systems-overview/field-devices.jpg"
      alt="Field devices in operation"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Content */}
  <div className="p-10">
    <span className="text-sm text-[#0EA5E9] font-medium block mb-4">
      Step 1
    </span>
    <h3 className="text-xl font-semibold mb-4">
      Field Devices
    </h3>
    <p className="text-white/75 leading-relaxed">
      Mission-critical devices including Push-to-Talk radios, body cameras,
      sensors, meters, trackers, and gateways deployed in the field.
    </p>
  </div>
</div>


      {/* Step 2 */}
<div className="relative rounded-2xl border border-white/15 bg-white/5
                backdrop-blur-xl overflow-hidden">
  <div className="h-48 w-full">
    <img
      src="/images/systems-overview/secure-connectivity.jpg"
      alt="Secure connectivity infrastructure"
      className="w-full h-full object-cover"
    />
  </div>

  <div className="p-10">
    <span className="text-sm text-[#0EA5E9] font-medium block mb-4">
      Step 2
    </span>
    <h3 className="text-xl font-semibold mb-4">
      Secure Connectivity
    </h3>
    <p className="text-white/75 leading-relaxed">
      Cellular, IoT SIM, and LoRaWAN connectivity providing reliable,
      redundant data and voice transmission across local and global networks.
    </p>
  </div>
</div>

      {/* Step 3 */}
<div className="relative rounded-2xl border border-white/15 bg-white/5
                backdrop-blur-xl overflow-hidden">
  <div className="h-48 w-full">
    <img
      src="/images/systems-overview/platforms-control.jpg"
      alt="Operational platforms and system control"
      className="w-full h-full object-cover"
    />
  </div>

  <div className="p-10">
    <span className="text-sm text-[#0EA5E9] font-medium block mb-4">
      Step 3
    </span>
    <h3 className="text-xl font-semibold mb-4">
      Platforms & Control
    </h3>
    <p className="text-white/75 leading-relaxed">
      Centralised platforms for dispatch, device management, monitoring,
      analytics, permissions, reporting, and enterprise integration.
    </p>
  </div>
</div>

{/* Step 4 */}
<div className="relative rounded-2xl border border-white/15 bg-white/5
                backdrop-blur-xl overflow-hidden">
  <div className="h-48 w-full">
    <img
      src="/images/systems-overview/operational-oversight.jpg"
      alt="Operational oversight and system monitoring"
      className="w-full h-full object-cover"
    />
  </div>

  <div className="p-10">
    <span className="text-sm text-[#0EA5E9] font-medium block mb-4">
      Step 4
    </span>
    <h3 className="text-xl font-semibold mb-4">
      Operational Oversight
    </h3>
    <p className="text-white/75 leading-relaxed">
      Real-time visibility, governance, alerts, and lifecycle management
      ensuring systems remain secure, scalable, and operational.
    </p>
  </div>
</div>

    </div>
  </div>
</section>

{/* ================= INDUSTRIES & SOLUTIONS ================= */}
<section id="solutions" className="relative pt-20 pb-20 px-6 overflow-hidden"
>{/* Background image */}
<div
  className="absolute inset-0 bg-cover bg-center"
  style={{
    backgroundImage: "url('/images/industries-bg.jpg')",
  }}
/>

{/* Dark overlay */}
<div className="absolute inset-0 bg-black/70" />

 <div className="relative max-w-[90rem] mx-auto">

    <div className="max-w-4xl mb-20">
      <h2 className="text-4xl md:text-5xl font-semibold mb-6">
        Solutions Built for Real-World Operations
      </h2>
      <p className="text-lg text-white/75 leading-relaxed">
        Signal One Integrated Systems designs and deploys communications,
        connectivity, and IoT systems tailored to the operational realities
        of each industry we serve.
      </p>
    </div>

    <IndustrySlider />

  </div>
</section>

{/* ================= BUILT FOR RELIABILITY ================= */}
<motion.section {...sectionFlowLeft} className="py-24 px-6">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

    <div className="relative rounded-3xl overflow-hidden border border-white/25 shadow-[0_0_50px_rgba(14,165,233,0.25)]">
      {/* Video temporarily removed for deployment */}

    </div>

    <div className="rounded-3xl bg-white/20 backdrop-blur-xl border border-white/25 p-12">
      <h2 className="text-3xl font-semibold mb-6">Built for Reliability</h2>

      <p className="text-slate-300 mb-4">
        Signal One is designed for organisations where communication failure is not an option.
      </p>

      <p className="text-slate-300 mb-4">
        Our platforms operate on carrier-grade networks with built-in redundancy,
        national coverage, and centralised control.
      </p>

      <p className="text-slate-300">
        Deployments are structured for uptime, resilience, and long-term operational continuity.
      </p>

      <ul className="mt-8 space-y-2 text-slate-400 text-sm">
        <li>• Carrier-grade infrastructure</li>
        <li>• Centralised device management</li>
        <li>• National roaming capability</li>
        <li>• 24/7 operational readiness</li>
      </ul>
    </div>
  </div>
</motion.section>


      {/* ================= CORE SERVICES ================= */}
      <motion.section {...sectionMotion} id="services" className="relative py-40 px-6 overflow-hidden">
       {/* Video temporarily removed for deployment */}

        <div className="absolute inset-0 bg-[#151A21]/70" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold mb-8">Core Capabilities</h2>

          <p className="text-slate-300 max-w-4xl mb-16">
            Signal One provides a fully managed communications ecosystem integrating
            voice, data, devices, and operational oversight.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { title: "PoC", img: "/images/poc.jpg" },
              { title: "IoT SIMs", img: "/images/sim.jpg" },
              { title: "Certified Devices", img: "/images/devices.jpg" },
              { title: "Provisioning", img: "/images/provisioning.jpg" },
              { title: "Managed Services", img: "/images/managed.jpg" },
              { title: "Industry Solutions", img: "/images/industry.jpg" },
            ].map((item, i) => (
              <div key={i} className="rounded-3xl bg-white/20 backdrop-blur-xl border border-white/25 overflow-hidden">
                <div className="relative h-56">
                  <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ================= SOLUTIONS ================= */}
      <motion.section {...sectionMotion} id="solutions" className="py-16 px-6 bg-[#151A21]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold mb-20">
            Solutions Across Critical Industries
          </h2>

          <p className="text-slate-300 max-w-4xl mb-20">
            Supporting regulated, safety-critical, and logistics-intensive environments.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: "Security", img: "/images/security.jpg" },
              { title: "Fleet", img: "/images/fleet.jpg" },
              { title: "Logistics", img: "/images/logistics.jpg" },
              { title: "Utilities", img: "/images/utilities.jpg" },
              { title: "Events", img: "/images/events.jpg" },
              { title: "Emergency", img: "/images/emergency.jpg" },
            ].map((item, i) => (
              <div key={i} className="rounded-3xl bg-white/20 backdrop-blur-xl border border-white/25 overflow-hidden">
                <div className="relative h-64">
                  <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>
{/* ================= SOLUTION QUALIFICATION ================= */}
<section
  id="contact"
  className="relative py-32 px-6 overflow-hidden"
>
  <div className="max-w-[90rem] mx-auto">

    <div className="grid grid-cols-1 xl:grid-cols-2 gap-20
                    rounded-3xl border border-white/15
                    bg-white/5 backdrop-blur-xl p-16">

      {/* LEFT: USE CASE SELECTION */}
      <div>
        <h3 className="text-2xl font-semibold mb-10">
          Tell us about your use case
        </h3>

        {/* Use Case */}
        <div className="mb-10">
          <p className="text-sm text-white/60 mb-4">
            Primary use case
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              "Push-to-Talk Communications",
              "Asset Tracking",
              "Fleet & Logistics",
              "Smart Metering",
              "IoT Sensors",
              "Body Cameras",
              "Gateways & Infrastructure",
            ].map((item) => (
              <span
                key={item}
                className="px-4 py-2 rounded-full border border-white/25
                           text-sm text-white/80 hover:border-[#0EA5E9]
                           hover:text-[#0EA5E9] cursor-pointer transition"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Network */}
        <div className="mb-10">
          <p className="text-sm text-white/60 mb-4">
            Network technology in use
          </p>
          <div className="flex flex-wrap gap-3">
            {["4G", "5G", "LTE-M", "NB-IoT", "LoRaWAN", "Hybrid"].map((net) => (
              <span
                key={net}
                className="px-4 py-2 rounded-full border border-white/25
                           text-sm text-white/80 hover:border-[#0EA5E9]
                           hover:text-[#0EA5E9] cursor-pointer transition"
              >
                {net}
              </span>
            ))}
          </div>
        </div>

        {/* Region */}
        <div>
          <p className="text-sm text-white/60 mb-4">
            Deployment region
          </p>
          <div className="flex flex-wrap gap-3">
            {["Africa", "Europe", "Asia-Pacific", "North America", "Global"].map(
              (region) => (
                <span
                  key={region}
                  className="px-4 py-2 rounded-full border border-white/25
                             text-sm text-white/80 hover:border-[#0EA5E9]
                             hover:text-[#0EA5E9] cursor-pointer transition"
                >
                  {region}
                </span>
              )
            )}
          </div>
        </div>
      </div>

      {/* RIGHT: CONTACT FORM */}
      <div>
        <h3 className="text-2xl font-semibold mb-10">
          Contact details
        </h3>

        <div className="space-y-6">
          <input
            type="text"
            placeholder="First name"
            className="w-full bg-transparent border border-white/25
                       rounded-lg px-4 py-3 text-white placeholder-white/40"
          />
          <input
            type="text"
            placeholder="Last name"
            className="w-full bg-transparent border border-white/25
                       rounded-lg px-4 py-3 text-white placeholder-white/40"
          />
          <input
            type="email"
            placeholder="Business email"
            className="w-full bg-transparent border border-white/25
                       rounded-lg px-4 py-3 text-white placeholder-white/40"
          />

          <label className="flex items-start gap-3 text-sm text-white/60">
            <input type="checkbox" className="mt-1" />
            I agree to the processing of my information in accordance
            with the privacy policy.
          </label>

          <button
            className="w-full mt-6 bg-[#0EA5E9] hover:bg-[#0284C7]
                       text-white font-medium py-3 rounded-lg transition"
          >
            Submit request
          </button>
        </div>
      </div>

    </div>
  </div>
</section>
{/* ================= FOOTER ================= */}
<footer className="relative bg-[#0F131A] px-6 py-24">
  <div className="max-w-[90rem] mx-auto">

    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-16">

      {/* BRAND */}
      <div>
        <h3 className="text-xl font-semibold mb-6">
          Signal One Integrated Systems
        </h3>
        <p className="text-white/60 text-sm leading-relaxed mb-6">
          Mission-critical communications, connectivity, and IoT systems
          engineered for operational reliability and control.
        </p>

        <button
          className="px-6 py-2 rounded-full border border-white/40
                     text-sm hover:border-[#0EA5E9] hover:text-[#0EA5E9]
                     transition"
        >
          Subscribe to updates
        </button>
      </div>

      {/* SYSTEMS */}
      <div>
        <h4 className="text-sm font-semibold mb-6 uppercase tracking-wide">
          Systems
        </h4>
        <ul className="space-y-3 text-white/60 text-sm">
          <li>Integrated Systems</li>
          <li>Push-to-Talk Platforms</li>
          <li>IoT & Connectivity</li>
          <li>Device Management</li>
          <li>Operational Oversight</li>
        </ul>
      </div>

      {/* INDUSTRIES */}
      <div>
        <h4 className="text-sm font-semibold mb-6 uppercase tracking-wide">
          Industries
        </h4>
        <ul className="space-y-3 text-white/60 text-sm">
          <li>Security & Safety</li>
          <li>Logistics & Fleet</li>
          <li>Utilities & Metering</li>
          <li>Agriculture</li>
          <li>Construction & Mining</li>
        </ul>
      </div>

      {/* RESOURCES */}
      <div>
        <h4 className="text-sm font-semibold mb-6 uppercase tracking-wide">
          Resources
        </h4>
        <ul className="space-y-3 text-white/60 text-sm">
          <li>Company News</li>
          <li>Case Studies</li>
          <li>Technical Library</li>
          <li>Platform Documentation</li>
          <li>FAQs</li>
        </ul>
      </div>

      {/* COMPANY */}
      <div>
        <h4 className="text-sm font-semibold mb-6 uppercase tracking-wide">
          Company
        </h4>
        <ul className="space-y-3 text-white/60 text-sm">
          <li>About Signal One</li>
          <li>Become a Partner</li>
          <li>Contact Sales</li>
          <li>Support</li>
          <li>Login</li>
        </ul>
      </div>

    </div>

    <div className="border-t border-white/10 mt-20 pt-8 text-sm text-white/40">
      © {new Date().getFullYear()} Signal One Integrated Systems. All rights reserved.
    </div>

  </div>
</footer>

    </main>
  );
}
