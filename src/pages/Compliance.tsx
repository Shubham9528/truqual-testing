import React from 'react';
import { motion } from 'motion/react';
import { FileText, ShieldCheck, Globe, Scale, BookOpen, CheckCircle } from 'lucide-react';

const Compliance = () => {
  const standards = [
    { title: 'FDA 21 CFR Part 11', desc: 'Complete compliance programs for electronic records and signatures, ensuring audit trails and data integrity.', icon: <ShieldCheck /> },
    { title: 'EU GMP Annex 11', desc: 'Validation of computerized systems for EU markets including life cycle documentation and supplier management.', icon: <Globe /> },
    { title: 'ICH Q8/Q9/Q10', desc: 'Implementation of pharmaceutical development, risk management, and quality systems documentation.', icon: <Scale /> },
    { title: 'ISO 13485', desc: 'QMS implementation and process validation for medical device manufacturers targeting global markets.', icon: <FileText /> },
    { title: 'GAMP 5', desc: 'Risk-based approach to GxP-compliant computerized systems validation based on ISPE categorization.', icon: <BookOpen /> },
    { title: 'WHO GMP', desc: 'WHO Technical Report Series compliance for manufacturers targeting prequalified markets.', icon: <CheckCircle /> },
  ];

  return (
    <div className="pt-20">
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-20">
            <div className="text-brand-gold text-sm font-medium uppercase tracking-widest mb-4">Standards</div>
            <h1 className="text-5xl mb-8">Global Compliance Excellence</h1>
            <p className="text-brand-blue/60 font-light leading-relaxed text-xl">
              We ensure your operations align with the most stringent global regulatory frameworks and quality standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {standards.map((s, i) => (
              <div key={i} className="flex gap-8 p-10 rounded-3xl bg-soft-bg border border-brand-blue/5">
                <div className="w-14 h-14 rounded-2xl bg-brand-blue text-brand-gold flex items-center justify-center shrink-0">
                  {React.cloneElement(s.icon as React.ReactElement, { size: 28 })}
                </div>
                <div>
                  <h3 className="text-xl mb-3">{s.title}</h3>
                  <p className="text-base text-brand-blue/60 font-light leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Compliance;
