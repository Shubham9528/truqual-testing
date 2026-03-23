import { useEffect } from "react";
import { CheckCircle2, Target, Lightbulb, Scale } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import PageBanner from "@/components/PageBanner";
import SectionLabel from "@/components/SectionLabel";

const values = [
  { icon: Target, title: "Precision", desc: "Meticulous attention to every protocol, every test, every document — because in validation, details save lives." },
  { icon: CheckCircle2, title: "Excellence", desc: "We don't just meet standards — we set them. Every deliverable exceeds regulatory expectations." },
  { icon: Lightbulb, title: "Innovation", desc: "Adopting the latest frameworks and risk-based approaches to deliver smarter solutions." },
  { icon: Scale, title: "Integrity", desc: "Transparent, honest, and objective counsel — always in the best interest of the client." },
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

      <section className="section-padding bg-background">
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
              <div className="bg-secondary border border-border rounded-2xl p-10 flex flex-col items-center justify-center min-h-[320px]">
                <span className="font-heading font-black text-6xl text-amber tracking-[4px]">TQ</span>
                <span className="text-muted-foreground text-xs uppercase tracking-[3px] mt-2 font-heading font-semibold">
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

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 stagger-children mb-20">
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

          {/* Team */}
          <div className="reveal mb-6">
            <SectionLabel label="Our Team" />
            <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-foreground mb-2 leading-tight">
              Leadership & Experts
            </h2>
            <div className="h-[3px] w-14 gradient-bar rounded-full mt-4 mb-10" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {team.map((t) => (
              <div
                key={t.name}
                className="reveal rounded-xl border border-border overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1"
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
