import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { Cloud, Layers, Zap, DollarSign, TrendingUp, Clock, Server, ShieldCheck } from "lucide-react";

const metrics = [
  { label: "AWS Environments Managed", value: 30, suffix: "+", color: "text-indigo-600", bg: "from-indigo-50 to-indigo-50/30", border: "border-indigo-200", Icon: Cloud },
  { label: "Microservices Deployed",   value: 20, suffix: "+", color: "text-sky-600",    bg: "from-sky-50 to-sky-50/30",     border: "border-sky-200",    Icon: Layers },
  { label: "Manual Effort Reduced",    value: 60, suffix: "%", color: "text-amber-600",  bg: "from-amber-50 to-amber-50/30", border: "border-amber-200",  Icon: Zap },
  { label: "AWS Credits Secured",      value: 20, prefix: "$", suffix: "K+", color: "text-emerald-600", bg: "from-emerald-50 to-emerald-50/30", border: "border-emerald-200", Icon: DollarSign },
  { label: "Deployment Efficiency",    value: 80, suffix: "%", color: "text-indigo-600", bg: "from-indigo-50 to-indigo-50/30", border: "border-indigo-200", Icon: TrendingUp },
  { label: "Years of Experience",      value: 4,  suffix: "+", color: "text-sky-600",    bg: "from-sky-50 to-sky-50/30",     border: "border-sky-200",    Icon: Clock },
  { label: "Cloud Projects Delivered", value: 15, suffix: "+", color: "text-amber-600",  bg: "from-amber-50 to-amber-50/30", border: "border-amber-200",  Icon: Server },
  { label: "Security Audits Run",      value: 50, suffix: "+", color: "text-emerald-600",bg: "from-emerald-50 to-emerald-50/30", border: "border-emerald-200", Icon: ShieldCheck },
];

function AnimatedNumber({ value, color, prefix = "", suffix = "", inView }: {
  value: number; color: string; prefix?: string; suffix?: string; inView: boolean;
}) {
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { stiffness: 60, damping: 15 });
  const display = useTransform(spring, v => Math.round(v));
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => { if (inView) motionValue.set(value); }, [inView, motionValue, value]);
  useEffect(() => display.on("change", v => { if (ref.current) ref.current.textContent = `${prefix}${v}${suffix}`; }), [display, prefix, suffix]);
  return <span ref={ref} className={`text-3xl font-black tabular-nums ${color}`}>{prefix}0{suffix}</span>;
}

function MetricCard({ metric, inView }: { metric: typeof metrics[0]; inView: boolean }) {
  return (
    <div className={`flex-shrink-0 w-44 bg-gradient-to-b ${metric.bg} border ${metric.border} rounded-2xl p-5 text-center card-shine hover:-translate-y-1 transition-transform duration-200 mx-2 shadow-sm hover:shadow-md bg-white`}>
      <div className={`flex justify-center mb-3 ${metric.color}`}>
        <metric.Icon size={20} strokeWidth={1.5} />
      </div>
      <AnimatedNumber value={metric.value} color={metric.color} prefix={metric.prefix} suffix={metric.suffix} inView={inView} />
          <p className="text-slate-400 mt-2 text-xs leading-snug">{metric.label}</p>
    </div>
  );
}

export default function Metrics() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const doubled = [...metrics, ...metrics]; // duplicate for seamless loop

  return (
    <section ref={ref} className="py-20 section-divider overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center">
          <p className="text-indigo-600 text-sm font-semibold uppercase tracking-widest mb-3">By the Numbers</p>
          <h2 className="text-4xl md:text-5xl font-black">Impact & Achievements</h2>
          <p className="text-slate-500 mt-3 max-w-xl mx-auto text-sm">
            Measurable outcomes across enterprise, startup, and government cloud projects.
          </p>
        </motion.div>
      </div>

      {/* Marquee strip */}
      <div className="relative">
        {/* Edge fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#f8f7ff] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#f8f7ff] to-transparent z-10 pointer-events-none" />

        <div className="flex marquee-track">
          {doubled.map((metric, i) => (
            <MetricCard key={`${metric.label}-${i}`} metric={metric} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
