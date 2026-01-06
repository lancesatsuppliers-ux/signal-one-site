export default function SystemsPage() {
  return (
    <main className="min-h-screen bg-[#151A21] text-slate-100 px-6 py-32">
      <div className="max-w-7xl mx-auto">
        {/* IMAGE PLACEHOLDER: Systems Overview Hero | 16:9 | systems/hero-integrated.jpg */}

        <h1 className="text-5xl font-semibold mb-6">Integrated Systems</h1>
        <p className="text-white/70 text-lg max-w-3xl mb-16">
          End-to-end operational ecosystems combining best-in-class hardware, redundant connectivity, and unified software platforms. Designed for mission-critical reliability.
        </p>

        {/* --- System Architecture --- */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold text-white mb-8">System Architecture</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-slate-300">
              <p>
                Signal One systems are built on a three-tier architecture designed to ensure data integrity and communications continuity:
              </p>
              <ul className="list-disc ml-5 space-y-4">
                <li>
                  <strong className="text-white">Edge Layer:</strong> Industrial sensors and communications devices (LoRaWAN / PoC) collect data and voice inputs at the operational fringe.
                </li>
                <li>
                  <strong className="text-white">Transport Layer:</strong> Redundant connectivity via multi-network Cellular and LoRaWAN gateways ensures inputs reach the core, even in challenging RF environments.
                </li>
                <li>
                  <strong className="text-white">Application Layer:</strong> Centralised dispatch and visualization platforms process inputs into actionable intelligence for command centres.
                </li>
              </ul>
            </div>
            <div className="bg-white/5 rounded-2xl h-80 border border-white/10 flex items-center justify-center">
              {/* IMAGE PLACEHOLDER: Diagram of System Architecture | 4:3 | systems/architecture-diagram.png */}
              <span className="text-white/20 italic">System Architecture Diagram</span>
            </div>
          </div>
        </section>

        {/* --- Key Capabilities --- */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold text-white mb-8">Operational Capabilities</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">Unified Dispatch</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Manage voice, video, and data across your entire workforce from a single pane of glass. Push-to-Talk bridging allows disparate radio networks to communicate seamlessly.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">Real-Time Telemetry</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Ingest millions of data points from environmental sensors and asset trackers. Set threshold alerts to trigger automated workflows or dispatch notifications.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">Fleet Visibility</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Track vehicles and personnel in real-time with high-precision GPS. Replay historical routes and analyse efficiency metrics to optimise logistics.
              </p>
            </div>
          </div>
        </section>

        {/* --- Integration & API --- */}
        <section>
          <h2 className="text-3xl font-semibold text-white mb-8">Integration & Interoperability</h2>
          <p className="text-slate-300 max-w-4xl text-lg mb-8">
            We believe in open standards. Our systems expose secure RESTful APIs and MQTT endpoints, allowing simple integration with existing ERP, SCADA, and building management systems.
          </p>
          {/* IMAGE PLACEHOLDER: Integration Dashboard View | 16:9 | systems/api-dashboard.jpg */}
        </section>

      </div>
    </main>
  );
}
