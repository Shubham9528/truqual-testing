import { useEffect } from "react";
import { Shield, Monitor, Wrench, FlaskConical, ClipboardCheck, AlertTriangle, Thermometer, Factory, GraduationCap } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import PageBanner from "@/components/PageBanner";
import SectionLabel from "@/components/SectionLabel";

const allServices = [
  { icon: Wrench, title: "Process Validation", desc: "Prospective, concurrent and retrospective process validation for pharmaceutical manufacturing including solid dosage forms, sterile products, and biologics. Full VMP, URS, DQ, IQ, OQ, PQ documentation." },
  { icon: Monitor, title: "Computer System Validation (CSV)", desc: "GAMP 5-compliant validation for ERP (SAP), LIMS, MES, DCS, SCADA, QMS, and all GxP-critical computerized systems. 21 CFR Part 11 and Annex 11 compliant deliverables." },
  { icon: Shield, title: "Equipment Qualification (IQ/OQ/PQ)", desc: "Design, Installation, Operational, and Performance Qualification for manufacturing equipment, laboratory instruments, clean rooms, HVAC, and utility systems." },
  { icon: FlaskConical, title: "Method Validation", desc: "Analytical method validation per ICH Q2(R1) — specificity, linearity, range, accuracy, precision (repeatability, intermediate precision, reproducibility), LOD, LOQ, and robustness studies." },
  { icon: ClipboardCheck, title: "Regulatory Compliance & Audits", desc: "Pre-approval inspections, mock FDA/EMA audits, gap analysis, CAPA management, and remediation support. Regulatory submission dossiers and validation summaries." },
  { icon: AlertTriangle, title: "Risk Management", desc: "ICH Q9-based risk assessments, FMEA, HACCP, and risk-based validation strategies. Risk register development and lifecycle risk management programs." },
  { icon: Thermometer, title: "Cleaning Validation", desc: "Dedicated cleaning validation programs with swab/rinse sampling, worst-case product calculations, acceptance criteria determination, and analytical testing support." },
  { icon: Factory, title: "Facility & Utility Validation", desc: "Clean room qualification, HVAC validation, purified water and WFI systems, compressed air, nitrogen — complete utility validation packages." },
  { icon: GraduationCap, title: "Training & Workshops", desc: "Onsite and virtual training programs on GMP, GDP, process validation lifecycle, CSV/GAMP 5, risk management, data integrity, and regulatory compliance." },
];

export default function ServicesPage() {
  useScrollReveal();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <PageBanner
        title="Our Services"
        subtitle="Comprehensive validation and compliance solutions tailored to your industry needs."
      />

      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="reveal mb-10">
            <SectionLabel label="Service Portfolio" />
            <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-foreground mb-2 leading-tight">
              End-to-End Validation Expertise
            </h2>
            <div className="h-[3px] w-14 gradient-bar rounded-full mt-4" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 stagger-children">
            {allServices.map((s) => (
              <div
                key={s.title}
                className="reveal group relative bg-card border border-border rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1 hover:border-accent overflow-hidden"
              >
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
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
