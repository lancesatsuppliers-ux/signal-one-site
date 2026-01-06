export default function IoTSIMPage() {
    return (
        <main className="min-h-screen bg-[#151A21] text-slate-100 px-6 py-32">
            <div className="max-w-7xl mx-auto">
                {/* IMAGE PLACEHOLDER: Hero - Global IoT Connectivity */}
                <h1 className="text-5xl font-semibold mb-6">Global IoT Connectivity</h1>
                <p className="text-white/70 text-lg max-w-3xl mb-16">
                    Connect your assets anywhere in the world. Signal One provides industrial-grade IoT SIMs with unsteered multi-network roaming across 182+ countries, ensuring maximum uptime and redundancy.
                </p>

                {/* Section: Multi-Operator Coverage */}
                <section className="mb-20">
                    <h2 className="text-3xl font-semibold text-white mb-6">Resilient Multi-Network Coverage</h2>
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="bg-white/5 h-64 rounded-xl flex items-center justify-center border border-white/10">
                            {/* IMAGE PLACEHOLDER: World map with coverage */}
                            <span className="text-white/30 italic">World Map Coverage Placeholder</span>
                        </div>
                        <div>
                            <p className="text-slate-400 text-lg mb-6">
                                Unlike consumer SIMs that lock to a single carrier, our IoT SIMs automatically latch onto the strongest signal from over 600 roaming partners globally. This eliminates coverage gaps and prevents downtime caused by single-network outages.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Section: eSIM & MeshSIM Readiness */}
                <section className="mb-20">
                    <h2 className="text-3xl font-semibold text-white mb-6">eSIM & MeshSIM Technology</h2>
                    <p className="text-slate-400 text-lg mb-6 max-w-4xl">
                        Future-proof your deployments with eUICC (eSIM) capabilities, allowing Over-the-Air (OTA) profile switching without changing physical cards. We also support advanced MeshSIM technology for decentralised device-to-device connectivity in challenging environments.
                    </p>
                    {/* IMAGE PLACEHOLDER: SIM lifecycle diagram */}
                </section>

                {/* Section: Custom Data Plans */}
                <section className="mb-20">
                    <h2 className="text-3xl font-semibold text-white mb-6">Flexible Data & Pooling</h2>
                    <p className="text-slate-400 text-lg mb-6 max-w-4xl">
                        We offer tailored data plans to match your specific IoT use case, from low-bandwidth metering (MBs) to high-throughput video streaming (GBs). Aggregate usage across your entire fleet with data pooling to eliminate overage variances.
                    </p>
                </section>

                {/* Section: Secure & Reliable Connectivity */}
                <section>
                    <h2 className="text-3xl font-semibold text-white mb-6">Security First</h2>
                    <div className="bg-white/5 p-8 rounded-xl border border-white/10">
                        {/* IMAGE PLACEHOLDER: Connectivity flow illustration */}
                        <p className="text-slate-400 text-lg">
                            Private APN configurations, VPN tunnels, and static IP options allow us to route your device data securely to your backend infrastructure, bypassing the public internet and reducing attack surfaces.
                        </p>
                    </div>
                </section>
            </div>
        </main>
    );
}
