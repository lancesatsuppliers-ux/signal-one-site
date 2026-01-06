"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50">
            <div className="mx-auto max-w-7xl mt-3 md:mt-6 px-4 md:px-10 py-3 md:py-4 rounded-xl md:rounded-2xl bg-white/15 backdrop-blur-xl border border-white/20 shadow-[0_0_40px_rgba(14,165,233,0.25)] flex items-center justify-between">

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
                        <Link href="/">
                            <div className="text-lg md:text-2xl font-semibold tracking-wide cursor-pointer text-white">
                                SIGNAL ONE
                            </div>
                        </Link>
                        <div className="text-[9px] md:text-[11px] uppercase tracking-[0.35em] text-slate-200">
                            Integrated Systems
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="xl:hidden p-2 rounded-lg hover:bg-white/10 transition text-white"
                    aria-label="Toggle menu"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        {mobileMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>

                {/* Desktop Navigation */}
                <nav className="hidden xl:flex items-center gap-10 text-sm font-medium text-white">
                    <Link href="/" className="px-3 py-2 rounded-full hover:opacity-75 transition">
                        Home
                    </Link>

                    <Link href="/systems" className="px-3 py-2 rounded-full hover:opacity-75 transition">
                        Systems
                    </Link>

                    <Link href="/solutions" className="px-3 py-2 rounded-full hover:opacity-75 transition">
                        Solutions
                    </Link>

                    <Link href="/platforms" className="px-3 py-2 rounded-full hover:opacity-75 transition">
                        Platforms
                    </Link>

                    <Link href="/devices" className="px-3 py-2 rounded-full hover:opacity-75 transition">
                        Devices
                    </Link>

                    <Link href="/connectivity" className="px-3 py-2 rounded-full hover:opacity-75 transition">
                        Connectivity
                    </Link>

                    <Link href="/partners" className="px-3 py-2 rounded-full hover:opacity-75 transition">
                        Partner With Us
                    </Link>

                    <Link href="/contact" className="px-3 py-2 rounded-full hover:opacity-75 transition">
                        Contact
                    </Link>
                </nav>

            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="xl:hidden absolute top-full left-0 right-0 mt-2 mx-4 rounded-2xl bg-white/15 backdrop-blur-xl border border-white/20 shadow-lg"
                    >
                        <nav className="flex flex-col p-4 gap-2 text-white">
                            <Link href="/" className="px-4 py-3 rounded-lg hover:bg-white/10 transition" onClick={() => setMobileMenuOpen(false)}>Home</Link>
                            <Link href="/systems" className="px-4 py-3 rounded-lg hover:bg-white/10 transition" onClick={() => setMobileMenuOpen(false)}>Systems</Link>
                            <Link href="/solutions" className="px-4 py-3 rounded-lg hover:bg-white/10 transition" onClick={() => setMobileMenuOpen(false)}>Solutions</Link>
                            <Link href="/platforms" className="px-4 py-3 rounded-lg hover:bg-white/10 transition" onClick={() => setMobileMenuOpen(false)}>Platforms</Link>
                            <Link href="/devices" className="px-4 py-3 rounded-lg hover:bg-white/10 transition" onClick={() => setMobileMenuOpen(false)}>Devices</Link>
                            <Link href="/connectivity" className="px-4 py-3 rounded-lg hover:bg-white/10 transition" onClick={() => setMobileMenuOpen(false)}>Connectivity</Link>
                            <Link href="/partners" className="px-4 py-3 rounded-lg hover:bg-white/10 transition" onClick={() => setMobileMenuOpen(false)}>Partner With Us</Link>
                            <Link href="/contact" className="px-4 py-3 rounded-lg hover:bg-white/10 transition" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
