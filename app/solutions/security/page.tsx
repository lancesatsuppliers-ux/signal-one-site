export default function SecuritySolutionsPage() {
    return (
        <main className="min-h-screen bg-[#151A21] text-slate-100 px-6 py-32">
            <div className="max-w-7xl mx-auto">
                {/* IMAGE PLACEHOLDER: Security Operations Center | 16:9 | solutions/security-hero.jpg */}
                <h1 className="text-5xl font-semibold mb-6">Security & Private Guarding</h1>
                <p className="text-white/70 text-lg max-w-3xl mb-16">
                    Equip your security teams with mission-critical communications. Instant Push-to-Talk, live video body cameras, and real-time guard tracking ensure officer safety and operational accountability.
                </p>

                <div className="grid md:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-3xl font-semibold text-white mb-6">Operational Challenges</h2>
                        <ul className="list-disc ml-5 space-y-3 text-slate-400">
                            <li>Fragmented communication between disparate teams.</li>
                            <li>Lack of visibility into guard locations during patrols.</li>
                            <li>Inability to verify incidents in real-time.</li>
                            <li>Safety risks for lone workers in remote locations.</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-3xl font-semibold text-white mb-6">The Signal One Solution</h2>
                        <ul className="list-disc ml-5 space-y-3 text-slate-400">
                            <li><strong className="text-white">Unified Comms:</strong> Link radios, smartphones, and control rooms instantly.</li>
                            <li><strong className="text-white">Live Video:</strong> Stream video from body-worn radios to the control room.</li>
                            <li><strong className="text-white">Proof of Presence:</strong> NFC and GPS tagging for patrol verification.</li>
                            <li><strong className="text-white">Man Down:</strong> Automatic alerts if an officer falls or stops moving.</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-20">
                    {/* IMAGE PLACEHOLDER: Guard using D22 radio | 21:9 | solutions/guard-radio-usage.jpg */}
                </div>
            </div>
        </main>
    );
}
