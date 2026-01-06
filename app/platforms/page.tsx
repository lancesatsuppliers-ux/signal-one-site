import Link from "next/link";
import { products } from "../data/products";

export default function PlatformsPage() {
    return (
        <main className="min-h-screen bg-[#151A21] text-slate-100 px-6 py-32">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-5xl font-semibold mb-6">Platforms</h1>
                <p className="text-white/70 text-lg max-w-3xl mb-16">
                    Enterprise-grade operational control, dispatch, and device management platforms.
                </p>

                <div className="grid md:grid-cols-2 gap-10 mb-20">
                    <Link href="/platforms/push-to-talk" className="group relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 hover:border-[#0EA5E9]/50 transition-all duration-300">
                        <div className="h-64 bg-black/20 flex items-center justify-center">
                            {/* IMAGE PLACEHOLDER: MCPTT Platform Hero | 16:9 | platforms/mcptt-hero.jpg */}
                            <span className="text-white/20 font-mono text-lg">Critical Connect (MCPTT)</span>
                        </div>
                        <div className="p-8">
                            <h2 className="text-3xl font-semibold text-white mb-4 group-hover:text-[#0EA5E9] transition">Critical Connect</h2>
                            <p className="text-slate-400 mb-6 text-lg">
                                Carrier-grade Mission Critical Push-to-Talk (MCPTT) platform. Instant voice, video, and data dispatch for high-availability operations.
                            </p>
                            <span className="inline-flex items-center text-[#0EA5E9] font-medium group-hover:translate-x-2 transition">
                                Explore Platform <span className="ml-2">→</span>
                            </span>
                        </div>
                    </Link>

                    <Link href="/platforms/aiot-management" className="group relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 hover:border-[#0EA5E9]/50 transition-all duration-300">
                        <div className="h-64 bg-black/20 flex items-center justify-center">
                            {/* IMAGE PLACEHOLDER: AIoT Dashboard Hero | 16:9 | platforms/aiot-dashboard.jpg */}
                            <span className="text-white/20 font-mono text-lg">AIoT Management</span>
                        </div>
                        <div className="p-8">
                            <h2 className="text-3xl font-semibold text-white mb-4 group-hover:text-[#0EA5E9] transition">AIoT Device Management</h2>
                            <p className="text-slate-400 mb-6 text-lg">
                                Unified Mobile Device Management (MDM) and sensor fleet provisioning. Secure, track, and update your entire edge ecosystem.
                            </p>
                            <span className="inline-flex items-center text-[#0EA5E9] font-medium group-hover:translate-x-2 transition">
                                Explore Platform <span className="ml-2">→</span>
                            </span>
                        </div>
                    </Link>
                </div>

            </div>
        </main>
    );
}
