import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Cctv() {
      useEffect(() => {
    document.title = "Jasa CCTV Samarinda & Kalimantan Timur | MFComm";

    const description =
      "Jasa CCTV Samarinda dan Kalimantan Timur dari MFComm. Melayani instalasi CCTV IP, analog, jaringan CCTV, NVR, maintenance dan solusi keamanan untuk bisnis, kantor, proyek dan area komersial.";

    let metaDescription = document.querySelector(
      'meta[name="description"]'
    );

    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }

    metaDescription.setAttribute("content", description);

    let canonical = document.querySelector(
      'link[rel="canonical"]'
    );

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }

    canonical.setAttribute(
      "href",
      "https://mfcomm.co.id/cctv/"
    );
  }, []);
  return (
    <div className="min-h-screen bg-slate-950 text-slate-900">
      <Navbar />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden bg-slate-950 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(34,211,238,0.18),_transparent_35%)]" />

          <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
            <div className="max-w-4xl">
              <p className="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">
                CCTV & Security Solution
              </p>

              <h1 className="font-[Manrope] text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Jasa CCTV & Instalasi CCTV
                <span className="block text-cyan-400">
                  Samarinda & Kalimantan Timur
                </span>
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                MFComm menyediakan solusi CCTV untuk rumah, kantor, area
                komersial, fasilitas industri, gudang, proyek dan lingkungan
                bisnis dengan perencanaan jaringan serta instalasi yang
                disesuaikan dengan kebutuhan lokasi.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://wa.me/6285348049488"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-cyan-400 px-6 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
                >
                  Konsultasi CCTV
                </a>

                <a
                  href="/#portfolio"
                  className="rounded-full border border-white/20 px-6 py-3 font-bold text-white transition hover:bg-white/10"
                >
                  Lihat Portfolio
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-600">
                  Solusi CCTV Profesional
                </p>

                <h2 className="mt-4 font-[Manrope] text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                  Sistem pengawasan yang dirancang sesuai kebutuhan lokasi
                </h2>

                <p className="mt-6 leading-8 text-slate-600">
                  Sistem CCTV yang baik bukan hanya tentang memasang kamera.
                  Pemilihan titik kamera, jenis perangkat, jaringan, media
                  transmisi, penyimpanan dan akses monitoring harus dirancang
                  agar sistem dapat digunakan secara optimal.
                </p>

                <p className="mt-4 leading-8 text-slate-600">
                  MFComm menangani kebutuhan CCTV sekaligus infrastruktur
                  jaringan pendukungnya sehingga instalasi dapat dirancang
                  secara lebih terintegrasi.
                </p>
              </div>

              <div className="rounded-3xl bg-slate-950 p-8 text-white shadow-xl">
                <h3 className="font-[Manrope] text-2xl font-bold">
                  Layanan CCTV MFComm
                </h3>

                <ul className="mt-6 space-y-4 text-slate-300">
                  <li>• Survey dan perencanaan titik kamera</li>
                  <li>• Instalasi CCTV IP dan analog</li>
                  <li>• Infrastruktur jaringan CCTV</li>
                  <li>• Penarikan kabel dan terminasi</li>
                  <li>• Konfigurasi NVR dan monitoring</li>
                  <li>• Maintenance dan troubleshooting CCTV</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-600">
                CCTV Services
              </p>

              <h2 className="mt-4 font-[Manrope] text-3xl font-extrabold text-slate-900 sm:text-4xl">
                Layanan CCTV untuk berbagai kebutuhan
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "CCTV IP Camera",
                  text: "Instalasi kamera IP dengan infrastruktur jaringan yang dirancang sesuai kebutuhan lokasi.",
                },
                {
                  title: "CCTV Analog",
                  text: "Solusi CCTV analog untuk kebutuhan pengawasan dengan pertimbangan biaya dan kondisi instalasi.",
                },
                {
                  title: "CCTV Perusahaan",
                  text: "Sistem pengawasan untuk kantor, gudang, fasilitas usaha dan area operasional perusahaan.",
                },
                {
                  title: "CCTV Area Komersial",
                  text: "Solusi monitoring untuk pusat perbelanjaan, toko, area parkir dan fasilitas komersial.",
                },
                {
                  title: "CCTV Proyek",
                  text: "Instalasi CCTV untuk mendukung pengawasan area proyek dan lingkungan kerja.",
                },
                {
                  title: "Maintenance CCTV",
                  text: "Pemeriksaan, troubleshooting dan pemeliharaan sistem CCTV agar tetap berfungsi dengan baik.",
                },
              ].map((item) => (
                <article
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <h3 className="font-[Manrope] text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* INFRASTRUCTURE */}
        <section className="bg-slate-950 py-20 text-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
                  Integrated Infrastructure
                </p>

                <h2 className="mt-4 font-[Manrope] text-3xl font-extrabold sm:text-4xl">
                  CCTV terintegrasi dengan network infrastructure
                </h2>

                <p className="mt-6 leading-8 text-slate-300">
                  Untuk proyek dengan banyak kamera, kualitas jaringan menjadi
                  bagian penting dari sistem CCTV. MFComm dapat menangani
                  kebutuhan jaringan LAN, fiber optic, switch, WiFi dan
                  infrastruktur pendukung lainnya.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "IP Camera",
                  "NVR",
                  "LAN & Switching",
                  "Fiber Optic",
                  "Remote Monitoring",
                  "Maintenance",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5"
                  >
                    <p className="font-semibold">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* AREA */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-4xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-600">
                Area Layanan
              </p>

              <h2 className="mt-4 font-[Manrope] text-3xl font-extrabold text-slate-900 sm:text-4xl">
                Melayani proyek CCTV di Kalimantan Timur
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                MFComm berbasis di Samarinda dan melayani kebutuhan CCTV serta
                infrastruktur jaringan di berbagai wilayah Kalimantan Timur,
                termasuk kawasan Ibu Kota Nusantara (IKN).
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "Samarinda",
                  "Balikpapan",
                  "Bontang",
                  "Kutai Kartanegara",
                  "Kutai Timur",
                  "Kutai Barat",
                  "Berau",
                  "Paser",
                  "Penajam Paser Utara",
                  "Mahakam Ulu",
                  "IKN",
                ].map((area) => (
                  <span
                    key={area}
                    className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-cyan-400 py-16">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <h2 className="font-[Manrope] text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Butuh solusi CCTV untuk proyek Anda?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-800">
              Konsultasikan kebutuhan CCTV, jaringan dan infrastruktur
              pendukung proyek Anda bersama tim MFComm.
            </p>

            <a
              href="https://wa.me/6285348049488"
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex rounded-full bg-slate-950 px-7 py-3 font-bold text-white transition hover:bg-slate-800"
            >
              Hubungi MFComm
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Cctv;