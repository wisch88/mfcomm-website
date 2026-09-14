function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4">
        <nav className="flex h-[72px] items-center justify-between rounded-2xl border border-white/10 bg-slate-950/90 px-4 sm:px-6 shadow-2xl backdrop-blur-xl">

          {/* MFComm Logo */}
          <a href="#" className="flex items-center shrink-0">
            <img
              src="/images/mfcomm-logo.png"
              alt="MFComm - PT. Multin Frastruktur Communication"
              className="h-[56px] sm:h-[60px] w-auto object-contain"
            />
          </a>

          {/* Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <a
              href="#"
              className="text-sm font-medium text-white hover:text-cyan-300 transition-colors"
            >
              Home
            </a>

            <a
              href="#about"
              className="text-sm font-medium text-slate-300 hover:text-cyan-300 transition-colors"
            >
              About
            </a>

            <a
              href="#services"
              className="text-sm font-medium text-slate-300 hover:text-cyan-300 transition-colors"
            >
              Services
            </a>

            <a
              href="#portfolio"
              className="text-sm font-medium text-slate-300 hover:text-cyan-300 transition-colors"
            >
              Projects
            </a>

            <a
              href="#coverage"
              className="text-sm font-medium text-slate-300 hover:text-cyan-300 transition-colors"
            >
              Coverage
            </a>
          </div>

          {/* CTA */}
          <a
            href="https://wa.me/6285348049488?text=Halo%20MFComm,%20saya%20ingin%20berkonsultasi%20mengenai%20kebutuhan%20IT%20Infrastructure."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition-all duration-300 hover:bg-cyan-300 hover:-translate-y-0.5"
          >
            Konsultasi Proyek
            <span>↗</span>
          </a>

          {/* Mobile */}
          <a
            href="#contact"
            className="sm:hidden inline-flex items-center rounded-xl border border-white/15 px-4 py-2.5 text-sm font-medium text-white"
          >
            Contact
          </a>

        </nav>
      </div>
    </header>
  );
}

export default Navbar;