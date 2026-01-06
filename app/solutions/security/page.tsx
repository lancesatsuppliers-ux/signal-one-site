export default function SecurityPage() {
    return (
        <main className="min-h-screen bg-[#151A21] text-slate-100 px-6 py-32">
            <div className="max-w-7xl mx-auto">
                {/* IMAGE PLACEHOLDER: Hero - Security teams in field */}
                <h1 className="text-5xl font-semibold mb-6">Security Operations Communications</h1>
                <p className="text-white/70 text-lg max-w-3xl mb-16">
                    Unify your security posture with integrated voice, video, and data solutions. We enable real-time coordination between control rooms and field officers, ensuring rapid response to threats and incidents.
                </p>

                {/* Section: Command & Control */}
                <section className="mb-20">
                    <h2 className="text-3xl font-semibold text-white mb-6">Command & Control</h2>
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <p className="text-slate-400 text-lg mb-6">
                                Centralise your operations with our dispatch management capabilities. Visualise officer locations on live maps, create dynamic geo-fences for restricted areas, and manage incident workflows from a single dashboard.
                            </p>
                        </div>
                        <div className="bg-white/5 h-64 rounded-xl flex items-center justify-center border border-white/10">
                            {/* IMAGE PLACEHOLDER: Control room */}
                            <span className="text-white/30 italic">Control Room Visual Placeholder</span>
                        </div>
                    </div>
                </section>

                {/* Section: Field Communications */}
                <section className="mb-20">
                    <h2 className="text-3xl font-semibold text-white mb-6">Field Communications</h2>
                    <p className="text-slate-400 text-lg mb-6 max-w-4xl">
                        Equip your guards with ruggedised PoC radios that deliver nationwide coverage. Unlike traditional two-way radios, our solution ensures crystal-clear voice anywhere there is cellular signal, eliminating dead zones in large facility patrols.
                    </p>
                </section>

                {/* Section: Wearables & Sensors */}
                <section className="mb-20">
                    <h2 className="text-3xl font-semibold text-white mb-6">Wearables & Sensors</h2>
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="bg-white/5 h-64 rounded-xl flex items-center justify-center border border-white/10">
                            {/* IMAGE PLACEHOLDER: Wearable devices */}
                            <span className="text-white/30 italic">Wearable Device Placeholder</span>
                        </div>
                        <div>
                            <p className="text-slate-400 text-lg mb-6">
                                Enhance officer safety with body-worn panic buttons and fall-detection sensors. Automated alerts are instantly transmitted to the dispatch center with location data, ensuring help arrives exactly where it's needed.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Section: Operational Benefits */}
                <section>
                    <h2 className="text-3xl font-semibold text-white mb-6">Operational Benefits</h2>
                    <ul className="text-slate-400 text-lg list-disc ml-5 space-y-2">
                        <li>Reduced Response Times</li>
                        <li>Enhanced Lone Worker Safety</li>
                        <li>Auditable Incident Logs</li>
                        <li>Lower Infrastructure Maintenance Costs</li>
                    </ul>
                </section>
            </div>
        </main>
    );
}
