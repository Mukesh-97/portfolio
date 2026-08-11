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
  cyan:    { text: "text-cyan-400",    bar: "from-cyan-500 to-cyan-300",    bg: "from-cyan-500/10 to-cyan-500/3",    border: "border-cyan-500/25",    activeBg: "bg-cyan-500/15",   tab: "text-cyan-400 border-cyan-500/40 bg-cyan-500/10" },
  emerald: { text: "text-emerald-400", bar: "from-emerald-500 to-emerald-300", bg: "from-emerald-500/10 to-emerald-500/3", border: "border-emerald-500/25", activeBg: "bg-emerald-500/15", tab: "text-emerald-400 border-emerald-500/40 bg-emerald-500/10" },
  purple:  { text: "text-purple-400",  bar: "from-purple-500 to-purple-300",  bg: "from-purple-500/10 to-purple-500/3",  border: "border-purple-500/25",  activeBg: "bg-purple-500/15",  tab: "text-purple-400 border-purple-500/40 bg-purple-500/10" },
  orange:  { text: "text-orange-400",  bar: "from-orange-500 to-amber-300",   bg: "from-orange-500/10 to-orange-500/3",  border: "border-orange-500/25",  activeBg: "bg-orange-500/15",  tab: "text-orange-400 border-orange-500/40 bg-orange-500/10" },
  rose:    { text: "text-rose-400",    bar: "from-rose-500 to-pink-300",      bg: "from-rose-500/10 to-rose-500/3",      border: "border-rose-500/25",    activeBg: "bg-rose-500/15",    tab: "text-rose-400 border-rose-500/40 bg-rose-500/10" },
  yellow:  { text: "text-yellow-400",  bar: "from-yellow-500 to-amber-300",   bg: "from-yellow-500/10 to-yellow-500/3",  border: "border-yellow-500/25",  activeBg: "bg-yellow-500/15",  tab: "text-yellow-400 border-yellow-500/40 bg-yellow-500/10" },
  lime:    { text: "text-lime-400",    bar: "from-lime-500 to-green-300",     bg: "from-lime-500/10 to-lime-500/3",      border: "border-lime-500/25",    activeBg: "bg-lime-500/15",    tab: "text-lime-400 border-lime-500/40 bg-lime-500/10" },
  sky:     { text: "text-sky-400",     bar: "from-sky-500 to-blue-300",       bg: "from-sky-500/10 to-sky-500/3",        border: "border-sky-500/25",     activeBg: "bg-sky-500/15",     tab: "text-sky-400 border-sky-500/40 bg-sky-500/10" },
};

function SkillBar({ name, level, note, color }: { name: string; level: number; note?: string; color: string }) {
  const t = colorTokens[color];
  return (
    <div className="group">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-slate-200 text-sm font-medium">{name}</span>
          {note && <span className="text-[10px] text-slate-500 bg-slate-800/80 px-2 py-0.5 rounded-full border border-slate-700/50">{note}</span>}
        </div>
        <span className={`text-xs font-bold tabular-nums ${t.text} opacity-50 group-hover:opacity-100 transition-opacity`}>{level}%</span>
      </div>
      <div className="h-1.5 bg-slate-800/80 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: "easeOut", delay: 0.1 }}
          className={`h-full rounded-full bg-gradient-to-r ${t.bar} relative`}
        >
          {/* Shimmer highlight on bar */}
          <div className="absolute right-0 top-0 bottom-0 w-3 bg-white/20 rounded-full blur-sm" />
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
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">Expertise</p>
          <h2 className="text-4xl md:text-5xl font-black">Technical Skills</h2>
          <p className="text-slate-400 mt-3 max-w-xl text-sm">
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
                    ${isActive ? `${tok.tab} shadow-lg` : "border-slate-800 text-slate-500 hover:text-slate-300 hover:border-slate-700 hover:bg-slate-800/40"}`}>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all
                    ${isActive ? tok.activeBg + " " + tok.border + " border" : "bg-slate-800"}`}>
                    <g.Icon size={15} className={isActive ? tok.text : "text-slate-600"} strokeWidth={1.6} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`text-sm font-semibold ${isActive ? "" : "text-slate-400"}`}>{g.category}</p>
                    <p className="text-[11px] text-slate-600 mt-0.5">{g.items.length} skills</p>
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
              className={`bg-gradient-to-br ${t.bg} border ${t.border} rounded-2xl p-8 card-shine min-h-[320px]`}>

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
              <div className="mt-8 pt-6 border-t border-slate-800/60 flex flex-wrap gap-2">
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

