import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Industries", path: "/industries" },
  { label: "Case Studies", path: "/case-studies" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "shadow-lg"
          : ""
      }`}
      style={{ borderBottom: "2px solid hsl(var(--amber))", backgroundColor: "hsl(213 39% 11% / 0.98)", backdropFilter: "blur(12px)" }}
    >
      <div className="container-narrow flex items-center justify-between h-[70px] px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 no-underline">
          <div className="flex flex-col">
            <span className="font-heading font-bold text-lg tracking-[2px] text-white">
              TRUQUAL
            </span>
            <span className="text-[0.6rem] text-amber tracking-[1.5px] uppercase font-medium">
              Validation Expert Services
            </span>
          </div>
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-1 list-none">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`font-heading text-xs font-semibold tracking-wide uppercase px-3 py-2 rounded transition-colors duration-200 no-underline ${
                  location.pathname === link.path
                    ? "text-amber"
                    : "text-slate-300 hover:text-amber hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="ml-2">
            <Link
              to="/contact"
              className="font-heading text-xs font-bold uppercase tracking-wide px-5 py-2.5 rounded bg-primary text-primary-foreground no-underline transition-all duration-200 hover:opacity-90 active:scale-[0.97]"
            >
              Get a Quote
            </Link>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-navy border-t border-white/10 px-6 pb-6 pt-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block font-heading text-sm font-semibold uppercase tracking-wide py-3 border-b border-white/5 no-underline ${
                location.pathname === link.path ? "text-amber" : "text-slate-300"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="block mt-4 text-center font-heading text-sm font-bold uppercase tracking-wide px-5 py-3 rounded bg-primary text-primary-foreground no-underline"
          >
            Get a Quote
          </Link>
        </div>
      )}
    </nav>
  );
}
