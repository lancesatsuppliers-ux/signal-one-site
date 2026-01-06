import Link from "next/link";

export default function SolutionsPage() {
    return (
        <main className="min-h-screen bg-[#151A21] text-slate-100 px-6 py-32">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-5xl font-semibold mb-6">Solutions</h1>
                <p className="text-white/70 text-lg max-w-3xl mb-16">
                    Tailored operational ecosystems integrating best-in-class hardware, platforms, and global connectivity.
                </p>

                {/* Industry Solutions Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="bg-white/5 border border-white/10 rounded-3xl p-10 hover:border-[#0EA5E9]/50 transition cursor-pointer group">
                        <Link href="/solutions/security">
                            <h2 className="text-3xl font-semibold mb-4 group-hover:text-[#0EA5E9] transition">Security Operations</h2>
                            <p className="text-slate-400 text-lg mb-6">
                                End-to-end patrol management and dispatch systems utilising PocStar MCPTT platforms and HKT panic alarms for officer safety.
                            </p>
                            <ul className="space-y-2 text-slate-500">
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#0EA5E9] rounded-full"></span> Real-time Video Dispatch</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#0EA5E9] rounded-full"></span> Lone Worker Protection</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#0EA5E9] rounded-full"></span> Global Roaming Connectivity</li>
                            </ul>
                        </Link>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-3xl p-10 hover:border-[#0EA5E9]/50 transition cursor-pointer group">
                        <Link href="/solutions/utilities">
                            <h2 className="text-3xl font-semibold mb-4 group-hover:text-[#0EA5E9] transition">Smart Utilities</h2>
                            <p className="text-slate-400 text-lg mb-6">
                                Remote metering and infrastructure monitoring powered by HKT LoRaWAN sensors and YC-Tel global IoT connectivity.
                            </p>
                            <ul className="space-y-2 text-slate-500">
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#0EA5E9] rounded-full"></span> Automated Meter Reading (AMR)</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#0EA5E9] rounded-full"></span> Predictive Maintenance</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#0EA5E9] rounded-full"></span> Private LoRaWAN Networks</li>
                            </ul>
                        </Link>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-3xl p-10 hover:border-[#0EA5E9]/50 transition cursor-pointer group">
                        <Link href="/solutions/logistics">
                            <h2 className="text-3xl font-semibold mb-4 group-hover:text-[#0EA5E9] transition">Fleet & Logistics</h2>
                            <p className="text-slate-400 text-lg mb-6">
                                Global asset tracking and fleet coordination using multi-network IoT SIMs and unified device management platforms.
                            </p>
                            <ul className="space-y-2 text-slate-500">
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#0EA5E9] rounded-full"></span> Cross-Border Tracking</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#0EA5E9] rounded-full"></span> Remote Firmware Management</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#0EA5E9] rounded-full"></span> Driver Telematics</li>
                            </ul>
                        </Link>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-3xl p-10 hover:border-[#0EA5E9]/50 transition cursor-pointer group">
                        <Link href="/solutions/agriculture">
                            <h2 className="text-3xl font-semibold mb-4 group-hover:text-[#0EA5E9] transition">Smart Agriculture</h2>
                            <p className="text-slate-400 text-lg mb-6">
                                Precision farming and livestock monitoring with ruggedised HKT sensors and long-range connectivity solutions.
                            </p>
                            <ul className="space-y-2 text-slate-500">
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#0EA5E9] rounded-full"></span> Livestock Geo-fencing</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#0EA5E9] rounded-full"></span> Environmental Sensing</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#0EA5E9] rounded-full"></span> Solar-Powered Gateways</li>
                            </ul>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
