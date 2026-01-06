export default function UtilitiesPage() {
    return (
        <main className="min-h-screen bg-[#151A21] text-slate-100 px-6 py-32">
            <div className="max-w-7xl mx-auto">
                {/* IMAGE PLACEHOLDER: Hero - Utility infrastructure */}
                <h1 className="text-5xl font-semibold mb-6">Utility Infrastructure Monitoring</h1>
                <p className="text-white/70 text-lg max-w-3xl mb-16">
                    Digitise critical infrastructure with scalable IoT sensing layers. Enable remote metering, leak detection, and predictive maintenance for water, gas, and electricity networks.
                </p>

                {/* Section: Smart Metering */}
                <section className="mb-20">
                    <h2 className="text-3xl font-semibold text-white mb-6">Smart Metering (AMR/AMI)</h2>
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <p className="text-slate-400 text-lg mb-6">
                                Transition from manual reads to Automated Meter Reading. deploy LoRaWAN retrofits on existing meters to collect granular usage data, enabling accurate billing and rapid identification of non-revenue water/energy losses.
                            </p>
                        </div>
                        <div className="bg-white/5 h-64 rounded-xl flex items-center justify-center border border-white/10">
                            {/* IMAGE PLACEHOLDER: Smart meters */}
                            <span className="text-white/30 italic">Smart Meter Placeholder</span>
                        </div>
                    </div>
                </section>

                {/* Section: Remote Monitoring */}
                <section className="mb-20">
                    <h2 className="text-3xl font-semibold text-white mb-6">Remote Infrastructure Monitoring</h2>
                    <p className="text-slate-400 text-lg mb-6 max-w-4xl">
                        Monitor the health of sub-stations, pipelines, and treatment plants. Industrial sensors provide real-time alerts on pressure, temperature, and equipment status, allowing teams to address faults before they become outages.
                    </p>
                    {/* IMAGE PLACEHOLDER: Data dashboards */}
                </section>

                {/* Section: Operational Efficiency */}
                <section>
                    <h2 className="text-3xl font-semibold text-white mb-6">Operational Efficiency</h2>
                    <p className="text-slate-400 text-lg mb-6 max-w-4xl">
                        Data-driven insights reduce truck rolls and manual inspections. Optimise maintenance schedules based on actual asset condition rather than fixed time intervals, significantly reducing operational expenditure.
                    </p>
                </section>
            </div>
        </main>
    );
}
