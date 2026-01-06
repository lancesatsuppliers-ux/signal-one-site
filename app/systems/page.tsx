export default function SystemsPage() {
  return (
    <main className="min-h-screen bg-[#151A21] text-slate-100 px-6 py-32">
      <div className="max-w-7xl mx-auto">
        {/* IMAGE PLACEHOLDER: Hero system architecture visual */}
        <h1 className="text-5xl font-semibold mb-6">Integrated Systems Overview</h1>
        <p className="text-white/70 text-lg max-w-3xl mb-16">
          Signal One delivers end-to-end operational ecosystems, integrating resilient connectivity, mission-critical hardware, and unified management platforms into a single, cohesive delivery model.
        </p>

        {/* Section: Communications Systems */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold text-white mb-6">Communications Systems</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-slate-400 text-lg mb-6">
                Our communications architecture bridges the gap between traditional radio reliability and modern cellular broadband versatility. seamlessly connecting field teams, dispatch centers, and autonomous systems.
              </p>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-center gap-2">✔ Nationwide Push-to-Talk over Cellular (PoC)</li>
                <li className="flex items-center gap-2">✔ Cross-protocol Interoperability (LMR &lt;&gt; LTE)</li>
                <li className="flex items-center gap-2">✔ Low-latency Dispatch Command & Control</li>
              </ul>
            </div>
            <div className="bg-white/5 h-64 rounded-xl flex items-center justify-center border border-white/10">
              {/* IMAGE PLACEHOLDER: Network topology diagram */}
              <span className="text-white/30 italic">Network Topology Diagram Placeholder</span>
            </div>
          </div>
        </section>

        {/* Section: IoT & Smart Infrastructure */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold text-white mb-6">IoT & Smart Infrastructure</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1 bg-white/5 h-64 rounded-xl flex items-center justify-center border border-white/10">
              {/* IMAGE PLACEHOLDER: Operations dashboard mockup */}
              <span className="text-white/30 italic">Operations Dashboard Mockup Placeholder</span>
            </div>
            <div className="order-1 md:order-2">
              <p className="text-slate-400 text-lg mb-6">
                We deploy scalable LPWAN and cellular IoT sensing layers that digitise physical assets, enabling predictive maintenance, automated alerting, and data-driven decision making.
              </p>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-center gap-2">✔ Industrial LoRaWAN Sensor Networks</li>
                <li className="flex items-center gap-2">✔ Ruggedised Asset & Livestock Tracking</li>
                <li className="flex items-center gap-2">✔ Smart Utility Metering Integration</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section: Secure Connectivity */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold text-white mb-6">Secure Connectivity</h2>
          <p className="text-slate-400 text-lg mb-6 max-w-4xl">
            The foundation of every Signal One system is our multi-redundant global connectivity layer. We provide unsteered, multi-network roaming SIMs and eSIMs that ensure your devices always connect to the strongest available signal, regardless of geography.
          </p>
        </section>

        {/* Section: Unified Management Platforms */}
        <section>
          <h2 className="text-3xl font-semibold text-white mb-6">Unified Management Platforms</h2>
          <p className="text-slate-400 text-lg mb-6 max-w-4xl">
            Control your entire ecosystem from a Single Pane of Glass. Our unified management suites provide deep visibility into device health, connectivity status, and user activity, enabling remote troubleshooting and firmware management at scale.
          </p>
        </section>
      </div>
    </main>
  );
}
