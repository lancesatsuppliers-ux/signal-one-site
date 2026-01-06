export default function LogisticsPage() {
    return (
        <main className="min-h-screen bg-[#151A21] text-slate-100 px-6 py-32">
            <div className="max-w-7xl mx-auto">
                {/* IMAGE PLACEHOLDER: Hero - Fleet operations */}
                <h1 className="text-5xl font-semibold mb-6">Logistics & Fleet Operations</h1>
                <p className="text-white/70 text-lg max-w-3xl mb-16">
                    Optimise supply chains and transport networks with unified fleet visibility. Connect vehicles, drivers, and cargo to a central management layer for real-time tracking and coordination.
                </p>

                {/* Section: Voice & Data Coordination */}
                <section className="mb-20">
                    <h2 className="text-3xl font-semibold text-white mb-6">Drivers & Dispatch Coordination</h2>
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="bg-white/5 h-64 rounded-xl flex items-center justify-center border border-white/10">
                            {/* IMAGE PLACEHOLDER: Vehicle dashboards */}
                            <span className="text-white/30 italic">Vehicle Dashboard Placeholder</span>
                        </div>
                        <div>
                            <p className="text-slate-400 text-lg mb-6">
                                Keep drivers connected with instant Push-to-Talk communication across wide-area networks. Replace distracting phone calls with one-touch group messaging, ensuring safe and compliant driver interaction.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Section: Asset Tracking */}
                <section className="mb-20">
                    <h2 className="text-3xl font-semibold text-white mb-6">Asset & Cargo Tracking</h2>
                    <p className="text-slate-400 text-lg mb-6 max-w-4xl">
                        Prevent loss and ensure delivery integrity with real-time asset tracking. Deploy battery-powered IoT trackers on trailers and high-value cargo to monitor location, shock, and temperature status throughout the journey.
                    </p>
                    {/* IMAGE PLACEHOLDER: Tracking maps */}
                </section>

                {/* Section: Platform Visibility */}
                <section>
                    <h2 className="text-3xl font-semibold text-white mb-6">Platform Visibility</h2>
                    <p className="text-slate-400 text-lg mb-6 max-w-4xl">
                        Consolidate telematics data and communication logs. Our platform gives fleet managers a historical view of route efficiency, driver behavior, and asset utilisation to drive continuous operational improvement.
                    </p>
                </section>
            </div>
        </main>
    );
}
