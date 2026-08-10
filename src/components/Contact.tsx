import { motion } from "framer-motion";
import { MapPin, Mail, Phone, ExternalLink, ArrowRight, CheckCircle, Send } from "lucide-react";
import { useState } from "react";

const contactCards = [
  { label: "Location", value: "Chennai, Tamil Nadu, India", sub: "Remote & on-site available", Icon: MapPin,       color: "cyan",    href: null as string | null, external: false },
  { label: "Email",    value: "mukeshravi3597@gmail.com",   sub: "Preferred contact method",  Icon: Mail,          color: "emerald", href: "mailto:mukeshravi3597@gmail.com", external: false },
  { label: "Phone",    value: "+91 8838154506",             sub: "Mon – Sat, 9am – 6pm IST",  Icon: Phone,         color: "purple",  href: "tel:+918838154506", external: false },
  { label: "LinkedIn", value: "linkedin.com/in/mukesh-r",   sub: "Connect professionally",    Icon: ExternalLink,  color: "blue",    href: "https://www.linkedin.com/in/mukesh-r-4543b2214", external: true },
];

const openRoles = [
  "Senior Cloud & DevOps Engineer",
  "AWS Solutions Architect",
  "Platform / Infrastructure Engineer",
  "Cloud Consultant",
];

const cardColors: Record<string, { icon: string; border: string; hover: string }> = {
  cyan:    { icon: "bg-cyan-500/15 border-cyan-500/30 text-cyan-400",    border: "border-slate-800", hover: "hover:border-cyan-500/30" },
  emerald: { icon: "bg-emerald-500/15 border-emerald-500/30 text-emerald-400", border: "border-slate-800", hover: "hover:border-emerald-500/30" },
  purple:  { icon: "bg-purple-500/15 border-purple-500/30 text-purple-400",  border: "border-slate-800", hover: "hover:border-purple-500/30" },
  blue:    { icon: "bg-blue-500/15 border-blue-500/30 text-blue-400",      border: "border-slate-800", hover: "hover:border-blue-500/30" },
};

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("mukeshravi3597@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 section-divider">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">Get in Touch</p>
          <h2 className="text-4xl md:text-5xl font-black">Let's Build Together</h2>
          <p className="text-slate-400 mt-3 max-w-xl text-sm leading-relaxed">
            Open to Senior Cloud & DevOps roles, consulting engagements, and infrastructure modernization projects.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">

          {/* ── Left: contact cards ── */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="flex flex-col gap-3">
            {contactCards.map(({ label, value, sub, Icon, color, href, external }) => {
              const c = cardColors[color];
              const inner = (
                <div className="flex items-center gap-4">
                  <div className={`w-11 h-11 rounded-xl border flex items-center justify-center shrink-0 ${c.icon}`}>
                    <Icon size={18} strokeWidth={1.6} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-slate-600 text-[10px] uppercase tracking-widest font-semibold mb-0.5">{label}</p>
                    <p className="text-white font-semibold text-sm truncate">{value}</p>
                    <p className="text-slate-600 text-xs mt-0.5">{sub}</p>
                  </div>
                  {href && <ArrowRight size={14} className="text-slate-700 group-hover:text-slate-400 group-hover:translate-x-1 transition-all shrink-0" />}
                </div>
              );
              return href ? (
                <a key={label} href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className={`group glass border ${c.border} ${c.hover} rounded-2xl px-5 py-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg card-shine`}>
                  {inner}
                </a>
              ) : (
                <div key={label} className={`glass border ${c.border} rounded-2xl px-5 py-4`}>{inner}</div>
              );
            })}
          </motion.div>

          {/* ── Right: CTA panel ── */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.1 }} className="flex flex-col gap-4">

            {/* Open to roles */}
            <div className="glass border border-slate-800 rounded-2xl p-6">
              <p className="text-slate-500 text-xs uppercase tracking-widest font-semibold mb-4">Open to Roles</p>
              <div className="grid grid-cols-1 gap-2.5">
                {openRoles.map(role => (
                  <div key={role} className="flex items-center gap-3">
                    <CheckCircle size={15} className="text-emerald-400 shrink-0" strokeWidth={2} />
                    <span className="text-slate-300 text-sm font-medium">{role}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Glowing CTA card */}
            <div className="relative overflow-hidden rounded-2xl p-px">
              {/* Animated gradient border */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/40 via-indigo-500/30 to-violet-500/40 rounded-2xl" />
              <div className="relative glass rounded-[calc(1rem-1px)] p-6">
                <p className="text-white font-black text-xl mb-1">Ready to hire?</p>
                <p className="text-slate-400 text-sm mb-5 leading-relaxed">
                  I typically respond within 24 hours. Drop an email or copy the address.
                </p>

                <div className="flex flex-col sm:flex-row gap-2.5 mb-2.5">
                  <a href="mailto:mukeshravi3597@gmail.com"
                    className="group flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-indigo-500 hover:from-cyan-400 hover:to-indigo-400 px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-200 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5">
                    <Send size={14} />
                    Send Email
                    <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                  <button onClick={handleCopy}
                    className={`flex-1 flex items-center justify-center gap-2 border px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 ${
                      copied ? "border-emerald-500/50 bg-emerald-500/10 text-emerald-400" : "border-slate-700/60 hover:border-slate-500 text-slate-300 hover:text-white hover:bg-white/5"
                    }`}>
                    {copied ? <><CheckCircle size={14} /> Copied!</> : "Copy Email"}
                  </button>
                </div>

                <a href="https://www.linkedin.com/in/mukesh-r-4543b2214" target="_blank" rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-2 border border-blue-500/30 hover:border-blue-400/50 bg-blue-500/5 hover:bg-blue-500/10 px-5 py-3 rounded-xl font-semibold text-sm text-blue-400 transition-all duration-200 hover:-translate-y-0.5 w-full">
                  <ExternalLink size={14} />
                  Connect on LinkedIn
                  <ArrowRight size={13} className="ml-auto group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Response time */}
            <div className="flex items-center gap-3 glass border border-slate-800 rounded-2xl px-5 py-3.5">
              <span className="w-2 h-2 bg-emerald-400 rounded-full pulse-ring-emerald shrink-0" />
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
