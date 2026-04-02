import { useEffect } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import PageBanner from "@/components/layout/PageBanner";
import SectionLabel from "@/components/layout/SectionLabel";
import { allServices } from "@/components/pages/constant/services.data";

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
