function Coverage() {
  const locations = [
    "Samarinda",
    "Balikpapan",
    "Bontang",
    "Berau",
    "Kutai Kartanegara",
    "Kutai Timur",
  ];

  return (
    <section
      id="coverage"
      className="relative overflow-hidden bg-slate-950 py-24 text-white sm:py-28 lg:py-32"
    >
      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Cyan glow */}
      <div className="pointer-events-none absolute -right-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="max-w-3xl">

          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-cyan-400" />

            <span className="text-xs font-bold tracking-[0.25em] text-cyan-400">
              SERVICE COVERAGE
            </span>
          </div>

          <h2 className="mf-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Infrastruktur teknologi
            <span className="block text-slate-400">
              di seluruh Kalimantan Timur.
            </span>
          </h2>

          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Berbasis di Samarinda, MFComm melayani kebutuhan instalasi,
            pengembangan dan pemeliharaan infrastruktur teknologi untuk
            pelanggan di berbagai wilayah Kalimantan Timur.
          </p>

        </div>


        {/* Coverage panel */}
        <div className="mt-16 grid gap-0 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] lg:grid-cols-[0.85fr_1.15fr]">

          {/* Main coverage */}
          <div className="border-b border-white/10 p-8 sm:p-10 lg:border-b-0 lg:border-r lg:p-12">

            <div className="text-[11px] font-bold tracking-[0.2em] text-slate-500">
              PRIMARY COVERAGE
            </div>

            <div className="mt-5 flex items-end gap-4">
              <span className="mf-display text-5xl font-semibold tracking-tight text-white sm:text-6xl">
                KALTIM
              </span>
            </div>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
              Layanan MFComm tersedia untuk kebutuhan proyek dan pekerjaan
              infrastruktur teknologi di seluruh Kalimantan Timur.
            </p>

            <div className="mt-8 h-px w-full bg-white/10" />

            <div className="mt-6 text-sm text-slate-400">
              Basis operasional
            </div>

            <div className="mt-1 text-lg font-medium text-white">
              Samarinda
            </div>

          </div>


          {/* Locations */}
          <div className="p-8 sm:p-10 lg:p-12">

            <div className="text-[11px] font-bold tracking-[0.2em] text-slate-500">
              SELECTED LOCATIONS
            </div>

            <div className="mt-7 grid sm:grid-cols-2">

              {locations.map((location, index) => (
                <div
                  key={location}
                  className={`flex items-center gap-4 border-b border-white/10 py-5 ${
                    index % 2 === 0 ? "sm:mr-6" : "sm:ml-6"
                  }`}
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-cyan-400/30 text-xs text-cyan-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-sm font-medium text-slate-200">
                    {location}
                  </span>
                </div>
              ))}

            </div>

            <p className="mt-8 text-sm leading-7 text-slate-500">
              Wilayah kerja tidak terbatas pada daftar lokasi di atas.
              Hubungi tim MFComm untuk kebutuhan proyek di wilayah Kalimantan
              Timur lainnya.
            </p>

          </div>

        </div>


        {/* Bottom statement */}
        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">

          <p className="max-w-2xl text-sm leading-7 text-slate-400">
            Dari pekerjaan instalasi baru hingga maintenance dan
            troubleshooting, tim MFComm siap mendukung kebutuhan infrastruktur
            teknologi di lapangan.
          </p>

          <a
            href="#contact"
            className="inline-flex w-fit shrink-0 items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-cyan-400"
          >
            Konsultasikan kebutuhan
            <span className="text-cyan-400">↗</span>
          </a>

        </div>

      </div>
    </section>
  );
}

export default Coverage;