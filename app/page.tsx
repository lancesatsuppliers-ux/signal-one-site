"use client";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#151A21] text-slate-100">

      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="mx-auto max-w-7xl mt-6 px-10 py-4 rounded-2xl bg-white/15 backdrop-blur-xl border border-white/20 flex items-center justify-between">
          <div className="text-2xl font-semibold tracking-wide">
            SIGNAL <span className="text-[#0EA5E9]">ONE</span>
          </div>
          <nav className="hidden xl:flex gap-10 text-sm font-medium">
            <a className="hover:text-[#0EA5E9]" href="#">Home</a>
            <a className="hover:text-[#0EA5E9]" href="#">Systems</a>
            <a className="hover:text-[#0EA5E9]" href="#">Solutions</a>
            <a className="hover:text-[#0EA5E9]" href="#">Devices</a>
            <a className="hover:text-[#0EA5E9]" href="#">Contact</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-40">
        <div className="max-w-[90rem] w-full rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 p-20">
          <h1 className="text-5xl md:text-6xl font-semibold mb-8">
            Mission-Critical Communications
            <br />
            <span className="text-[#0EA5E9]">& IoT Systems</span>
          </h1>
          <p className="text-lg text-white/80 max-w-2xl">
            Secure Push-to-Talk, IoT connectivity, and operational control
            platforms engineered for reliability.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            "Push-to-Talk Platforms",
            "IoT & Smart Infrastructure",
            "Secure Connectivity",
          ].map((item) => (
            <div
              key={item}
              className="rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 p-10"
            >
              <h3 className="text-xl font-semibold mb-4">{item}</h3>
              <p className="text-white/70 text-sm">
                Enterprise-grade systems designed for uptime and control.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0F131A] px-6 py-24 text-center text-white/40 text-sm">
        © 2026 Signal One Integrated Systems. All rights reserved.
      </footer>

    </main>
  );
}
