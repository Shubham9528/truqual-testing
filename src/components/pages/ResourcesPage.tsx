import { useEffect } from "react";
import { ArrowRight, Bell, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import PageBanner from "@/components/layout/PageBanner";
import SectionLabel from "@/components/layout/SectionLabel";
import {
  resourceArticles,
  resourceDownloads,
} from "@/components/pages/constant/resources.data";

export default function ResourcesPage() {
  useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PageBanner
        title="Resources & Insights"
        subtitle="Regulatory updates, practical validation guidance, and downloadable assets for your team."
      />

      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-[1.6fr_1fr] gap-6 lg:gap-8 items-start">
            <div className="reveal lg:col-start-1 lg:row-start-1">
              <SectionLabel label="Latest Articles" />
              <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-foreground mb-2 leading-tight">
                Blog & Insights
              </h2>
              <div className="h-[3px] w-14 gradient-bar rounded-full mt-4" />
            </div>

            <div className="space-y-4 stagger-children lg:col-start-1 lg:row-start-2">
              {resourceArticles.map((article) => (
                <article
                  key={article.title}
                  className="reveal rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/5"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl border border-border bg-secondary/70 flex items-center justify-center shrink-0">
                      <article.icon size={20} className="text-amber" />
                    </div>

                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="inline-flex rounded-full bg-amber/15 text-amber px-2.5 py-1 text-[11px] font-heading font-bold uppercase tracking-wide">
                          {article.tag}
                        </span>
                        <span className="text-xs text-muted-foreground font-heading uppercase tracking-wider">
                          {article.date}
                        </span>
                      </div>
                      <h3 className="font-heading font-bold text-base text-foreground leading-snug mb-2">
                        {article.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {article.summary}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <aside className="space-y-4 lg:col-start-2 lg:row-start-2">
              <div className="reveal rounded-xl border border-border bg-card p-5">
                <div className="w-11 h-11 rounded-xl bg-secondary/70 border border-border flex items-center justify-center mb-3">
                  <Bell size={18} className="text-accent" />
                </div>
                <h3 className="font-heading font-bold text-base text-foreground mb-1">
                  Newsletter Updates
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Get monthly regulatory updates and validation checklists in your inbox.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-primary text-primary-foreground font-heading font-bold text-xs uppercase tracking-wide no-underline hover:opacity-90 transition-opacity"
                >
                  Subscribe
                  <ArrowRight size={14} />
                </Link>
              </div>

              <div className="reveal rounded-xl border border-border bg-card p-5">
                <h3 className="font-heading font-bold text-base text-foreground mb-3">
                  Free Downloads
                </h3>
                <div className="space-y-3">
                  {resourceDownloads.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-lg border border-border bg-secondary/40 p-3.5"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-9 h-9 rounded-lg border border-border bg-card flex items-center justify-center shrink-0">
                          <item.icon size={16} className="text-accent" />
                        </div>
                        <div>
                          <div className="font-heading font-bold text-sm text-foreground">
                            {item.title}
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <button
                  type="button"
                  className="mt-4 inline-flex items-center gap-2 px-4 py-2.5 rounded-md border border-border bg-card text-foreground font-heading font-semibold text-xs uppercase tracking-wide hover:border-accent transition-colors"
                >
                  <Download size={14} className="text-accent" />
                  Request Download Pack
                </button>
              </div>

            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
