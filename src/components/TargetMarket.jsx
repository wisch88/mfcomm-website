function TargetMarket() {
  const locations = [
    {
      title: "RUMAH / HUNIAN",
      description:
        "Solusi jaringan, WiFi, CCTV dan kebutuhan teknologi untuk rumah dan hunian.",
      image: "/images/home/rumah.jpg",
    },
    {
      title: "LAHAN SAWIT / PERKEBUNAN",
      description:
        "Infrastruktur jaringan dan komunikasi untuk area perkebunan dan lahan yang luas.",
      image: "/images/home/lahan-sawit.jpg",
    },
    {
      title: "GUDANG / INDUSTRI",
      description:
        "Network, CCTV, wireless dan sistem komunikasi untuk gudang dan area industri.",
      image: "/images/home/gudang.jpg",
    },
    {
      title: "KANTOR / BISNIS",
      description:
        "Infrastruktur IT dan jaringan yang mendukung aktivitas kantor dan bisnis.",
      image: "/images/home/kantor.jpg",
    },
  ];

  return (
    <section className="bg-slate-950 py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">

          <p className="text-orange-400 font-semibold tracking-widest text-sm mb-3">
            SOLUSI UNTUK BERBAGAI KEBUTUHAN
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Teknologi untuk Setiap Ruang
          </h2>

          <p className="mt-5 text-gray-400 text-lg">
            Dari rumah hingga area perkebunan, gudang, dan kantor.
            MFComm menyediakan solusi infrastruktur jaringan sesuai
            kebutuhan Anda di seluruh Kalimantan Timur.
          </p>

        </div>


        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {locations.map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-2xl
              bg-slate-900 border border-slate-800
              hover:border-cyan-500/50
              transition-all duration-500"
            >

              {/* Image */}
              <div className="relative h-72 overflow-hidden">

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover
                  transition-transform duration-700
                  group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t
                from-slate-950 via-slate-950/30 to-transparent">
                </div>

              </div>


              {/* Content */}
              <div className="p-6">

                <h3 className="text-white text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>

                <div className="mt-5 text-cyan-400 text-sm font-semibold">
                  Lihat solusi →
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default TargetMarket;