import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "../data/projects";
import { ArrowUpRight, BookOpen, Shield, Server, TrendingUp, Layers, Code2, ExternalLink } from "lucide-react";
import CloudOpsCaseStudy from "./CloudOpsCaseStudy";

const projectThemes = [
  { accent: "from-indigo-500 to-sky-500",   border: "hover:border-indigo-300",  badge: "bg-indigo-100 border-indigo-200 text-indigo-700",  num: "text-indigo-200"  },
  { accent: "from-sky-500 to-indigo-500",   border: "hover:border-sky-300",     badge: "bg-sky-100 border-sky-200 text-sky-700",            num: "text-sky-200"     },
  { accent: "from-amber-500 to-sky-500",    border: "hover:border-amber-300",   badge: "bg-amber-100 border-amber-200 text-amber-700",      num: "text-amber-200"   },
  { accent: "from-emerald-500 to-sky-500",  border: "hover:border-emerald-300", badge: "bg-emerald-100 border-emerald-200 text-emerald-700",num: "text-emerald-200" },
  { accent: "from-indigo-400 to-sky-400",   border: "hover:border-indigo-300",  badge: "bg-indigo-100 border-indigo-200 text-indigo-700",  num: "text-indigo-200"  },
  { accent: "from-sky-500 to-emerald-500",  border: "hover:border-sky-300",     badge: "bg-sky-100 border-sky-200 text-sky-700",            num: "text-sky-200"     },
  { accent: "from-amber-500 to-indigo-500", border: "hover:border-amber-300",   badge: "bg-amber-100 border-amber-200 text-amber-700",      num: "text-amber-200"   },
];

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
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
          <p className="text-indigo-600 text-sm font-semibold uppercase tracking-widest mb-3">Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900">Featured Projects</h2>
          <p className="text-slate-500 mt-3 max-w-2xl">
            Real-world cloud infrastructure and DevOps projects delivered for enterprise and government clients.
          </p>
        </motion.div>

        {/* CloudOps featured card */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-6">
          <div className="group relative bg-white border border-slate-200 hover:border-indigo-300 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl card-shine shadow-sm">
            <div className="h-0.5 bg-gradient-to-r from-indigo-500 via-sky-500 to-amber-500 w-full" />

            <div className="absolute top-5 right-5 z-10">
              <span className="bg-indigo-100 border border-indigo-200 text-indigo-700 text-xs font-bold px-3 py-1 rounded-full">
                ★ Solo Build
              </span>
            </div>

            <div className="p-7 md:p-9">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-5xl font-black text-indigo-200 leading-none">00</span>
                    <div className="w-px h-9 bg-slate-200" />
                    <span className="text-slate-400 text-xs font-medium">Personal SaaS Project</span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-black text-slate-900 group-hover:text-indigo-700 transition mb-3 leading-snug">
                    CloudOps — Multi-Tenant AWS Management Platform
                  </h3>

                  <p className="text-slate-500 text-sm leading-relaxed mb-5 max-w-2xl">
                    Full-stack SaaS platform built for Managed Service Providers to monitor, audit, and optimise
                    AWS infrastructure across multiple client accounts from a single dashboard. Built end-to-end
                    as a solo engineering project — auth, billing, multi-tenancy, CIS compliance, and audit reports.
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {cloudOpsHighlights.map(h => (
                      <span key={h.label} className="flex items-center gap-1.5 bg-slate-100 border border-slate-200 text-slate-600 px-3 py-1.5 rounded-lg text-xs">
                        <span className="text-indigo-500">{h.icon}</span>
                        {h.label}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {["Python", "FastAPI", "React 18", "boto3", "SQLAlchemy", "MUI v5", "JWT", "Razorpay", "jsPDF", "Recharts"].map(t => (
                      <span key={t} className="bg-slate-100 hover:bg-slate-200 text-slate-600 px-3 py-1 rounded-lg text-xs border border-slate-200 transition">{t}</span>
                    ))}
                  </div>

                  <button
                    onClick={() => setCaseStudyOpen(true)}
                    className="flex items-center gap-2 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 hover:border-indigo-400 text-indigo-700 font-semibold text-sm px-5 py-2.5 rounded-xl transition-all duration-200"
                  >
                    <BookOpen size={15} />
                    View Full Case Study
                    <ArrowUpRight size={14} />
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-3 md:w-52 shrink-0">
                  {[
                    { v: "50+",  l: "CIS Checks" },
                    { v: "10",   l: "Resource Types" },
                    { v: "12",   l: "Excel Sheets" },
                    { v: "500+", l: "Buckets/Scan" },
                  ].map(s => (
                    <div key={s.l} className="bg-indigo-50 rounded-xl p-4 text-center border border-indigo-100">
                      <p className="text-2xl font-black text-indigo-600">{s.v}</p>
                      <p className="text-slate-400 text-[10px] mt-0.5 leading-tight">{s.l}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Other projects grid */}
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
                className={`group relative bg-white border border-slate-200 ${theme.border} rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl card-shine shadow-sm`}
              >
                <div className={`h-0.5 bg-gradient-to-r ${theme.accent} w-0 group-hover:w-full transition-all duration-500`} />

                <div className="p-7">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`text-4xl font-black ${theme.num} leading-none`}>
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <div className="w-px h-8 bg-slate-200" />
                        <span className="text-slate-400 text-xs font-medium">{project.client}</span>
                      </div>
                      <h3 className="text-lg font-bold text-slate-800 group-hover:text-indigo-700 transition leading-snug">
                        {project.title}
                      </h3>
                    </div>
                    <ArrowUpRight size={18} className="text-slate-300 group-hover:text-indigo-500 transition-colors shrink-0 mt-1" />
                  </div>

                  <p className="text-slate-500 text-sm leading-relaxed mb-5">{project.desc}</p>

                  <div className={`inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-xl border ${theme.badge} mb-5`}>
                    <div className="w-1.5 h-1.5 rounded-full bg-current" />
                    {project.impact}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="bg-slate-100 hover:bg-slate-200 text-slate-600 px-3 py-1 rounded-lg text-xs border border-slate-200 transition">{t}</span>
                    ))}
                  </div>

                  {(project.github || project.live) && (
                    <div className="flex gap-2 mt-5">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-200 px-3 py-1.5 rounded-lg transition">
                          <Code2 size={13} /> GitHub
                        </a>
                      )}
                      {project.live && (
                        <a href={project.live} target="_blank" rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs font-semibold text-indigo-600 hover:text-indigo-800 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 px-3 py-1.5 rounded-lg transition">
                          <ExternalLink size={13} /> Live
                        </a>
                      )}
                    </div>
                  )}
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
