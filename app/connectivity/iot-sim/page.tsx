export default function IoTSIMPage() {
    return (
        <main className="min-h-screen bg-[#151A21] text-slate-100 px-6 py-32">
            <div className="max-w-7xl mx-auto">
                {/* IMAGE PLACEHOLDER: SIM Card Hero | 16:9 | connectivity/sim-hero.jpg */}
                <h1 className="text-5xl font-semibold mb-6">Global IoT Connectivity</h1>
                <p className="text-white/70 text-lg max-w-3xl mb-16">
                    One SIM, global coverage. Our multi-IMSI IoT SIMs provide redundant, carrier-agnostic connectivity across 180+ countries and 600+ networks.
                </p>

                {/* --- Features --- */}
                <section className="grid lg:grid-cols-2 gap-12 mb-20">
                    <div>
                        <h2 className="text-3xl font-semibold text-white mb-6">Why Signal One Connectivity?</h2>
                        <ul className="space-y-6">
                            <li>
                                <h3 className="text-xl font-semibold text-[#0EA5E9] mb-2">Unsteered Roaming</h3>
                                <p className="text-slate-400">
                                    Our SIMs automatically connect to the strongest available signal, regardless of the network operator. No steering ensures maximum uptime for mission-critical devices.
                                </p>
                            </li>
                            <li>
                                <h3 className="text-xl font-semibold text-[#0EA5E9] mb-2">Single Management Plane</h3>
                                <p className="text-slate-400">
                                    Manage your entire global fleet from one dashboard. Activate, suspend, and monitor usage in real-time via our Connectivity Management Platform (CMP).
                                </p>
                            </li>
                            <li>
                                <h3 className="text-xl font-semibold text-[#0EA5E9] mb-2">Secure Private APN</h3>
                                <p className="text-slate-400">
                                    Data is routed securely via private APN tunnels directly to your infrastructure or cloud, bypassing the public internet for enhanced security.
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center">
                        {/* IMAGE PLACEHOLDER: CMP Dashboard Screenshot | 4:3 | connectivity/cmp-dashboard.jpg */}
                        <span className="text-white/20 italic">CMP Platform View</span>
                    </div>
                </section>

                {/* --- Specs --- */}
                <section>
                    <h2 className="text-2xl font-semibold text-white mb-8">Technical Specifications</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-slate-300 border-collapse">
                            <tbody>
                                <tr className="border-b border-white/10">
                                    <td className="py-4 font-semibold w-1/3">Form Factors</td>
                                    <td className="py-4 text-slate-400">2FF (Mini), 3FF (Micro), 4FF (Nano), MFF2 (eSIM)</td>
                                </tr>
                                <tr className="border-b border-white/10">
                                    <td className="py-4 font-semibold">Network Support</td>
                                    <td className="py-4 text-slate-400">2G, 3G, 4G, 5G, LTE-M, NB-IoT</td>
                                </tr>
                                <tr className="border-b border-white/10">
                                    <td className="py-4 font-semibold">Temperature Range</td>
                                    <td className="py-4 text-slate-400">Industrial Grade (-40°C to +105°C) available</td>
                                </tr>
                                <tr className="border-b border-white/10">
                                    <td className="py-4 font-semibold">Coverage</td>
                                    <td className="py-4 text-slate-400">Global (180+ Countries)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

            </div>
        </main>
    );
}
