export default function LogisticsSolutionsPage() {
    return (
        <main className="min-h-screen bg-[#151A21] text-slate-100 px-6 py-32">
            <div className="max-w-7xl mx-auto">
                {/* IMAGE PLACEHOLDER: Logistics Fleet | 16:9 | solutions/logistics-hero.jpg */}
                <h1 className="text-5xl font-semibold mb-6">Logistics & Fleet Operations</h1>
                <p className="text-white/70 text-lg max-w-3xl mb-16">
                    Optimise your supply chain with real-time asset visibility and instant driver communication. Reduce downtime, improve route efficiency, and ensure cargo security.
                </p>

                <div className="grid md:grid-cols-2 gap-16 mb-20">
                    <div>
                        <h2 className="text-3xl font-semibold text-white mb-6">Fleet Telematics</h2>
                        <p className="text-slate-400 mb-6">
                            Gain deep insights into vehicle performance. Monitor fuel usage, driver behaviour, and engine health remotely via our IoT interface.
                        </p>
                        {/* IMAGE PLACEHOLDER: Vehicle Tracking UI | 4:3 | solutions/tracking-ui.jpg */}
                    </div>
                    <div>
                        <h2 className="text-3xl font-semibold text-white mb-6">Asset Tracking</h2>
                        <p className="text-slate-400 mb-6">
                            Never lose sight of high-value cargo. Our long-life LoRaWAN trackers provide continuous location updates even for unpowered assets like trailers and containers.
                        </p>
                        {/* IMAGE PLACEHOLDER: Cargo Container Tracker | 4:3 | solutions/container-tracker.jpg */}
                    </div>
                </div>
            </div>
        </main>
    );
}
