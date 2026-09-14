function CompanyCredentials() {
  const credentials = [
    {
      number: "01",
      label: "LEGAL ENTITY",
      title: "PT. Multin Frastruktur Communication",
      description:
        "Terdaftar sebagai Perseroan Perorangan dan tercatat dalam administrasi Ditjen AHU.",
    },
    {
      number: "02",
      label: "BUSINESS REGISTRATION",
      title: "NIB Terdaftar",
      description:
        "MFComm memiliki Nomor Induk Berusaha sebagai dasar legalitas kegiatan usaha.",
    },
    {
      number: "03",
      label: "REGISTERED BUSINESS FIELDS",
      title: "IT · Telekomunikasi · Elektronika",
      description:
        "Kegiatan usaha mencakup teknologi informasi, telekomunikasi, serta pemasangan sistem elektronika.",
      codes: [
        "62900",
        "61201",
        "43213",
      ],
    },
    {
      number: "04",
      label: "OPERATING SINCE",
      title: "2015",
      description:
        "Kegiatan usaha MFComm telah tercatat sejak 2015, dengan pengalaman teknis pendiri sejak 2009.",
    },
  ];

  return (
    <section id="credentials" className="mf-section mf-section-light">
      <div className="mf-container">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          {/* Intro */}
          <div>
            <p className="mf-label text-slate-500">
              COMPANY CREDENTIALS
            </p>

            <h2 className="mf-display mt-5 max-w-xl text-4xl font-extrabold leading-tight text-slate-950 sm:text-5xl">
              Perusahaan yang siap bekerja sama.
            </h2>

            <p className="mt-6 max-w-lg text-base leading-8 text-slate-600">
              MFComm membangun layanan berdasarkan pengalaman teknis di
              lapangan dan menjalankan kegiatan usaha sesuai bidang yang
              terdaftar.
            </p>

            <div className="mt-8 h-px w-20 bg-cyan-400" />
          </div>

          {/* Credentials */}
          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {credentials.map((item) => (
              <div
                key={item.number}
                className="grid gap-5 py-7 sm:grid-cols-[70px_1fr]"
              >
                <div className="mf-display text-sm font-bold text-cyan-600">
                  {item.number}
                </div>

                <div>
                  <p className="mf-label text-slate-400">
                    {item.label}
                  </p>

                  <h3 className="mf-display mt-2 text-xl font-bold text-slate-950">
                    {item.title}
                  </h3>

                  <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>

                  {item.codes && (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.codes.map((code) => (
                        <span
                          key={code}
                          className="border border-slate-200 bg-white px-3 py-2 text-xs font-bold tracking-wider text-slate-700"
                        >
                          KBLI {code}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 border border-slate-200 bg-white px-6 py-5 sm:px-8">
          <p className="text-sm leading-7 text-slate-600">
            Dokumen legalitas perusahaan dapat disediakan untuk kebutuhan
            administrasi, pengadaan, kerja sama, atau proses verifikasi
            perusahaan sesuai kebutuhan.
          </p>
        </div>
      </div>
    </section>
  );
}

export default CompanyCredentials;