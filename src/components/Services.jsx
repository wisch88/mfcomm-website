function Services() {
  const services = [
    {
      number: "01",
      category: "NETWORK & LAN",
      title: "Jaringan yang rapi dimulai dari infrastruktur yang tepat.",
      problem:
        "Jaringan kantor mulai tidak stabil, penambahan perangkat semakin banyak, atau instalasi kabel yang sudah ada sulit ditelusuri ketika terjadi gangguan.",
      solution:
        "MFComm menangani pembangunan dan penataan jaringan LAN/WLAN, mulai dari penarikan kabel, network rack, access point, hingga perangkat jaringan.",
      capabilities: [
        "LAN & WLAN",
        "Network Rack",
        "WiFi & Access Point",
        "Router & Firewall",
        "Managed Switch",
        "Troubleshooting",
      ],
    },

    {
      number: "02",
      category: "FIBER OPTIC",
      title: "Menghubungkan area yang membutuhkan backbone lebih jauh.",
      problem:
        "Koneksi antar-gedung atau antar-area membutuhkan media yang mampu menjangkau jarak lebih jauh, sementara gangguan pada jalur fiber sering sulit diketahui tanpa pengukuran yang tepat.",
      solution:
        "MFComm menangani instalasi dan pengujian fiber optic, termasuk penarikan kabel, fusion splicing, OTDR testing, hingga implementasi FTTH, FTTO dan perangkat OLT/ONT.",
      capabilities: [
        "Penarikan Fiber Optic",
        "Fusion Splicing",
        "OTDR Testing",
        "FTTH & FTTO",
        "OLT & ONT",
        "Troubleshooting FO",
      ],
    },

    {
      number: "03",
      category: "CCTV & SURVEILLANCE",
      title: "Bukan sekadar memasang kamera. Sistemnya harus bekerja.",
      problem:
        "Area penting belum terpantau, rekaman sulit ditemukan ketika dibutuhkan, kamera sering offline, atau sistem CCTV lama membutuhkan pengembangan dan maintenance.",
      solution:
        "MFComm mengerjakan sistem CCTV dari sisi kamera, jaringan, recording hingga monitoring, baik untuk instalasi baru maupun pengembangan sistem yang sudah berjalan.",
      capabilities: [
        "IP Camera",
        "Analog Camera",
        "NVR & DVR",
        "CCTV Networking",
        "Maintenance",
        "Remote Monitoring",
      ],
    },

    {
      number: "04",
      category: "IT INFRASTRUCTURE",
      title: "Infrastruktur IT yang siap mengikuti perkembangan bisnis.",
      problem:
        "Server, rack dan perangkat jaringan semakin bertambah tetapi penataan tidak lagi ideal. Ketika terjadi gangguan, proses pemeriksaan menjadi lebih sulit dan memakan waktu.",
      solution:
        "MFComm membantu membangun, menata dan memelihara infrastruktur IT, termasuk server, rack, sistem operasi, backup dan perangkat jaringan.",
      capabilities: [
        "Server",
        "Server Rack",
        "Windows & Linux",
        "Backup",
        "MikroTik",
        "IT Maintenance",
      ],
    },

    {
      number: "05",
      category: "COMMUNICATION",
      title: "Komunikasi internal yang mengikuti kebutuhan organisasi.",
      problem:
        "Jumlah extension bertambah, sistem telepon lama membutuhkan maintenance, atau perusahaan membutuhkan komunikasi berbasis jaringan.",
      solution:
        "MFComm menangani instalasi dan pengembangan PABX, IP Phone serta sistem komunikasi berbasis VoIP sesuai kebutuhan infrastruktur yang tersedia.",
      capabilities: [
        "PABX",
        "IP Phone",
        "VoIP",
        "Extension System",
        "Installation",
        "Maintenance",
      ],
    },

    {
      number: "06",
      category: "MAINTENANCE & SUPPORT",
      title: "Infrastruktur yang sudah berjalan tetap membutuhkan perhatian.",
      problem:
        "Gangguan dapat muncul pada jaringan, CCTV maupun perangkat IT. Tidak semua perusahaan memiliki teknisi internal untuk menangani setiap kebutuhan teknis.",
      solution:
        "MFComm menyediakan maintenance berkala, troubleshooting, on-call support, perbaikan dan instalasi baru untuk membantu menjaga infrastruktur tetap berjalan.",
      capabilities: [
        "Maintenance Contract",
        "On-Call Support",
        "Troubleshooting",
        "Repair",
        "Upgrade",
        "New Installation",
      ],
    },
  ];

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">

          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-cyan-500" />

              <span className="text-xs font-bold tracking-[0.25em] text-cyan-600">
                WHAT WE DO
              </span>
            </div>

            <h2 className="mf-display max-w-xl text-4xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-5xl">
              Infrastruktur teknologi
              <span className="block text-slate-400">
                yang kami kerjakan.
              </span>
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Dari instalasi baru hingga pengembangan dan maintenance,
            MFComm menangani kebutuhan infrastruktur teknologi untuk
            lingkungan bisnis dan operasional.
          </p>

        </div>


        {/* SERVICES */}
        <div className="mt-20 border-t border-slate-200">

          {services.map((service) => (
            <article
              key={service.number}
              className="group border-b border-slate-200 py-10 sm:py-12 lg:py-14"
            >
              <div className="grid gap-8 lg:grid-cols-[90px_1fr_1.1fr] lg:gap-10">

                {/* NUMBER */}
                <div>
                  <span className="mf-display text-sm font-semibold tracking-[0.15em] text-cyan-600">
                    {service.number}
                  </span>
                </div>


                {/* TITLE */}
                <div>

                  <div className="text-[11px] font-bold tracking-[0.2em] text-slate-400">
                    {service.category}
                  </div>

                  <h3 className="mf-display mt-4 max-w-lg text-2xl font-semibold leading-tight text-slate-950 sm:text-3xl">
                    {service.title}
                  </h3>

                </div>


                {/* CONTENT */}
                <div>

                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                      Yang sering dihadapi
                    </div>

                    <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
                      {service.problem}
                    </p>
                  </div>


                  <div className="mt-7">
                    <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-600">
                      Yang kami tangani
                    </div>

                    <p className="mt-3 max-w-xl text-sm leading-7 text-slate-700 sm:text-base">
                      {service.solution}
                    </p>
                  </div>


                  {/* CAPABILITIES */}
                  <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 border-t border-slate-100 pt-5">

                    {service.capabilities.map((item) => (
                      <span
                        key={item}
                        className="text-xs font-medium text-slate-500"
                      >
                        {item}
                      </span>
                    ))}

                  </div>

                </div>

              </div>
            </article>
          ))}

        </div>


        {/* CLOSING */}
        <div className="mt-14 grid gap-6 border-t border-slate-200 pt-8 md:grid-cols-[1fr_auto] md:items-end">

          <p className="max-w-3xl text-base leading-8 text-slate-600">
            Kebutuhan setiap lokasi berbeda. Kami menyesuaikan pekerjaan
            berdasarkan kondisi lapangan, infrastruktur yang sudah tersedia,
            dan kebutuhan pengembangan ke depan.
          </p>

          <a
            href="#contact"
            className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-slate-950 transition-colors hover:text-cyan-600"
          >
            Diskusikan kebutuhan Anda
            <span className="text-cyan-500">↗</span>
          </a>

        </div>

      </div>
    </section>
  );
}

export default Services;