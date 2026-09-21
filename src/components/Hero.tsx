import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { MapPin, Mail, Phone, ExternalLink, Award, BadgeCheck, Download, Sparkles } from "lucide-react";

const techStack = [
  { label: "Cloud",      value: "AWS · GCP · Azure",         color: "text-indigo-600", dot: "bg-indigo-500" },
  { label: "Containers", value: "Kubernetes · Docker",        color: "text-sky-600",    dot: "bg-sky-500"    },
  { label: "CI/CD",      value: "Jenkins · ArgoCD",           color: "text-amber-600",  dot: "bg-amber-500"  },
  { label: "IaC",        value: "Terraform · Ansible",        color: "text-emerald-600",dot: "bg-emerald-500"},
  { label: "Monitoring", value: "Prometheus · Grafana · EFK", color: "text-slate-600",  dot: "bg-slate-400"  },
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

  return (
    <section id="about" className="relative min-h-screen flex items-center mesh-bg pt-16">
      <div className="absolute inset-0 dot-pattern opacity-50 pointer-events-none" />
      <div className="scan-lines absolute inset-0 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[140px] bg-indigo-400/10 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[120px] bg-sky-400/10 pointer-events-none" />

      <div className="relative w-full max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 xl:gap-16 items-center py-16">

        {/* Left */}
        <motion.div variants={containerVariant} initial="hidden" animate="show" className="flex flex-col">

          <motion.div variants={itemVariant} className="mb-5">
            <span className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-700 px-4 py-1.5 rounded-full text-sm font-semibold shadow-sm">
              <span className="w-2 h-2 bg-emerald-500 rounded-full pulse-ring-emerald inline-block" />
              Available for Opportunities
              <Sparkles size={13} className="opacity-70" />
            </span>
          </motion.div>

          <motion.div variants={itemVariant}>
            <h1 className="text-6xl md:text-7xl font-black leading-none tracking-tight">
              <span className="text-slate-900">Mukesh</span>
              <br />
              <span className="text-gradient">R</span>
            </h1>
          </motion.div>

          <motion.div variants={itemVariant} className="mt-4">
            <p className="text-2xl font-black text-slate-800 tracking-tight">
              Senior Cloud &amp; DevOps Engineer
            </p>
            <p className="text-sm text-slate-400 font-medium mt-1">
              AWS Solutions Architect · DevSecOps · Kubernetes · IaC
            </p>
          </motion.div>

          <motion.p variants={itemVariant} className="mt-4 text-slate-500 text-sm leading-relaxed max-w-lg">
            <span className="text-slate-800 font-semibold">4+ years</span> designing, automating, and
            securing cloud infrastructure across{" "}
            <span className="text-indigo-600 font-semibold">AWS and GCP</span> — for enterprise,
            startup, and government clients. AWS Solutions Architect Professional certified.
          </motion.p>

          <motion.div variants={itemVariant} className="mt-5 flex flex-wrap gap-2">
            {[
              { icon: <MapPin size={12} />, text: "Chennai, Tamil Nadu", href: null },
              { icon: <Mail size={12} />, text: "mukeshravi3597@gmail.com", href: "mailto:mukeshravi3597@gmail.com" },
              { icon: <Phone size={12} />, text: "+91 8838154506", href: null },
            ].map(p => p.href ? (
              <a key={p.text} href={p.href}
                className="flex items-center gap-1.5 bg-white border border-indigo-100 shadow-sm px-3 py-1.5 rounded-full text-slate-500 text-xs hover:text-indigo-600 hover:border-indigo-300 transition-all duration-200">
                <span className="text-indigo-500">{p.icon}</span>{p.text}
              </a>
            ) : (
              <span key={p.text} className="flex items-center gap-1.5 bg-white border border-indigo-100 shadow-sm px-3 py-1.5 rounded-full text-slate-500 text-xs">
                <span className="text-indigo-500">{p.icon}</span>{p.text}
              </span>
            ))}
          </motion.div>

          <motion.div variants={itemVariant} className="mt-6 flex flex-wrap gap-3">
            <a href="/Mukesh R_4+ Years.pdf" download="Mukesh_R_Resume.pdf"
              className="group relative flex items-center gap-2 overflow-hidden bg-gradient-to-r from-indigo-600 to-sky-500 text-white px-7 py-3.5 rounded-2xl font-semibold transition-all duration-300 shadow-lg shadow-indigo-100 hover:shadow-indigo-200 hover:-translate-y-1 hover:scale-[1.02]">
              <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-sky-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Download size={16} className="relative group-hover:-translate-y-0.5 transition-transform" />
              <span className="relative">Download Resume</span>
            </a>
            <a href="https://www.linkedin.com/in/mukesh-r-4543b2214" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white border border-slate-200 hover:border-sky-300 text-slate-600 hover:text-slate-800 px-7 py-3.5 rounded-2xl font-semibold shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
              <ExternalLink size={16} className="text-sky-500" />
              LinkedIn
            </a>
          </motion.div>
        </motion.div>

        {/* Right */}
        <motion.div initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col items-center gap-6 justify-center">

          <div className="relative flex items-center justify-center">
            <div className="spin-slow absolute w-72 h-72 rounded-full"
              style={{ background: "conic-gradient(from 0deg, #4f46e5, #0ea5e9, #f59e0b, #4f46e5)", padding: "2.5px", borderRadius: "9999px" }}>
              <div className="w-full h-full rounded-full bg-slate-50" />
            </div>
            <div className="spin-slow-reverse absolute w-[300px] h-[300px] rounded-full opacity-20"
              style={{ background: "conic-gradient(from 180deg, #0ea5e9, transparent, #4f46e5, transparent)", padding: "1px", borderRadius: "9999px" }}>
              <div className="w-full h-full rounded-full bg-transparent" />
            </div>
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-2xl shadow-indigo-100 z-10">
              <img src="/Mukesh Pic.png" alt="Mukesh R" className="w-full h-full object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/10 to-transparent" />
            </div>
            <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute top-4 -right-2 bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold px-3 py-1.5 rounded-full shadow-md flex items-center gap-1.5 z-20 whitespace-nowrap">
              <Award size={11} />Best Employee 2024
            </motion.div>
            <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-4 -left-2 bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold px-3 py-1.5 rounded-full shadow-md flex items-center gap-1.5 z-20 whitespace-nowrap">
              <BadgeCheck size={11} />AWS Pro Certified
            </motion.div>
          </div>

          <div className="grid grid-cols-1 gap-2 w-full">
            {techStack.map((item, i) => (
              <motion.div key={item.label}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.08, ease: "easeOut" }}
                className="bg-white border border-slate-200 rounded-xl px-5 py-3 flex items-center justify-between card-shine hover:-translate-y-0.5 shadow-sm hover:shadow-md transition-all duration-200">
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
    </section>
  );
}
