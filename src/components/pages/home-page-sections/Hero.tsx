import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { stats } from "@/components/pages/constant/home.data";

export default function Hero() {
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

        <div className="relative z-10 container-narrow px-5 sm:px-6 py-12 md:py-24">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 bg-white/5 border border-amber/30 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse-dot" />
                <span className="font-heading text-xs font-bold tracking-wider uppercase text-amber">
                  Expert Services
                </span>
              </div>

              <h1 className="font-heading font-black text-[2rem] sm:text-4xl md:text-5xl lg:text-[3.4rem] text-white leading-[1.08] mb-4 md:mb-5" style={{ lineHeight: "1.08" }}>
                Validation You Can{" "}
                <span className="text-amber">Trust.</span>
                <br />
                Compliance You Can{" "}
                <span className="text-green">Prove.</span>
              </h1>

              <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-[480px] mb-7 md:mb-8">
                End-to-end validation and regulatory compliance services for pharmaceutical,
                biotech, and medical device companies — from process design to FDA approval.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-8 md:mb-10">
                <Link
                  to="/contact"
                  className="inline-flex w-full sm:w-auto justify-center items-center gap-2 px-6 py-3.5 rounded-md bg-primary text-primary-foreground font-heading font-bold text-sm uppercase tracking-wide no-underline transition-all duration-200 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 active:scale-[0.97]"
                >
                  Request Consultation
                  <ArrowRight size={16} />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex w-full sm:w-auto justify-center items-center gap-2 px-6 py-3.5 rounded-md border border-white/25 text-white font-heading font-semibold text-sm uppercase tracking-wide no-underline transition-all duration-200 hover:border-accent hover:text-accent"
                >
                  Our Services
                </Link>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-x-6 gap-y-4 pt-5 md:pt-6 border-t border-white/10">
                {stats.map((s) => (
                  <div key={s.label} className="min-w-[120px] flex-1 sm:flex-none">
                    <div className="font-heading font-extrabold text-xl sm:text-2xl text-amber tabular-nums">
                      {s.value}
                    </div>
                    <div className="text-[11px] sm:text-xs text-slate-400 uppercase tracking-wider">
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
    </>
  );
}
