import Link from "next/link";
import { products } from "../data/products";

export default function DevicesPage() {
    return (
        <main className="min-h-screen bg-[#151A21] text-slate-100 px-6 py-32">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-5xl font-semibold mb-6">Devices</h1>
                <p className="text-white/70 text-lg max-w-3xl mb-16">
                    Ruggedised, mission-critical hardware for field operations, sensing, and tracking.
                </p>

                <div className="grid md:grid-cols-2 gap-10 mb-20">
                    <Link href="/devices/lorawan-sensors" className="group relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 hover:border-[#0EA5E9]/50 transition-all duration-300">
                        <div className="h-64 bg-black/20 flex items-center justify-center">
                            {/* IMAGE PLACEHOLDER: LoRaWAN Category Hero | 16:9 | devices/lorawan/hero-sensors.jpg */}
                            <span className="text-white/20 font-mono text-lg">LoRaWAN Sensors</span>
                        </div>
                        <div className="p-8">
                            <h2 className="text-3xl font-semibold text-white mb-4 group-hover:text-[#0EA5E9] transition">LoRaWAN Sensors</h2>
                            <p className="text-slate-400 mb-6 text-lg">
                                Industrial-grade sensors for environmental monitoring, smart metering, asset tracking, and facility management. Long-range, low-power performance.
                            </p>
                            <span className="inline-flex items-center text-[#0EA5E9] font-medium group-hover:translate-x-2 transition">
                                View Catalog <span className="ml-2">→</span>
                            </span>
                        </div>
                    </Link>

                    <Link href="/devices/poc-radios" className="group relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 hover:border-[#0EA5E9]/50 transition-all duration-300">
                        <div className="h-64 bg-black/20 flex items-center justify-center">
                            {/* IMAGE PLACEHOLDER: PoC Category Hero | 16:9 | devices/poc/hero-radios.jpg */}
                            <span className="text-white/20 font-mono text-lg">PoC Radios</span>
                        </div>
                        <div className="p-8">
                            <h2 className="text-3xl font-semibold text-white mb-4 group-hover:text-[#0EA5E9] transition">PoC Radios</h2>
                            <p className="text-slate-400 mb-6 text-lg">
                                Ruggedised Push-to-Talk over Cellular devices combining instant voice communication with broadband data capabilities.
                            </p>
                            <span className="inline-flex items-center text-[#0EA5E9] font-medium group-hover:translate-x-2 transition">
                                View Models <span className="ml-2">→</span>
                            </span>
                        </div>
                    </Link>
                </div>

            </div>
        </main>
    );
}
