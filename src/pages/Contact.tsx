import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-20">
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <div className="text-brand-gold text-sm font-medium uppercase tracking-widest mb-4">Contact Us</div>
              <h1 className="text-5xl mb-8">Let's Discuss Your Validation Needs</h1>
              <p className="text-brand-blue/60 font-light leading-relaxed mb-12 max-w-lg text-lg">
                Talk to our validation experts today. We offer a complimentary 30-minute consultation to discuss your challenges and explore solutions.
              </p>

              <div className="space-y-10">
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-brand-blue/5 flex items-center justify-center text-brand-gold shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-display text-lg mb-1">Office Address</h4>
                    <p className="text-base text-brand-blue/60 leading-relaxed font-light">
                      Innovation Hub, Viman Nagar, <br />
                      Pune, Maharashtra 411014
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-brand-blue/5 flex items-center justify-center text-brand-gold shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-display text-lg mb-1">Phone</h4>
                    <p className="text-base text-brand-blue/60 leading-relaxed font-light">
                      +91 20 4567 8900 <br />
                      +91 98765 43210
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-brand-blue/5 flex items-center justify-center text-brand-gold shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-display text-lg mb-1">Email</h4>
                    <p className="text-base text-brand-blue/60 leading-relaxed font-light">
                      info@truqual.com <br />
                      careers@truqual.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-16 p-8 rounded-3xl bg-brand-gold/5 border border-brand-gold/10">
                <div className="flex gap-4 items-center mb-4">
                  <MessageSquare className="text-brand-gold" />
                  <h4 className="font-display">Free Initial Consultation</h4>
                </div>
                <p className="text-base text-brand-blue/60 font-light leading-relaxed">
                  We offer a complimentary 30-minute consultation to discuss your validation challenges and explore how Truqual can help. No obligation.
                </p>
              </div>
            </div>

            <div className="bg-soft-bg p-10 md:p-16 rounded-[40px] border border-brand-blue/5">
              <h3 className="text-2xl mb-8">Send Us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium uppercase tracking-widest text-brand-blue/40 ml-1">First Name</label>
                    <input 
                      type="text" 
                      className="w-full px-6 py-4 rounded-2xl bg-white border border-brand-blue/5 focus:border-brand-gold outline-none transition-all text-base"
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium uppercase tracking-widest text-brand-blue/40 ml-1">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full px-6 py-4 rounded-2xl bg-white border border-brand-blue/5 focus:border-brand-gold outline-none transition-all text-base"
                      placeholder="Smith"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium uppercase tracking-widest text-brand-blue/40 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full px-6 py-4 rounded-2xl bg-white border border-brand-blue/5 focus:border-brand-gold outline-none transition-all text-base"
                    placeholder="john@company.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium uppercase tracking-widest text-brand-blue/40 ml-1">Service of Interest</label>
                  <select className="w-full px-6 py-4 rounded-2xl bg-white border border-brand-blue/5 focus:border-brand-gold outline-none transition-all text-base appearance-none">
                    <option>Process Validation</option>
                    <option>CSV / GAMP 5</option>
                    <option>Equipment Qualification</option>
                    <option>Method Validation</option>
                    <option>Regulatory Audits</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium uppercase tracking-widest text-brand-blue/40 ml-1">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-6 py-4 rounded-2xl bg-white border border-brand-blue/5 focus:border-brand-gold outline-none transition-all text-base resize-none"
                    placeholder="Describe your requirements..."
                  ></textarea>
                </div>

                <button 
                  type="button"
                  className="w-full py-5 bg-brand-blue text-white rounded-2xl font-medium hover:bg-brand-blue/90 transition-all flex items-center justify-center gap-2 group"
                >
                  Send Message
                  <Send size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
