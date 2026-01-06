import { products } from "../data/products";

export default function DevicesPage() {
    return (
        <main className="min-h-screen bg-[#151A21] text-slate-100 px-6 py-32">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-5xl font-semibold mb-6">Devices</h1>
                <p className="text-white/70 text-lg max-w-3xl mb-16">
                    Ruggedised, mission-critical hardware for field operations, sensing, and tracking.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products
                        .filter((p) => p.category === "devices")
                        .map((product) => (
                            <div
                                key={product.id}
                                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition group"
                            >
                                <div className="h-48 w-full bg-black/20 rounded-xl mb-6 overflow-hidden flex items-center justify-center text-white/20">
                                    {/* Placeholder for real image */}
                                    <span className="text-sm border border-white/20 px-3 py-1 rounded">{product.imagePlaceholder}</span>
                                </div>
                                <h2 className="text-2xl font-semibold mb-3 group-hover:text-[#0EA5E9] transition">
                                    {product.title}
                                </h2>
                                <p className="text-slate-400 mb-6 line-clamp-3">
                                    {product.description}
                                </p>

                                <div className="space-y-2 mb-8">
                                    {product.specs.slice(0, 3).map(spec => (
                                        <div key={spec} className="text-sm text-slate-500 flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-[#0EA5E9] rounded-full"></span>
                                            {spec}
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {product.tags.map(tag => (
                                        <span key={tag} className="text-xs font-medium text-[#0EA5E9] bg-[#0EA5E9]/10 px-2 py-1 rounded">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </main>
    );
}
