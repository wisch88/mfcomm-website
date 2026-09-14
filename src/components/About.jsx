function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-32"
    >
      {/* Subtle background detail */}
      <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-cyan-50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* INTRO / TRUST */}
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">

          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-cyan-500" />

              <span className="text-xs font-bold tracking-[0.25em] text-cyan-600">
                ABOUT MFCOMM
              </span>
            </div>

            <h2 className="mf-display max-w-xl text-4xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-5xl">
              Dibangun dari pengalaman
              <span className="block text-slate-400">
                nyata di lapangan.
              </span>
            </h2>
          </div>

          <div className="max-w-2xl lg:pb-1">
            <p className="text-base leading-8 text-slate-600 sm:text-lg">
              MFComm berkembang dari pengalaman teknis di berbagai lingkungan
              kerja — mulai dari server dan data, electrical, IT infrastructure,
              hingga jaringan, CCTV dan fiber optic.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
              Berbasis di Samarinda, kami melayani kebutuhan infrastruktur
              teknologi untuk berbagai sektor di seluruh Kalimantan Timur.
            </p>
          </div>

        </div>


        {/* TRUST NUMBERS */}
        <div className="mt-16 border-y border-slate-200">

          <div className="grid divide-y divide-slate-200 sm:grid-cols-3 sm:divide-x sm:divide-y-0">

            <div className="px-1 py-8 sm:px-8 lg:px-10">
              <div className="mf-display text-4xl font-semibold text-slate-950">
                2015
              </div>

              <div className="mt-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                Established
              </div>
            </div>


            <div className="px-1 py-8 sm:px-8 lg:px-10">
              <div className="mf-display text-4xl font-semibold text-slate-950">
                100+
              </div>

              <div className="mt-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                CCTV & Network Projects
              </div>
            </div>


            <div className="px-1 py-8 sm:px-8 lg:px-10">
              <div className="mf-display text-4xl font-semibold text-slate-950">
                KALTIM
              </div>

              <div className="mt-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                Service Coverage
              </div>
            </div>

          </div>

        </div>


        {/* COMPANY STORY */}
        <div className="mt-24 grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">

          {/* STORY */}
          <div>

            <div className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
              Our Story
            </div>

            <h3 className="mf-display mt-4 text-3xl font-semibold leading-tight text-slate-950 sm:text-4xl">
              Pengalaman teknis yang
              <span className="block text-slate-400">
                membentuk MFComm.
              </span>
            </h3>

            <div className="mt-7 space-y-5 text-base leading-8 text-slate-600">

              <p>
                Perjalanan pendiri MFComm dimulai sebagai teknisi server data
                di industri entertainment. Dari sana, pengalaman berkembang
                ke bidang electrical dan alarm alat berat melalui salah satu
                subkontraktor Trakindo.
              </p>

              <p>
                Perjalanan berikutnya membawa pengalaman tersebut ke bidang
                IT Infrastructure di salah satu pusat perbelanjaan terbesar
                di Samarinda. Di lingkungan tersebut, kemampuan dalam CCTV,
                jaringan internet, fiber optic, MikroTik dan OLT semakin
                diperdalam melalui kebutuhan operasional gedung, tenant dan
                management.
              </p>

              <p>
                Pengalaman lapangan tersebut kemudian berkembang menjadi
                MFComm — dengan fokus pada penyediaan dan pengerjaan
                infrastruktur teknologi untuk kebutuhan bisnis dan operasional.
              </p>

            </div>

          </div>


          {/* TIMELINE */}
          <div className="relative">

            {/* Vertical line */}
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-slate-200" />

            <div className="space-y-10">

              {/* 01 */}
              <div className="relative pl-10">

                <span className="absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-4 border-white bg-cyan-400 ring-1 ring-cyan-200" />

                <div className="text-xs font-bold tracking-[0.2em] text-cyan-600">
                  EXPERIENCE 01
                </div>

                <h4 className="mf-display mt-2 text-xl font-semibold text-slate-950">
                  Server & Data
                </h4>

                <p className="mt-2 max-w-lg text-sm leading-7 text-slate-500">
                  Fondasi pengalaman teknis dimulai dari pengelolaan
                  server dan data.
                </p>

              </div>


              {/* 02 */}
              <div className="relative pl-10">

                <span className="absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-4 border-white bg-cyan-400 ring-1 ring-cyan-200" />

                <div className="text-xs font-bold tracking-[0.2em] text-cyan-600">
                  EXPERIENCE 02
                </div>

                <h4 className="mf-display mt-2 text-xl font-semibold text-slate-950">
                  Electrical & Heavy Equipment
                </h4>

                <p className="mt-2 max-w-lg text-sm leading-7 text-slate-500">
                  Pengalaman electrical dan alarm alat berat memperluas
                  kemampuan teknis di lingkungan kerja lapangan.
                </p>

              </div>


              {/* 03 */}
              <div className="relative pl-10">

                <span className="absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-4 border-white bg-cyan-400 ring-1 ring-cyan-200" />

                <div className="text-xs font-bold tracking-[0.2em] text-cyan-600">
                  EXPERIENCE 03
                </div>

                <h4 className="mf-display mt-2 text-xl font-semibold text-slate-950">
                  IT Infrastructure
                </h4>

                <p className="mt-2 max-w-lg text-sm leading-7 text-slate-500">
                  Pengalaman di lingkungan mall memperdalam pengelolaan
                  infrastruktur IT, jaringan dan kebutuhan tenant.
                </p>

              </div>


              {/* 04 */}
              <div className="relative pl-10">

                <span className="absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-4 border-white bg-cyan-400 ring-1 ring-cyan-200" />

                <div className="text-xs font-bold tracking-[0.2em] text-cyan-600">
                  EXPERIENCE 04
                </div>

                <h4 className="mf-display mt-2 text-xl font-semibold text-slate-950">
                  Network · CCTV · Fiber
                </h4>

                <p className="mt-2 max-w-lg text-sm leading-7 text-slate-500">
                  Kemampuan berkembang mencakup jaringan internet, CCTV,
                  fiber optic, MikroTik dan OLT.
                </p>

              </div>


              {/* 05 */}
              <div className="relative pl-10">

                <span className="absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-4 border-white bg-slate-950 ring-1 ring-slate-300" />

                <div className="text-xs font-bold tracking-[0.2em] text-slate-500">
                  TODAY
                </div>

                <h4 className="mf-display mt-2 text-xl font-semibold text-slate-950">
                  MFComm
                </h4>

                <p className="mt-2 max-w-lg text-sm leading-7 text-slate-500">
                  Menghadirkan solusi IT infrastructure dan communication
                  untuk kebutuhan pelanggan di seluruh Kalimantan Timur.
                </p>

              </div>

            </div>

          </div>

        </div>


        {/* CLOSING STATEMENT */}
        <div className="mt-24 border-t border-slate-200 pt-10">

          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">

            <p className="mf-display max-w-3xl text-2xl font-medium leading-relaxed text-slate-800 sm:text-3xl">
              “Kami memahami infrastruktur bukan hanya dari sisi perangkat,
              tetapi dari bagaimana semuanya bekerja di lapangan.”
            </p>

            <div className="text-sm font-medium text-slate-400">
              MFComm · Samarinda
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;