import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "../data/projects";
import { ArrowUpRight, BookOpen, Shield, Server, TrendingUp, Layers } from "lucide-react";
import CloudOpsCaseStudy from "./CloudOpsCaseStudy";

const projectThemes = [
  { accent: "from-cyan-500 to-blue-500", border: "hover:border-cyan-500/50", badge: "bg-cyan-500/10 border-cyan-500/25 text-cyan-400", num: "text-cyan-500/40" },
  { accent: "from-purple-500 to-indigo-500", border: "hover:border-purple-500/50", badge: "bg-purple-500/10 border-purple-500/25 text-purple-400", num: "text-purple-500/40" },
  { accent: "from-emerald-500 to-teal-500", border: "hover:border-emerald-500/50", badge: "bg-emerald-500/10 border-emerald-500/25 text-emerald-400", num: "text-emerald-500/40" },
  { accent: "from-orange-500 to-amber-500", border: "hover:border-orange-500/50", badge: "bg-orange-500/10 border-orange-500/25 text-orange-400", num: "text-orange-500/40" },
  { accent: "from-rose-500 to-pink-500", border: "hover:border-rose-500/50", badge: "bg-rose-500/10 border-rose-500/25 text-rose-400", num: "text-rose-500/40" },
  { accent: "from-yellow-500 to-lime-500", border: "hover:border-yellow-500/50", badge: "bg-yellow-500/10 border-yellow-500/25 text-yellow-400", num: "text-yellow-500/40" },
  { accent: "from-sky-500 to-cyan-500", border: "hover:border-sky-500/50", badge: "bg-sky-500/10 border-sky-500/25 text-sky-400", num: "text-sky-500/40" },
];

// ─── CloudOps feature highlights for the hero card ───────────────────────────
const cloudOpsHighlights = [
  { icon: <Shield size={13} />,     label: "50+ CIS Checks" },
  { icon: <Server size={13} />,     label: "10 Resource Types" },
  { icon: <TrendingUp size={13} />, label: "Cost Forecasting" },
  { icon: <Layers size={13} />,     label: "Multi-Tenant SaaS" },
];

export default function Projects() {
  const [caseStudyOpen, setCaseStudyOpen] = useState(false);

  return (
    <section id="projects" className="py-24 section-divider">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-black">Featured Projects</h2>
          <p className="text-slate-400 mt-3 max-w-2xl">
            Real-world cloud infrastructure and DevOps projects delivered for enterprise and government clients.
          </p>
        </motion.div>

        {/* ── CloudOps featured card ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <div className="group relative bg-slate-900 border border-slate-800 hover:border-cyan-500/40 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl card-shine">
            {/* Gradient accent bar */}
            <div className="h-0.5 bg-gradient-to-r from-cyan-500 via-indigo-500 to-violet-500 w-full" />

            {/* Featured label */}
            <div className="absolute top-5 right-5 z-10">
              <span className="bg-cyan-500/15 border border-cyan-500/30 text-cyan-400 text-xs font-bold px-3 py-1 rounded-full">
                ★ Solo Build
              </span>
            </div>

            <div className="p-7 md:p-9">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-1">
                  {/* Index + client */}
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-5xl font-black text-cyan-500/25 leading-none">00</span>
                    <div className="w-px h-9 bg-slate-700" />
                    <span className="text-slate-500 text-xs font-medium">Personal SaaS Build</span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-black text-white group-hover:text-cyan-300 transition mb-3 leading-snug">
                    CloudOps — Multi-Tenant AWS Management Platform
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed mb-5 max-w-2xl">
                    Full-stack SaaS platform built for Managed Service Providers to monitor, audit, and optimise
                    AWS infrastructure across multiple client accounts from a single dashboard. Built end-to-end
                    as a solo engineering project — auth, billing, multi-tenancy, CIS compliance, and audit reports.
                  </p>

                  {/* Highlights row */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {cloudOpsHighlights.map(h => (
                      <span key={h.label} className="flex items-center gap-1.5 bg-slate-800/80 border border-slate-700/50 text-slate-300 px-3 py-1.5 rounded-lg text-xs">
                        <span className="text-cyan-400">{h.icon}</span>
                        {h.label}
                      </span>
                    ))}
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {["Python", "FastAPI", "React 18", "boto3", "SQLAlchemy", "MUI v5", "JWT", "Razorpay", "jsPDF", "Recharts"].map(t => (
                      <span key={t} className="bg-slate-800/80 hover:bg-slate-800 text-slate-300 px-3 py-1 rounded-lg text-xs border border-slate-700/50 transition">{t}</span>
                    ))}
                  </div>

                  {/* CTA */}
                  <button
                    onClick={() => setCaseStudyOpen(true)}
                    className="flex items-center gap-2 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 hover:border-cyan-500/60 text-cyan-400 font-semibold text-sm px-5 py-2.5 rounded-xl transition-all duration-200"
                  >
                    <BookOpen size={15} />
                    View Full Case Study
                    <ArrowUpRight size={14} />
                  </button>
                </div>

                {/* Right side stat grid */}
                <div className="grid grid-cols-2 gap-3 md:w-52 shrink-0">
                  {[
                    { v: "50+",  l: "CIS Checks" },
                    { v: "10",   l: "Resource Types" },
                    { v: "12",   l: "Excel Sheets" },
                    { v: "500+", l: "Buckets/Scan" },
                  ].map(s => (
                    <div key={s.l} className="bg-slate-800/50 rounded-xl p-4 text-center border border-slate-700/30">
                      <p className="text-2xl font-black text-cyan-400">{s.v}</p>
                      <p className="text-slate-500 text-[10px] mt-0.5 leading-tight">{s.l}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Other projects grid ── */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => {
            const theme = projectThemes[i % projectThemes.length];
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.45 }}
                className={`group relative bg-slate-900 border border-slate-800 ${theme.border} rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl card-shine`}
              >
                {/* Gradient top accent bar */}
                <div className={`h-0.5 bg-gradient-to-r ${theme.accent} w-0 group-hover:w-full transition-all duration-500`} />

                <div className="p-7">
                  {/* Index + client */}
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`text-4xl font-black ${theme.num} leading-none`}>
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <div className="w-px h-8 bg-slate-700" />
                        <span className="text-slate-500 text-xs font-medium">{project.client}</span>
                      </div>
                      <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition leading-snug">
                        {project.title}
                      </h3>
                    </div>
                    <ArrowUpRight
                      size={18}
                      className="text-slate-700 group-hover:text-cyan-400 transition-colors shrink-0 mt-1"
                    />
                  </div>

                  {/* Description */}
                  <p className="text-slate-400 text-sm leading-relaxed mb-5">
                    {project.desc}
                  </p>

                  {/* Impact badge */}
                  <div className={`inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-xl border ${theme.badge} mb-5`}>
                    <div className="w-1.5 h-1.5 rounded-full bg-current" />
                    {project.impact}
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="bg-slate-800/80 hover:bg-slate-800 text-slate-300 px-3 py-1 rounded-lg text-xs border border-slate-700/50 transition"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <CloudOpsCaseStudy open={caseStudyOpen} onClose={() => setCaseStudyOpen(false)} />
    </section>
  );
}
