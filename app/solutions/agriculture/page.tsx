export default function AgricultureSolutionsPage() {
    return (
        <main className="min-h-screen bg-[#151A21] text-slate-100 px-6 py-32">
            <div className="max-w-7xl mx-auto">
                {/* IMAGE PLACEHOLDER: Smart Farm | 16:9 | solutions/agriculture-hero.jpg */}
                <h1 className="text-5xl font-semibold mb-6">Agriculture & Rural Operations</h1>
                <p className="text-white/70 text-lg max-w-3xl mb-16">
                    Bring digital intelligence to the paddock. Monitor soil moisture, track livestock, and automate irrigation systems across vast rural properties using long-range telemetry.
                </p>

                <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-semibold text-white">Livestock Management</h2>
                        <p className="text-slate-400 text-lg">
                            Know exactly where your herd is. Our smart collars monitor location and behaviour, alerting you to stray animals, theft, or health issues immediately.
                        </p>
                        <ul className="text-slate-400 list-disc ml-5 space-y-2">
                            <li>Virtual Fencing capabilities</li>
                            <li>Heat detection & health monitoring</li>
                            <li>Pasture utilisation analysis</li>
                        </ul>
                    </div>
                    <div className="bg-white/5 rounded-2xl h-80 border border-white/10 flex items-center justify-center">
                        {/* IMAGE PLACEHOLDER: Cattle with smart collar | 4:3 | solutions/cattle-collar.jpg */}
                        <span className="text-white/20 italic">Livestock Monitoring</span>
                    </div>
                </div>
            </div>
        </main>
    );
}
