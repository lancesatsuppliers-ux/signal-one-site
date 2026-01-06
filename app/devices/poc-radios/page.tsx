export default function PoCRadiosPage() {
    return (
        <main className="min-h-screen bg-[#151A21] text-slate-100 px-6 py-32">
            <div className="max-w-7xl mx-auto">
                {/* IMAGE PLACEHOLDER: Hero - Device hero shots */}
                <h1 className="text-5xl font-semibold mb-6">PoC Radio Devices</h1>
                <p className="text-white/70 text-lg max-w-3xl mb-16">
                    Professional Push-to-Talk over Cellular (PoC) hardware that combines the durability of two-way radios with the intelligence and reach of smartphones. Built for the frontline.
                </p>

                {/* Section: Ruggedised Hardware */}
                <section className="mb-20">
                    <h2 className="text-3xl font-semibold text-white mb-6">Ruggedised for Industry</h2>
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="bg-white/5 h-64 rounded-xl flex items-center justify-center border border-white/10">
                            {/* IMAGE PLACEHOLDER: Field usage scenarios */}
                            <span className="text-white/30 italic">Rugged Radio Placeholder</span>
                        </div>
                        <div>
                            <p className="text-slate-400 text-lg mb-6">
                                Our devices are MIL-STD-810G compliant and IP68 rated against dust and water ingress. Engineered to withstand drops, shocks, and extreme weather, they ensure reliable communication in the toughest operational environments.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Section: Network Compatibility */}
                <section className="mb-20">
                    <h2 className="text-3xl font-semibold text-white mb-6">Multi-Mode Connectivity</h2>
                    <p className="text-slate-400 text-lg mb-6 max-w-4xl">
                        Equipped with dual-SIM LTE modules and seamless Wi-Fi handover, our radios maintain connection across 4G/5G networks and private facility Wi-Fi. Many models also support DMR/Analog integration for hybrid fleet migration.
                    </p>
                </section>

                {/* Section: Platform-Ready Devices */}
                <section className="mb-20">
                    <h2 className="text-3xl font-semibold text-white mb-6">Platform-Ready Intelligence</h2>
                    <p className="text-slate-400 text-lg mb-6 max-w-4xl">
                        Devices ship pre-configured with the Signal One Critical Connect application. Hardware PTT buttons, SOS keys, and channel knobs are mapped directly to platform functions for intuitive, eyes-free operation.
                    </p>
                    {/* IMAGE PLACEHOLDER: Charging / accessories */}
                </section>

                {/* Section: Industry Applications */}
                <section>
                    <h2 className="text-3xl font-semibold text-white mb-6">Industry Applications</h2>
                    <ul className="text-slate-400 text-lg list-disc ml-5 space-y-2">
                        <li>Security Patrols & Guarding</li>
                        <li>Construction & Mining</li>
                        <li>Transportation & Logistics</li>
                        <li>Event Management & Hospitality</li>
                    </ul>
                </section>
            </div>
        </main>
    );
}
