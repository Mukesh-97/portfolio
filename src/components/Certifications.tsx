import { motion } from "framer-motion";
import { certifications } from "../data/certifications";
import { BadgeCheck, Award, ExternalLink } from "lucide-react";

const colorMap: Record<string, { badge: string; border: string; text: string; bg: string; iconBg: string }> = {
  cyan: {
    badge:  "bg-indigo-100 text-indigo-700 border-indigo-300",
    border: "border-indigo-200 hover:border-indigo-400",
    text:   "text-indigo-600",
    bg:     "from-indigo-50 to-transparent",
    iconBg: "bg-indigo-100 border-indigo-200 text-indigo-600",
  },
  emerald: {
    badge:  "bg-sky-100 text-sky-700 border-sky-300",
    border: "border-sky-200 hover:border-sky-400",
    text:   "text-sky-600",
    bg:     "from-sky-50 to-transparent",
    iconBg: "bg-sky-100 border-sky-200 text-sky-600",
  },
  purple: {
    badge:  "bg-indigo-100 text-indigo-700 border-indigo-300",
    border: "border-indigo-200 hover:border-indigo-400",
    text:   "text-indigo-600",
    bg:     "from-indigo-50 to-transparent",
    iconBg: "bg-indigo-100 border-indigo-200 text-indigo-600",
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
          <p className="text-indigo-600 text-sm font-semibold uppercase tracking-widest mb-3">Credentials</p>
          <h2 className="text-4xl md:text-5xl font-black">Certifications</h2>
          <p className="text-slate-400 mt-3 max-w-xl">
            Industry-recognized cloud and AI certifications validating expertise across AWS and emerging technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, i) => {
            const styles = colorMap[cert.color] ?? colorMap["cyan"];
            const meta = certMeta[cert.badge];
            const isExpired = (cert as { expired?: boolean }).expired === true;
            return (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className={`group bg-gradient-to-b ${styles.bg} bg-white border ${isExpired ? "border-slate-200 opacity-60" : styles.border} p-6 rounded-2xl transition-all duration-300 ${isExpired ? "" : "hover:-translate-y-1 hover:shadow-lg"} card-shine shadow-sm`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl border flex items-center justify-center shrink-0 ${isExpired ? "bg-slate-100 border-slate-200 text-slate-400" : styles.iconBg}`}>
                    <BadgeCheck size={22} strokeWidth={1.6} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className={`font-bold text-sm ${isExpired ? "text-slate-400" : "text-slate-800 group-hover:" + styles.text} transition leading-snug`}>
                        {cert.name}
                      </h3>
                      <span className={`shrink-0 text-xs font-black px-2.5 py-1 rounded-lg border ${isExpired ? "bg-slate-100 text-slate-400 border-slate-200" : styles.badge}`}>
                        {cert.badge}
                      </span>
                    </div>
                    {meta && (
                      <p className="text-slate-600 text-xs mt-1">{meta.issuer}</p>
                    )}
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  {meta && (
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${isExpired ? "text-slate-400 bg-slate-100" : styles.text + " bg-slate-100"}`}>
                      {meta.level}
                    </span>
                  )}
                  <div className="flex items-center gap-2 ml-auto">
                    {isExpired ? (
                      <span className="text-xs text-slate-400 italic">Expired {cert.validity.split("–")[1].trim()}</span>
                    ) : (
                      <span className="text-slate-400 text-xs">Valid: {cert.validity}</span>
                    )}
                    {!isExpired && cert.link && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-lg border transition-all duration-200 ${styles.badge} hover:opacity-80`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={11} />
                        Verify
                      </a>
                    )}
                  </div>
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
          className="mt-10 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-6 flex flex-wrap items-center justify-between gap-4 shadow-sm"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-100 border border-amber-200 flex items-center justify-center text-amber-600">
              <Award size={24} strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-amber-700 font-bold text-lg">AWS Well-Architected Partner Review</p>
              <p className="text-slate-500 text-sm mt-0.5">Participated and secured $20,000+ in AWS credits for clients</p>
            </div>
          </div>
          <span className="bg-amber-100 border border-amber-200 text-amber-700 font-semibold px-5 py-2 rounded-xl text-sm">
            $20K+ Credits
          </span>
        </motion.div>
      </div>
    </section>
  );
}
