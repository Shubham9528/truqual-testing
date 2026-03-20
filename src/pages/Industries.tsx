import React from 'react';
import { motion } from 'motion/react';
import { Pill, Stethoscope, Utensils, Beaker, Activity, Leaf } from 'lucide-react';

const Industries = () => {
  const industries = [
    { title: 'Pharmaceutical & Biotech', desc: 'Process validation, sterility assurance, CSV, and regulatory compliance for drug manufacturers.', icon: <Pill size={32} /> },
    { title: 'Medical Devices', desc: 'ISO 13485-compliant validation services including IQ/OQ/PQ and software validation.', icon: <Stethoscope size={32} /> },
    { title: 'Food & Beverage', desc: 'HACCP-based validation, process qualification, and equipment validation for processing facilities.', icon: <Utensils size={32} /> },
    { title: 'Chemical Manufacturing', desc: 'Process validation and equipment qualification for API manufacturers meeting ICH standards.', icon: <Beaker size={32} /> },
    { title: 'Healthcare IT', desc: 'CSV and 21 CFR Part 11 compliance for electronic health records and diagnostic software.', icon: <Activity size={32} /> },
    { title: 'Nutraceuticals', desc: 'GMP compliance, process validation, and quality system support for health supplement producers.', icon: <Leaf size={32} /> },
  ];

  return (
    <div className="pt-20">
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-20">
            <div className="text-brand-gold text-sm font-medium uppercase tracking-widest mb-4">Sectors</div>
            <h1 className="text-5xl mb-8">Cross-Industry Mastery</h1>
            <p className="text-brand-blue/60 font-light leading-relaxed text-xl">
              We bring deep domain expertise to every project, understanding the unique regulatory nuances of each sector we serve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((ind, i) => (
              <div key={i} className="p-12 rounded-[40px] bg-soft-bg border border-brand-blue/5 hover:border-brand-gold/30 transition-all group">
                <div className="text-brand-gold mb-8 transition-transform group-hover:scale-110 duration-500">{ind.icon}</div>
                <h3 className="text-xl mb-4">{ind.title}</h3>
                <p className="text-base text-brand-blue/60 font-light leading-relaxed">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;
