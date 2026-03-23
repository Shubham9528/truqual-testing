import { useEffect } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import PageBanner from "@/components/PageBanner";
import SectionLabel from "@/components/SectionLabel";

const cases = [
  {
    tag: "Process Validation", industry: "Pharmaceuticals",
    title: "Tablet Manufacturing Process Validation for Global Drug Manufacturer",
    challenge: "Client needed full process validation for a new oral solid dosage facility before FDA pre-approval inspection, with a tight 4-month deadline.",
    approach: "Deployed a 6-member validation team; developed VMP, DQ/IQ/OQ/PQ protocols, and executed full process validation runs with concurrent cleaning validation.",
    result: "Successful FDA pre-approval inspection. Zero critical 483 observations. First product approval within 18 months.",
  },
  {
    tag: "CSV / SAP", industry: "Biotech",
    title: "SAP ERP System Validation for Global Biotech Company",
    challenge: "Large biotech company implementing SAP S/4 HANA needed complete CSV documentation in compliance with 21 CFR Part 11 and EU GMP Annex 11.",
    approach: "Conducted impact assessment, developed system inventory, URS, FRS, and complete qualification packages with audit trail and access control verification.",
    result: "Full GAMP 5 compliant package delivered in 5 months. Passed EU regulatory inspection without observations.",
  },
  {
    tag: "Data Integrity", industry: "Pharma — API",
    title: "Data Integrity Remediation for API Manufacturer Post-Warning Letter",
    challenge: "API manufacturer received FDA warning letter citing data integrity failures across laboratory systems, raw data management, and audit trail deficiencies.",
    approach: "Performed root cause analysis, developed comprehensive CAPA plan, implemented ALCOA+ framework, and provided training to 200+ employees.",
    result: "Warning letter successfully closed within 12 months. FDA re-inspection resulted in no observations.",
  },
  {
    tag: "Equipment Qual.", industry: "Medical Devices",
    title: "Facility Qualification for ISO Class 7 Medical Device Clean Room",
    challenge: "Medical device company needed complete clean room qualification including HVAC, particle count testing, environmental monitoring, and equipment IQ/OQ/PQ.",
    approach: "Developed DQ through PQ protocols, executed qualification activities, and prepared complete qualification summary for ISO 13485 certification audit.",
    result: "ISO 13485 certification achieved on first attempt. Production launched 3 weeks ahead of schedule.",
  },
];

export default function CaseStudiesPage() {
  useScrollReveal();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <PageBanner
        title="Case Studies"
        subtitle="Real-world validation challenges solved with precision and expertise."
      />

      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="reveal mb-10">
            <SectionLabel label="Our Work" />
            <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-foreground mb-2 leading-tight">
              Proven Results Across Industries
            </h2>
            <div className="h-[3px] w-14 gradient-bar rounded-full mt-4" />
          </div>

          <div className="grid md:grid-cols-2 gap-6 stagger-children">
            {cases.map((c) => (
              <div
                key={c.title}
                className="reveal rounded-xl border border-border overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1"
              >
                {/* Header */}
                <div className="bg-secondary border-b border-border p-5">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-heading font-bold text-accent bg-accent/15 px-3 py-1 rounded-full">
                      {c.tag}
                    </span>
                    <span className="text-xs font-heading font-semibold text-muted-foreground uppercase tracking-wider">
                      {c.industry}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-base text-foreground leading-snug">
                    {c.title}
                  </h3>
                </div>

                {/* Body */}
                <div className="p-5 space-y-4">
                  <div>
                    <div className="text-xs font-heading font-bold uppercase tracking-wider text-amber mb-1">
                      Challenge
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{c.challenge}</p>
                  </div>
                  <div>
                    <div className="text-xs font-heading font-bold uppercase tracking-wider text-amber mb-1">
                      Our Approach
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{c.approach}</p>
                  </div>
                  <div className="bg-green-muted border-l-[3px] border-accent rounded-r-lg p-3">
                    <p className="text-sm text-foreground font-medium">
                      ✅ {c.result}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
