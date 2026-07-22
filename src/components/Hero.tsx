import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, ArrowRight, ExternalLink, Award, BadgeCheck } from "lucide-react";

const roles = [
  "Senior Cloud Engineer",
  "DevSecOps Architect",
  "Kubernetes Expert",
  "AWS Solutions Architect",
  "Infrastructure Automation Lead",
];

const techStack = [
  { label: "Cloud Platforms", value: "AWS (Expert) · GCP · Azure", color: "text-cyan-400", bg: "bg-cyan-500/10 border-cyan-500/20" },
  { label: "Containers & Orchestration", value: "Kubernetes (EKS) · Docker", color: "text-emerald-400", bg: "bg-emerald-500/10 border-emerald-500/20" },
  { label: "CI/CD & GitOps", value: "Jenkins · ArgoCD · GitLab · Gitea", color: "text-purple-400", bg: "bg-purple-500/10 border-purple-500/20" },
  { label: "Infrastructure as Code", value: "Terraform · Ansible", color: "text-orange-400", bg: "bg-orange-500/10 border-orange-500/20" },
  { label: "Monitoring & Security", value: "Prometheus · Grafana · EFK · Trivy", color: "text-rose-400", bg: "bg-rose-500/10 border-rose-500/20" },
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 40);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  return (
    <section id="about" className="relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 dot-pattern opacity-40" />
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-500/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-indigo-500/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-900/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start py-16">

        {/* Left: Identity & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <span className="w-2 h-2 bg-emerald-400 rounded-full pulse-ring inline-block" />
            Available for Opportunities
          </motion.div>

          <h1 className="text-6xl md:text-7xl font-black leading-none tracking-tight">
            <span className="text-white">Mukesh</span>
            <br />
            <span className="text-gradient">R</span>
          </h1>

          {/* Animated role */}
          <div className="mt-5 text-2xl font-bold text-slate-300 min-h-[36px] flex items-center gap-1">
            <span>{displayed}</span>
            <span className="cursor-blink text-cyan-400">|</span>
          </div>

          <p className="mt-5 text-slate-400 text-base leading-relaxed max-w-xl">
            Certified Senior Cloud & DevOps Engineer with{" "}
            <span className="text-white font-semibold">4+ years</span> of hands-on experience
            designing, automating, and securing scalable cloud infrastructure across{" "}
            <span className="text-cyan-400 font-semibold">AWS and GCP</span>. Expert in DevSecOps,
            Kubernetes orchestration, IaC, and cloud cost optimization for enterprise, startup,
            and government-sector clients.
          </p>

          {/* Contact pills */}
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <span className="flex items-center gap-2 bg-slate-900 border border-slate-800 px-4 py-2 rounded-xl text-slate-400">
              <MapPin size={14} className="text-cyan-400" />
              Chennai, Tamil Nadu
            </span>
            <a
              href="mailto:mukeshravi3597@gmail.com"
              className="flex items-center gap-2 bg-slate-900 border border-slate-800 hover:border-cyan-500/50 px-4 py-2 rounded-xl text-slate-400 hover:text-cyan-400 transition"
            >
              <Mail size={14} className="text-cyan-400" />
              mukeshravi3597@gmail.com
            </a>
            <a
              href="tel:+918838154506"
              className="flex items-center gap-2 bg-slate-900 border border-slate-800 hover:border-cyan-500/50 px-4 py-2 rounded-xl text-slate-400 hover:text-white transition"
            >
              <Phone size={14} className="text-cyan-400" />
              +91 8838154506
            </a>
          </div>

          {/* CTA buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-indigo-500 hover:from-cyan-400 hover:to-indigo-400 px-7 py-3.5 rounded-xl font-semibold transition-all duration-200 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5"
            >
              View Projects
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://www.linkedin.com/in/mukesh-r-4543b2214"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-slate-700 hover:border-cyan-500/60 hover:bg-slate-800/60 px-7 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
            >
              <ExternalLink size={16} className="text-cyan-400" />
              LinkedIn
            </a>
            <a
              href="mailto:mukeshravi3597@gmail.com"
              className="flex items-center gap-2 border border-slate-700 hover:border-emerald-500/60 hover:bg-slate-800/60 px-7 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
            >
              <Mail size={16} className="text-emerald-400" />
              Hire Me
            </a>
          </div>
        </motion.div>

        {/* Right: Tech card stack */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="space-y-3"
        >
          {/* Avatar / identity card */}
          <div className="relative bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-7 glow-cyan card-shine mb-5">
            <div className="flex items-center gap-5">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500 via-indigo-500 to-purple-500 flex items-center justify-center text-3xl font-black float-anim shadow-xl shadow-cyan-500/20">
                MR
              </div>
              <div>
                <h2 className="text-2xl font-black text-white">Mukesh R</h2>
                <p className="text-cyan-400 font-semibold text-sm mt-0.5">Senior Cloud & DevOps Engineer</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="flex items-center gap-1.5 bg-yellow-500/15 border border-yellow-500/30 text-yellow-400 text-xs font-semibold px-3 py-1 rounded-full">
                    <Award size={11} />
                    Best Employee 2024
                  </span>
                  <span className="flex items-center gap-1.5 bg-cyan-500/15 border border-cyan-500/30 text-cyan-400 text-xs font-semibold px-3 py-1 rounded-full">
                    <BadgeCheck size={11} />
                    4+ yrs
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Tech stack cards */}
          {techStack.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.08 }}
              className={`flex items-center justify-between bg-slate-900 border ${item.bg} rounded-2xl px-5 py-4 hover:-translate-y-0.5 transition-transform duration-200 card-shine`}
            >
              <p className="text-slate-500 text-xs uppercase tracking-widest font-medium">{item.label}</p>
              <p className={`${item.color} font-bold text-sm text-right`}>{item.value}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
