import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Target, Lightbulb, Shield } from 'lucide-react';

const About = () => {
  const values = [
    { title: 'Precision', desc: 'Meticulous attention to detail in every protocol and audit.', icon: <Target size={24} /> },
    { title: 'Partnership', desc: 'Working as an extension of your team to achieve compliance.', icon: <CheckCircle2 size={24} /> },
    { title: 'Innovation', desc: 'Adopting risk-based approaches for smarter solutions.', icon: <Lightbulb size={24} /> },
    { title: 'Integrity', desc: 'Transparent and objective counsel for our clients.', icon: <Shield size={24} /> },
  ];

  return (
    <div className="pt-20">
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-brand-gold text-sm font-medium uppercase tracking-widest mb-4">Our Story</div>
              <h1 className="text-5xl mb-8 leading-tight">Built on a Foundation of Trust & Expertise</h1>
              <div className="space-y-6 text-brand-blue/60 font-light leading-relaxed text-base">
                <p>
                  Truqual Validation Expert Services was founded with a singular mission: to help regulated industries navigate the complex landscape of validation and compliance with confidence and precision.
                </p>
                <p>
                  With over 15 years of combined expertise, our team of seasoned validation specialists, quality engineers, and regulatory consultants has successfully supported clients across pharmaceutical, biotech, medical device, and food & beverage industries.
                </p>
                <p>
                  We believe that robust validation is not just a regulatory requirement — it's a competitive advantage. At Truqual, we are your long-term partners in quality.
                </p>
              </div>
            </motion.div>
            <div className="relative">
              <div className="rounded-[40px] overflow-hidden soft-shadow">
                <img 
                  src="https://picsum.photos/seed/team/800/900" 
                  alt="Our Team" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-brand-blue text-white p-10 rounded-3xl hidden md:block">
                <div className="text-4xl font-display text-brand-gold mb-2">15+</div>
                <div className="text-sm uppercase tracking-widest text-white/60">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-soft-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <div className="text-brand-gold text-sm font-medium uppercase tracking-widest mb-4">Our Values</div>
            <h2 className="text-4xl mb-6">What Drives Us</h2>
            <p className="text-brand-blue/60 font-light text-base">The core principles that guide our approach to every project.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl border border-brand-blue/5 text-center">
                <div className="w-12 h-12 rounded-2xl bg-brand-blue/5 flex items-center justify-center text-brand-gold mx-auto mb-6">
                  {v.icon}
                </div>
                <h3 className="text-lg mb-4">{v.title}</h3>
                <p className="text-base text-brand-blue/60 font-light leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
