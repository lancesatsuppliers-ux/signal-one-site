export default function PushToTalkPage() {
    return (
        <main className="min-h-screen bg-[#151A21] text-slate-100 px-6 py-32">
            <div className="max-w-7xl mx-auto">
                {/* IMAGE PLACEHOLDER: Dispatch Console Screen | 16:9 | platforms/mcptt-hero.jpg */}
                <h1 className="text-5xl font-semibold mb-6">Signal One Critical Connect</h1>
                <p className="text-white/70 text-lg max-w-3xl mb-16">
                    A carrier-grade Mission Critical Push-to-Talk (MCPTT) platform delivering instant voice, video, and data communication over public cellular networks.
                </p>

                {/* --- Core Features --- */}
                <section className="mb-20">
                    <h2 className="text-3xl font-semibold text-white mb-10">Dispatch & Control Features</h2>
                    <div className="grid md:grid-cols-2 gap-10">
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-[#0EA5E9]">Voice Dispatch</h3>
                            <p className="text-slate-400">
                                Instant group calling, private one-to-one calls, and priority interrupt. The platform supports thousands of concurrent talk groups with sub-300ms latency.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-[#0EA5E9]">Live Video Streaming</h3>
                            <p className="text-slate-400">
                                Pull live video feeds from field devices directly to the dispatch console. Gain immediate eyes-on situational awareness during critical incidents.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-[#0EA5E9]">Location Services</h3>
                            <p className="text-slate-400">
                                Real-time GPS tracking, geofencing, and location processing history. Visualise your entire workforce on a live map interface.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-[#0EA5E9]">Emergency Alarms</h3>
                            <p className="text-slate-400">
                                Dedicated SOS handling with automated audio recording and location pinning. Man-down and lone-worker safety protocols are built-in.
                            </p>
                        </div>
                    </div>
                </section>

                {/* --- Integration --- */}
                <section className="mb-20 p-8 rounded-2xl border border-white/10 bg-white/5">
                    <h2 className="text-2xl font-semibold text-white mb-4">LMR Gateway Integration</h2>
                    <p className="text-slate-300 mb-6">
                        Bridge your existing DMR, TETRA, or Analog radio networks into the Signal One Critical Connect platform. Our RoIP gateways ensure seamless communication between traditional radios and cellular devices.
                    </p>
                    {/* IMAGE PLACEHOLDER: Gateway Architecture | 21:9 | platforms/gateway-diagram.jpg */}
                </section>

            </div>
        </main>
    );
}
