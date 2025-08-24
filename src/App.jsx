import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Work from "./components/Work.jsx";
import About from "./components/About.jsx";

export default function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-ocean-950 to-kelp-950 text-neutral-100">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Work />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
