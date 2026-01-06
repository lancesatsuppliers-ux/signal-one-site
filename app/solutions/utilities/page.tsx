export default function UtilitiesSolutionsPage() {
    return (
        <main className="min-h-screen bg-[#151A21] text-slate-100 px-6 py-32">
            <div className="max-w-7xl mx-auto">
                {/* IMAGE PLACEHOLDER: Smart Meter Installation | 16:9 | solutions/utilities-hero.jpg */}
                <h1 className="text-5xl font-semibold mb-6">Utilities & Smart Metering</h1>
                <p className="text-white/70 text-lg max-w-3xl mb-16">
                    Modernise grid and water infrastructure with automated metering infrastructure (AMI). Reduce non-revenue water, balance grid loads, and lower operational costs.
                </p>

                <section className="mb-20">
                    <h2 className="text-3xl font-semibold text-white mb-8">Smart Metering capabilities</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                            <h3 className="text-xl font-semibold text-white mb-3">Automated Reads</h3>
                            <p className="text-slate-400 text-sm">Eliminate manual meter reads. Collect hourly consumption data remotely via LoRaWAN.</p>
                        </div>
                        <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                            <h3 className="text-xl font-semibold text-white mb-3">Leak Detection</h3>
                            <p className="text-slate-400 text-sm">Identify continuous flow and pressure drops instantly to prevent water loss and damage.</p>
                        </div>
                        <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                            <h3 className="text-xl font-semibold text-white mb-3">Load Profiling</h3>
                            <p className="text-slate-400 text-sm">Analyse peak usage patterns to optimise grid distribution and prevent outages.</p>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
