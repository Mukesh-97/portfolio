import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { Cloud, Layers, Zap, DollarSign, TrendingUp, Clock } from "lucide-react";

const metrics = [
  {
    label: "AWS Client Environments Managed",
    value: 30,
    suffix: "+",
    color: "text-cyan-400",
    bg: "from-cyan-500/10 to-cyan-500/5",
    border: "border-cyan-500/20",
    glow: "shadow-cyan-500/10",
    Icon: Cloud,
  },
  {
    label: "Microservices Deployed",
    value: 20,
    suffix: "+",
    color: "text-emerald-400",
    bg: "from-emerald-500/10 to-emerald-500/5",
    border: "border-emerald-500/20",
    glow: "shadow-emerald-500/10",
    Icon: Layers,
  },
  {
    label: "Manual Effort Reduced",
    value: 60,
    suffix: "%",
    color: "text-purple-400",
    bg: "from-purple-500/10 to-purple-500/5",
    border: "border-purple-500/20",
    glow: "shadow-purple-500/10",
    Icon: Zap,
  },
  {
    label: "AWS Credits Secured",
    value: 20,
    prefix: "$",
    suffix: "K+",
    color: "text-orange-400",
    bg: "from-orange-500/10 to-orange-500/5",
    border: "border-orange-500/20",
    glow: "shadow-orange-500/10",
    Icon: DollarSign,
  },
  {
    label: "Deployment Efficiency Improved",
    value: 80,
    suffix: "%",
    color: "text-rose-400",
    bg: "from-rose-500/10 to-rose-500/5",
    border: "border-rose-500/20",
    glow: "shadow-rose-500/10",
    Icon: TrendingUp,
  },
  {
    label: "Years of Experience",
    value: 4,
    suffix: "+",
    color: "text-yellow-400",
    bg: "from-yellow-500/10 to-yellow-500/5",
    border: "border-yellow-500/20",
    glow: "shadow-yellow-500/10",
    Icon: Clock,
  },
];

function AnimatedNumber({
  value,
  color,
  prefix = "",
  suffix = "",
  inView,
}: {
  value: number;
  color: string;
  prefix?: string;
  suffix?: string;
  inView: boolean;
}) {
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { stiffness: 80, damping: 18 });
  const display = useTransform(spring, (v) => Math.round(v));
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, motionValue, value]);

  useEffect(() => {
    return display.on("change", (v) => {
      if (ref.current) ref.current.textContent = `${prefix}${v}${suffix}`;
    });
  }, [display, prefix, suffix]);

  return (
    <span ref={ref} className={`text-4xl md:text-5xl font-black ${color}`}>
      {prefix}0{suffix}
    </span>
  );
}

export default function Metrics() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 section-divider">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">By the Numbers</p>
          <h2 className="text-4xl md:text-5xl font-black">Impact & Achievements</h2>
          <p className="text-slate-400 mt-3 max-w-xl mx-auto">
            Measurable outcomes delivered across enterprise, startup, and government cloud projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className={`relative bg-gradient-to-b ${metric.bg} border ${metric.border} rounded-2xl p-6 text-center shadow-xl ${metric.glow} hover:-translate-y-1 transition-transform duration-200 card-shine overflow-hidden`}
            >
              <div className={`flex justify-center mb-3 ${metric.color}`}>
                <metric.Icon size={22} strokeWidth={1.5} />
              </div>
              <AnimatedNumber
                value={metric.value}
                color={metric.color}
                prefix={metric.prefix}
                suffix={metric.suffix}
                inView={inView}
              />
              <p className="text-slate-400 mt-3 text-xs leading-snug font-medium">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
