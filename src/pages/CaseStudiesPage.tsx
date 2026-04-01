import { useEffect } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import PageBanner from "@/components/PageBanner";
import SectionLabel from "@/components/SectionLabel";
import { cases } from "@/pages/constant/caseStudies.data";

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
