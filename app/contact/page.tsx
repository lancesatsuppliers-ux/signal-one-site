export default function ContactPage() {
    return (
        <main className="min-h-screen bg-[#151A21] text-slate-100 px-6 py-32">
            <div className="max-w-7xl mx-auto">
                {/* IMAGE PLACEHOLDER: Hero - Engineering consultation visuals */}
                <h1 className="text-5xl font-semibold mb-6">Speak to an Engineer</h1>
                <p className="text-white/70 text-lg max-w-3xl mb-16">
                    Ready to design your integrated system? Contact our solutions engineering team to discuss your operational requirements, pilot opportunities, and technical architecture.
                </p>

                {/* Section: Engagement Process */}
                <section className="mb-20">
                    <h2 className="text-3xl font-semibold text-white mb-6">Our Engagement Process</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                            <h3 className="text-xl font-semibold text-[#0EA5E9] mb-3">1. Discovery</h3>
                            <p className="text-slate-400">We analyze your current infrastructure, coverage needs, and operational pain points.</p>
                        </div>
                        <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                            <h3 className="text-xl font-semibold text-[#0EA5E9] mb-3">2. Solution Design</h3>
                            <p className="text-slate-400">Our engineers architect a multi-vendor solution combining best-fit hardware and connectivity.</p>
                        </div>
                        <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                            <h3 className="text-xl font-semibold text-[#0EA5E9] mb-3">3. Deployment & Support</h3>
                            <p className="text-slate-400">We oversee staging, provisioning, and provide ongoing Lifecycle management support.</p>
                        </div>
                    </div>
                </section>

                {/* Section: Contact Call-to-Action */}
                <section className="max-w-2xl bg-white/5 p-8 rounded-2xl border border-white/10">
                    {/* IMAGE PLACEHOLDER: Abstract contact imagery */}
                    <h2 className="text-3xl font-semibold text-white mb-6">Get in Touch</h2>
                    <form className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <input type="text" placeholder="First Name" className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#0EA5E9]" />
                            <input type="text" placeholder="Last Name" className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#0EA5E9]" />
                        </div>
                        <input type="email" placeholder="Work Email" className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#0EA5E9]" />
                        <input type="text" placeholder="Company / Organization" className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#0EA5E9]" />
                        <textarea placeholder="Tell us about your project..." rows={4} className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#0EA5E9]"></textarea>
                        <button className="bg-[#0EA5E9] hover:bg-[#0284C7] text-white font-semibold py-3 px-8 rounded-lg transition w-full md:w-auto">
                            Request Consultation
                        </button>
                    </form>
                </section>
            </div>
        </main>
    );
}
