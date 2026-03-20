import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Menu, X, ShieldCheck } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Industries', path: '/industries' },
    { name: 'Compliance', path: '/compliance' },
    { name: 'Case Studies', path: '/cases' },
    { name: 'Resources', path: '/resources' },
    { name: 'Careers', path: '/careers' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-brand-blue/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-brand-blue rounded-lg flex items-center justify-center text-brand-gold transition-transform group-hover:scale-105">
              <ShieldCheck size={24} />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl leading-none tracking-wider text-brand-blue">TRUQUAL</span>
              <span className="text-xs uppercase tracking-[0.2em] text-brand-gold font-medium">Validation Experts</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 text-sm font-medium transition-colors rounded-md ${
                  isActive(link.path)
                    ? 'text-brand-gold bg-brand-gold/5'
                    : 'text-brand-blue/70 hover:text-brand-blue hover:bg-brand-blue/5'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="ml-4 px-6 py-2.5 bg-brand-blue text-white text-sm font-medium rounded-full hover:bg-brand-blue/90 transition-all hover:shadow-lg hover:shadow-brand-blue/20"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-brand-blue hover:bg-brand-blue/5 rounded-md transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-white border-b border-brand-blue/5 absolute w-full"
        >
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 text-base font-medium rounded-md ${
                  isActive(link.path)
                    ? 'text-brand-gold bg-brand-gold/5'
                    : 'text-brand-blue/70 hover:text-brand-blue hover:bg-brand-blue/5'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 text-base font-medium text-white bg-brand-blue rounded-md"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
