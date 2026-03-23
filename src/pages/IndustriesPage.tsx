import { useEffect } from "react";
import { Pill, Stethoscope, Factory, Beaker, Building2, Leaf } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import PageBanner from "@/components/PageBanner";
import SectionLabel from "@/components/SectionLabel";

const industries = [
  { icon: Pill, title: "Pharmaceutical & Biotech", desc: "Process validation, sterility assurance, CSV, and regulatory compliance for drug manufacturers and biotech companies across global markets." },
  { icon: Stethoscope, title: "Medical Devices", desc: "ISO 13485-compliant validation services for medical device manufacturers including IQ/OQ/PQ, process validation, and software validation." },
  { icon: Factory, title: "Food & Beverage", desc: "HACCP-based validation, process qualification, and equipment validation for food manufacturing and beverage processing facilities." },
  { icon: Beaker, title: "Chemical Manufacturing", desc: "Process validation and equipment qualification for API manufacturers and specialty chemical producers meeting ICH and REACH standards." },
  { icon: Building2, title: "Healthcare IT", desc: "CSV and 21 CFR Part 11 compliance for healthcare IT systems, electronic health records, clinical data management systems, and diagnostic software." },
  { icon: Leaf, title: "Nutraceuticals & Cosmetics", desc: "GMP compliance, process validation, and quality system support for nutraceutical and cosmetic manufacturers entering regulated markets." },
];

export default function IndustriesPage() {
  useScrollReveal();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <PageBanner
        title="Industries We Serve"
        subtitle="Deep domain expertise across regulated industries worldwide."
      />

      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="reveal mb-10">
            <SectionLabel label="Sectors" />
            <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-foreground mb-2 leading-tight">
              Cross-Industry Validation Mastery
            </h2>
            <div className="h-[3px] w-14 gradient-bar rounded-full mt-4" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {industries.map((ind) => (
              <div
                key={ind.title}
                className="reveal bg-card border border-border rounded-xl p-7 relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5 hover:border-accent"
              >
                <div className="absolute bottom-0 left-0 right-0 h-[3px] gradient-bar" />
                <ind.icon size={30} className="text-accent mb-4" />
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
    </>
  );
}
