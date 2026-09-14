import projects from "../Data/projects";

function Portfolio() {
  return (
    <section id="portfolio" className="bg-slate-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        <div className="max-w-3xl">
          <p className="mb-5 text-sm font-bold tracking-[0.2em] text-orange-500">
            PROJECT MF COMM
          </p>

          <h2 className="text-4xl font-black leading-tight text-slate-950 sm:text-5xl">
            Project yang telah kami kerjakan.
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600">
            Dokumentasi pekerjaan MF COMM dalam bidang fiber optic,
            CCTV, jaringan, LAN, server, telekomunikasi dan IT di
            Kalimantan Timur.
          </p>
        </div>

        <div className="mt-14 space-y-8">

          {projects.map((project, index) => (
            <article
              key={project.id}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
            >

              <div className="grid lg:grid-cols-2">

                {/* FOTO */}
                <div
                  className={`grid min-h-[360px] gap-1 bg-slate-200 ${
                    project.images.length === 1
                      ? "grid-cols-1"
                      : "grid-cols-2"
                  }`}
                >

                  {project.images.map((image, imageIndex) => (
                    <div
                      key={image}
                      className="relative min-h-[180px] overflow-hidden"
                    >
                      <img
                        src={image}
                        alt={`${project.title} - foto ${imageIndex + 1}`}
                        loading="lazy"
                        className="h-full w-full object-cover transition duration-500 hover:scale-105"
                      />
                    </div>
                  ))}

                </div>

                {/* INFORMASI */}
                <div className="flex flex-col justify-center p-8 lg:p-12">

                  <div className="flex flex-wrap items-center gap-3">

                    <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-bold text-orange-600">
                      {project.category}
                    </span>

                    <span className="text-xs font-medium text-slate-400">
                      PROJECT {String(index + 1).padStart(2, "0")}
                    </span>

                  </div>

                  <h3 className="mt-5 text-3xl font-black leading-tight text-slate-950">
                    {project.title}
                  </h3>

                  {project.client && (
                    <p className="mt-3 font-bold text-blue-700">
                      {project.client}
                    </p>
                  )}

                  <p className="mt-1 text-sm font-medium text-slate-400">
                    {project.location}
                  </p>

                  <p className="mt-5 leading-7 text-slate-500">
                    {project.description}
                  </p>

                  <div className="mt-7 border-t border-slate-100 pt-6">

                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                      Scope of Work
                    </p>

                    <p className="mt-2 text-sm font-semibold text-slate-700">
                      {project.category}
                    </p>

                  </div>

                </div>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Portfolio;