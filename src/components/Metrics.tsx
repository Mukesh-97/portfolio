import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { Cloud, Layers, Zap, DollarSign, TrendingUp, Clock, Server, ShieldCheck } from "lucide-react";

const metrics = [
  { label: "AWS Environments Managed", value: 30, suffix: "+", color: "text-cyan-400", bg: "from-cyan-500/15 to-cyan-500/5", border: "border-cyan-500/25", Icon: Cloud },
  { label: "Microservices Deployed",   value: 20, suffix: "+", color: "text-emerald-400", bg: "from-emerald-500/15 to-emerald-500/5", border: "border-emerald-500/25", Icon: Layers },
  { label: "Manual Effort Reduced",    value: 60, suffix: "%", color: "text-purple-400",  bg: "from-purple-500/15 to-purple-500/5",  border: "border-purple-500/25",  Icon: Zap },
  { label: "AWS Credits Secured",      value: 20, prefix: "$", suffix: "K+", color: "text-orange-400", bg: "from-orange-500/15 to-orange-500/5", border: "border-orange-500/25", Icon: DollarSign },
  { label: "Deployment Efficiency",    value: 80, suffix: "%", color: "text-rose-400",    bg: "from-rose-500/15 to-rose-500/5",    border: "border-rose-500/25",    Icon: TrendingUp },
  { label: "Years of Experience",      value: 4,  suffix: "+", color: "text-yellow-400",  bg: "from-yellow-500/15 to-yellow-500/5", border: "border-yellow-500/25",  Icon: Clock },
  { label: "Cloud Projects Delivered", value: 15, suffix: "+", color: "text-sky-400",     bg: "from-sky-500/15 to-sky-500/5",     border: "border-sky-500/25",     Icon: Server },
  { label: "Security Audits Run",      value: 50, suffix: "+", color: "text-lime-400",    bg: "from-lime-500/15 to-lime-500/5",    border: "border-lime-500/25",    Icon: ShieldCheck },
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
    <div className={`flex-shrink-0 w-44 bg-gradient-to-b ${metric.bg} border ${metric.border} rounded-2xl p-5 text-center card-shine hover:-translate-y-1 transition-transform duration-200 mx-2`}>
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
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">By the Numbers</p>
          <h2 className="text-4xl md:text-5xl font-black">Impact & Achievements</h2>
          <p className="text-slate-400 mt-3 max-w-xl mx-auto text-sm">
            Measurable outcomes across enterprise, startup, and government cloud projects.
          </p>
        </motion.div>
      </div>

      {/* Marquee strip */}
      <div className="relative">
        {/* Edge fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />

        <div className="flex marquee-track">
          {doubled.map((metric, i) => (
            <MetricCard key={`${metric.label}-${i}`} metric={metric} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
