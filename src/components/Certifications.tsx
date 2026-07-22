import { motion } from "framer-motion";
import { certifications } from "../data/certifications";
import { BadgeCheck, Award } from "lucide-react";

const colorMap: Record<string, {
  badge: string;
  border: string;
  text: string;
  bg: string;
  iconBg: string;
}> = {
  cyan: {
    badge: "bg-cyan-950 text-cyan-300 border-cyan-700",
    border: "border-cyan-500/25 hover:border-cyan-500/55",
    text: "text-cyan-400",
    bg: "from-cyan-500/8 to-transparent",
    iconBg: "bg-cyan-500/15 border-cyan-500/30 text-cyan-400",
  },
  emerald: {
    badge: "bg-emerald-950 text-emerald-300 border-emerald-700",
    border: "border-emerald-500/25 hover:border-emerald-500/55",
    text: "text-emerald-400",
    bg: "from-emerald-500/8 to-transparent",
    iconBg: "bg-emerald-500/15 border-emerald-500/30 text-emerald-400",
  },
  purple: {
    badge: "bg-purple-950 text-purple-300 border-purple-700",
    border: "border-purple-500/25 hover:border-purple-500/55",
    text: "text-purple-400",
    bg: "from-purple-500/8 to-transparent",
    iconBg: "bg-purple-500/15 border-purple-500/30 text-purple-400",
  },
};

const certMeta: Record<string, { issuer: string; level: string }> = {
  SAP: { issuer: "Amazon Web Services", level: "Professional" },
  SAA: { issuer: "Amazon Web Services", level: "Associate" },
  SOA: { issuer: "Amazon Web Services", level: "Associate" },
  AIF: { issuer: "Amazon Web Services", level: "Foundational" },
  GenAI: { issuer: "Databricks", level: "Certification" },
};

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 section-divider">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">Credentials</p>
          <h2 className="text-4xl md:text-5xl font-black">Certifications</h2>
          <p className="text-slate-400 mt-3 max-w-xl">
            Industry-recognized cloud and AI certifications validating expertise across AWS and emerging technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, i) => {
            const styles = colorMap[cert.color] ?? colorMap["cyan"];
            const meta = certMeta[cert.badge];
            return (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className={`group bg-gradient-to-b ${styles.bg} bg-slate-900 border ${styles.border} p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl card-shine`}
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl border flex items-center justify-center shrink-0 ${styles.iconBg}`}>
                    <BadgeCheck size={22} strokeWidth={1.6} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className={`font-bold text-sm text-white group-hover:${styles.text} transition leading-snug`}>
                        {cert.name}
                      </h3>
                      <span className={`shrink-0 text-xs font-black px-2.5 py-1 rounded-lg border ${styles.badge}`}>
                        {cert.badge}
                      </span>
                    </div>
                    {meta && (
                      <p className="text-slate-500 text-xs mt-1">{meta.issuer}</p>
                    )}
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  {meta && (
                    <span className={`text-xs font-semibold ${styles.text} bg-slate-800 px-3 py-1 rounded-full`}>
                      {meta.level}
                    </span>
                  )}
                  <span className="text-slate-500 text-xs ml-auto">
                    Valid: {cert.validity}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* AWS Well-Architected highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 bg-gradient-to-r from-yellow-900/20 to-orange-900/10 border border-yellow-700/30 rounded-2xl p-6 flex flex-wrap items-center justify-between gap-4"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-yellow-500/15 border border-yellow-500/30 flex items-center justify-center text-yellow-400">
              <Award size={24} strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-yellow-400 font-bold text-lg">AWS Well-Architected Partner Review</p>
              <p className="text-slate-400 text-sm mt-0.5">Participated and secured $20,000+ in AWS credits for clients</p>
            </div>
          </div>
          <span className="bg-yellow-500/15 border border-yellow-500/30 text-yellow-400 font-semibold px-5 py-2 rounded-xl text-sm">
            $20K+ Credits
          </span>
        </motion.div>
      </div>
    </section>
  );
}
