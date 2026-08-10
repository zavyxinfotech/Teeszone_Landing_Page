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
    <section id="faq" className="py-12 lg:py-16 lg:min-h-screen lg:flex lg:flex-col lg:justify-center bg-transparent relative" aria-label="Frequently Asked Questions">
      <div className="w-full max-w-5xl mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 space-y-3">
          <Badge variant="primary" size="md">
            FREQUENTLY ASKED QUESTIONS
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-poppins font-extrabold text-[#0A2540] tracking-tight">
            Everything You Need to Know About Ordering
          </h2>
          <p className="text-xs sm:text-sm text-[#425466] font-inter leading-relaxed">
            Have questions about minimum order quantities, Pantone matching, sample kits, or express dispatch?
          </p>
        </div>

        {/* Search Bar & Category Filter */}
        <div className="space-y-4 mb-6">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search questions (e.g. MOQ, Turnaround, Pantone)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-2xl text-xs sm:text-sm text-[#0A2540] font-medium bg-white/90 backdrop-blur-xl focus:bg-white focus:outline-none transition-all shadow-md"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar justify-start sm:justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-poppins font-bold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#0A2540] text-white shadow-md scale-102'
                    : 'bg-white/80 backdrop-blur-md text-[#425466] hover:bg-[#635BFF]/10 hover:text-[#0A2540] shadow-xs'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion FAQ Items */}
        <div className="space-y-3">
          {filteredFaqs.slice(0, 5).map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl bg-white/90 backdrop-blur-xl overflow-hidden transition-all shadow-2xs"
              >
                <button
                  onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                  aria-expanded={isOpen}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white transition-colors"
                >
                  <span className="text-sm sm:text-base font-poppins font-bold text-[#0A2540]">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-lg transition-all duration-200 ${isOpen ? 'rotate-180 bg-[#635BFF] text-white' : 'bg-slate-100 text-[#0A2540]'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#425466] leading-relaxed font-inter bg-slate-50/50">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Help Banner */}
        <div className="mt-8 p-5 rounded-3xl bg-white/90 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-lg">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-[#635BFF]/10 text-[#635BFF] rounded-2xl hidden sm:block">
              <PhoneCall className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-poppins font-bold text-[#0A2540]">Need specialized corporate ordering support?</h3>
              <p className="text-xs text-slate-600 font-inter">Our dedicated prepress apparel engineers are available 24/7.</p>
            </div>
          </div>
          <a
            href={`tel:${BRAND.contact.phonePrimary}`}
            className="px-5 py-2.5 bg-[#0A2540] hover:bg-[#1E3A5F] text-white text-xs font-poppins font-bold rounded-xl transition-all whitespace-nowrap shadow-md"
          >
            Call {BRAND.contact.phonePrimary}
          </a>
        </div>

      </div>
    </section>
  );
};
