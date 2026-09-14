import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import CompanyCredentials from "./components/CompanyCredentials";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Coverage from "./components/Coverage";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-900">

      <Navbar />

      <main>
        <Hero />

        <About />

        <CompanyCredentials />

        <Services />

        <Portfolio />

        <Coverage />

        <Contact />
      </main>

      <Footer />

    </div>
  );
}

export default App;