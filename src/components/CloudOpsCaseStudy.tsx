import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X, ChevronRight, ChevronLeft,
  Shield, Database, BarChart3, FileText,
  AlertTriangle, Cpu, Cloud, CheckCircle2, XCircle,
  Layers, Zap, Lock, TrendingUp, Code2, Server, Users
} from "lucide-react";

// ─── Types ───────────────────────────────────────────────────────────────────
interface Section {
  id: string;
  label: string;
  icon: React.ReactNode;
}

interface Props {
  open: boolean;
  onClose: () => void;
}

// ─── Section nav config ───────────────────────────────────────────────────────
const sections: Section[] = [
  { id: "overview",      label: "Overview",          icon: <Cloud size={15} /> },
  { id: "problem",       label: "The Problem",        icon: <AlertTriangle size={15} /> },
  { id: "architecture",  label: "Architecture",       icon: <Layers size={15} /> },
  { id: "inventory",     label: "Resource Inventory", icon: <Server size={15} /> },
  { id: "compliance",    label: "CIS Compliance",     icon: <Shield size={15} /> },
  { id: "cost",          label: "Cost & Forecasting", icon: <TrendingUp size={15} /> },
  { id: "reports",       label: "Audit Reports",      icon: <FileText size={15} /> },
  { id: "engineering",   label: "Engineering Wins",   icon: <Zap size={15} /> },
  { id: "stack",         label: "Tech Stack",         icon: <Code2 size={15} /> },
  { id: "metrics",       label: "Metrics",            icon: <BarChart3 size={15} /> },
];

// ─── Reusable sub-components ─────────────────────────────────────────────────

function SectionHeading({ icon, title, subtitle }: { icon: React.ReactNode; title: string; subtitle?: string }) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-indigo-600">{icon}</span>
        <h3 className="text-2xl font-black text-slate-900">{title}</h3>
      </div>
      {subtitle && <p className="text-slate-500 text-sm leading-relaxed max-w-3xl">{subtitle}</p>}
    </div>
  );
}

function Badge({ text, color = "cyan" }: { text: string; color?: "cyan" | "purple" | "emerald" | "amber" | "rose" }) {
  const map = {
    cyan:    "bg-indigo-100 border-indigo-200 text-indigo-700",
    purple:  "bg-indigo-100 border-indigo-200 text-indigo-700",
    emerald: "bg-green-100 border-green-200 text-green-700",
    amber:   "bg-amber-100 border-amber-200 text-amber-700",
    rose:    "bg-amber-100 border-amber-200 text-amber-700",
  };
  return (
    <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-lg border ${map[color]}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-current" />
      {text}
    </span>
  );
}

function TechPill({ t }: { t: string }) {
  return (
    <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-lg text-xs border border-slate-200">
      {t}
    </span>
  );
}



function ScreenshotSlot({ label, src }: { label: string; src?: string }) {
  const [imageError, setImageError] = useState(false);
  
  if (src && !imageError) {
    return (
      <div className="rounded-xl overflow-hidden border border-slate-200">
        <img 
          src={src} 
          alt={label} 
          className="w-full object-cover"
          onError={() => setImageError(true)}
        />
        <p className="text-slate-400 text-xs text-center py-2 bg-slate-50">{label}</p>
      </div>
    );
  }
  return (
    <div className="rounded-xl border border-slate-200 border-dashed bg-slate-50 flex flex-col items-center justify-center gap-2 py-12">
      <Database size={24} className="text-slate-300" />
      <p className="text-slate-400 text-xs text-center px-4">{label}</p>
    </div>
  );
}

// ─── Section content components ──────────────────────────────────────────────

function OverviewSection() {
  return (
    <div>
      <SectionHeading
        icon={<Cloud size={22} />}
        title="CloudOps"
        subtitle="A full-stack, multi-tenant SaaS platform built for Managed Service Providers and cloud teams to monitor, audit, and optimise AWS infrastructure across multiple client accounts — all from a single dashboard."
      />
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        {[
          { label: "Type",     value: "Solo Engineering Project" },
          { label: "Product",  value: "Qorvix — Personal SaaS Build" },
          { label: "Scope",    value: "Full-stack SaaS, End-to-End" },
        ].map(item => (
          <div key={item.label} className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
            <p className="text-slate-400 text-xs uppercase tracking-wider mb-1">{item.label}</p>
            <p className="text-slate-800 font-semibold text-sm">{item.value}</p>
          </div>
        ))}
      </div>
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <ScreenshotSlot label="CloudOps — Login & Landing Page" src="/screenshots/login.png" />
        <ScreenshotSlot label="Main Dashboard — Resource Overview" src="/screenshots/dashboard.png" />
      </div>
      <div className="bg-gradient-to-br from-indigo-50 to-indigo-50 border border-indigo-200 rounded-2xl p-6">
        <p className="text-slate-600 text-sm leading-relaxed">
          Built entirely solo — from IAM cross-account architecture and CIS compliance engine
          through to PDF/Excel audit report generation and Razorpay billing. Every layer of the stack was designed,
          implemented, and shipped by a single engineer. Qorvix takes its name from Latin roots:
          <em>"Cor"</em> (heart) + <em>"Vix"</em> (power, force) — the power at the heart of your AWS operations.
        </p>
      </div>
    </div>
  );
}

function ProblemSection() {
  const problems = [
    "AWS Console requires manual account switching — no unified view across clients.",
    "Security audits are done through spreadsheets with no real-time posture visibility.",
    "Cost data is delayed and siloed — no cross-account trend analysis.",
    "No single pane of glass for security posture, resource health, cost trends, and compliance together.",
    "Enterprise alternatives (CloudHealth, Datadog, Aqua Security) cost thousands per month — out of reach for small MSPs.",
  ];
  return (
    <div>
      <SectionHeading
        icon={<AlertTriangle size={22} />}
        title="The Problem"
        subtitle="MSPs managing AWS infrastructure for multiple clients face a fragmented tooling problem with no affordable solution."
      />
      <div className="space-y-3 mb-8">
        {problems.map((p, i) => (
          <div key={i} className="flex items-start gap-3 bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
            <span className="text-rose-500 mt-0.5 shrink-0"><XCircle size={15} /></span>
            <p className="text-slate-600 text-sm">{p}</p>
          </div>
        ))}
      </div>
      <div className="bg-gradient-to-r from-indigo-50 to-indigo-50 border border-indigo-200 rounded-2xl p-6">
        <div className="flex items-center gap-2 mb-2">
          <CheckCircle2 size={16} className="text-indigo-600" />
          <p className="text-indigo-700 font-bold text-sm">CloudOps solves this</p>
        </div>
        <p className="text-slate-600 text-sm leading-relaxed">
          One platform, all clients, fraction of the cost. Real-time resource inventory, CIS compliance scanning,
          cost forecasting, and audit-grade PDF/Excel exports — built specifically for lean MSP teams.
        </p>
      </div>
    </div>
  );
}

function ArchitectureSection() {
  const features = [
    { icon: <Lock size={15} />, title: "Cross-Account IAM", desc: "Organisations onboard via secure IAM cross-account role assumption with ExternalId. No access keys stored anywhere." },
    { icon: <Users size={15} />, title: "Multi-Tenant Isolation", desc: "Every DB query is scoped by org_id. No data leakage across organisations is architecturally possible." },
    { icon: <Shield size={15} />, title: "Role-Based Access", desc: "Admin / Viewer roles per organisation. Feature gating enforced both at the API level and the UI level." },
    { icon: <Zap size={15} />, title: "Trial & Billing", desc: "15-day free trial with automatic enforcement. Razorpay integration for plan upgrades with webhook verification." },
  ];
  return (
    <div>
      <SectionHeading
        icon={<Layers size={22} />}
        title="Architecture"
        subtitle="Multi-tenant SaaS architecture built on FastAPI + React with cross-account AWS access via STS AssumeRole."
      />
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        {features.map(f => (
          <div key={f.title} className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
            <div className="flex items-center gap-2 mb-2 text-indigo-600">{f.icon}<p className="font-bold text-sm text-slate-800">{f.title}</p></div>
            <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <ScreenshotSlot label="IAM Role Onboarding Flow" src="/screenshots/iam-onboarding.png" />
        <ScreenshotSlot label="Team Management & RBAC" src="/screenshots/team-members.png" />
      </div>
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <ScreenshotSlot label="Threshold-Based Alerts Configuration" src="/screenshots/alerts.png" />
        <ScreenshotSlot label="Plan Upgrade Modal (Free → Pro)" src="/screenshots/plans.png" />
      </div>
      <div className="bg-white border border-slate-200 rounded-xl p-5">
        <p className="text-xs text-slate-400 uppercase tracking-widest mb-3">Plan Tiers</p>
        <div className="grid grid-cols-4 gap-3">
          {["Free", "Starter", "Pro", "Enterprise"].map((plan, i) => (
            <div key={plan} className={`rounded-lg p-3 text-center border ${i === 2 ? "border-indigo-400 bg-indigo-50" : "border-slate-200 bg-slate-50"}`}>
              <p className={`text-sm font-bold ${i === 2 ? "text-indigo-600" : "text-slate-500"}`}>{plan}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function InventorySection() {
  const resources = [
    { resource: "EC2 Instances",   data: "State, OS/AMI, backup status, alarm status, vulnerabilities" },
    { resource: "RDS / Aurora",    data: "Engine, Multi-AZ, public access, backup retention, deletion protection" },
    { resource: "S3 Buckets",      data: "Public access block, encryption, versioning, logging, size via CloudWatch" },
    { resource: "Security Groups", data: "Inbound/outbound rules, public port exposure, associated resources" },
    { resource: "Elastic IPs",     data: "Attachment status, resource type (EC2/NAT/ELB), private IP" },
    { resource: "WAF WebACLs",     data: "Rules, default action, sampled requests" },
    { resource: "IAM Users",       data: "MFA status, key rotation, last activity, access key age" },
    { resource: "EBS Volumes",     data: "Unattached volumes — cost waste detection" },
    { resource: "Inspector",       data: "CVE findings per instance — critical/high/medium/low" },
    { resource: "Compute Optimizer", data: "Right-sizing recommendations, savings estimates" },
  ];
  return (
    <div>
      <SectionHeading
        icon={<Server size={22} />}
        title="Resource Inventory"
        subtitle="10 AWS resource types inventoried per account, per region. S3 scanning runs asynchronously with 20 parallel workers to avoid 120s timeouts."
      />
      <div className="overflow-x-auto rounded-xl border border-slate-200 mb-8">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50">
              <th className="text-left px-5 py-3 text-slate-500 font-semibold">Resource</th>
              <th className="text-left px-5 py-3 text-slate-500 font-semibold">Data Collected</th>
            </tr>
          </thead>
          <tbody>
            {resources.map((r, i) => (
              <tr key={r.resource} className={`border-b border-slate-100 last:border-0 ${i % 2 === 0 ? "bg-white" : "bg-slate-50/60"}`}>
                <td className="px-5 py-3 text-indigo-600 font-semibold whitespace-nowrap">{r.resource}</td>
                <td className="px-5 py-3 text-slate-600">{r.data}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <ScreenshotSlot label="Dashboard — EC2, RDS, Security, WAF, IAM Tabs" src="/screenshots/dashboard.png" />
        <ScreenshotSlot label="Change Detection — CloudTrail Events Feed" src="/screenshots/change-detection.png" />
      </div>
    </div>
  );
}

function ComplianceSection() {
  const cisSections = [
    { name: "IAM",        checks: "Root usage, MFA enforcement, password policy (14 reqs), key rotation, direct policy attachments" },
    { name: "Storage",    checks: "S3 public access (all 4 PAB + ACL grants), encryption, versioning, logging, RDS encryption/public/backup, EBS default encryption" },
    { name: "Logging",    checks: "CloudTrail multi-region, log validation, CloudWatch integration, S3 protection, AWS Config, VPC flow logs" },
    { name: "Monitoring", checks: "15 CIS-required CloudWatch alarms — each verified individually (filter pattern keywords + alarm linkage)" },
    { name: "Networking", checks: "SSH/RDP unrestricted (IPv4+IPv6), default SG rules, instances in default VPC, VPC peering routes" },
    { name: "EC2",        checks: "IMDSv2 enforcement, public AMIs, EBS volume encryption, stopped instance hygiene" },
  ];
  return (
    <div>
      <SectionHeading
        icon={<Shield size={22} />}
        title="CIS AWS Foundations Benchmark v3.0"
        subtitle="Real audit-grade compliance scanning. 50+ checks across 6 domains. Score = PASS / (PASS + FAIL) × 100. WARN is informational only."
      />
      <div className="flex flex-wrap gap-2 mb-6">
        <Badge text="50+ Checks" color="cyan" />
        <Badge text="6 Domains" color="purple" />
        <Badge text="CIS v3.0" color="emerald" />
        <Badge text="Per-section scores" color="amber" />
      </div>
      <div className="space-y-3 mb-8">
        {cisSections.map(s => (
          <div key={s.name} className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-indigo-600 font-bold text-sm">{s.name}</span>
            </div>
            <p className="text-slate-500 text-xs leading-relaxed">{s.checks}</p>
          </div>
        ))}
      </div>
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-6">
        <p className="text-amber-700 font-bold text-sm mb-2">Key Engineering Decision: No Fake Passes</p>
        <p className="text-slate-600 text-sm leading-relaxed">
          The original implementation returned PASS if any CloudWatch metric filter existed — regardless of what it monitors.
          Replaced with per-check verification: find a filter whose pattern contains <em>all required keywords</em>, then
          verify a CloudWatch alarm is actually attached to that specific metric. A filter without an alarm = FAIL.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <ScreenshotSlot label="CIS Compliance Scan — Score & Severity Breakdown" src="/screenshots/cis-compliance.png" />
        <ScreenshotSlot label="CloudTrail Change Detection — Audit Trail" src="/screenshots/change-detection.png" />
      </div>
    </div>
  );
}

function CostSection() {
  return (
    <div>
      <SectionHeading
        icon={<TrendingUp size={22} />}
        title="Cost Explorer + Forecasting"
        subtitle="30-day cost breakdown by service with daily trend charts, ML-based 30d/90d forecasts, and statistical anomaly detection."
      />
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        {[
          { title: "Service Breakdown",  desc: "30-day cost by service with daily trend charts via AWS Cost Explorer GetCostAndUsage." },
          { title: "ML Forecasting",     desc: "AWS CE GetCostForecast — 30d and 90d projections with 80% confidence bands." },
          { title: "Anomaly Detection",  desc: "2σ statistical baseline against 14-day rolling history. Flags unusual cost spikes automatically." },
        ].map(c => (
          <div key={c.title} className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
            <p className="text-slate-800 font-bold text-sm mb-2">{c.title}</p>
            <p className="text-slate-500 text-xs leading-relaxed">{c.desc}</p>
          </div>
        ))}
      </div>
      <div className="grid md:grid-cols-2 gap-4 mb-4">
        <ScreenshotSlot label="Cost Analytics — Daily Spend & Monthly Trend" src="/screenshots/cost-analytics.png" />
        <ScreenshotSlot label="Cost by Service & Spend Distribution" src="/screenshots/cost-by-service.png" />
      </div>
      <ScreenshotSlot label="Service Breakdown Table — Full Cost Detail" src="/screenshots/cost-breakdown-table.png" />
    </div>
  );
}

function ReportsSection() {
  return (
    <div>
      <SectionHeading
        icon={<FileText size={22} />}
        title="PDF + Excel Audit Reports"
        subtitle="Enterprise-grade exports built entirely client-side. No server-side rendering — all generated in-browser with jsPDF and xlsx."
      />
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-sky-100 flex items-center justify-center">
              <FileText size={15} className="text-sky-600" />
            </div>
            <p className="text-slate-800 font-bold text-sm">PDF Report</p>
          </div>
          <ul className="space-y-2 text-slate-500 text-xs leading-relaxed">
            {[
              "Landscape A4, government audit style",
              "Navy header bands, coloured section markers",
              "KPI stat cards on cover page",
              "Inline line charts for EC2/RDS metrics",
              "Colour-coded tables (green/red/amber per status)",
              "S3 inventory and WAF sections included",
              "9 full sections with inline charts",
            ].map(item => (
              <li key={item} className="flex items-start gap-2">
                <CheckCircle2 size={12} className="text-emerald-400 mt-0.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center">
              <Database size={15} className="text-green-600" />
            </div>
            <p className="text-slate-800 font-bold text-sm">Excel Report</p>
          </div>
          <ul className="space-y-2 text-slate-500 text-xs leading-relaxed">
            {[
              "12 sheets covering all resource types",
              "Summary sheet first with KPI overview",
              "Auto-fitted column widths",
              "Frozen header rows on all sheets",
              "S3, Inspector, and WAF sheets included",
              "Color-coded status cells",
              "Plan-gated export permissions",
            ].map(item => (
              <li key={item} className="flex items-start gap-2">
                <CheckCircle2 size={12} className="text-emerald-400 mt-0.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <ScreenshotSlot label="PDF Report — Cover Page with KPI Cards" />
        <ScreenshotSlot label="Excel Export — Multi-sheet Resource Tabs" />
      </div>
    </div>
  );
}

function EngineeringSection() {
  const wins = [
    {
      num: "01",
      title: "S3 Timeout with 100+ Buckets",
      problem: "Original implementation made 6 sequential API calls per bucket. With 79 buckets, that's ~474 API calls, exhausting urllib3's connection pool (size 10) and timing out after 120 seconds.",
      solution: "Parallel workers where each thread creates its own boto3 client (max_pool_connections=1). Completely eliminates pool contention. Backend triggers background thread immediately; frontend polls every 3 seconds.",
      color: "cyan",
    },
    {
      num: "02",
      title: "CloudWatch S3 Metrics by Region",
      problem: "AWS publishes BucketSizeBytes in the bucket's own region, not globally in us-east-1. This undocumented behaviour means querying us-east-1 for an ap-south-1 bucket returns no data at all.",
      solution: "Resolve bucket location first, then create the CloudWatch client in that specific region. A subtle but critical fix for non-US deployments.",
      color: "purple",
    },
    {
      num: "03",
      title: "CIS Monitoring Checks Were Fake",
      problem: "Original implementation returned PASS if any CloudWatch metric filter existed at all — regardless of what it actually monitors. This would pass a blank filter as compliant.",
      solution: "Per-check verification: find a filter whose pattern contains ALL required keywords (e.g. ConsoleLogin + mfaAuthenticated + false for check 4.2), then verify a CloudWatch alarm is attached to that exact metric.",
      color: "amber",
    },
    {
      num: "04",
      title: "React Tab Reset on Live Metrics Poll",
      problem: "Every time live metrics updated state, the data prop from App.js had a new reference (from data.filter(...)), causing useEffect([account, data]) to re-fire and reset activeTab to {}, defaulting back to 'ec2'.",
      solution: "Moved data into a ref (dataRef) and changed the effect dependency to [account] only. The ref always holds current data without being a reactive dependency.",
      color: "emerald",
    },
    {
      num: "05",
      title: "PDF Crash on Single Data Point",
      problem: "i / (chartData.length - 1) divides by zero when a metric has only one data point, causing jsPDF to crash silently with no visible error in the browser.",
      solution: "const xScale = (i) => chartData.length > 1 ? (i/(chartData.length-1))*plotW : plotW/2 — graceful fallback centres the single point.",
      color: "rose",
    },
  ];

  const colorMap: Record<string, string> = {
    cyan:    "border-indigo-200 text-indigo-700 bg-indigo-50",
    purple:  "border-indigo-200 text-indigo-700 bg-indigo-50",
    amber:   "border-amber-200 text-amber-700 bg-amber-50",
    emerald: "border-green-200 text-green-700 bg-green-50",
    rose:    "border-amber-200 text-amber-700 bg-amber-50",
  };

  return (
    <div>
      <SectionHeading
        icon={<Zap size={22} />}
        title="Engineering Challenges Solved"
        subtitle="Real problems encountered in production — each one diagnosed, root-caused, and fixed with a principled solution."
      />
      <div className="space-y-5">
        {wins.map(w => (
          <div key={w.num} className={`rounded-2xl border p-6 ${colorMap[w.color]}`}>
            <div className="flex items-start gap-4">
              <span className={`text-3xl font-black leading-none opacity-40`}>{w.num}</span>
              <div className="flex-1">
                <p className="text-slate-800 font-bold mb-3">{w.title}</p>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Problem</p>
                    <p className="text-slate-600 text-sm leading-relaxed">{w.problem}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Solution</p>
                    <p className="text-slate-600 text-sm leading-relaxed">{w.solution}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function StackSection() {
  const backend = ["Python 3.11", "FastAPI", "SQLAlchemy ORM", "MySQL", "JWT (HTTP-only cookies)", "boto3 + STS AssumeRole", "ThreadPoolExecutor", "APScheduler"];
  const frontend = ["React 18", "MUI v5", "Custom design system", "Recharts", "jsPDF + jspdf-autotable", "xlsx", "Axios (TTL cache)", "react-router-dom"];
  const security = ["STS AssumeRole + ExternalId", "HTTP-only JWT cookies", "CORS locked to origin", "GZip middleware", "Org-scoped DB queries", "No stored access keys"];

  return (
    <div>
      <SectionHeading
        icon={<Code2 size={22} />}
        title="Tech Stack"
        subtitle="Carefully chosen for security, performance, and maintainability. No unnecessary abstractions."
      />
      <div className="grid md:grid-cols-3 gap-5 mb-8">
        {[
          { label: "Backend",  items: backend,   color: "cyan"    },
          { label: "Frontend", items: frontend,  color: "purple"  },
          { label: "Security", items: security,  color: "emerald" },
        ].map(group => (
          <div key={group.label} className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
            <p className="text-xs text-slate-400 uppercase tracking-widest mb-4">{group.label}</p>
            <div className="flex flex-wrap gap-2">
              {group.items.map(t => <TechPill key={t} t={t} />)}
            </div>
          </div>
        ))}
      </div>
      <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
        <p className="text-xs text-slate-400 uppercase tracking-widest mb-3">Architecture Decisions</p>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            { k: "No stored AWS keys", v: "STS AssumeRole with ExternalId at every API call" },
            { k: "HTTP-only cookies",  v: "XSS-safe JWT authentication — no localStorage tokens" },
            { k: "GZip middleware",    v: "60–80% payload reduction on all API responses" },
            { k: "MySQL + SQLAlchemy ORM",  v: "ORM abstraction keeps queries portable and org-scoped by design" },
          ].map(d => (
            <div key={d.k} className="flex flex-col gap-0.5">
              <p className="text-indigo-600 text-xs font-semibold">{d.k}</p>
              <p className="text-slate-500 text-xs">{d.v}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MetricsSection() {
  const stats = [
    { value: "50+",  label: "CIS checks across 6 security domains" },
    { value: "10",   label: "AWS resource types inventoried per account" },
    { value: "12",   label: "Excel sheets in every audit export" },
    { value: "9",    label: "PDF sections with inline charts" },
    { value: "20+",  label: "Activity log action types tracked" },
    { value: "4",    label: "Billing plans with API + UI feature gating" },
    { value: "500+", label: "S3 buckets handled without timeout" },
    { value: "20",   label: "Parallel workers for S3 async scan" },
  ];
  const demonstrates = [
    "Designing and building a production SaaS from scratch — auth, billing, multi-tenancy, feature flags, background jobs",
    "Deep AWS SDK knowledge — IAM roles, CloudWatch, Cost Explorer, Inspector, Config, CloudTrail",
    "Security-first architecture — no stored access keys, HTTP-only cookies, ExternalId protection, org-scoped queries",
    "Solving real performance problems — parallel workers, async patterns, connection pool management",
    "Professional PDF/Excel report generation matching enterprise audit standards",
    "React state management at scale — polling, caching, background prefetch, tab stability under concurrent updates",
  ];
  return (
    <div>
      <SectionHeading icon={<BarChart3 size={22} />} title="Metrics & Takeaways" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {stats.map(s => (
          <div key={s.label} className="bg-white border border-indigo-200 rounded-xl p-5 text-center shadow-sm">
            <p className="text-3xl font-black text-indigo-600 mb-1">{s.value}</p>
            <p className="text-slate-500 text-xs leading-snug">{s.label}</p>
          </div>
        ))}
      </div>
      <div className="bg-gradient-to-br from-indigo-50 to-indigo-50 border border-indigo-200 rounded-2xl p-6">
        <p className="text-slate-900 font-bold mb-4">What This Demonstrates</p>
        <div className="space-y-3">
          {demonstrates.map((d, i) => (
            <div key={i} className="flex items-start gap-3">
              <Cpu size={14} className="text-indigo-600 mt-0.5 shrink-0" />
              <p className="text-slate-600 text-sm leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Section map ─────────────────────────────────────────────────────────────
const sectionComponents: Record<string, React.ReactNode> = {
  overview:     <OverviewSection />,
  problem:      <ProblemSection />,
  architecture: <ArchitectureSection />,
  inventory:    <InventorySection />,
  compliance:   <ComplianceSection />,
  cost:         <CostSection />,
  reports:      <ReportsSection />,
  engineering:  <EngineeringSection />,
  stack:        <StackSection />,
  metrics:      <MetricsSection />,
};

// ─── Main modal ──────────────────────────────────────────────────────────────
export default function CloudOpsCaseStudy({ open, onClose }: Props) {
  const [activeSection, setActiveSection] = useState("overview");

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    if (open) window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const currentIndex = sections.findIndex(s => s.id === activeSection);

  const navigate = (dir: "prev" | "next") => {
    const next = dir === "next" ? currentIndex + 1 : currentIndex - 1;
    if (next >= 0 && next < sections.length) setActiveSection(sections[next].id);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="case-study-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-stretch justify-center"
          onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
        >
          <motion.div
            key="case-study-panel"
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.97 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative w-full max-w-6xl m-4 my-6 bg-white border border-indigo-100 rounded-2xl flex flex-col overflow-hidden shadow-2xl shadow-violet-100"
          >
            {/* ── Header ── */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 shrink-0 bg-white">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-indigo-500 pulse-ring" />
                <span className="text-slate-800 font-bold text-sm">CloudOps</span>
                <span className="text-slate-400 text-xs">/ Case Study</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge text="Solo Project" color="purple" />
                <Badge text="Qorvix — My SaaS" color="cyan" />
                <button
                  onClick={onClose}
                  className="ml-3 text-slate-400 hover:text-slate-700 transition p-1.5 rounded-lg hover:bg-slate-100"
                  aria-label="Close case study"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* ── Body ── */}
            <div className="flex flex-1 overflow-hidden">

              {/* ── Sidebar nav ── */}
              <nav className="hidden md:flex flex-col w-52 shrink-0 border-r border-slate-100 py-4 overflow-y-auto bg-slate-50/60">
                {sections.map((s, i) => (
                  <button
                    key={s.id}
                    onClick={() => setActiveSection(s.id)}
                    className={`flex items-center gap-2.5 px-4 py-2.5 text-left text-xs font-medium transition-all group relative
                      ${activeSection === s.id
                        ? "text-indigo-600 bg-indigo-50"
                        : "text-slate-500 hover:text-slate-700 hover:bg-white"
                      }`}
                  >
                    {activeSection === s.id && (
                      <span className="absolute left-0 top-0 bottom-0 w-0.5 bg-indigo-500 rounded-r" />
                    )}
                    <span className={activeSection === s.id ? "text-indigo-600" : "text-slate-400 group-hover:text-slate-500"}>
                      {s.icon}
                    </span>
                    <span>{s.label}</span>
                    <span className={`ml-auto text-[10px] ${activeSection === s.id ? "text-indigo-500" : "text-slate-300"}`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </button>
                ))}
              </nav>

              {/* ── Content ── */}
              <div className="flex-1 overflow-y-auto bg-white">
                <div className="px-6 md:px-10 py-8">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeSection}
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -12 }}
                      transition={{ duration: 0.2 }}
                    >
                      {sectionComponents[activeSection]}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* ── Footer nav ── */}
            <div className="flex items-center justify-between px-6 py-3 border-t border-slate-100 shrink-0 bg-slate-50/80">
              <select
                className="md:hidden bg-white border border-slate-200 text-slate-600 text-xs rounded-lg px-3 py-1.5 focus:outline-none focus:border-indigo-400"
                value={activeSection}
                onChange={e => setActiveSection(e.target.value)}
              >
                {sections.map(s => <option key={s.id} value={s.id}>{s.label}</option>)}
              </select>

              <div className="hidden md:flex items-center gap-1">
                {sections.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setActiveSection(s.id)}
                    className={`w-1.5 h-1.5 rounded-full transition-all ${activeSection === s.id ? "bg-indigo-500 w-4" : "bg-slate-300 hover:bg-slate-400"}`}
                    aria-label={s.label}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2 ml-auto">
                <span className="text-slate-400 text-xs mr-2">
                  {currentIndex + 1} / {sections.length}
                </span>
                <button
                  onClick={() => navigate("prev")}
                  disabled={currentIndex === 0}
                  className="flex items-center gap-1 text-xs text-slate-500 hover:text-slate-800 disabled:opacity-30 disabled:cursor-not-allowed transition px-3 py-1.5 rounded-lg hover:bg-slate-100"
                >
                  <ChevronLeft size={14} /> Prev
                </button>
                <button
                  onClick={() => navigate("next")}
                  disabled={currentIndex === sections.length - 1}
                  className="flex items-center gap-1 text-xs text-indigo-600 hover:text-indigo-800 disabled:opacity-30 disabled:cursor-not-allowed transition px-3 py-1.5 rounded-lg bg-indigo-50 hover:bg-indigo-100"
                >
                  Next <ChevronRight size={14} />
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

