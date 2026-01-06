export default function AgriculturePage() {
    return (
        <main className="min-h-screen bg-[#151A21] text-slate-100 px-6 py-32">
            <div className="max-w-7xl mx-auto">
                {/* IMAGE PLACEHOLDER: Hero - Farms and livestock */}
                <h1 className="text-5xl font-semibold mb-6">Smart Agriculture</h1>
                <p className="text-white/70 text-lg max-w-3xl mb-16">
                    Bring intelligence to rural operations. Our robust long-range connectivity solutions enable precision farming and livestock monitoring in areas previously beyond the reach of cellular networks.
                </p>

                {/* Section: Livestock Tracking */}
                <section className="mb-20">
                    <h2 className="text-3xl font-semibold text-white mb-6">Livestock Tracking & Geofencing</h2>
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="bg-white/5 h-64 rounded-xl flex items-center justify-center border border-white/10">
                            {/* IMAGE PLACEHOLDER: Outdoor sensors */}
                            <span className="text-white/30 italic">Livestock Tracker Placeholder</span>
                        </div>
                        <div>
                            <p className="text-slate-400 text-lg mb-6">
                                Secure your herd with solar-powered GPS collars. Set virtual geo-fences to receive instant alerts if animals stray from designated grazing zones, preventing theft and loss in vast rural properties.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Section: Environmental Monitoring */}
                <section className="mb-20">
                    <h2 className="text-3xl font-semibold text-white mb-6">Environmental Sensing</h2>
                    <p className="text-slate-400 text-lg mb-6 max-w-4xl">
                        Optimise yield with hyper-local weather and soil data. Deploy wireless sensors to monitor soil moisture, temperature, and rainfall, enabling data-backed irrigation decisions that save water and improve crop health.
                    </p>
                </section>

                {/* Section: Remote Connectivity */}
                <section>
                    <h2 className="text-3xl font-semibold text-white mb-6">Remote Connectivity Solutions</h2>
                    <div className="bg-white/5 p-8 rounded-xl border border-white/10">
                        {/* IMAGE PLACEHOLDER: Rural gateways */}
                        <p className="text-slate-400 text-lg">
                            We deploy private LoRaWAN gateways backhauled by satellite or high-gain cellular, creating a private network canopy over your property. This ensures reliable data transmission even in the most isolated agricultural regions.
                        </p>
                    </div>
                </section>
            </div>
        </main>
    );
}
