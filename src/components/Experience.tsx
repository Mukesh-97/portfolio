import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Rocket, Cloud, Code2, Sprout, MapPin } from "lucide-react";

const experiences = [
  {
    role: "Senior Cloud & DevOps Engineer",
    company: "Ilios Digital Pvt Ltd",
    period: "April 2026 – Present",
    type: "Full-Time",
    current: true,
    Icon: Rocket,
    color: "cyan",
    highlights: [
      "Leading cloud infrastructure and DevSecOps initiatives for enterprise and government-sector clients.",
      "Architecting highly available, scalable, and secure AWS cloud environments.",
      "Designing and managing CI/CD automation and GitOps workflows using Jenkins and ArgoCD.",
      "Driving cloud security improvements, infrastructure automation, and operational excellence.",
      "Mentoring junior engineers on AWS architecture, Kubernetes, Terraform, and DevOps best practices.",
    ],
  },
  {
    role: "Cloud Engineer",
    company: "Ilios Digital Pvt Ltd",
    period: "July 2024 – March 2026",
    type: "Full-Time",
    current: false,
    Icon: Cloud,
    color: "emerald",
    highlights: [
      "Designed and deployed scalable, secure, and highly available AWS cloud infrastructure solutions.",
      "Supported and managed 30+ AWS client environments under cloud partnership engagements.",
      "Optimized AWS cloud costs using lifecycle policies, auto-scaling, and right-sizing strategies.",
      "Automated AWS billing variance analysis, reducing manual operational tasks by 60%.",
      "Implemented Infrastructure as Code (IaC) using Terraform for automated provisioning.",
    ],
  },
  {
    role: "Software Engineer – DevOps",
    company: "Decision Minds Pvt Ltd",
    period: "Nov 2022 – Feb 2024",
    type: "Full-Time",
    current: false,
    Icon: Code2,
    color: "purple",
    highlights: [
      "Implemented CI/CD pipelines using Jenkins, reducing deployment effort by 80%.",
      "Containerized applications using Docker for faster and reliable deployments.",
      "Automated infrastructure provisioning using Terraform and Ansible.",
      "Monitored AWS infrastructure performance, billing, and troubleshooting activities.",
      "Improved deployment efficiency by 50% through Infrastructure as Code implementation.",
    ],
  },
  {
    role: "Cloud Intern",
    company: "Decision Minds Pvt Ltd",
    period: "Sep 2021 – Nov 2022",
    type: "Internship",
    current: false,
    Icon: Sprout,
    color: "slate",
    highlights: [
      "Configured and managed AWS services including EC2, S3, RDS, and VPC.",
      "Automated AMI backup processes using AWS Lambda, EventBridge, and Boto3.",
      "Improved system uptime by 40% through infrastructure optimization and monitoring.",
      "Reduced cloud costs by 20% through resource optimization strategies.",
    ],
  },
];

const colorTokens: Record<string, {
  text: string; border: string; iconBg: string; dot: string; badge: string; bar: string; glow: string;
}> = {
  cyan:    { text: "text-cyan-400",    border: "border-cyan-500/30",    iconBg: "bg-cyan-500/15 border-cyan-500/30",    dot: "bg-cyan-400 shadow-cyan-400/50",    badge: "bg-cyan-950 text-cyan-400 border-cyan-700",    bar: "bg-cyan-500",   glow: "hover:shadow-cyan-500/10" },
  emerald: { text: "text-emerald-400", border: "border-emerald-500/30", iconBg: "bg-emerald-500/15 border-emerald-500/30", dot: "bg-emerald-400 shadow-emerald-400/50", badge: "bg-emerald-950 text-emerald-400 border-emerald-700", bar: "bg-emerald-500", glow: "hover:shadow-emerald-500/10" },
  purple:  { text: "text-purple-400",  border: "border-purple-500/30",  iconBg: "bg-purple-500/15 border-purple-500/30",  dot: "bg-purple-400 shadow-purple-400/50",  badge: "bg-purple-950 text-purple-400 border-purple-700",  bar: "bg-purple-500",  glow: "hover:shadow-purple-500/10" },
  slate:   { text: "text-slate-400",   border: "border-slate-600/40",   iconBg: "bg-slate-800 border-slate-700",          dot: "bg-slate-500",                          badge: "bg-slate-800 text-slate-400 border-slate-600",   bar: "bg-slate-500",   glow: "" },
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 section-divider">
      <div className="max-w-5xl mx-auto px-6">

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">Career</p>
          <h2 className="text-4xl md:text-5xl font-black">Professional Experience</h2>
          <p className="text-slate-400 mt-3 max-w-xl text-sm">
            4+ years across enterprise, startup, and government cloud engineering.
          </p>
        </motion.div>

        <div className="relative">
          {/* Animated timeline line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
            className="absolute left-5 top-0 w-px bg-gradient-to-b from-cyan-500/60 via-purple-500/30 to-transparent origin-top"
          />

          <div className="space-y-6">
            {experiences.map((exp, i) => {
              const t = colorTokens[exp.color];
              return (
                <motion.div key={exp.role + exp.company}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.55, ease: "easeOut" }}
                  className="relative pl-14">

                  {/* Timeline dot */}
                  <div className={`absolute left-3.5 top-5 w-3 h-3 rounded-full shadow-lg ${t.dot} -translate-x-1/2 z-10`} />

                  {/* Card */}
                  <div className={`relative bg-slate-900/80 border border-slate-800 ${t.glow} rounded-2xl p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:border-slate-700 card-shine overflow-hidden`}>
                    {/* Left accent bar */}
                    <div className={`absolute left-0 top-4 bottom-4 w-0.5 ${t.bar} rounded-r-full opacity-60`} />

                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div className="flex items-start gap-4">
                        <div className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 ${t.iconBg} ${t.text}`}>
                          <exp.Icon size={18} strokeWidth={1.6} />
                        </div>
                        <div>
                          <div className="flex items-center gap-2.5 flex-wrap">
                            <h3 className={`text-lg font-black ${t.text}`}>{exp.role}</h3>
                            {exp.current && (
                              <span className="flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full pulse-ring-emerald inline-block" />
                                Current
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-1.5 mt-1">
                            <Briefcase size={12} className="text-slate-600" />
                            <p className="text-slate-300 font-semibold text-sm">{exp.company}</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-1.5">
                        <span className="text-slate-400 text-xs font-medium flex items-center gap-1.5">
                          <MapPin size={11} className="text-slate-600" />
                          {exp.period}
                        </span>
                        <span className={`text-xs font-bold px-3 py-0.5 rounded-full border ${t.badge}`}>{exp.type}</span>
                      </div>
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-2 ml-14">
                      {exp.highlights.map((point, j) => (
                        <li key={j} className="flex gap-2.5 text-slate-400 text-sm leading-relaxed">
                          <span className={`${t.text} shrink-0 mt-1 text-[10px]`}>▸</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Education */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mt-12 glass border border-indigo-500/20 rounded-2xl p-7">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-11 h-11 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center">
              <GraduationCap size={20} className="text-indigo-400" strokeWidth={1.6} />
            </div>
            <h3 className="text-lg font-black text-indigo-400">Education</h3>
          </div>
          <div className="flex flex-wrap justify-between items-start gap-4">
            <div>
              <p className="text-white font-bold">Bachelor of Engineering – Electronics & Communication</p>
              <p className="text-slate-400 mt-1 text-sm">K.S.K College of Engineering & Technology</p>
            </div>
            <span className="glass border border-slate-700/50 text-slate-400 text-sm px-4 py-2 rounded-xl font-medium">
              2015 – 2019
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

