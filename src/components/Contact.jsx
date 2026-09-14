function Contact() {
  const whatsappNumber = "6285348049488";

  const whatsappMessage = encodeURIComponent(
    "Halo MFComm, saya ingin mendapatkan informasi mengenai layanan MFComm."
  );

  const googleMapsUrl =
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(
      "Jl. Untung Suropati, Al Mujahidin 4 Blok A No.54, Samarinda, Kalimantan Timur"
    );

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-12">
          <p className="text-blue-600 font-semibold tracking-wide uppercase text-sm">
            Contact Us
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
            Hubungi MFComm
          </h2>

          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            Konsultasikan kebutuhan infrastruktur IT, jaringan, fiber optic,
            CCTV, PABX, dan solusi komunikasi untuk bisnis Anda.
          </p>
        </div>

        {/* CONTACT CARDS */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">

          {/* WHATSAPP */}
          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl transition duration-300 group"
          >
            <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center mb-5">
              <span className="text-2xl">💬</span>
            </div>

            <h3 className="text-lg font-bold text-slate-900 group-hover:text-green-600 transition">
              WhatsApp
            </h3>

            <p className="text-slate-600 mt-2">
              0853-4804-9488
            </p>

            <p className="text-sm text-green-600 font-medium mt-4">
              Chat Sekarang →
            </p>
          </a>

          {/* EMAIL */}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=info@mfcomm.co.id"
            target="_blank"
            suppressHydrationWarningrel="noopener noreferrer"
            className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl transition duration-300 group"
          >
            <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-5">
              <span className="text-2xl">✉️</span>
            </div>

            <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition">
              Email
            </h3>

            <p className="text-slate-600 mt-2 break-all">
              info@mfcomm.co.id
            </p>

            <p className="text-sm text-blue-600 font-medium mt-4">
              Kirim Email →
            </p>
          </a>

          {/* GOOGLE MAPS */}
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl transition duration-300 group"
          >
            <div className="w-14 h-14 rounded-xl bg-red-100 flex items-center justify-center mb-5">
              <span className="text-2xl">📍</span>
            </div>

            <h3 className="text-lg font-bold text-slate-900 group-hover:text-red-600 transition">
              Kantor MFComm
            </h3>

            <p className="text-slate-600 mt-2">
              Jl. Untung Suropati, Al Mujahidin 4 Blok A No.54
            </p>

            <p className="text-sm text-red-600 font-medium mt-4">
              Buka Google Maps →
            </p>
          </a>

        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-slate-500 text-sm">
            PT. Multin Frastruktur Communication
          </p>

          <p className="text-slate-600 mt-1">
            Solusi Infrastruktur Teknologi & Komunikasi
          </p>
        </div>

      </div>
    </section>
  );
}

export default Contact;