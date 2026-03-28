import { useEffect } from "react";
import {
  CheckCircle2,
  Target,
  Lightbulb,
  Scale,
  Eye,
  Users,
  FileCheck,
  CalendarClock,
  ShieldCheck,
} from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import PageBanner from "@/components/PageBanner";
import SectionLabel from "@/components/SectionLabel";

const values = [
  { icon: Target, title: "Precision", desc: "Meticulous attention to every protocol, every test, every document — because in validation, details save lives." },
  { icon: CheckCircle2, title: "Excellence", desc: "We don't just meet standards — we set them. Every deliverable exceeds regulatory expectations." },
  { icon: Lightbulb, title: "Innovation", desc: "Adopting the latest frameworks and risk-based approaches to deliver smarter solutions." },
  { icon: Scale, title: "Integrity", desc: "Transparent, honest, and objective counsel — always in the best interest of the client." },
];

const missionVision = [
  {
    icon: Target,
    title: "Mission",
    desc: "Deliver validation and compliance programs that regulators respect, auditors accept, and your operations can sustain — without slowing innovation.",
  },
  {
    icon: Eye,
    title: "Vision",
    desc: "Become the trusted validation partner for regulated manufacturers worldwide: predictable quality, transparent evidence, and long-term GxP maturity.",
  },
];

const howWePartner = [
  {
    icon: Users,
    title: "Embedded specialists",
    desc: "Senior practitioners work alongside your QA, MS&T, and IT teams — not a distant help desk — so knowledge stays with you after the project.",
  },
  {
    icon: FileCheck,
    title: "Audit-ready packages",
    desc: "Protocols, reports, trace matrices, and risk files structured the way inspectors expect, so reviews focus on science, not paperwork gaps.",
  },
  {
    icon: CalendarClock,
    title: "Milestone-driven delivery",
    desc: "Clear gates, predictable cadence, and scope control aligned to batch release, filing deadlines, and facility start-up timelines.",
  },
];

const frameworks = [
  "FDA 21 CFR Part 11 & Part 211",
  "EU GMP Annex 11 & Annex 15",
  "ICH Q8 / Q9 / Q10 / Q11",
  "GAMP 5 & risk-based CSV",
  "ISO 13485 & 21 CFR Part 820",
  "ALCOA+ & data integrity",
];

const milestones = [
  { year: "2008", label: "Founded", text: "Truqual begins supporting pharma and biotech validation programs." },
  { year: "2014", label: "Global expansion", text: "EU GMP and multi-site deployment projects across APAC and North America." },
  { year: "2019", label: "CSV center of excellence", text: "Dedicated GAMP 5 CSV practice for ERP, LIMS, MES, and critical infrastructure." },
  { year: "Today", label: "Full-lifecycle partner", text: "CQV, remediation, and inspection readiness for innovators and established manufacturers." },
];

const team = [
  { name: "Rajesh Mehta", role: "Founder & CEO", desc: "20+ years in pharma validation. Expert in FDA 21 CFR and EU GMP compliance across global markets.", initials: "RM" },
  { name: "Dr. Priya Sharma", role: "Head of CSV", desc: "GAMP 5 certified specialist with 15+ years delivering CSV for LIMS, ERP, MES, and SCADA systems.", initials: "PS" },
  { name: "Anil Krishnamurthy", role: "Process Validation Lead", desc: "Specialist in solid dosage, sterile manufacturing, and biotech process validation protocols.", initials: "AK" },
];

export default function AboutPage() {
  useScrollReveal();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <PageBanner
        title="About Truqual"
        subtitle="Driven by precision, powered by expertise, committed to your compliance success."
      />

      <section className="px-6 pt-20 pb-14 md:px-8 lg:pt-28 lg:pb-16 bg-background">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="reveal-left">
              <SectionLabel label="Our Story" />
              <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-foreground mb-4 leading-tight">
                Built on a Foundation of Trust & Expertise
              </h2>
              <div className="h-[3px] w-14 gradient-bar rounded-full mb-6" />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Truqual Validation Expert Services was founded with a singular mission: to help regulated
                  industries navigate the complex landscape of validation and compliance with confidence and precision.
                </p>
                <p>
                  With over 15 years of combined expertise, our team of seasoned validation specialists, quality engineers,
                  and regulatory consultants has successfully supported clients across pharmaceutical, biotech,
                  medical device, and food & beverage industries.
                </p>
                <p>
                  We believe that robust validation is not just a regulatory requirement — it's a competitive advantage.
                  At Truqual, we are your long-term partners in quality.
                </p>
              </div>
            </div>
            <div className="reveal-right">
              <div className="bg-secondary border border-border rounded-2xl p-10 flex flex-col items-center justify-center min-h-[320px] gap-4">
                <img
                  src="/logo.png"
                  alt="Truqual"
                  className="h-36 w-auto sm:h-44 max-h-[220px] object-contain"
                  decoding="async"
                />
                <span className="text-muted-foreground text-xs uppercase tracking-[3px] font-heading font-semibold">
                  Since 2008
                </span>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="reveal mb-6">
            <SectionLabel label="Our Values" />
            <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-foreground mb-2 leading-tight">
              What Drives Us
            </h2>
            <div className="h-[3px] w-14 gradient-bar rounded-full mt-4 mb-10" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 stagger-children">
            {values.map((v) => (
              <div
                key={v.title}
                className="reveal text-center p-6 border border-border rounded-xl transition-all duration-300 hover:border-amber hover:shadow-lg hover:shadow-black/5"
              >
                <v.icon size={28} className="text-accent mx-auto mb-3" />
                <h3 className="font-heading font-bold text-sm mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, partnership model */}
      <section className="px-6 pt-12 pb-16 md:px-8 md:pt-14 lg:pt-14 lg:pb-20 bg-secondary/50">
        <div className="container-narrow">
          <div className="reveal mb-8">
            <SectionLabel label="Direction" />
            <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-foreground mb-2 leading-tight">
              Mission &amp; Vision
            </h2>
            <div className="h-[3px] w-14 gradient-bar rounded-full mt-4" />
          </div>

          <div className="grid md:grid-cols-2 gap-5 stagger-children mb-12">
            {missionVision.map((m) => (
              <div
                key={m.title}
                className="reveal bg-card border border-border rounded-xl p-8 transition-all duration-300 hover:border-accent hover:shadow-lg hover:shadow-black/5"
              >
                <m.icon size={28} className="text-accent mb-4" />
                <h3 className="font-heading font-bold text-lg text-foreground mb-3">{m.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>

          <div className="reveal mb-8">
            <SectionLabel label="How We Work" />
            <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-foreground mb-2 leading-tight">
              A Partnership, Not a Patchwork
            </h2>
            <div className="h-[3px] w-14 gradient-bar rounded-full mt-4" />
          </div>

          <div className="grid md:grid-cols-3 gap-5 stagger-children">
            {howWePartner.map((item) => (
              <div
                key={item.title}
                className="reveal bg-card border border-border rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5 hover:border-amber"
              >
                <item.icon size={24} className="text-accent mb-3" />
                <h3 className="font-heading font-bold text-sm text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frameworks & timeline */}
      <section className="px-6 pt-12 pb-16 md:px-8 md:pt-14 lg:pt-14 lg:pb-20 bg-background">
        <div className="container-narrow">
          <div className="reveal mb-8">
            <SectionLabel label="Standards" />
            <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-foreground mb-2 leading-tight">
              Frameworks We Align With
            </h2>
            <p className="text-muted-foreground text-sm max-w-2xl mt-4 leading-relaxed">
              Every engagement maps to the regulations and guidances your auditors care about — so evidence is consistent from protocol to inspection.
            </p>
            <div className="h-[3px] w-14 gradient-bar rounded-full mt-4" />
          </div>

          <div className="flex flex-wrap gap-3 stagger-children mb-12">
            {frameworks.map((f) => (
              <div
                key={f}
                className="reveal inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2.5 text-sm font-heading font-semibold text-foreground"
              >
                <ShieldCheck size={16} className="text-accent shrink-0" />
                {f}
              </div>
            ))}
          </div>

          <div className="reveal mb-8">
            <SectionLabel label="Our Path" />
            <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-foreground mb-2 leading-tight">
              Milestones
            </h2>
            <div className="h-[3px] w-14 gradient-bar rounded-full mt-4" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
            {milestones.map((ms) => (
              <div
                key={ms.year + ms.label}
                className="reveal relative border border-border rounded-xl p-6 bg-card overflow-hidden group"
              >
                <div className="absolute top-0 left-0 right-0 h-1 gradient-bar scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300" />
                <div className="font-heading font-extrabold text-2xl text-amber tabular-nums mb-1">{ms.year}</div>
                <div className="font-heading font-bold text-xs uppercase tracking-wide text-foreground mb-2">{ms.label}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{ms.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="px-6 pt-12 pb-20 md:px-8 md:pt-14 lg:pt-14 lg:pb-28 bg-secondary/50">
        <div className="container-narrow">
          <div className="reveal mb-8">
            <SectionLabel label="Our Team" />
            <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-foreground mb-2 leading-tight">
              Leadership &amp; Experts
            </h2>
            <div className="h-[3px] w-14 gradient-bar rounded-full mt-4" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {team.map((t) => (
              <div
                key={t.name}
                className="reveal rounded-xl border border-border overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1 bg-card"
              >
                <div className="h-32 bg-secondary flex items-center justify-center">
                  <span className="font-heading font-extrabold text-3xl text-amber">{t.initials}</span>
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-bold text-base mb-0.5">{t.name}</h3>
                  <div className="text-amber font-heading font-bold text-xs uppercase tracking-wide mb-2">
                    {t.role}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
