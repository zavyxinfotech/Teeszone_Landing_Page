import React, { useState } from 'react';
import { FAQS } from '../../data/faqs';
import { Badge } from '../common/Badge';
import { ChevronDown, Search, PhoneCall } from 'lucide-react';
import { BRAND } from '../../data/brand';

export const FAQSection: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string | null>(FAQS[0].id);

  return (
    <section id="faq" className="py-16 sm:py-20 lg:py-24 bg-[#0A2540] text-white relative" aria-label="Frequently Asked Questions">
      <div className="w-full max-w-5xl mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 space-y-3">
          <Badge variant="primary" size="md" className="bg-[#635BFF]/20 border border-[#635BFF]/30 text-[#38BDF8]">
            FREQUENTLY ASKED QUESTIONS
          </Badge>
          <h2 className="text-2xl sm:text-4xl font-poppins font-extrabold text-white tracking-tight">
            Everything You Need to Know About Ordering
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 font-inter leading-relaxed">
            Have questions about minimum order quantities, Pantone matching, sample kits, or express dispatch?
          </p>
        </div>

        {/* Accordion FAQ Items */}
        <div className="space-y-3">
          {FAQS.slice(0, 5).map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl bg-slate-900/40 border border-white/10 overflow-hidden transition-all shadow-md"
              >
                <button
                  onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                  aria-expanded={isOpen}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/5 transition-colors"
                >
                  <span className="text-sm sm:text-base font-poppins font-bold text-white">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-lg transition-all duration-200 ${isOpen ? 'rotate-180 bg-[#38BDF8] text-slate-950' : 'bg-slate-800 text-white'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-200 leading-relaxed font-inter bg-white/5">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Help Banner */}
        <div className="mt-8 p-5 rounded-3xl bg-slate-900/40 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-lg">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-[#38BDF8]/10 text-[#38BDF8] rounded-2xl hidden sm:block">
              <PhoneCall className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-poppins font-bold text-white">Need specialized corporate ordering support?</h3>
              <p className="text-xs text-slate-300 font-inter">Our dedicated prepress apparel engineers are available 24/7.</p>
            </div>
          </div>
          <a
            href={`tel:${BRAND.contact.phonePrimary}`}
            className="px-5 py-2.5 bg-[#635BFF] hover:bg-[#524ae3] text-white text-xs font-poppins font-bold rounded-xl transition-all whitespace-nowrap shadow-md"
          >
            Call {BRAND.contact.phonePrimary}
          </a>
        </div>

      </div>
    </section>
  );
};
