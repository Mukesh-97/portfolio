import { motion } from "framer-motion";
import { MapPin, Mail, Phone, ExternalLink, ArrowRight, CheckCircle } from "lucide-react";
import { useState } from "react";

const contactCards = [
  {
    label: "Location",
    value: "Chennai, Tamil Nadu, India",
    sub: "Available for remote & on-site",
    Icon: MapPin,
    color: "text-cyan-400",
    iconBg: "bg-cyan-500/15 border-cyan-500/30",
    href: null as string | null,
    external: false,
  },
  {
    label: "Email",
    value: "mukeshravi3597@gmail.com",
    sub: "Preferred contact method",
    Icon: Mail,
    color: "text-emerald-400",
    iconBg: "bg-emerald-500/15 border-emerald-500/30",
    href: "mailto:mukeshravi3597@gmail.com",
    external: false,
  },
  {
    label: "Phone",
    value: "+91 8838154506",
    sub: "Mon – Sat, 9am – 6pm IST",
    Icon: Phone,
    color: "text-purple-400",
    iconBg: "bg-purple-500/15 border-purple-500/30",
    href: "tel:+918838154506",
    external: false,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/mukesh-r-4543b2214",
    sub: "Connect professionally",
    Icon: ExternalLink,
    color: "text-blue-400",
    iconBg: "bg-blue-500/15 border-blue-500/30",
    href: "https://www.linkedin.com/in/mukesh-r-4543b2214",
    external: true,
  },
];

const openRoles = [
  "Senior Cloud & DevOps Engineer",
  "AWS Solutions Architect",
  "Platform / Infrastructure Engineer",
  "Cloud Consultant",
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("mukeshravi3597@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 section-divider">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">Get in Touch</p>
          <h2 className="text-4xl md:text-5xl font-black">Let's Build Together</h2>
          <p className="text-slate-400 mt-3 max-w-xl text-base leading-relaxed">
            Open to Senior Cloud & DevOps Engineer roles, cloud consulting engagements,
            and infrastructure modernization projects.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">

          {/* Left: Contact cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            {contactCards.map(({ label, value, sub, Icon, color, iconBg, href, external }) => {
              const inner = (
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl border flex items-center justify-center shrink-0 ${iconBg} ${color}`}>
                    <Icon size={20} strokeWidth={1.6} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-slate-500 text-xs uppercase tracking-widest font-medium mb-0.5">{label}</p>
                    <p className={`font-semibold text-sm ${href ? color : "text-white"} truncate`}>{value}</p>
                    <p className="text-slate-600 text-xs mt-0.5">{sub}</p>
                  </div>
                  {href && (
                    <ArrowRight size={15} className={`shrink-0 ${color} opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all`} />
                  )}
                </div>
              );

              return href ? (
                <a
                  key={label}
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group bg-slate-900 border border-slate-800 hover:border-slate-600 rounded-2xl px-6 py-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg card-shine"
                >
                  {inner}
                </a>
              ) : (
                <div key={label} className="bg-slate-900 border border-slate-800 rounded-2xl px-6 py-5">
                  {inner}
                </div>
              );
            })}
          </motion.div>

          {/* Right: CTA panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            {/* Open to roles */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-7">
              <p className="text-slate-400 text-xs uppercase tracking-widest font-semibold mb-4">Open to Roles</p>
              <div className="flex flex-col gap-3">
                {openRoles.map((role) => (
                  <div key={role} className="flex items-center gap-3">
                    <CheckCircle size={16} className="text-emerald-400 shrink-0" strokeWidth={2} />
                    <span className="text-slate-300 text-sm font-medium">{role}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick reach */}
            <div className="bg-gradient-to-br from-cyan-500/10 to-indigo-500/10 border border-cyan-500/20 rounded-2xl p-7">
              <p className="text-white font-black text-xl mb-1">Ready to hire?</p>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                Drop an email directly or copy the address to reach out via your preferred platform.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="mailto:mukeshravi3597@gmail.com"
                  className="group flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-indigo-500 hover:from-cyan-400 hover:to-indigo-400 px-6 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 hover:-translate-y-0.5"
                >
                  <Mail size={15} />
                  Send Email
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>

                <button
                  onClick={handleCopyEmail}
                  className={`flex-1 flex items-center justify-center gap-2 border px-6 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 ${
                    copied
                      ? "border-emerald-500/50 bg-emerald-500/10 text-emerald-400"
                      : "border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white hover:bg-slate-800/60"
                  }`}
                >
                  {copied ? (
                    <>
                      <CheckCircle size={15} />
                      Copied!
                    </>
                  ) : (
                    "Copy Email"
                  )}
                </button>
              </div>

              <a
                href="https://www.linkedin.com/in/mukesh-r-4543b2214"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-3 flex items-center justify-center gap-2 border border-blue-500/30 hover:border-blue-500/60 bg-blue-500/5 hover:bg-blue-500/10 px-6 py-3.5 rounded-xl font-semibold text-sm text-blue-400 transition-all duration-200 hover:-translate-y-0.5 w-full"
              >
                <ExternalLink size={15} />
                Connect on LinkedIn
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform ml-auto" />
              </a>
            </div>

            {/* Response time badge */}
            <div className="flex items-center gap-3 bg-slate-900 border border-slate-800 rounded-2xl px-6 py-4">
              <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full pulse-ring shrink-0" />
              <p className="text-slate-400 text-sm">
                Typically responds within <span className="text-white font-semibold">24 hours</span>
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
