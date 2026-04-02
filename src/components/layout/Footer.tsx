import { Link } from "react-router-dom";

const footerLinks = {
  services: [
    { label: "Process Validation", path: "/services" },
    { label: "CSV", path: "/services" },
    { label: "Equipment Qualification", path: "/services" },
    { label: "Method Validation", path: "/services" },
    { label: "Regulatory Audits", path: "/services" },
  ],
  company: [
    { label: "About Us", path: "/about" },
    { label: "Case Studies", path: "/case-studies" },
    { label: "Industries", path: "/industries" },
    { label: "Contact", path: "/contact" },
  ],
  resources: [
    { label: "Blog & Insights", path: "/" },
    { label: "Compliance Standards", path: "/" },
    { label: "Free Downloads", path: "/" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[hsl(213,42%,7%)] pt-16 pb-8">
      <div className="container-narrow px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <span className="font-heading font-bold text-lg tracking-[2px] text-white">
                TRUQUAL
              </span>
              <p className="text-[0.6rem] text-amber tracking-[1.5px] uppercase font-medium">
                Validation Expert Services
              </p>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-[260px]">
              Precision-driven validation and compliance solutions for life sciences and regulated industries worldwide.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-xs text-white uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 list-none">
              {footerLinks.services.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.path}
                    className="text-sm text-slate-400 hover:text-amber transition-colors no-underline"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-bold text-xs text-white uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 list-none">
              {footerLinks.company.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.path}
                    className="text-sm text-slate-400 hover:text-amber transition-colors no-underline"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-heading font-bold text-xs text-white uppercase tracking-wider mb-4">
              Stay Updated
            </h4>
            <p className="text-sm text-slate-400 mb-3">
              Get regulatory updates and validation insights.
            </p>
            <input
              type="email"
              placeholder="Your email address"
              className="w-full px-3 py-2.5 rounded-md bg-white/5 border border-white/10 text-white text-sm placeholder:text-slate-500 focus:border-accent focus:outline-none mb-2"
            />
            <button className="w-full py-2.5 rounded-md bg-primary text-primary-foreground font-heading font-bold text-xs uppercase tracking-wide hover:opacity-90 transition-opacity active:scale-[0.97]">
              Subscribe
            </button>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Truqual Validation Expert Services. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-xs text-slate-500 font-heading font-semibold uppercase tracking-wide cursor-pointer hover:text-amber transition-colors">
              Privacy Policy
            </span>
            <span className="text-xs text-slate-500 font-heading font-semibold uppercase tracking-wide cursor-pointer hover:text-amber transition-colors">
              Terms
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
