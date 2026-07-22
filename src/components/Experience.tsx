import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Rocket, Cloud, Code2, Sprout } from "lucide-react";

const experiences = [
  {
    role: "Senior Cloud & DevOps Engineer",
    company: "Ilios Digital Pvt Ltd",
    period: "April 2026 – Present",
    type: "Full-Time",
    current: true,
    Icon: Rocket,
    color: "text-cyan-400",
    border: "border-cyan-500/30",
    dot: "bg-cyan-400",
    badgeColor: "bg-cyan-950 text-cyan-400 border-cyan-700",
    iconBg: "bg-cyan-500/15 border-cyan-500/30",
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
    color: "text-emerald-400",
    border: "border-emerald-500/30",
    dot: "bg-emerald-400",
    badgeColor: "bg-emerald-950 text-emerald-400 border-emerald-700",
    iconBg: "bg-emerald-500/15 border-emerald-500/30",
    highlights: [
      "Designed and deployed scalable, secure, and highly available AWS cloud infrastructure solutions.",
      "Supported and managed 30+ AWS client environments under cloud partnership engagements.",
      "Optimized AWS cloud costs using lifecycle policies, auto-scaling, and right-sizing strategies.",
      "Automated AWS billing variance analysis, reducing manual operational tasks by 60%.",
      "Implemented Infrastructure as Code (IaC) using Terraform for automated provisioning.",
      "Guided cross-functional teams on cloud-native application development and deployment strategies.",
    ],
  },
  {
    role: "Software Engineer – DevOps",
    company: "Decision Minds Pvt Ltd",
    period: "Nov 2022 – Feb 2024",
    type: "Full-Time",
    current: false,
    Icon: Code2,
    color: "text-purple-400",
    border: "border-purple-500/30",
    dot: "bg-purple-400",
    badgeColor: "bg-purple-950 text-purple-400 border-purple-700",
    iconBg: "bg-purple-500/15 border-purple-500/30",
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
    color: "text-slate-400",
    border: "border-slate-600/40",
    dot: "bg-slate-500",
    badgeColor: "bg-slate-800 text-slate-400 border-slate-600",
    iconBg: "bg-slate-800 border-slate-700",
    highlights: [
      "Configured and managed AWS services including EC2, S3, RDS, and VPC.",
      "Automated AMI backup processes using AWS Lambda, EventBridge, and Boto3.",
      "Improved system uptime by 40% through infrastructure optimization and monitoring.",
      "Reduced cloud costs by 20% through resource optimization strategies.",
      "Configured secure jump servers for remote infrastructure access.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 section-divider">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">Career</p>
          <h2 className="text-4xl md:text-5xl font-black">Professional Experience</h2>
          <p className="text-slate-400 mt-3 max-w-xl">
            4+ years of hands-on cloud and DevOps engineering across enterprise, startup, and government sectors.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-slate-700/30 to-transparent" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.role + exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.45 }}
                className="relative pl-16"
              >
                {/* Timeline icon */}
                <div className={`absolute left-0 top-0 w-12 h-12 rounded-xl border flex items-center justify-center shadow-lg ${exp.iconBg} ${exp.color}`}>
                  <exp.Icon size={20} strokeWidth={1.6} />
                </div>

                {/* Card */}
                <div className="bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-2xl p-7 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl card-shine">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className={`text-xl font-black ${exp.color}`}>{exp.role}</h3>
                        {exp.current && (
                          <span className="flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-semibold px-3 py-1 rounded-full">
                            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full pulse-ring inline-block" />
                            Current
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 mt-1.5">
                        <Briefcase size={13} className="text-slate-500" />
                        <p className="text-slate-300 font-semibold text-sm">{exp.company}</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <span className="text-slate-400 text-sm font-medium">{exp.period}</span>
                      <span className={`text-xs font-bold px-3 py-1 rounded-full border ${exp.badgeColor}`}>
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2.5">
                    {exp.highlights.map((point, j) => (
                      <li key={j} className="flex gap-3 text-slate-400 text-sm leading-relaxed">
                        <span className={`${exp.color} mt-0.5 shrink-0 text-xs font-bold`}>›</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 bg-gradient-to-r from-indigo-500/8 to-purple-500/8 border border-indigo-500/20 rounded-2xl p-8"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-11 h-11 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center">
              <GraduationCap size={20} className="text-indigo-400" strokeWidth={1.6} />
            </div>
            <h3 className="text-xl font-black text-indigo-400">Education</h3>
          </div>
          <div className="flex flex-wrap justify-between items-start gap-4">
            <div>
              <p className="text-xl font-bold text-white">
                Bachelor of Engineering – Electronics & Communication (ECE)
              </p>
              <p className="text-slate-400 mt-1 text-sm">K.S.K College of Engineering & Technology</p>
            </div>
            <span className="bg-slate-800 border border-slate-700 text-slate-400 text-sm px-4 py-2 rounded-xl font-medium">
              2015 – 2019
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
