import { useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import SectionLabel from "@/components/layout/SectionLabel";
import { useBlogsQuery } from "@/hooks/useBlogsQuery";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function ResourcesPage() {
  useScrollReveal();
  const { data: blogs = [], isLoading, isError } = useBlogsQuery();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <div className="reveal mb-8">
          <SectionLabel label="Latest Articles" />
          <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-foreground mb-2 leading-tight">
            Blog & Insights
          </h2>
          <div className="h-[3px] w-14 gradient-bar rounded-full mt-4" />
        </div>

        {isLoading ? (
          <div className="rounded-xl border border-border bg-card p-10">
            <div className="flex flex-col items-center justify-center gap-3">
              <div className="h-10 w-10 animate-spin rounded-full border-2 border-accent/30 border-t-accent" />
              <p className="text-sm text-muted-foreground">Loading blog posts...</p>
            </div>
          </div>
        ) : null}

        {!isLoading && isError ? (
          <div className="rounded-xl border border-destructive/30 bg-destructive/5 p-6 text-sm text-destructive">
            Unable to load blogs right now. Please try again shortly.
          </div>
        ) : null}

        {!isLoading && !isError && blogs.length === 0 ? (
          <div className="rounded-xl border border-border bg-card p-6 text-sm text-muted-foreground">
            No blog posts are available yet.
          </div>
        ) : null}

        {!isLoading && !isError && blogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 stagger-children">
            {blogs.map((blog) => (
              <Link key={blog.id} to={`/blogs/${blog.id}`} className="block no-underline">
                <article className="group bg-card rounded-2xl overflow-hidden border border-border transition-all duration-300 hover:shadow-xl hover:shadow-black/10 hover:-translate-y-1 h-full flex flex-col">
                  <div className="relative overflow-hidden aspect-video bg-secondary/40">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>

                  <div className="p-5 flex-1 flex flex-col">
                    <div className="flex items-center gap-3 text-sm text-muted-foreground mb-2">
                      <span className="font-heading font-bold text-foreground">{blog.author}</span>
                      <span>|</span>
                      <span>{blog.date}</span>
                    </div>

                    <div className="flex justify-between items-start gap-3 mb-2">
                      <h3 className="font-heading font-extrabold text-xl text-foreground leading-snug line-clamp-2">
                        {blog.title}
                      </h3>
                      <ArrowUpRight className="w-5 h-5 text-muted-foreground mt-1 shrink-0" />
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                      {blog.description}
                    </p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
