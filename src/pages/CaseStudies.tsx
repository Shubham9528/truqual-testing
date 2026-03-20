import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ExternalLink } from 'lucide-react';

const CaseStudies = () => {
  const cases = [
    {
      title: 'Tablet Manufacturing Process Validation',
      industry: 'Pharmaceuticals',
      challenge: 'Client needed full process validation for a new oral solid dosage facility before FDA pre-approval inspection.',
      approach: 'Deployed a 6-member team; developed VMP, DQ/IQ/OQ/PQ protocols, and executed full process validation runs.',
      outcome: 'Successful FDA inspection with zero critical 483 observations. First product approval within 18 months.',
      tag: 'Process Validation'
    },
    {
      title: 'SAP ERP System Validation',
      industry: 'Biotech',
      challenge: 'Large biotech company implementing SAP S/4 HANA needed complete CSV documentation in compliance with 21 CFR Part 11.',
      approach: 'Conducted impact assessment, developed system inventory, URS, FRS, and complete qualification packages.',
      outcome: 'Full GAMP 5 compliant package delivered in 5 months. Passed EU regulatory inspection without observations.',
      tag: 'CSV / SAP'
    },
    {
      title: 'Data Integrity Remediation',
      industry: 'Pharma — API',
      challenge: 'API manufacturer received FDA warning letter citing data integrity failures across laboratory systems.',
      approach: 'Performed root cause analysis, developed CAPA plan, implemented ALCOA+ framework, and provided training.',
      outcome: 'Warning letter successfully closed within 12 months. FDA re-inspection resulted in no observations.',
      tag: 'Data Integrity'
    }
  ];

  return (
    <div className="pt-20">
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-20">
            <div className="text-brand-gold text-sm font-medium uppercase tracking-widest mb-4">Our Work</div>
            <h1 className="text-5xl mb-8">Proven Results</h1>
            <p className="text-brand-blue/60 font-light leading-relaxed text-xl">
              Real-world validation challenges solved with precision and expertise across global regulated industries.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {cases.map((c, i) => (
              <div key={i} className="rounded-[40px] overflow-hidden border border-brand-blue/5 bg-soft-bg flex flex-col">
                <div className="p-10 bg-brand-blue text-white">
                  <div className="flex justify-between items-start mb-6">
                    <span className="px-4 py-1.5 rounded-full bg-brand-gold/20 text-brand-gold text-xs font-medium uppercase tracking-widest">
                      {c.tag}
                    </span>
                    <span className="text-xs text-white/40 uppercase tracking-widest">{c.industry}</span>
                  </div>
                  <h3 className="text-2xl leading-tight">{c.title}</h3>
                </div>
                <div className="p-10 space-y-8 flex-grow">
                  <div>
                    <div className="text-xs uppercase tracking-widest text-brand-gold font-bold mb-2">Challenge</div>
                    <p className="text-base text-brand-blue/70 font-light leading-relaxed">{c.challenge}</p>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-brand-gold font-bold mb-2">Our Approach</div>
                    <p className="text-base text-brand-blue/70 font-light leading-relaxed">{c.approach}</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-brand-blue/5 border-l-4 border-brand-gold">
                    <p className="text-base font-medium text-brand-blue">{c.outcome}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
