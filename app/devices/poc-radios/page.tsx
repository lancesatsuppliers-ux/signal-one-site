import Image from "next/image";

export default function PoCRadiosPage() {
    return (
        <main className="min-h-screen bg-[#151A21] text-slate-100 px-6 py-32">
            <div className="max-w-7xl mx-auto">
                <div className="relative w-full h-[300px] md:h-[400px] rounded-3xl overflow-hidden mb-16 border border-white/10">
                    <Image
                        src="/images/devices/poc/hero-radios.jpg"
                        alt="PoC Radios"
                        fill
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#151A21] via-transparent to-transparent opacity-80" />
                </div>
                <h1 className="text-5xl font-semibold mb-6">Push-to-Talk (PoC) Devices</h1>
                <p className="text-white/70 text-lg max-w-3xl mb-16">
                    Enterprise-grade PoC radios combining the instant communication of two-way radio with the global reach of cellular networks. Built for security, logistics, and field operations.
                </p>

                <div className="grid md:grid-cols-2 gap-12">

                    {/* D11 */}
                    <article className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition">
                        <div className="h-64 bg-black/20 relative">
                            <Image
                                src="/images/devices/poc/D11.jpg"
                                alt="D11 Radio"
                                fill
                                className="object-contain p-8 hover:scale-105 transition duration-500"
                            />
                        </div>
                        <div className="p-8">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h2 className="text-2xl font-semibold text-white">Model D11</h2>
                                    <span className="text-[#0EA5E9] text-sm tracking-wider uppercase font-medium">Compact Professional</span>
                                </div>
                            </div>
                            <p className="text-slate-300 mb-6">
                                A compact, lightweight radio designed for hospitality, retail, and light security applications. Features a slim profile without compromising on audio quality or battery life.
                            </p>
                            <ul className="space-y-2 text-sm text-slate-400 mb-8">
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9]" />
                                    LTE / Wi-Fi Connectivity
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9]" />
                                    Compact Form Factor
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9]" />
                                    Crystal Clear Audio
                                </li>
                            </ul>
                        </div>
                    </article>

                    {/* D12 */}
                    <article className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition">
                        <div className="h-64 bg-black/20 relative">
                            <Image
                                src="/images/devices/poc/D12.jpg"
                                alt="D12 Radio"
                                fill
                                className="object-contain p-8 hover:scale-105 transition duration-500"
                            />
                        </div>
                        <div className="p-8">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h2 className="text-2xl font-semibold text-white">Model D12</h2>
                                    <span className="text-[#0EA5E9] text-sm tracking-wider uppercase font-medium">Display Standard</span>
                                </div>
                            </div>
                            <p className="text-slate-300 mb-6">
                                The standard for fleet management and logistics, featuring a high-visibility colour display for group management and dispatch messaging.
                            </p>
                            <ul className="space-y-2 text-sm text-slate-400 mb-8">
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9]" />
                                    1.77" Colour Screen
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9]" />
                                    IP54 Dust/Water Resistance
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9]" />
                                    Group Selector Knob
                                </li>
                            </ul>
                        </div>
                    </article>

                    {/* D21 */}
                    <article className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition">
                        <div className="h-64 bg-black/20 relative">
                            <Image
                                src="/images/devices/poc/D21.jpg"
                                alt="D21 Radio"
                                fill
                                className="object-contain p-8 hover:scale-105 transition duration-500"
                            />
                        </div>
                        <div className="p-8">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h2 className="text-2xl font-semibold text-white">Model D21</h2>
                                    <span className="text-[#0EA5E9] text-sm tracking-wider uppercase font-medium">Rugged Industrial</span>
                                </div>
                            </div>
                            <p className="text-slate-300 mb-6">
                                Built for construction and heavy industry, the D21 is IP68 rated and drop-tested. It delivers loud audio and reliable connection in the harshest conditions.
                            </p>
                            <ul className="space-y-2 text-sm text-slate-400 mb-8">
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9]" />
                                    IP68 Waterproof
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9]" />
                                    High-Capacity Battery
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9]" />
                                    Dedicated SOS Button
                                </li>
                            </ul>
                        </div>
                    </article>

                    {/* D22 */}
                    <article className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition">
                        <div className="h-64 bg-black/20 relative">
                            <Image
                                src="/images/devices/poc/D22.jpg"
                                alt="D22 Radio"
                                fill
                                className="object-contain p-8 hover:scale-105 transition duration-500"
                            />
                        </div>
                        <div className="p-8">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h2 className="text-2xl font-semibold text-white">Model D22</h2>
                                    <span className="text-[#0EA5E9] text-sm tracking-wider uppercase font-medium">Video Smart Radio</span>
                                </div>
                            </div>
                            <p className="text-slate-300 mb-6">
                                A smart body-worn radio with camera capabilities, allowing for live video streaming back to dispatch. Essential for security and emergency response.
                            </p>
                            <ul className="space-y-2 text-sm text-slate-400 mb-8">
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9]" />
                                    Front & Rear Cameras
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9]" />
                                    Touchscreen Interface
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9]" />
                                    Android OS
                                </li>
                            </ul>
                        </div>
                    </article>

                </div>

                {/* Compatibility Note */}
                <div className="mt-20 p-8 rounded-2xl bg-[#0EA5E9]/10 border border-[#0EA5E9]/20">
                    <h3 className="text-xl font-semibold text-white mb-4">Seamless Compatibility</h3>
                    <p className="text-slate-300">
                        All Signal One PoC devices are fully certified for the Signal One Critical Connect platform, ensuring instant provisioning, over-the-air updates, and end-to-end encryption.
                    </p>
                </div>

            </div>
        </main>
    );
}
