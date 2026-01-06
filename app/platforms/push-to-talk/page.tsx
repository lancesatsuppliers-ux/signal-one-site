export default function PushToTalkPage() {
    return (
        <main className="min-h-screen bg-[#151A21] text-slate-100 px-6 py-32">
            <div className="max-w-7xl mx-auto">
                {/* IMAGE PLACEHOLDER: Section hero – 16:9 – Mission-Critical Voice Communications */}
                <h1 className="text-5xl font-semibold mb-6">Mission-Critical Voice Communications</h1>
                <p className="text-white/70 text-lg max-w-3xl mb-16">
                    Signal One Critical Connect is a carrier-grade Push-to-Talk over Cellular (PoC) platform designed to deliver instant, boundary-free communications for distributed enterprise teams and public safety operations.
                </p>

                {/* Section: Nationwide PoC Coverage */}
                <section className="mb-20">
                    <h2 className="text-3xl font-semibold text-white mb-6">Nationwide & Global Coverage</h2>
                    <p className="text-slate-400 text-lg mb-4 max-w-4xl">
                        Leveraging existing LTE/4G and Wi-Fi infrastructure, our PoC platform eliminates the range limitations of traditional LMR radio systems. Teams can communicate instantly across cities, regions, and borders with crystal-clear digital voice quality.
                    </p>
                </section>

                {/* Section: Group & Dispatch Management */}
                <section className="mb-20">
                    <h2 className="text-3xl font-semibold text-white mb-6">Advanced Group & Dispatch Management</h2>
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <p className="text-slate-400 text-lg mb-6">
                                Our Windows-based dispatch console provides command centers with total situational awareness. Dispatchers can manage dynamic talk groups, visualises user locations on real-time maps, and initiate emergency overrides when seconds count.
                            </p>
                            <ul className="space-y-2 text-slate-300">
                                <li className="flex items-center gap-2">✔ Dynamic Group Creation</li>
                                <li className="flex items-center gap-2">✔ Real-time GPS Location Tracking</li>
                                <li className="flex items-center gap-2">✔ Voice & Video Recording/Playback</li>
                            </ul>
                        </div>
                        <div className="bg-white/5 h-64 rounded-xl flex items-center justify-center border border-white/10">
                            {/* IMAGE PLACEHOLDER: Control room dashboard */}
                            <span className="text-white/30 italic">Control Room Dashboard Placeholder</span>
                        </div>
                    </div>
                </section>

                {/* Section: Device + Platform Integration */}
                <section className="mb-20">
                    <h2 className="text-3xl font-semibold text-white mb-6">Seamless Device Integration</h2>
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="order-2 md:order-1 bg-white/5 h-64 rounded-xl flex items-center justify-center border border-white/10">
                            {/* IMAGE PLACEHOLDER: Group call UI mockup */}
                            <span className="text-white/30 italic">Group Call UI Mockup Placeholder</span>
                        </div>
                        <div className="order-1 md:order-2">
                            <p className="text-slate-400 text-lg mb-6">
                                The platform is natively integrated with our range of ruggedised PoC radios, body-worn cameras, and smartphone applications. This ensures that every feature—from SOS alerts to video streaming—works reliably out of the box without complex configuration.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Section: Use Cases */}
                <section>
                    <h2 className="text-3xl font-semibold text-white mb-6">Use Cases</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                            <h3 className="text-xl font-semibold text-white mb-3">Private Security</h3>
                            <p className="text-slate-400">Instant coordination for patrols and static guards with discrete earpiece support and panic alarms.</p>
                        </div>
                        <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                            <h3 className="text-xl font-semibold text-white mb-3">Logistics & Transport</h3>
                            <p className="text-slate-400">Wide-area communication for drivers without the cost of complex radio repeater infrastructure.</p>
                        </div>
                        <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                            <h3 className="text-xl font-semibold text-white mb-3">Event Management</h3>
                            <p className="text-slate-400">Rapid deployment of temporary talk groups for large-scale stadium or festival operations.</p>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
