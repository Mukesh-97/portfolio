import { useState, useEffect } from "react";
import { Menu, X, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "about",          label: "About" },
  { href: "skills",         label: "Skills" },
  { href: "projects",       label: "Projects" },
  { href: "experience",     label: "Experience" },
  { href: "certifications", label: "Certs" },
  { href: "contact",        label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen]         = useState(false);
  const [active, setActive]         = useState("about");
  const [scrolled, setScrolled]     = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });

    // Use scroll position to determine active section more reliably
    const handleActiveSection = () => {
      const offsets = navLinks.map(({ href }) => {
        const el = document.getElementById(href);
        if (!el) return { href, top: Infinity };
        return { href, top: Math.abs(el.getBoundingClientRect().top - 80) };
      });
      const closest = offsets.reduce((a, b) => a.top < b.top ? a : b);
      setActive(closest.href);
    };

    window.addEventListener("scroll", handleActiveSection, { passive: true });
    handleActiveSection(); // set on mount

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("scroll", handleActiveSection);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? "bg-slate-950/98 backdrop-blur-xl border-b border-slate-800/80 shadow-xl shadow-black/30"
        : "bg-slate-950/80 backdrop-blur-md"
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-3.5 flex justify-between items-center">

        {/* Logo */}
        <motion.a href="#about" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2.5 group">
          <div className="relative w-9 h-9 rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-indigo-500 spin-slow opacity-80" />
            <div className="absolute inset-[2px] bg-slate-950 rounded-[10px] flex items-center justify-center text-xs font-black text-white z-10">MR</div>
          </div>
          <span className="font-bold text-white text-base hidden sm:block group-hover:text-cyan-400 transition-colors duration-200">
            Mukesh R
          </span>
        </motion.a>

        {/* Desktop links */}
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="hidden md:flex items-center gap-0.5">
          {navLinks.map(link => {
            const isActive = active === link.href;
            return (
              <a key={link.href} href={`#${link.href}`}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive ? "nav-active-pill" : "text-slate-500 hover:text-white hover:bg-white/5 border border-transparent"
                }`}>
                {link.label}
                {isActive && (
                  <motion.div layoutId="nav-indicator"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-cyan-400 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </motion.div>

        {/* Hire Me CTA */}
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
          className="hidden md:flex items-center gap-3">
          <a href="mailto:mukeshravi3597@gmail.com"
            className="group flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-indigo-500 hover:from-cyan-400 hover:to-indigo-400 px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:-translate-y-0.5">
            <Mail size={13} />
            Hire Me
          </a>
        </motion.div>

        {/* Mobile hamburger */}
        <button className="md:hidden text-slate-400 hover:text-white transition p-1" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          <AnimatePresence mode="wait">
            <motion.div key={isOpen ? "x" : "menu"} initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </motion.div>
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden bg-slate-950 border-t border-slate-800 overflow-hidden">
            <div className="px-6 py-4 space-y-1">
              {navLinks.map(link => (
                <a key={link.href} href={`#${link.href}`} onClick={() => setIsOpen(false)}
                  className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    active === link.href ? "nav-active-pill" : "text-slate-400 hover:text-white hover:bg-white/5 border border-transparent"
                  }`}>
                  {link.label}
                </a>
              ))}
              <a href="mailto:mukeshravi3597@gmail.com"
                className="block mt-3 text-center bg-gradient-to-r from-cyan-500 to-indigo-500 px-6 py-3 rounded-xl text-sm font-semibold">
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

