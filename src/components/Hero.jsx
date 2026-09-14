function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-950 text-white">

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="absolute -left-40 bottom-0 h-[450px] w-[450px] rounded-full bg-blue-600/10 blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        <div className="grid min-h-screen items-center gap-12 pb-24 pt-32 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">

          {/* LEFT */}
          <div className="max-w-2xl">

            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-10 bg-cyan-400" />

              <span className="text-xs font-semibold tracking-[0.28em] text-cyan-300">
                IT · NETWORK · COMMUNICATION
              </span>
            </div>

            <h1 className="mf-display max-w-[680px] text-[3.25rem] font-semibold leading-[1.08] tracking-tight sm:text-[3.6rem] lg:text-[3.9rem] xl:text-[4.15rem]">
              Infrastruktur teknologi
              <span className="block text-slate-400">
                yang bekerja untuk
              </span>
              bisnis Anda.
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              MFComm membantu membangun, mengembangkan, dan menjaga infrastruktur teknologi untuk kebutuhan bisnis dan operasional — dari jaringan, fiber optic, CCTV, hingga sistem komunikasi.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

              <a
                href="https://wa.me/6285348049488?text=Halo%20MFComm,%20saya%20ingin%20berkonsultasi%20mengenai%20kebutuhan%20IT%20Infrastructure."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-cyan-400 px-6 py-3.5 text-sm font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-300"
              >
                Konsultasi Proyek
                <span className="text-lg">↗</span>
              </a>

              <a
                href="#portfolio"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:border-white/30 hover:bg-white/5"
              >
                Lihat Project
              </a>

            </div>

            {/* Information */}
            <div className="mt-12 grid grid-cols-1 gap-5 border-t border-white/10 pt-6 sm:grid-cols-3 sm:gap-0">

              <div>
                <div className="mf-label text-slate-500">
                  Established
                </div>

                <div className="mt-2 text-sm font-medium text-slate-200">
                  2015
                </div>
              </div>

              <div className="border-white/10 sm:border-l sm:pl-6">
                <div className="mf-label text-slate-500">
                  Experience
                </div>

                <div className="mt-2 text-sm font-medium text-slate-200">
                  100+ Projects
                </div>
              </div>

              <div className="border-white/10 sm:border-l sm:pl-6">
                <div className="mf-label text-slate-500">
                  Coverage
                </div>

                <div className="mt-2 text-sm font-medium text-slate-200">
                  Kalimantan Timur
                </div>
              </div>

            </div>

          </div>

          {/* RIGHT — REAL PROJECT PHOTO */}
          <div className="relative">

            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-slate-900 shadow-2xl shadow-black/40">

              <div className="aspect-[4/5] sm:aspect-[5/6] lg:aspect-[4/5]">

                <img
                  src="/images/projects/weatherford-03.jpg"
                  alt="MFComm field engineering project at Weatherford"
                  className="h-full w-full object-cover object-[58%_center]"
                />

              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-slate-950/5" />

              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">

                <div className="mb-3 flex items-center gap-2">

                  <span className="h-2 w-2 rounded-full bg-cyan-400" />

                  <span className="text-[11px] font-semibold tracking-[0.22em] text-cyan-300">
                    FIELD PROJECT
                  </span>

                </div>

                <div className="mf-display text-xl font-semibold">
                  Weatherford
                </div>

                <div className="mt-1 text-sm text-slate-300">
                  Balikpapan · Network & CCTV
                </div>

              </div>

            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-4 hidden w-52 rounded-2xl border border-white/10 bg-slate-900/95 p-5 shadow-2xl backdrop-blur-xl sm:block lg:-left-10">

              <div className="mf-label text-slate-500">
                MFCOMM
              </div>

              <div className="mt-2 text-sm font-medium leading-6 text-white">
                Infrastructure built from real field experience.
              </div>

              <div className="mt-4 h-px bg-white/10" />

              <div className="mt-3 text-xs text-slate-400">
                Samarinda · Kalimantan Timur
              </div>

            </div>

          </div>

        </div>

      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

    </section>
  );
}

export default Hero;