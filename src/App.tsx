import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Metrics from "./components/Metrics";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";

export default function App() {
  return (
    <div className="bg-slate-50 text-slate-900">
      <CustomCursor />
      <Navbar />
      <Hero />
      <Metrics />
      <Experience />
      <Projects />
      <Skills />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}