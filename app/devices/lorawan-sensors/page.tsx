export default function LoRaWANSensorsPage() {
    return (
        <main className="min-h-screen bg-[#151A21] text-slate-100 px-6 py-32">
            <div className="max-w-7xl mx-auto">
                {/* IMAGE PLACEHOLDER: Hero - Product category hero images */}
                <h1 className="text-5xl font-semibold mb-6">LoRaWAN Devices & Sensors</h1>
                <p className="text-white/70 text-lg max-w-3xl mb-16">
                    A comprehensive portfolio of industrial LoRaWAN sensors designed for long-range, low-power data acquisition. Ruggedised for harsh environments and built for massive scale IoT deployments.
                </p>

                {/* Category: Environmental Monitoring */}
                <section className="mb-20">
                    <h2 className="text-3xl font-semibold text-white mb-6">Environmental Monitoring</h2>
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <p className="text-slate-400 text-lg mb-6">
                                Monitor air quality, temperature, humidity, and soil conditions in real-time. Our environmental sensors are IP67 rated, ensuring reliable performance in outdoor agriculture, smart cities, and industrial facilities.
                            </p>
                        </div>
                        <div className="bg-white/5 h-64 rounded-xl flex items-center justify-center border border-white/10">
                            {/* IMAGE PLACEHOLDER: Deployed sensor environments */}
                            <span className="text-white/30 italic">Environmental Sensor Placeholder</span>
                        </div>
                    </div>
                </section>

                {/* Category: Smart Metering */}
                <section className="mb-20">
                    <h2 className="text-3xl font-semibold text-white mb-6">Smart Metering & Energy</h2>
                    <p className="text-slate-400 text-lg mb-6 max-w-4xl">
                        Retrofit existing infrastructure with smart LoRaWAN energy meters and pulse counters. Gain granular visibility into electricity, water, and gas consumption to drive efficiency and detect leaks automatically.
                    </p>
                </section>

                {/* Category: Asset & Livestock Tracking */}
                <section className="mb-20">
                    <h2 className="text-3xl font-semibold text-white mb-6">Asset & Livestock Tracking</h2>
                    <p className="text-slate-400 text-lg mb-6 max-w-4xl">
                        Track high-value assets and livestock in remote areas without cellular coverage. Our solar-assisted trackers combine GPS/BDS positioning with LoRaWAN backhaul for years of maintenance-free operation.
                    </p>
                    {/* IMAGE PLACEHOLDER: Close-up hardware details */}
                </section>

                {/* Category: Access Control & Safety */}
                <section>
                    <h2 className="text-3xl font-semibold text-white mb-6">Safety & Access Control</h2>
                    <p className="text-slate-400 text-lg mb-6 max-w-4xl">
                        Protect your workforce and facilities with smart door sensors, smoke detectors, and wearable panic buttons. Instant alerts confirm safety status and trigger immediate response protocols.
                    </p>
                </section>
            </div>
        </main>
    );
}
