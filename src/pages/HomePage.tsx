import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Shield, Monitor, Wrench, FlaskConical, ClipboardCheck, GraduationCap, ArrowRight, CheckCircle2, Pill, Stethoscope, Factory, Beaker, Building2, Leaf } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import SectionLabel from "@/components/SectionLabel";
import heroBg from "@/assets/hero-bg.jpg";

const services = [
  { icon: Wrench, title: "Process Validation", desc: "Full lifecycle validation including prospective, concurrent, and retrospective approaches with complete documentation." },
  { icon: Monitor, title: "Computer System Validation", desc: "GAMP 5-based CSV for ERP, LIMS, DCS, SCADA and all GxP-critical computerized systems." },
  { icon: Shield, title: "Equipment Qualification", desc: "IQ, OQ, PQ and DQ protocols for manufacturing equipment, utilities, and lab instruments." },
  { icon: FlaskConical, title: "Method Validation", desc: "Analytical method validation per ICH Q2(R1) — accuracy, precision, specificity, linearity." },
  { icon: ClipboardCheck, title: "Regulatory Compliance", desc: "Mock inspections, gap assessments, and pre-regulatory audit preparations aligned with global standards." },
  { icon: GraduationCap, title: "Training & Workshops", desc: "Customized programs on GMP, GDP, validation best practices, and regulatory requirements." },
];

const industries = [
  { icon: Pill, title: "Pharmaceutical & Biotech", desc: "Process validation, sterility assurance, and regulatory compliance for drug manufacturers." },
  { icon: Stethoscope, title: "Medical Devices", desc: "ISO 13485-compliant validation services including IQ/OQ/PQ and software validation." },
  { icon: Factory, title: "Food & Beverage", desc: "HACCP-based validation, process qualification for food manufacturing facilities." },
  { icon: Beaker, title: "Chemical Manufacturing", desc: "Process validation for API manufacturers meeting ICH and REACH standards." },
  { icon: Building2, title: "Healthcare IT", desc: "CSV and 21 CFR Part 11 compliance for healthcare IT and clinical data systems." },
  { icon: Leaf, title: "Nutraceuticals & Cosmetics", desc: "GMP compliance and quality system support for nutraceutical manufacturers." },
];

const stats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "47", label: "Enterprise Clients" },
  { value: "98.3%", label: "Audit Pass Rate" },
  { value: "15+", label: "Years Expertise" },
];

const processSteps = [
  {
    step: "01",
    title: "Assess & Map",
    desc: "We review your facility, systems, and regulatory obligations to define a practical validation roadmap.",
  },
  {
    step: "02",
    title: "Document & Execute",
    desc: "Our team builds protocols, executes qualification activities, and captures evidence with inspection-ready rigor.",
  },
  {
    step: "03",
    title: "Sustain & Improve",
    desc: "We close gaps, train stakeholders, and support long-term compliance through change control and periodic review.",
  },
];

const deliverables = [
  "Validation master plans aligned to your site and product risk profile",
  "IQ/OQ/PQ, CSV, and method validation protocols with traceable evidence",
  "Gap assessments and remediation plans for inspections and audits",
  "Standard operating procedures and training support for operational readiness",
];

export default function HomePage() {
  useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center hero-gradient overflow-hidden pt-[70px]">
        {/* Background image overlay */}
        <div
          className="absolute inset-0 opacity-15 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        {/* Radial accents */}
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 20% 50%, hsla(103,62%,59%,0.06) 0%, transparent 50%), radial-gradient(circle at 80% 20%, hsla(37,91%,53%,0.06) 0%, transparent 50%)"
        }} />
        {/* Grid pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: "linear-gradient(hsla(103,62%,59%,0.04) 1px, transparent 1px), linear-gradient(90deg, hsla(103,62%,59%,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }} />

        <div className="relative z-10 container-narrow px-6 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 bg-white/5 border border-amber/30 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse-dot" />
                <span className="font-heading text-xs font-bold tracking-wider uppercase text-amber">
                  ISO Certified Experts
                </span>
              </div>

              <h1 className="font-heading font-black text-4xl md:text-5xl lg:text-[3.4rem] text-white leading-[1.08] mb-5" style={{ lineHeight: "1.08" }}>
                Validation You Can{" "}
                <span className="text-amber">Trust.</span>
                <br />
                Compliance You Can{" "}
                <span className="text-green">Prove.</span>
              </h1>

              <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-[480px] mb-8">
                End-to-end validation and regulatory compliance services for pharmaceutical,
                biotech, and medical device companies — from process design to FDA approval.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-primary text-primary-foreground font-heading font-bold text-sm uppercase tracking-wide no-underline transition-all duration-200 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 active:scale-[0.97]"
                >
                  Request Consultation
                  <ArrowRight size={16} />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md border border-white/25 text-white font-heading font-semibold text-sm uppercase tracking-wide no-underline transition-all duration-200 hover:border-accent hover:text-accent"
                >
                  Our Services
                </Link>
              </div>

              {/* Stats */}
              <div className="flex gap-8 pt-6 border-t border-white/10">
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className="font-heading font-extrabold text-2xl text-amber tabular-nums">
                      {s.value}
                    </div>
                    <div className="text-xs text-slate-400 uppercase tracking-wider">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — feature cards */}
            <div className="hidden lg:grid grid-cols-2 gap-3">
              {[
                { icon: "🔬", title: "FDA Compliant", desc: "21 CFR Part 11 ready" },
                { icon: "🏭", title: "GMP Validated", desc: "EU & WHO standards" },
                { icon: "📊", title: "Risk-Based", desc: "ICH Q9 methodology" },
                { icon: "🎯", title: "First-Pass Success", desc: "98.3% audit pass rate" },
              ].map((card) => (
                <div
                  key={card.title}
                  className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-5 transition-all duration-200 hover:border-accent hover:bg-accent/5 group"
                >
                  <div className="text-2xl mb-2">{card.icon}</div>
                  <div className="font-heading font-bold text-xs text-white uppercase tracking-wide">
                    {card.title}
                  </div>
                  <div className="text-xs text-slate-400 mt-1">{card.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <div className="bg-navy-mid py-4 px-6 border-b border-white/[0.06]">
        <div className="container-narrow flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {["FDA 21 CFR Part 11", "EU GMP Annex 11", "ICH Q8/Q9/Q10", "ISO 13485", "GAMP 5 Certified", "ALCOA+ Compliant"].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
              <span className="text-slate-400 text-xs font-heading font-semibold uppercase tracking-wider whitespace-nowrap">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ===== SERVICES SECTION ===== */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="reveal">
            <SectionLabel label="What We Do" />
            <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-foreground mb-2 leading-tight">
              End-to-End Validation Expertise
            </h2>
            <div className="h-[3px] w-14 gradient-bar rounded-full mt-4 mb-10" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 stagger-children">
            {services.map((s) => (
              <div
                key={s.title}
                className="reveal group relative bg-card border border-border rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1 hover:border-accent overflow-hidden"
              >
                {/* Top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-[3px] gradient-bar origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/15 to-primary/10 flex items-center justify-center mb-4">
                  <s.icon size={22} className="text-accent" />
                </div>
                <h3 className="font-heading font-bold text-base text-foreground mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {s.desc}
                </p>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-1 mt-4 text-amber font-heading font-bold text-xs uppercase tracking-wide no-underline hover:gap-2 transition-all"
                >
                  Learn More <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== INDUSTRIES ===== */}
      <section className="pt-12 pb-20 md:pt-16 md:pb-24 bg-secondary/50">
        <div className="container-narrow">
          <div className="reveal">
            <SectionLabel label="Industries" />
            <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-foreground mb-2 leading-tight">
              Cross-Industry Validation Mastery
            </h2>
            <div className="h-[3px] w-14 gradient-bar rounded-full mt-4 mb-10" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 stagger-children">
            {industries.map((ind) => (
              <div
                key={ind.title}
                className="reveal bg-card border border-border rounded-xl p-6 relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5 hover:border-accent group"
              >
                <div className="absolute bottom-0 left-0 right-0 h-[3px] gradient-bar" />
                <ind.icon size={28} className="text-accent mb-3" />
                <h3 className="font-heading font-bold text-sm text-foreground uppercase tracking-wide mb-2">
                  {ind.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {ind.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY TRUQUAL ===== */}
      <section className="pt-12 pb-20 md:pt-16 md:pb-24 bg-background">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="reveal-left">
              <SectionLabel label="Why Truqual" />
              <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-foreground mb-4 leading-tight">
                Built on Trust, Powered by Expertise
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                With over 15 years of combined expertise, our team of seasoned validation specialists
                has successfully supported clients across pharmaceutical, biotech, medical device,
                and food & beverage industries worldwide.
              </p>
              <div className="space-y-3">
                {[
                  "Zero critical FDA 483 observations across all projects",
                  "Dedicated team assigned to every engagement",
                  "Complete documentation packages — VMP through PQ",
                  "24/7 support during regulatory inspections",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal-right">
              <div className="bg-card border border-border rounded-2xl p-8 relative overflow-hidden shadow-lg">
                <div className="absolute top-0 left-0 right-0 h-1 gradient-bar" />
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((s) => (
                    <div key={s.label} className="text-center">
                      <div className="font-heading font-extrabold text-3xl text-amber tabular-nums mb-1">
                        {s.value}
                      </div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wider">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ENGAGEMENT MODEL ===== */}
      <section className="pt-12 pb-20 md:pt-16 md:pb-24 bg-secondary/40 border-y border-border/60">
        <div className="container-narrow">
          <div className="reveal text-center max-w-2xl mx-auto mb-12">
            <SectionLabel label="How We Work" />
            <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-foreground mb-3 leading-tight">
              A Validation Approach Built for Regulated Teams
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We combine regulatory depth with execution discipline so your team gets
              fast momentum without sacrificing documentation quality.
            </p>
            <div className="h-[3px] w-14 gradient-bar rounded-full mt-5 mx-auto" />
          </div>

          <div className="grid lg:grid-cols-3 gap-5 stagger-children">
            {processSteps.map((item) => (
              <div
                key={item.step}
                className="reveal relative bg-card border border-border rounded-2xl p-7 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5 hover:border-accent group"
              >
                <div className="absolute top-0 left-0 right-0 h-[3px] gradient-bar" />
                <div className="flex items-center justify-between mb-6">
                  <span className="font-heading font-black text-4xl leading-none text-accent/20">
                    {item.step}
                  </span>
                  <span className="text-[10px] font-heading font-bold uppercase tracking-[2px] text-amber">
                    Truqual Method
                  </span>
                </div>
                <h3 className="font-heading font-bold text-lg text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== DELIVERABLES ===== */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-stretch">
            <div className="reveal-left bg-card border border-border rounded-2xl p-8 md:p-10 shadow-lg">
              <SectionLabel label="What You Receive" />
              <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-foreground mb-4 leading-tight">
                Deliverables That Stand Up to Review
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8 max-w-2xl">
                Every engagement is structured around usable documentation, clean traceability,
                and practical handoff materials your quality and operations teams can rely on.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {deliverables.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-border/80 bg-secondary/30 px-4 py-4"
                  >
                    <CheckCircle2 size={18} className="text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal-right relative overflow-hidden rounded-2xl border border-border bg-card p-8 md:p-10 shadow-lg">
              <div
                className="absolute inset-0 opacity-100"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 20% 20%, hsla(37,91%,53%,0.10) 0%, transparent 35%), radial-gradient(circle at 80% 80%, hsla(103,62%,59%,0.10) 0%, transparent 35%)",
                }}
              />
              <div className="relative z-10">
                <SectionLabel label="Execution Standard" />
                <h3 className="font-heading font-extrabold text-2xl text-foreground mb-4 leading-tight">
                  Ready for Internal QA and External Inspection
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We build documentation packages that are clear enough for operators,
                  defensible enough for auditors, and structured enough for long-term maintenance.
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    ["Risk-based rationale", "Aligned to ICH, GAMP 5, and site-specific quality requirements."],
                    ["Traceable evidence", "Protocols, deviations, approvals, and reports remain connected and reviewable."],
                    ["Operational handoff", "Your internal team gets documentation they can actually sustain after go-live."],
                  ].map(([title, desc]) => (
                    <div key={title} className="border-b border-border/80 pb-4 last:border-b-0 last:pb-0">
                      <div className="font-heading font-bold text-sm uppercase tracking-wide text-amber mb-1">
                        {title}
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                    </div>
                  ))}
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-heading font-bold text-sm uppercase tracking-wide no-underline transition-all duration-200 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 active:scale-[0.97]"
                >
                  Discuss Your Project
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== NEWSLETTER CTA ===== */}
      <section className="section-padding relative overflow-hidden bg-navy-mid border-t border-amber/25 text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 90% 80% at 50% -20%, hsla(103,62%,59%,0.12) 0%, transparent 55%), radial-gradient(ellipse 70% 50% at 100% 100%, hsla(37,91%,53%,0.08) 0%, transparent 45%)",
          }}
        />
        <div className="relative z-10 max-w-xl mx-auto text-center reveal">
          <SectionLabel label="Stay Informed" />
          <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-white mb-3">
            Stay Ahead of Compliance.
          </h2>
          <p className="text-slate-light leading-relaxed mb-6">
            Get the latest regulatory updates, validation insights, and industry news — delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-md bg-white/10 border border-white/15 text-white text-sm placeholder:text-slate-light/80 focus:border-accent focus:ring-1 focus:ring-accent/40 focus:outline-none"
            />
            <button
              type="button"
              className="px-6 py-3 rounded-md bg-primary text-primary-foreground font-heading font-bold text-sm uppercase tracking-wide hover:opacity-90 transition-opacity active:scale-[0.97] flex-shrink-0"
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
