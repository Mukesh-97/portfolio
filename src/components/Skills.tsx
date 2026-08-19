import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cloud, Container, GitBranch, Server, Activity, ShieldCheck, Terminal, GitMerge } from "lucide-react";

const skillGroups = [
  {
    category: "Cloud", Icon: Cloud, color: "cyan",
    items: [
      { name: "AWS", level: 95, note: "Expert" },
      { name: "Google Cloud Platform", level: 70, note: "Intermediate" },
      { name: "Microsoft Azure", level: 65, note: "Intermediate" },
    ],
  },
  {
    category: "Containers", Icon: Container, color: "emerald",
    items: [
      { name: "Kubernetes (EKS)", level: 90 },
      { name: "Docker", level: 92 },
    ],
  },
  {
    category: "CI/CD & GitOps", Icon: GitBranch, color: "purple",
    items: [
      { name: "Jenkins", level: 88 },
      { name: "ArgoCD", level: 70 },
    ],
  },
  {
    category: "IaC", Icon: Server, color: "orange",
    items: [
      { name: "Terraform", level: 80 },
      { name: "Ansible", level: 70 },
    ],
  },
  {
    category: "Monitoring", Icon: Activity, color: "rose",
    items: [
      { name: "Prometheus", level: 85 },
      { name: "Grafana", level: 85 },
      { name: "EFK Stack", level: 80 },
      { name: "CloudWatch", level: 90 },
    ],
  },
  {
    category: "Security", Icon: ShieldCheck, color: "yellow",
    items: [
      { name: "Trivy (Image Scanning)", level: 88 },
      { name: "IAM Best Practices", level: 92 },
      { name: "Vulnerability Management", level: 85 },
      { name: "Security Auditing", level: 85 },
    ],
  },
  {
    category: "Scripting", Icon: Terminal, color: "lime",
    items: [
      { name: "Python", level: 55, note: "Automation scripts" },
      { name: "Bash / Shell", level: 70 },
    ],
  },
  {
    category: "Version Control", Icon: GitMerge, color: "sky",
    items: [
      { name: "Git", level: 85 },
      { name: "GitHub", level: 85 },
      { name: "GitLab", level: 50 },
      { name: "Gitea", level: 40 },
    ],
  },
];

const colorTokens: Record<string, { text: string; bar: string; bg: string; border: string; activeBg: string; tab: string }> = {
  cyan:    { text: "text-indigo-600", bar: "from-indigo-500 to-sky-400",   bg: "from-indigo-50 to-white", border: "border-indigo-200", activeBg: "bg-indigo-50", tab: "text-indigo-600 border-indigo-300 bg-indigo-50"  },
  emerald: { text: "text-sky-600",    bar: "from-sky-500 to-sky-400",      bg: "from-sky-50 to-white",    border: "border-sky-200",    activeBg: "bg-sky-50",    tab: "text-sky-600 border-sky-300 bg-sky-50"          },
  purple:  { text: "text-indigo-600", bar: "from-indigo-400 to-sky-400",   bg: "from-indigo-50 to-white", border: "border-indigo-200", activeBg: "bg-indigo-50", tab: "text-indigo-600 border-indigo-300 bg-indigo-50"  },
  orange:  { text: "text-amber-600",  bar: "from-amber-500 to-amber-400",  bg: "from-amber-50 to-white",  border: "border-amber-200",  activeBg: "bg-amber-50",  tab: "text-amber-600 border-amber-300 bg-amber-50"    },
  rose:    { text: "text-sky-600",    bar: "from-sky-500 to-indigo-400",   bg: "from-sky-50 to-white",    border: "border-sky-200",    activeBg: "bg-sky-50",    tab: "text-sky-600 border-sky-300 bg-sky-50"          },
  yellow:  { text: "text-amber-600",  bar: "from-amber-400 to-sky-400",    bg: "from-amber-50 to-white",  border: "border-amber-200",  activeBg: "bg-amber-50",  tab: "text-amber-600 border-amber-300 bg-amber-50"    },
  lime:    { text: "text-emerald-600",bar: "from-emerald-500 to-sky-400",  bg: "from-emerald-50 to-white",border: "border-emerald-200",activeBg: "bg-emerald-50",tab: "text-emerald-600 border-emerald-300 bg-emerald-50"},
  sky:     { text: "text-sky-600",    bar: "from-sky-500 to-indigo-400",   bg: "from-sky-50 to-white",    border: "border-sky-200",    activeBg: "bg-sky-50",    tab: "text-sky-600 border-sky-300 bg-sky-50"          },
};

function SkillBar({ name, level, note, color }: { name: string; level: number; note?: string; color: string }) {
  const t = colorTokens[color];
  return (
    <div className="group">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-slate-700 text-sm font-medium">{name}</span>
          {note && <span className="text-[10px] text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full border border-slate-200">{note}</span>}
        </div>
        <span className={`text-xs font-bold tabular-nums ${t.text} opacity-50 group-hover:opacity-100 transition-opacity`}>{level}%</span>
      </div>
      <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1.1, ease: "easeOut", delay: 0.1 }}
          className={`h-full rounded-full bg-gradient-to-r ${t.bar} relative`}
        >
          <div className="absolute right-0 top-0 bottom-0 w-3 bg-white/40 rounded-full blur-sm" />
        </motion.div>
      </div>
    </div>
  );
}

export default function Skills() {
  const [active, setActive] = useState(0);
  const group = skillGroups[active];
  const t = colorTokens[group.color];

  return (
    <section id="skills" className="py-24 section-divider">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <p className="text-indigo-600 text-sm font-semibold uppercase tracking-widest mb-3">Expertise</p>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900">Technical Skills</h2>
          <p className="text-slate-500 mt-3 max-w-xl text-sm">
            Core competencies across cloud infrastructure, automation, security, and observability.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-6 items-start">

          {/* ── Category tabs (left sidebar) ── */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {skillGroups.map((g, i) => {
              const tok = colorTokens[g.color];
              const isActive = i === active;
              return (
                <button key={g.category} onClick={() => setActive(i)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl border text-left whitespace-nowrap transition-all duration-200 flex-shrink-0 lg:flex-shrink
                    ${isActive ? `${tok.tab} shadow-md` : "border-slate-200 text-slate-500 hover:text-slate-700 hover:border-indigo-200 hover:bg-indigo-50/50"}`}>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all
                    ${isActive ? tok.activeBg + " " + tok.border + " border" : "bg-slate-100"}`}>
                    <g.Icon size={15} className={isActive ? tok.text : "text-slate-400"} strokeWidth={1.6} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`text-sm font-semibold ${isActive ? "" : "text-slate-600"}`}>{g.category}</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">{g.items.length} skills</p>
                  </div>
                  {isActive && (
                    <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${tok.text.replace("text-", "bg-")}`} />
                  )}
                </button>
              );
            })}
          </motion.div>

          {/* ── Skill detail panel (right) ── */}
          <AnimatePresence mode="wait">
            <motion.div key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className={`bg-gradient-to-br ${t.bg} border ${t.border} rounded-2xl p-8 card-shine min-h-[320px] shadow-sm`}>

              {/* Panel header */}
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-12 h-12 rounded-xl ${t.activeBg} border ${t.border} flex items-center justify-center`}>
                  <group.Icon size={22} className={t.text} strokeWidth={1.6} />
                </div>
                <div>
                  <h3 className={`text-xl font-black ${t.text}`}>{group.category}</h3>
                  <p className="text-slate-500 text-sm mt-0.5">{group.items.length} proficiencies tracked</p>
                </div>
              </div>

              {/* Skill bars */}
              <div className="grid md:grid-cols-2 gap-x-10 gap-y-5">
                {group.items.map(item => (
                  <SkillBar key={item.name} name={item.name} level={item.level} note={(item as {note?: string}).note} color={group.color} />
                ))}
              </div>

              {/* Expertise band */}
              <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap gap-2">
                {group.items.map(item => (
                  <div key={item.name} className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border ${t.border} ${t.activeBg}`}>
                    <div className={`w-1 h-4 rounded-full bg-gradient-to-b ${t.bar}`}
                      style={{ height: `${Math.round(item.level / 20) * 2 + 4}px` }} />
                    <span className={t.text + " font-medium"}>{item.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

