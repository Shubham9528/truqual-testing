import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Briefcase, Clock, MapPin } from 'lucide-react';

const Careers = () => {
  const jobs = [
    { title: 'Senior Validation Engineer', location: 'Pune / Mumbai', type: 'Full-Time', exp: '5–8 Years', sector: 'Process Validation' },
    { title: 'CSV Consultant', location: 'Hyderabad / Remote', type: 'Full-Time', exp: '3–6 Years', sector: 'SAP / LIMS' },
    { title: 'QA Specialist', location: 'Bengaluru', type: 'Full-Time', exp: '3–5 Years', sector: 'Data Integrity' },
    { title: 'Regulatory Associate', location: 'Mumbai', type: 'Full-Time', exp: '2–4 Years', sector: 'Regulatory Affairs' },
  ];

  return (
    <div className="pt-20">
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
            <div>
              <div className="text-brand-gold text-sm font-medium uppercase tracking-widest mb-4">Careers</div>
              <h1 className="text-5xl mb-8">Join Our Expert Team</h1>
              <p className="text-brand-blue/60 font-light leading-relaxed mb-8 text-lg">
                At Truqual, we believe our people are our greatest asset. We invest in your professional development and offer exciting projects across leading life sciences companies.
              </p>
              <ul className="space-y-4 text-base text-brand-blue/70 font-light">
                <li className="flex items-center gap-3"><Check size={16} className="text-brand-gold" /> Work with Fortune 500 pharma clients</li>
                <li className="flex items-center gap-3"><Check size={16} className="text-brand-gold" /> Continuous learning & certifications</li>
                <li className="flex items-center gap-3"><Check size={16} className="text-brand-gold" /> Flexible work arrangements</li>
              </ul>
            </div>
            <div className="bg-brand-blue p-12 rounded-[40px] text-white/60">
              <div className="text-brand-gold text-4xl mb-4 font-display">Grow With Us</div>
              <p className="font-light leading-relaxed mb-8">
                We are always looking for passionate validation experts, quality engineers, and regulatory consultants to join our growing team.
              </p>
              <div className="w-full h-[1px] bg-white/10 mb-8"></div>
              <p className="text-sm uppercase tracking-widest">Send your CV to:</p>
              <p className="text-white text-lg mt-2">careers@truqual.com</p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl mb-12">Current Openings</h2>
            {jobs.map((job, i) => (
              <div key={i} className="p-8 rounded-3xl bg-soft-bg border border-brand-blue/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 hover:border-brand-gold/30 transition-all group">
                <div>
                  <h3 className="text-xl mb-4">{job.title}</h3>
                  <div className="flex flex-wrap gap-4">
                    <span className="inline-flex items-center gap-2 text-sm text-brand-blue/50"><MapPin size={14} /> {job.location}</span>
                    <span className="inline-flex items-center gap-2 text-sm text-brand-blue/50"><Clock size={14} /> {job.type}</span>
                    <span className="inline-flex items-center gap-2 text-sm text-brand-blue/50"><Briefcase size={14} /> {job.exp}</span>
                  </div>
                </div>
                <button className="px-8 py-3 bg-brand-blue text-white rounded-full text-base font-medium hover:bg-brand-blue/90 transition-all whitespace-nowrap">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const Check = ({ size, className }: { size: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default Careers;
