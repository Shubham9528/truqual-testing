import React from 'react';
import { motion } from 'motion/react';
import { Calendar, ArrowRight, BookOpen } from 'lucide-react';

const Resources = () => {
  const articles = [
    {
      date: 'March 14, 2025',
      category: 'Regulatory Update',
      title: 'FDA Releases Updated Draft Guidance on Process Validation',
      excerpt: 'Key changes affect Stage 3 continued process verification expectations and data integrity requirements.',
    },
    {
      date: 'March 08, 2025',
      category: 'CSV',
      title: 'GAMP 5 Second Edition: Key Changes and Implementation',
      excerpt: 'Significant updates to software categorization, risk-based testing, and cloud-hosted systems validation.',
    },
    {
      date: 'March 01, 2025',
      category: 'Data Integrity',
      title: 'Top 5 Data Integrity Gaps Found in FDA Inspections',
      excerpt: 'Our analysis of recent warning letters reveals common failures in audit trail reviews and raw data controls.',
    },
    {
      date: 'February 22, 2025',
      category: 'Best Practice',
      title: 'Building a Risk-Based Validation Master Plan',
      excerpt: 'How to build a VMP that is practical, risk-based, and regulator-friendly for complex facilities.',
    }
  ];

  return (
    <div className="pt-20">
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-20">
            <div className="text-brand-gold text-sm font-medium uppercase tracking-widest mb-4">Insights</div>
            <h1 className="text-5xl mb-8">Resources & Knowledge</h1>
            <p className="text-brand-blue/60 font-light leading-relaxed text-xl">
              Stay updated with the latest regulatory news, validation best practices, and expert insights from the Truqual team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {articles.map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="aspect-video rounded-3xl overflow-hidden mb-8 bg-brand-blue/5 relative">
                  <div className="absolute inset-0 flex items-center justify-center text-brand-blue/10">
                    <BookOpen size={64} />
                  </div>
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-xs uppercase tracking-widest font-bold text-brand-gold">{a.category}</span>
                  <div className="w-1 h-1 rounded-full bg-brand-blue/20"></div>
                  <span className="text-sm text-brand-blue/40 flex items-center gap-1">
                    <Calendar size={12} /> {a.date}
                  </span>
                </div>
                <h3 className="text-2xl mb-4 group-hover:text-brand-gold transition-colors">{a.title}</h3>
                <p className="text-base text-brand-blue/60 font-light leading-relaxed mb-6">{a.excerpt}</p>
                <div className="text-brand-blue font-medium text-base flex items-center gap-2 group-hover:gap-3 transition-all">
                  Read Article <ArrowRight size={16} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;
