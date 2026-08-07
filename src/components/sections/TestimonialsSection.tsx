import React, { useState } from 'react';
import { TESTIMONIALS } from '../../data/testimonials';
import { Badge } from '../common/Badge';
import { Star, ShieldCheck, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[activeIndex];

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-transparent border-y border-slate-200/80 relative" aria-label="Client Testimonials">
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="emerald" size="md">
            VERIFIED CLIENT REVIEWS
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-extrabold text-[#0A2540] tracking-tight">
            Trusted by 12,000+ Corporate Buyers & HR Leaders
          </h2>
          <p className="text-base sm:text-lg text-[#425466] font-inter leading-relaxed">
            See why Fortune 500 brands and high-growth technology startups choose TeesZone for conference merchandise, uniforms, and onboarding swag.
          </p>
        </div>

        {/* Featured Testimonial Carousel Box */}
        <div className="max-w-4xl mx-auto stripe-card rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-2xl bg-white/90 backdrop-blur-xl relative">
          <Quote className="absolute top-6 right-8 w-16 h-16 text-slate-200 pointer-events-none" />

          <div className="space-y-6 relative z-10 font-inter">
            {/* Rating Stars & Verified Badge */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="flex items-center gap-2 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Verified Order ({current.orderVolume})</span>
              </span>
            </div>

            {/* Quote Content */}
            <p className="text-lg sm:text-xl lg:text-2xl font-inter text-[#0A2540] leading-relaxed font-medium">
              "{current.content}"
            </p>

            {/* Author Info */}
            <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <img
                  src={current.avatar}
                  alt={current.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-[#635BFF] shadow-sm"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h3 className="text-base sm:text-lg font-poppins font-bold text-[#0A2540]">
                    {current.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600">
                    {current.role} • <strong className="text-[#0A2540]">{current.company}</strong>
                  </p>
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevTestimonial}
                  className="p-3 rounded-2xl border border-slate-200 hover:border-[#635BFF] hover:bg-[#635BFF] hover:text-white text-[#0A2540] transition-colors cursor-pointer shadow-2xs"
                  aria-label="Previous review"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="p-3 rounded-2xl border border-slate-200 hover:border-[#635BFF] hover:bg-[#635BFF] hover:text-white text-[#0A2540] transition-colors cursor-pointer shadow-2xs"
                  aria-label="Next review"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
