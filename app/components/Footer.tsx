export default function Footer() {
    return (
        <footer className="relative bg-[#0F131A] px-4 md:px-6 py-12 md:py-16 lg:py-24 border-t border-white/10">
            <div className="max-w-[90rem] mx-auto">

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-8 md:gap-12 lg:gap-16">

                    {/* BRAND */}
                    <div>
                        <h3 className="text-xl font-semibold mb-6 text-white">
                            Signal One Integrated Systems
                        </h3>
                        <p className="text-white/60 text-sm leading-relaxed mb-6">
                            Mission-critical communications, connectivity, and IoT systems
                            engineered for operational reliability and control.
                        </p>

                        <button
                            className="px-6 py-2 rounded-full border border-white/40
                   text-sm text-white hover:border-[#0EA5E9] hover:text-[#0EA5E9]
                   transition"
                        >
                            Subscribe to updates
                        </button>
                    </div>

                    {/* SYSTEMS */}
                    <div>
                        <h4 className="text-sm font-semibold mb-6 uppercase tracking-wide text-white">
                            Systems
                        </h4>
                        <ul className="space-y-3 text-white/60 text-sm">
                            <li>Integrated Systems</li>
                            <li>Push-to-Talk Platforms</li>
                            <li>IoT & Connectivity</li>
                            <li>Device Management</li>
                            <li>Operational Oversight</li>
                        </ul>
                    </div>

                    {/* INDUSTRIES */}
                    <div>
                        <h4 className="text-sm font-semibold mb-6 uppercase tracking-wide text-white">
                            Industries
                        </h4>
                        <ul className="space-y-3 text-white/60 text-sm">
                            <li>Security & Safety</li>
                            <li>Logistics & Fleet</li>
                            <li>Utilities & Metering</li>
                            <li>Agriculture</li>
                            <li>Construction & Mining</li>
                        </ul>
                    </div>

                    {/* RESOURCES */}
                    <div>
                        <h4 className="text-sm font-semibold mb-6 uppercase tracking-wide text-white">
                            Resources
                        </h4>
                        <ul className="space-y-3 text-white/60 text-sm">
                            <li>Company News</li>
                            <li>Case Studies</li>
                            <li>Technical Library</li>
                            <li>Platform Documentation</li>
                            <li>FAQs</li>
                        </ul>
                    </div>

                    {/* COMPANY */}
                    <div>
                        <h4 className="text-sm font-semibold mb-6 uppercase tracking-wide text-white">
                            Company
                        </h4>
                        <ul className="space-y-3 text-white/60 text-sm">
                            <li>About Signal One</li>
                            <li>Become a Partner</li>
                            <li>Contact Sales</li>
                            <li>Support</li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-white/10 mt-20 pt-8 text-sm text-white/40">
                    © {new Date().getFullYear()} Signal One Integrated Systems. All rights reserved.
                </div>

            </div>
        </footer>
    );
}
