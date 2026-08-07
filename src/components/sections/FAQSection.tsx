import React, { useState } from 'react';
import { FAQS } from '../../data/faqs';
import { Badge } from '../common/Badge';
import { ChevronDown, Search, PhoneCall } from 'lucide-react';
import { BRAND } from '../../data/brand';

export const FAQSection: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string | null>(FAQS[0].id);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Orders & MOQ', 'Printing & Quality', 'Shipping & Turnaround', 'Samples & Design', 'Corporate Accounts'];

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="faq" className="py-20 lg:py-28 bg-transparent relative" aria-label="Frequently Asked Questions">
      <div className="w-full max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="primary" size="md">
            FREQUENTLY ASKED QUESTIONS
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-extrabold text-[#0A2540] tracking-tight">
            Everything You Need to Know About Ordering
          </h2>
          <p className="text-base sm:text-lg text-[#425466] font-inter leading-relaxed">
            Have questions about minimum order quantities, Pantone matching, sample kits, or express dispatch? We’ve got answers.
          </p>
        </div>

        {/* Search Bar & Category Filter */}
        <div className="space-y-5 mb-10">
          <div className="relative">
            <Search className="w-5 h-5 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search questions (e.g. MOQ, Turnaround, Pantone, Samples)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 text-sm text-[#0A2540] font-medium bg-white/90 backdrop-blur-xl focus:bg-white focus:outline-none focus:border-[#635BFF] focus:ring-2 focus:ring-[#635BFF]/20 transition-all shadow-xs"
            />
          </div>

          <div className="flex items-center gap-2.5 overflow-x-auto pb-2 no-scrollbar justify-start sm:justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-2xl text-xs font-poppins font-bold whitespace-nowrap transition-all cursor-pointer border ${
                  selectedCategory === cat
                    ? 'bg-[#0A2540] text-white border-[#0A2540] shadow-md scale-102'
                    : 'bg-white/80 backdrop-blur-md text-[#425466] border-slate-200 hover:border-[#635BFF] hover:text-[#0A2540] shadow-2xs'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion FAQ Items */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl border border-slate-200/80 bg-white/90 backdrop-blur-xl overflow-hidden transition-all shadow-xs"
              >
                <button
                  onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                  aria-expanded={isOpen}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white transition-colors"
                >
                  <span className="text-base sm:text-lg font-poppins font-bold text-[#0A2540]">
                    {faq.question}
                  </span>
                  <div className={`p-2 rounded-xl transition-all duration-200 ${isOpen ? 'rotate-180 bg-[#635BFF] text-white' : 'bg-slate-100 text-[#0A2540]'}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-sm sm:text-base text-[#425466] leading-relaxed font-inter border-t border-slate-100 bg-slate-50/50">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Help Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-white/90 backdrop-blur-xl border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left shadow-md">
          <div className="flex items-center gap-4">
            <div className="p-3.5 bg-[#635BFF]/10 text-[#635BFF] rounded-2xl hidden sm:block">
              <PhoneCall className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-poppins font-bold text-[#0A2540]">Need specialized corporate ordering support?</h3>
              <p className="text-xs sm:text-sm text-slate-600 font-inter">Our dedicated prepress apparel engineers are available 24/7.</p>
            </div>
          </div>
          <a
            href={`tel:${BRAND.contact.phone}`}
            className="px-6 py-3.5 bg-[#0A2540] hover:bg-[#1E3A5F] text-white text-xs sm:text-sm font-poppins font-bold rounded-2xl transition-all whitespace-nowrap shadow-md"
          >
            Call {BRAND.contact.phone}
          </a>
        </div>

      </div>
    </section>
  );
};
