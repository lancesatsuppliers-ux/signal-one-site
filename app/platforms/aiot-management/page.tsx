export default function AIoTManagementPage() {
    return (
        <main className="min-h-screen bg-[#151A21] text-slate-100 px-6 py-32">
            <div className="max-w-7xl mx-auto">
                {/* IMAGE PLACEHOLDER: Hero - Platform dashboard UI */}
                <h1 className="text-5xl font-semibold mb-6">Centralised AIoT Management</h1>
                <p className="text-white/70 text-lg max-w-3xl mb-16">
                    A unified control plane for the lifecycle management of global IoT SIMs and connected devices. Signal One AIoT Manager provides deep visibility, remote diagnostics, and automated provisioning capabilities.
                </p>

                {/* Section: Full Lifecycle SIM Management */}
                <section className="mb-20">
                    <h2 className="text-3xl font-semibold text-white mb-6">Full Lifecycle Connectivity Management</h2>
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <p className="text-slate-400 text-lg mb-6">
                                Manage your connectivity from factory to field. Our platform allows you to activate, suspend, and monitor SIM cards in real-time. Set data usage alerts, view session history, and manage rate plans across multiple carriers from a single dashboard.
                            </p>
                        </div>
                        <div className="bg-white/5 h-64 rounded-xl flex items-center justify-center border border-white/10">
                            {/* IMAGE PLACEHOLDER: Analytics charts */}
                            <span className="text-white/30 italic">Connectivity Analytics Charts Placeholder</span>
                        </div>
                    </div>
                </section>

                {/* Section: Device Monitoring & Diagnostics */}
                <section className="mb-20">
                    <h2 className="text-3xl font-semibold text-white mb-6">Device Monitoring & Diagnostics</h2>
                    <p className="text-slate-400 text-lg mb-6 max-w-4xl">
                        Go beyond connectivity status. Our AIoT platform ingests telemetry data to provide insights into device health, battery levels, and signal quality. Detect anomalies before they become critical failures using our advanced fault analytics engine.
                    </p>
                </section>

                {/* Section: API & Integration Capabilities */}
                <section className="mb-20">
                    <h2 className="text-3xl font-semibold text-white mb-6">API & Integration Capabilities</h2>
                    <p className="text-slate-400 text-lg mb-6 max-w-4xl">
                        Built with an API-first approach, the platform integrates seamlessly with your existing ERP, CRM, or operational software. Automate workflows, extract bulk data, and trigger actions programmatically to scale your IoT operations efficiently.
                    </p>
                </section>

                {/* Section: B2B & B2B2C Enablement */}
                <section>
                    <h2 className="text-3xl font-semibold text-white mb-6">B2B & Enterprise Enablement</h2>
                    <div className="bg-white/5 p-8 rounded-xl border border-white/10">
                        {/* IMAGE PLACEHOLDER: Device map view */}
                        <p className="text-slate-400 text-lg">
                            Designed for scalability, the platform supports multi-tenant hierarchy, allowing you to segment fleets by region, customer, or department with granular role-based access control (RBAC).
                        </p>
                    </div>
                </section>
            </div>
        </main>
    );
}
