import { motion } from "framer-motion";
import {
  Cloud, Container, GitBranch, Server, Activity,
  ShieldCheck, Terminal, GitMerge,
} from "lucide-react";

const skillGroups = [
  {
    category: "Cloud Platforms",
    Icon: Cloud,
    color: "text-cyan-400",
    border: "border-cyan-500/25",
    bg: "from-cyan-500/8 to-transparent",
    items: [
      { name: "AWS", level: 95, badge: "Expert" },
      { name: "Google Cloud Platform", level: 70, badge: "Intermediate" },
      { name: "Microsoft Azure", level: 65, badge: "Intermediate" },
    ],
  },
  {
    category: "Containers & Orchestration",
    Icon: Container,
    color: "text-emerald-400",
    border: "border-emerald-500/25",
    bg: "from-emerald-500/8 to-transparent",
    items: [
      { name: "Kubernetes (EKS)", level: 90, badge: "" },
      { name: "Docker", level: 92, badge: "" },
    ],
  },
  {
    category: "CI/CD & GitOps",
    Icon: GitBranch,
    color: "text-purple-400",
    border: "border-purple-500/25",
    bg: "from-purple-500/8 to-transparent",
    items: [
      { name: "Jenkins", level: 88, badge: "" },
      { name: "ArgoCD", level: 70, badge: "" },
      { name: "GitLab CI/CD", level: 40, badge: "" },
      { name: "Gitea", level: 40, badge: "" },
    ],
  },
  {
    category: "Infrastructure as Code",
    Icon: Server,
    color: "text-orange-400",
    border: "border-orange-500/25",
    bg: "from-orange-500/8 to-transparent",
    items: [
      { name: "Terraform", level: 80, badge: "" },
      { name: "Ansible", level: 70, badge: "" },
    ],
  },
  {
    category: "Monitoring & Logging",
    Icon: Activity,
    color: "text-rose-400",
    border: "border-rose-500/25",
    bg: "from-rose-500/8 to-transparent",
    items: [
      { name: "Prometheus", level: 85, badge: "" },
      { name: "Grafana", level: 85, badge: "" },
      { name: "EFK Stack", level: 80, badge: "" },
      { name: "CloudWatch", level: 90, badge: "" },
    ],
  },
  {
    category: "Security & DevSecOps",
    Icon: ShieldCheck,
    color: "text-yellow-400",
    border: "border-yellow-500/25",
    bg: "from-yellow-500/8 to-transparent",
    items: [
      { name: "Trivy (Image Scanning)", level: 88, badge: "" },
      { name: "IAM Best Practices", level: 92, badge: "" },
      { name: "Vulnerability Management", level: 85, badge: "" },
      { name: "Security Auditing", level: 85, badge: "" },
    ],
  },
  {
    category: "Scripting & Automation",
    Icon: Terminal,
    color: "text-lime-400",
    border: "border-lime-500/25",
    bg: "from-lime-500/8 to-transparent",
    items: [
      { name: "Python", level: 50, badge: "Basics" },
      { name: "Bash / Shell", level: 70, badge: "Basics" },
    ],
  },
  {
    category: "Version Control",
    Icon: GitMerge,
    color: "text-sky-400",
    border: "border-sky-500/25",
    bg: "from-sky-500/8 to-transparent",
    items: [
      { name: "Git", level: 80, badge: "" },
      { name: "GitHub", level: 80, badge: "" },
    ],
  },
];

const barColorMap: Record<string, string> = {
  "text-cyan-400": "from-cyan-500 to-cyan-400",
  "text-emerald-400": "from-emerald-500 to-emerald-400",
  "text-purple-400": "from-purple-500 to-purple-400",
  "text-orange-400": "from-orange-500 to-orange-400",
  "text-rose-400": "from-rose-500 to-rose-400",
  "text-yellow-400": "from-yellow-500 to-yellow-400",
  "text-lime-400": "from-lime-500 to-lime-400",
  "text-sky-400": "from-sky-500 to-sky-400",
};

function SkillBar({ name, level, badge, color }: { name: string; level: number; badge: string; color: string }) {
  return (
    <div className="group">
      <div className="flex items-center justify-between mb-1.5">
        <div className="flex items-center gap-2">
          <span className="text-slate-300 text-sm font-medium">{name}</span>
          {badge && (
            <span className="text-xs text-slate-500 bg-slate-800 px-2 py-0.5 rounded-full border border-slate-700">
              {badge}
            </span>
          )}
        </div>
        <span className={`text-xs font-bold ${color} opacity-60 group-hover:opacity-100 transition`}>
          {level}%
        </span>
      </div>
      <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
          className={`h-full rounded-full bg-gradient-to-r ${barColorMap[color] ?? "from-cyan-500 to-cyan-400"}`}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 section-divider">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">Expertise</p>
          <h2 className="text-4xl md:text-5xl font-black">Technical Skills</h2>
          <p className="text-slate-400 mt-3 max-w-xl">
            Core competencies across cloud infrastructure, automation, security, and observability.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillGroups.map(({ category, Icon, color, border, bg, items }, groupIdx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: groupIdx * 0.06, duration: 0.4 }}
              className={`relative bg-gradient-to-b ${bg} bg-slate-900 border ${border} rounded-2xl p-6 hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 card-shine`}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-9 h-9 rounded-lg bg-slate-800 border ${border} flex items-center justify-center ${color}`}>
                  <Icon size={17} strokeWidth={1.6} />
                </div>
                <h3 className={`text-sm font-bold ${color} uppercase tracking-wide leading-tight`}>
                  {category}
                </h3>
              </div>
              <div className="space-y-4">
                {items.map((item) => (
                  <SkillBar key={item.name} {...item} color={color} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
