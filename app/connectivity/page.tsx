import Link from "next/link";
import { products } from "../data/products";

export default function ConnectivityPage() {
    return (
        <main className="min-h-screen bg-[#151A21] text-slate-100 px-6 py-32">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-5xl font-semibold mb-6">Connectivity</h1>
                <p className="text-white/70 text-lg max-w-3xl mb-16">
                    Global, redundant cellular and IoT connectivity solutions for reliable data transmission.
                </p>

                <div className="grid md:grid-cols-2 gap-10 mb-20">
                    <Link href="/connectivity/iot-sim" className="group relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 hover:border-[#0EA5E9]/50 transition-all duration-300">
                        <div className="h-64 bg-black/20 flex items-center justify-center">
                            {/* IMAGE PLACEHOLDER: IoT SIM Hero | 16:9 | connectivity/sim-hero.jpg */}
                            <span className="text-white/20 font-mono text-lg">Global IoT SIM</span>
                        </div>
                        <div className="p-8">
                            <h2 className="text-3xl font-semibold text-white mb-4 group-hover:text-[#0EA5E9] transition">Global IoT SIM</h2>
                            <p className="text-slate-400 mb-6 text-lg">
                                Multi-IMSI connectivity for global roaming. One SIM card, 600+ networks, providing unsteered access for mission-critical uptime.
                            </p>
                            <span className="inline-flex items-center text-[#0EA5E9] font-medium group-hover:translate-x-2 transition">
                                View Connectivity Plans <span className="ml-2">→</span>
                            </span>
                        </div>
                    </Link>
                </div>

            </div>
        </main>
    );
}
