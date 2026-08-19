import { Mail, Phone, ExternalLink, ArrowUp } from "lucide-react";

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

const socialLinks = [
  { href: "mailto:mukeshravi3597@gmail.com", label: "Email", Icon: Mail },
  { href: "https://www.linkedin.com/in/mukesh-r-4543b2214", label: "LinkedIn", Icon: ExternalLink, external: true },
  { href: "tel:+918838154506", label: "+91 8838154506", Icon: Phone },
];

export default function Footer() {
  return (
    <footer className="border-t border-indigo-100 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="flex flex-col md:flex-row justify-between gap-10 mb-12">
          <div className="max-w-xs">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-sky-500 flex items-center justify-center text-sm font-black text-white shadow-md">
                MR
              </div>
              <div>
                <p className="font-black text-slate-900 text-lg leading-none">Mukesh R</p>
                <p className="text-indigo-600 text-xs font-medium mt-0.5">Senior Cloud & DevOps Engineer</p>
              </div>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Senior Cloud & DevOps Engineer — building scalable, secure AWS infrastructure and helping teams ship faster.
            </p>
          </div>

          <div>
            <p className="text-slate-400 text-xs uppercase tracking-widest font-semibold mb-4">Navigation</p>
            <div className="grid grid-cols-2 gap-x-10 gap-y-2">
              {footerLinks.map((link) => (
                <a key={link.href} href={link.href} className="text-slate-500 hover:text-indigo-600 text-sm transition">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-slate-400 text-xs uppercase tracking-widest font-semibold mb-4">Contact</p>
            <div className="space-y-3">
              {socialLinks.map(({ href, label, Icon, external }) => (
                <a key={label} href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="flex items-center gap-3 text-slate-500 hover:text-indigo-600 text-sm transition group">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 border border-slate-200 group-hover:border-indigo-300 flex items-center justify-center transition">
                    <Icon size={14} strokeWidth={1.6} />
                  </div>
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">
            © 2026 Mukesh R — Senior Cloud & DevOps Engineer. All rights reserved.
          </p>
          <a href="#about" className="flex items-center gap-2 text-slate-400 hover:text-indigo-600 text-sm transition group" aria-label="Back to top">
            <span>Back to top</span>
            <div className="w-7 h-7 rounded-lg bg-slate-100 border border-slate-200 group-hover:border-indigo-300 flex items-center justify-center transition">
              <ArrowUp size={13} />
            </div>
          </a>
        </div>

      </div>
    </footer>
  );
}
