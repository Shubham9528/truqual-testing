import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Linkedin, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-blue text-white/80 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-brand-gold">
                <ShieldCheck size={24} />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-xl leading-none tracking-wider text-white">TRUQUAL</span>
                <span className="text-xs uppercase tracking-[0.2em] text-brand-gold font-medium">Validation Experts</span>
              </div>
            </Link>
            <p className="text-base leading-relaxed text-white/60">
              Your trusted partner for precision validation, regulatory compliance, and quality assurance across regulated industries.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-gold hover:text-brand-blue transition-all">
                <Linkedin size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-gold hover:text-brand-blue transition-all">
                <Twitter size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-gold hover:text-brand-blue transition-all">
                <Youtube size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-display mb-6">Services</h4>
            <ul className="space-y-4 text-base">
              <li><Link to="/services" className="hover:text-brand-gold transition-colors">Process Validation</Link></li>
              <li><Link to="/services" className="hover:text-brand-gold transition-colors">CSV / GAMP 5</Link></li>
              <li><Link to="/services" className="hover:text-brand-gold transition-colors">Equipment Qualification</Link></li>
              <li><Link to="/services" className="hover:text-brand-gold transition-colors">Method Validation</Link></li>
              <li><Link to="/services" className="hover:text-brand-gold transition-colors">Regulatory Audits</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display mb-6">Quick Links</h4>
            <ul className="space-y-4 text-base">
              <li><Link to="/about" className="hover:text-brand-gold transition-colors">About Us</Link></li>
              <li><Link to="/industries" className="hover:text-brand-gold transition-colors">Industries</Link></li>
              <li><Link to="/compliance" className="hover:text-brand-gold transition-colors">Compliance</Link></li>
              <li><Link to="/cases" className="hover:text-brand-gold transition-colors">Case Studies</Link></li>
              <li><Link to="/careers" className="hover:text-brand-gold transition-colors">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display mb-6">Contact</h4>
            <ul className="space-y-4 text-base">
              <li className="flex gap-3">
                <MapPin size={18} className="text-brand-gold shrink-0" />
                <span>Innovation Hub, Viman Nagar, Pune, MH 411014</span>
              </li>
              <li className="flex gap-3">
                <Phone size={18} className="text-brand-gold shrink-0" />
                <span>+91 20 4567 8900</span>
              </li>
              <li className="flex gap-3">
                <Mail size={18} className="text-brand-gold shrink-0" />
                <span>info@truqual.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
          <p>© 2025 Truqual Validation Expert Services. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
