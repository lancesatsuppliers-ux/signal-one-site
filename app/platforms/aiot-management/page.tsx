export default function AIoTManagementPage() {
    return (
        <main className="min-h-screen bg-[#151A21] text-slate-100 px-6 py-32">
            <div className="max-w-7xl mx-auto">
                {/* IMAGE PLACEHOLDER: AIoT Dashboard UI | 16:9 | platforms/aiot-dashboard.jpg */}
                <h1 className="text-5xl font-semibold mb-6">AIoT Device Management</h1>
                <p className="text-white/70 text-lg max-w-3xl mb-16">
                    A unified Mobile Device Management (MDM) and IoT monitoring suite. Secure, configure, and update your entire fleet of radios and sensors from the cloud.
                </p>

                {/* --- Capabilities --- */}
                <section className="grid md:grid-cols-3 gap-8 mb-20">
                    <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                        <h3 className="text-xl font-semibold text-white mb-4">Zero-Touch Provisioning</h3>
                        <p className="text-slate-400 text-sm">
                            Deploy devices instantly. Configurations are pushed over-the-air (OTA) immediately upon activation, removing the need for manual setup.
                        </p>
                    </div>
                    <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                        <h3 className="text-xl font-semibold text-white mb-4">Kiosk Mode</h3>
                        <p className="text-slate-400 text-sm">
                            Lock down devices to specific applications. Prevent distraction and misuse by restricting access to unauthorised apps and settings.
                        </p>
                    </div>
                    <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                        <h3 className="text-xl font-semibold text-white mb-4">Remote Diagnostics</h3>
                        <p className="text-slate-400 text-sm">
                            Monitor battery health, signal strength, and storage status. Troubleshoot issues remotely with screen sharing and log retrieval.
                        </p>
                    </div>
                </section>

                {/* --- Security --- */}
                <section className="mb-20">
                    <h2 className="text-3xl font-semibold text-white mb-8">Enterprise Security Features</h2>
                    <ul className="grid md:grid-cols-2 gap-4 text-slate-300">
                        <li className="flex items-center gap-3 p-4 bg-white/5 rounded-lg border border-white/5">
                            <span className="text-[#0EA5E9]">✓</span> Remote Wipe & Lock capability
                        </li>
                        <li className="flex items-center gap-3 p-4 bg-white/5 rounded-lg border border-white/5">
                            <span className="text-[#0EA5E9]">✓</span> Application Whitelisting/Blacklisting
                        </li>
                        <li className="flex items-center gap-3 p-4 bg-white/5 rounded-lg border border-white/5">
                            <span className="text-[#0EA5E9]">✓</span> Enforced Password Policies
                        </li>
                        <li className="flex items-center gap-3 p-4 bg-white/5 rounded-lg border border-white/5">
                            <span className="text-[#0EA5E9]">✓</span> Geofence-based Policy Enforcement
                        </li>
                    </ul>
                </section>
            </div>
        </main>
    );
}
