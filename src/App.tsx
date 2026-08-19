import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Metrics from "./components/Metrics";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Leadership from "./components/Leadership";
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
      <Skills />
      <Certifications />
      <Projects />
      <Experience />
      <Leadership />
      <Contact />
      <Footer />
    </div>
  );
}