import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const Services = () => {
  const serviceList = [
    { title: 'Process Validation', desc: 'Prospective, concurrent and retrospective process validation for pharmaceutical manufacturing including solid dosage forms, sterile products, and biologics.', icon: '🛡️' },
    { title: 'CSV / GAMP 5', desc: 'GAMP 5-compliant validation for ERP (SAP), LIMS, MES, DCS, SCADA, QMS, and all GxP-critical computerized systems.', icon: '💻' },
    { title: 'Equipment Qualification', desc: 'Design, Installation, Operational, and Performance Qualification (IQ/OQ/PQ) for manufacturing equipment and laboratory instruments.', icon: '⚙️' },
    { title: 'Method Validation', desc: 'Analytical method validation per ICH Q2(R1) — accuracy, precision, specificity, linearity, and robustness studies.', icon: '🧪' },
    { title: 'Regulatory Compliance', desc: 'Mock inspections, gap assessments, and pre-regulatory audit preparations aligned with global standards (FDA, EMA, WHO).', icon: '📋' },
    { title: 'Risk Management', desc: 'ICH Q9-based risk assessments, FMEA, HACCP, and risk-based validation strategies for lifecycle management.', icon: '⚠️' },
    { title: 'Cleaning Validation', desc: 'Dedicated cleaning validation programs with swab/rinse sampling and worst-case product calculations.', icon: '🌡️' },
    { title: 'Facility & Utility', desc: 'Clean room qualification, HVAC validation, purified water and WFI systems, and compressed air validation.', icon: '🏭' },
    { title: 'Training', desc: 'Onsite and virtual training programs on GMP, GDP, data integrity, and regulatory requirements.', icon: '🎓' },
  ];

  return (
    <div className="pt-20">
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-20">
            <div className="text-brand-gold text-sm font-medium uppercase tracking-widest mb-4">Our Expertise</div>
            <h1 className="text-5xl mb-8">Comprehensive Validation Solutions</h1>
            <p className="text-brand-blue/60 font-light leading-relaxed text-xl">
              We provide end-to-end validation and compliance services tailored to the specific needs of regulated industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {serviceList.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="text-4xl mb-6 transition-all duration-500">{s.icon}</div>
                <h3 className="text-xl mb-4 border-b border-brand-blue/5 pb-4 transition-all">{s.title}</h3>
                <p className="text-base text-brand-blue/60 font-light leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Section */}
      <section className="py-24 bg-soft-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="rounded-[40px] overflow-hidden soft-shadow">
              <img 
                src="https://picsum.photos/seed/lab/800/1000" 
                alt="Laboratory Validation" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h2 className="text-4xl mb-8">Why Choose Truqual?</h2>
              <div className="space-y-8">
                {[
                  { title: 'Risk-Based Approach', desc: 'We focus on what matters most, optimizing validation efforts while ensuring full compliance.' },
                  { title: 'Regulatory Alignment', desc: 'Our protocols are designed to meet the stringent requirements of FDA, EMA, MHRA, and WHO.' },
                  { title: 'Experienced Specialists', desc: 'Our team brings decades of hands-on experience in complex manufacturing environments.' },
                  { title: 'End-to-End Support', desc: 'From initial URS development to final validation summary reports and audit support.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-6 h-6 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold shrink-0 mt-1">
                      <ArrowRight size={12} />
                    </div>
                    <div>
                      <h4 className="font-display text-lg mb-2">{item.title}</h4>
                      <p className="text-base text-brand-blue/60 font-light leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
