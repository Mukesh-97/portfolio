import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { MapPin, Mail, Phone, ArrowRight, ExternalLink, Award, BadgeCheck, Download, Sparkles } from "lucide-react";

const roles = [
  "Senior Cloud Engineer",
  "DevSecOps Architect",
  "Kubernetes Expert",
  "AWS Solutions Architect",
  "Infrastructure Automation Lead",
];

const techStack = [
  { label: "Cloud", value: "AWS · GCP · Azure", color: "text-cyan-400", dot: "bg-cyan-400" },
  { label: "Containers", value: "Kubernetes · Docker", color: "text-emerald-400", dot: "bg-emerald-400" },
  { label: "CI/CD", value: "Jenkins · ArgoCD", color: "text-purple-400", dot: "bg-purple-400" },
  { label: "IaC", value: "Terraform · Ansible", color: "text-orange-400", dot: "bg-orange-400" },
  { label: "Monitoring", value: "Prometheus · Grafana · EFK", color: "text-rose-400", dot: "bg-rose-400" },
];

const itemVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};
const containerVariant: Variants = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.09 } },
};

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;
    if (!isDeleting && displayed.length < current.length)
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 75);
    else if (!isDeleting && displayed.length === current.length)
      timeout = setTimeout(() => setIsDeleting(true), 2400);
    else if (isDeleting && displayed.length > 0)
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 35);
    else { setIsDeleting(false); setRoleIndex(p => (p + 1) % roles.length); }
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  return (
    <section id="about" className="relative min-h-screen flex items-center overflow-hidden mesh-bg">
      {/* Layered backgrounds */}
      <div className="absolute inset-0 dot-pattern opacity-30 pointer-events-none" />
      <div className="scan-lines absolute inset-0 opacity-40 pointer-events-none" />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[120px] bg-cyan-500/6 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[100px] bg-violet-500/7 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-[150px] bg-indigo-900/10 pointer-events-none" />

      <div className="relative w-full max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 xl:gap-16 items-center py-20 lg:py-0">

        {/* ── Left ── */}
        <motion.div
          variants={containerVariant}
          initial="hidden"
          animate="show"
          className="flex flex-col"
        >
          {/* Status badge */}
          <motion.div variants={itemVariant} className="mb-5">
            <span className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 px-4 py-1.5 rounded-full text-sm font-semibold">
              <span className="w-2 h-2 bg-emerald-400 rounded-full pulse-ring-emerald inline-block" />
              Available for Opportunities
              <Sparkles size={13} className="opacity-70" />
            </span>
          </motion.div>

          {/* Name */}
          <motion.div variants={itemVariant}>
            <h1 className="text-6xl md:text-7xl font-black leading-none tracking-tight">
              <span className="text-white">Mukesh</span>
              <br />
              <span className="text-gradient">R</span>
            </h1>
          </motion.div>

          {/* Animated role */}
          <motion.div variants={itemVariant} className="mt-4 min-h-[36px] flex items-center gap-1.5">
            <span className="text-xl font-bold text-slate-200">{displayed}</span>
            <span className="cursor-blink text-cyan-400 text-xl font-thin">|</span>
          </motion.div>

          {/* Bio */}
          <motion.p variants={itemVariant} className="mt-4 text-slate-400 text-sm leading-relaxed max-w-lg">
            Certified Senior Cloud & DevOps Engineer with{" "}
            <span className="text-white font-semibold">4+ years</span> designing, automating, and
            securing scalable infrastructure across{" "}
            <span className="text-cyan-400 font-semibold">AWS and GCP</span> — for enterprise,
            startup, and government clients.
          </motion.p>

          {/* Contact pills */}
          <motion.div variants={itemVariant} className="mt-5 flex flex-wrap gap-2 text-sm">
            {[
              { icon: <MapPin size={12} />, text: "Chennai, Tamil Nadu", href: null },
              { icon: <Mail size={12} />, text: "mukeshravi3597@gmail.com", href: "mailto:mukeshravi3597@gmail.com" },
              { icon: <Phone size={12} />, text: "+91 8838154506", href: "tel:+918838154506" },
            ].map(p => p.href ? (
              <a key={p.text} href={p.href}
                className="flex items-center gap-1.5 glass px-3 py-1.5 rounded-full text-slate-400 text-xs hover:text-cyan-400 hover:border-cyan-500/30 transition-all duration-200">
                <span className="text-cyan-400">{p.icon}</span>{p.text}
              </a>
            ) : (
              <span key={p.text} className="flex items-center gap-1.5 glass px-3 py-1.5 rounded-full text-slate-400 text-xs">
                <span className="text-cyan-400">{p.icon}</span>{p.text}
              </span>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div variants={itemVariant} className="mt-6 flex flex-wrap gap-3">
            <a href="#projects"
              className="group relative flex items-center gap-2 overflow-hidden bg-gradient-to-r from-cyan-500 to-indigo-500 px-7 py-3.5 rounded-2xl font-semibold transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/50 hover:-translate-y-1 hover:scale-[1.02]">
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative">View Projects</span>
              <ArrowRight size={16} className="relative group-hover:translate-x-1 transition-transform" />
            </a>

            <a href="/Mukesh R_4+ Years.pdf" download="Mukesh_R_Resume.pdf"
              className="group flex items-center gap-2 glass border border-emerald-500/30 hover:border-emerald-500/60 text-emerald-400 hover:text-emerald-300 px-7 py-3.5 rounded-2xl font-semibold transition-all duration-200 hover:-translate-y-1 hover:glow-emerald">
              <Download size={16} className="group-hover:-translate-y-0.5 transition-transform" />
              Resume
            </a>

            <a href="https://www.linkedin.com/in/mukesh-r-4543b2214" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 glass border border-slate-700/50 hover:border-cyan-500/40 text-slate-300 hover:text-white px-7 py-3.5 rounded-2xl font-semibold transition-all duration-200 hover:-translate-y-1">
              <ExternalLink size={16} className="text-cyan-400" />
              LinkedIn
            </a>
          </motion.div>
        </motion.div>

        {/* ── Right ── */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col items-center gap-6"
        >
          {/* Profile photo with spinning ring */}
          <div className="relative flex items-center justify-center">
            {/* Outer spinning ring */}
            <div className="spin-slow absolute w-72 h-72 rounded-full"
              style={{ background: "conic-gradient(from 0deg, #06b6d4, #6366f1, #34d399, #06b6d4)", padding: "2px", borderRadius: "9999px" }}>
              <div className="w-full h-full rounded-full bg-slate-950" />
            </div>
            {/* Inner counter-spin ring */}
            <div className="spin-slow-reverse absolute w-[300px] h-[300px] rounded-full opacity-25"
              style={{ background: "conic-gradient(from 180deg, #818cf8, transparent, #22d3ee, transparent)", padding: "1px", borderRadius: "9999px" }}>
              <div className="w-full h-full rounded-full bg-transparent" />
            </div>
            {/* Photo */}
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-slate-900 shadow-2xl shadow-cyan-500/25 z-10">
              <img src="/Mukesh Pic.png" alt="Mukesh R" className="w-full h-full object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent" />
            </div>
            {/* Floating badges — positioned relative to the ring container */}
            <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute top-4 -right-2 bg-yellow-500/15 border border-yellow-500/40 text-yellow-400 text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-sm flex items-center gap-1.5 z-20 whitespace-nowrap">
              <Award size={11} />Best Employee 2024
            </motion.div>
            <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-4 -left-2 bg-cyan-500/15 border border-cyan-500/40 text-cyan-400 text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-sm flex items-center gap-1.5 z-20 whitespace-nowrap">
              <BadgeCheck size={11} />AWS Pro Certified
            </motion.div>
          </div>

          {/* Tech stack grid — fills full column width */}
          <div className="grid grid-cols-1 gap-2 w-full">
            {techStack.map((item, i) => (
              <motion.div key={item.label}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.08, ease: "easeOut" }}
                className="glass rounded-xl px-5 py-3 flex items-center justify-between card-shine hover:-translate-y-0.5 transition-all duration-200 group">
                <div className="flex items-center gap-2.5">
                  <span className={`w-2 h-2 rounded-full shrink-0 ${item.dot}`} />
                  <p className="text-slate-400 text-xs uppercase tracking-widest font-semibold">{item.label}</p>
                </div>
                <p className={`${item.color} font-bold text-sm text-right`}>{item.value}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-slate-600 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-0.5 h-8 bg-gradient-to-b from-cyan-500/60 to-transparent rounded-full" />
      </motion.div>
    </section>
  );
}
