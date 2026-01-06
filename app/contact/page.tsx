export default function ContactPage() {
    return (
        <main className="min-h-screen bg-[#151A21] text-slate-100 px-6 py-32">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16">

                    {/* Contact Info */}
                    <div>
                        <h1 className="text-5xl font-semibold mb-6">Partner with Signal One</h1>
                        <p className="text-white/70 text-lg mb-12">
                            Ready to modernise your operations? Our solution architects are ready to design a system tailored to your specific requirements.
                        </p>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-2">System Design Consultation</h3>
                                <p className="text-slate-400">
                                    Book a session with our engineering team to map out your coverage, device, and integration needs.
                                </p>
                            </div>

                            <hr className="border-white/10" />

                            <div>
                                <h3 className="text-xl font-semibold text-white mb-2">Technical Support</h3>
                                <p className="text-slate-400 mb-1">Existing customer? Access the support portal.</p>
                                <span className="text-[#0EA5E9] cursor-pointer hover:underline">support@signal1.systems</span>
                            </div>

                            <hr className="border-white/10" />

                            <div>
                                <h3 className="text-xl font-semibold text-white mb-2">Head Office</h3>
                                <p className="text-slate-400">
                                    Level 4, TechHub Precinct<br />
                                    Innovation Drive, Metropolis
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form Placeholder - in reality this would be interactive */}
                    <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
                        <h2 className="text-2xl font-semibold text-white mb-6">Request a Proposal</h2>
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <input type="text" placeholder="First Name" className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#0EA5E9] outline-none transition" />
                                <input type="text" placeholder="Last Name" className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#0EA5E9] outline-none transition" />
                            </div>
                            <input type="email" placeholder="Business Email" className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#0EA5E9] outline-none transition" />
                            <input type="tel" placeholder="Phone Number" className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#0EA5E9] outline-none transition" />
                            <textarea placeholder="Tell us about your project requirements..." rows={4} className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#0EA5E9] outline-none transition"></textarea>
                            <button className="w-full bg-[#0EA5E9] hover:bg-[#0284C7] text-white font-medium py-4 rounded-lg transition shadow-[0_0_20px_rgba(14,165,233,0.3)]">
                                Submit Enquiry
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </main>
    );
}
