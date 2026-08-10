import { motion } from "framer-motion";
import { Lightbulb, Users, Trophy, Globe } from "lucide-react";

const leadershipItems = [
  {
    title: "Cloud Innovation & Automation",
    Icon: Lightbulb,
    color: "text-cyan-400",
    border: "border-cyan-500/25",
    bg: "from-cyan-500/8",
    iconBg: "bg-cyan-500/15 border-cyan-500/30",
    points: [
      "Developed AI-powered IaC Automation Platform for rapid AWS resource provisioning with RBAC.",
      "Built internal AWS Operations Dashboard automating monitoring, security auditing, and cost optimization.",
      "Led GenAI competency initiatives and cloud-native technology adoption across teams.",
      "Participated in AWS Well-Architected Reviews securing $20,000+ in AWS credits for clients.",
    ],
  },
  {
    title: "Team Leadership & Mentoring",
    Icon: Users,
    color: "text-emerald-400",
    border: "border-emerald-500/25",
    bg: "from-emerald-500/8",
    iconBg: "bg-emerald-500/15 border-emerald-500/30",
    points: [
      "Mentored junior cloud and DevOps engineers on AWS best practices and Kubernetes.",
      "Created reusable Terraform modules to standardize infrastructure provisioning across projects.",
      "Led cross-functional collaboration between development, security, and operations teams.",
      "Improved team onboarding workflows and delivery processes for cloud projects.",
    ],
  },
  {
    title: "Awards & Recognition",
    Icon: Trophy,
    color: "text-yellow-400",
    border: "border-yellow-500/25",
    bg: "from-yellow-500/8",
    iconBg: "bg-yellow-500/15 border-yellow-500/30",
    points: [
      "Best Employee of the Year – 2024 at Ilios Digital Pvt Ltd.",
      "Recognized for outstanding contributions to cloud infrastructure and client success.",
      "Delivered multiple high-impact government and enterprise cloud transformation projects.",
    ],
  },
  {
    title: "Languages",
    Icon: Globe,
    color: "text-purple-400",
    border: "border-purple-500/25",
    bg: "from-purple-500/8",
    iconBg: "bg-purple-500/15 border-purple-500/30",
    points: [
      "Tamil – Native",
      "English – Fluent (Professional)",
    ],
  },
];

export default function Leadership() {
  return (
    <section id="leadership" className="py-24 section-divider">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">Beyond the Code</p>
          <h2 className="text-4xl md:text-5xl font-black">Leadership & Recognition</h2>
          <p className="text-slate-400 mt-3 max-w-xl">
            Driving innovation, mentoring teams, and delivering measurable impact across cloud projects.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {leadershipItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className={`bg-gradient-to-b ${item.bg} to-transparent bg-slate-900 border ${item.border} rounded-2xl p-7 hover:-translate-y-0.5 transition-all duration-200 card-shine`}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-10 h-10 rounded-xl border flex items-center justify-center ${item.iconBg} ${item.color}`}>
                  <item.Icon size={18} strokeWidth={1.6} />
                </div>
                <h3 className={`text-lg font-black ${item.color}`}>{item.title}</h3>
              </div>
              <ul className="space-y-3">
                {item.points.map((point, j) => (
                  <li key={j} className="flex gap-3 text-slate-300 text-sm leading-relaxed">
                    <span className={`${item.color} mt-0.5 shrink-0 font-bold text-xs`}>›</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
