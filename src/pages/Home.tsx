import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Award, Users, Briefcase, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const stats = [
    { label: 'Projects Done', value: '200+', icon: <Briefcase size={20} /> },
    { label: 'Years Experience', value: '15+', icon: <Award size={20} /> },
    { label: 'Expert Consultants', value: '50+', icon: <Users size={20} /> },
    { label: 'Audit Success', value: '100%', icon: <CheckCircle2 size={20} /> },
  ];

  const services = [
    { title: 'Process Validation', desc: 'Full lifecycle process validation including prospective and concurrent approaches.', icon: '🔧' },
    { title: 'CSV & 21 CFR', desc: 'GAMP 5-based validation for ERP, LIMS, and all GxP computerized systems.', icon: '💻' },
    { title: 'Equipment Qualification', desc: 'IQ, OQ, PQ and DQ protocols for manufacturing and lab equipment.', icon: '⚙️' },
    { title: 'Method Validation', desc: 'Analytical method validation as per ICH Q2(R1) standards.', icon: '🧪' },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-blue/5 rounded-l-[100px] transform translate-x-20"></div>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-brand-gold/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-gold/10 text-brand-gold text-sm font-medium mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-gold"></span>
                </span>
                Trusted Validation Partners
              </div>
              <h1 className="text-5xl md:text-7xl mb-8 leading-[1.1]">
                Precision. <br />
                <span className="text-brand-gold">Compliance.</span> <br />
                Confidence.
              </h1>
              <p className="text-xl text-brand-blue/60 mb-10 max-w-lg leading-relaxed font-light">
                Truqual delivers world-class validation and qualification services to regulated industries. 
                Ensuring your operations meet global regulatory standards.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-brand-blue text-white rounded-full font-medium hover:shadow-xl hover:shadow-brand-blue/20 transition-all flex items-center gap-2 group"
                >
                  Get Free Consultation
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/services"
                  className="px-8 py-4 border border-brand-blue/10 text-brand-blue rounded-full font-medium hover:bg-brand-blue/5 transition-all"
                >
                  Our Services
                </Link>
              </div>

              <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8 border-t border-brand-blue/5 pt-12">
                {stats.map((stat, i) => (
                  <div key={i}>
                    <div className="text-2xl font-display text-brand-blue mb-1">{stat.value}</div>
                    <div className="text-xs uppercase tracking-widest text-brand-blue/40 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative z-10 bg-white p-8 rounded-3xl soft-shadow border border-brand-blue/5">
                <div className="grid grid-cols-2 gap-6">
                  {services.map((service, i) => (
                    <div key={i} className="p-6 rounded-2xl bg-soft-bg border border-brand-blue/5 hover:border-brand-gold/30 transition-all group">
                      <div className="text-3xl mb-4 grayscale group-hover:grayscale-0 transition-all">{service.icon}</div>
                      <h3 className="text-base font-medium mb-2">{service.title}</h3>
                      <p className="text-sm text-brand-blue/50 leading-relaxed">{service.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-gold/10 rounded-full -z-10"></div>
              <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-brand-blue/5 rounded-full -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 bg-brand-blue text-white/40 overflow-hidden border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 items-center opacity-60">
            {['FDA 21 CFR Part 11', 'EU GMP Annex 11', 'ICH Q8/Q9/Q10', 'ISO 13485', 'GAMP 5 Framework'].map((item) => (
              <span key={item} className="text-xs uppercase tracking-[0.3em] font-medium whitespace-nowrap">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-soft-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="text-brand-gold text-sm font-medium uppercase tracking-widest mb-4">What We Do</div>
            <h2 className="text-4xl mb-6">Expert Validation Services</h2>
            <p className="text-brand-blue/60 font-light leading-relaxed">
              Comprehensive validation expertise across pharmaceutical, biotech, medical device, and food industries — ensuring compliance at every step.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Process Validation', desc: 'Full lifecycle process validation including prospective, concurrent, and retrospective approaches.', icon: '🛡️' },
              { title: 'CSV & 21 CFR', desc: 'GAMP 5-based validation for ERP, LIMS, and all GxP computerized systems.', icon: '💻' },
              { title: 'Equipment Qualification', desc: 'IQ, OQ, PQ and DQ protocols for manufacturing and lab equipment.', icon: '⚙️' },
              { title: 'Method Validation', desc: 'Analytical method validation as per ICH Q2(R1) standards.', icon: '🧪' },
              { title: 'Regulatory Audits', desc: 'Mock inspections, gap assessments, and pre-regulatory audit preparations.', icon: '📋' },
              { title: 'Training', desc: 'Customized training programs on GMP, GDP, and validation best practices.', icon: '🎓' },
            ].map((s, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="group relative bg-white p-10 rounded-3xl soft-shadow border border-brand-blue/5 transition-all overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-emerald-400 via-yellow-400 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <div className="text-4xl mb-8">{s.icon}</div>
                <h3 className="text-xl mb-4">{s.title}</h3>
                <p className="text-base text-brand-blue/60 font-light leading-relaxed mb-8">{s.desc}</p>
                <Link to="/services" className="text-brand-gold text-sm font-medium uppercase tracking-widest hover:gap-3 flex items-center gap-2 transition-all">
                  Learn More <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-[40px] overflow-hidden bg-brand-blue p-12 md:p-20 text-center">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-gold via-transparent to-transparent"></div>
            </div>
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-4xl text-white mb-8">Ready to ensure your compliance?</h2>
              <p className="text-white/60 font-light mb-12 leading-relaxed">
                Get in touch with our experts today for a free consultation and gap assessment of your current validation program.
              </p>
              <Link
                to="/contact"
                className="inline-flex px-10 py-5 bg-brand-gold text-brand-blue rounded-full font-medium hover:bg-brand-gold/90 transition-all"
              >
                Request a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
