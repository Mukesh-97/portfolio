import { motion } from "framer-motion";
import { Lightbulb, Users, Trophy, Globe } from "lucide-react";

const leadershipItems = [
  {
    title: "Cloud Innovation & Automation",
    Icon: Lightbulb,
    color: "text-indigo-600",
    border: "border-indigo-200",
    bg: "from-indigo-50",
    iconBg: "bg-indigo-100 border-indigo-200",
    bullet: "text-indigo-500",
  },
  {
    title: "Team Leadership & Mentoring",
    Icon: Users,
    color: "text-sky-600",
    border: "border-sky-200",
    bg: "from-sky-50",
    iconBg: "bg-sky-100 border-sky-200",
    bullet: "text-sky-500",
  },
  {
    title: "Awards & Recognition",
    Icon: Trophy,
    color: "text-amber-600",
    border: "border-amber-200",
    bg: "from-amber-50",
    iconBg: "bg-amber-100 border-amber-200",
    bullet: "text-amber-500",
  },
  {
    title: "Languages",
    Icon: Globe,
    color: "text-slate-600",
    border: "border-slate-200",
    bg: "from-slate-50",
    iconBg: "bg-slate-100 border-slate-200",
    bullet: "text-slate-400",
  },
];

const allPoints = [
  [
    "Developed AI-powered IaC Automation Platform for rapid AWS resource provisioning with RBAC.",
    "Built internal AWS Operations Dashboard automating monitoring, security auditing, and cost optimization.",
    "Led GenAI competency initiatives and cloud-native technology adoption across teams.",
    "Participated in AWS Well-Architected Reviews securing $20,000+ in AWS credits for clients.",
  ],
  [
    "Mentored junior cloud and DevOps engineers on AWS best practices and Kubernetes.",
    "Created reusable Terraform modules to standardize infrastructure provisioning across projects.",
    "Led cross-functional collaboration between development, security, and operations teams.",
    "Improved team onboarding workflows and delivery processes for cloud projects.",
  ],
  [
    "Best Employee of the Year – 2024 at Ilios Digital Pvt Ltd.",
    "Recognized for outstanding contributions to cloud infrastructure and client success.",
    "Delivered multiple high-impact government and enterprise cloud transformation projects.",
  ],
  [
    "Tamil – Native",
    "English – Fluent (Professional)",
  ],
];

export default function Leadership() {
  return (
    <section id="leadership" className="py-24 section-divider">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
          <p className="text-indigo-600 text-sm font-semibold uppercase tracking-widest mb-3">Beyond the Code</p>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900">Leadership & Recognition</h2>
          <p className="text-slate-500 mt-3 max-w-xl">
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
              className={`bg-gradient-to-b ${item.bg} to-white bg-white border ${item.border} rounded-2xl p-7 hover:-translate-y-0.5 transition-all duration-200 card-shine shadow-sm hover:shadow-md`}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-10 h-10 rounded-xl border flex items-center justify-center ${item.iconBg} ${item.color}`}>
                  <item.Icon size={18} strokeWidth={1.6} />
                </div>
                <h3 className={`text-lg font-black ${item.color}`}>{item.title}</h3>
              </div>
              <ul className="space-y-3">
                {allPoints[i].map((point, j) => (
                  <li key={j} className="flex gap-3 text-slate-600 text-sm leading-relaxed">
                    <span className={`${item.bullet} mt-0.5 shrink-0 font-bold text-xs`}>›</span>
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
