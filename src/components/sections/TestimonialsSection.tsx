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
    <section id="testimonials" className="py-12 lg:py-16 lg:min-h-screen lg:flex lg:flex-col lg:justify-center bg-transparent relative" aria-label="Client Testimonials">
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <Badge variant="emerald" size="md">
            VERIFIED CLIENT REVIEWS
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-poppins font-extrabold text-[#0A2540] tracking-tight">
            Trusted by 12,000+ Corporate Buyers & HR Leaders
          </h2>
          <p className="text-xs sm:text-sm text-[#425466] font-inter leading-relaxed">
            See why Fortune 500 brands and high-growth technology startups choose TeesZone for conference merchandise, uniforms, and swag.
          </p>
        </div>

        {/* Featured Testimonial Carousel Box */}
        <div className="max-w-4xl mx-auto stripe-card rounded-3xl p-6 sm:p-10 shadow-2xl bg-white/90 backdrop-blur-xl relative">
          <Quote className="absolute top-6 right-8 w-14 h-14 text-slate-200 pointer-events-none opacity-60" />

          <div className="space-y-5 relative z-10 font-inter">
            {/* Rating Stars & Verified Badge */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
             
            </div>

            {/* Quote Content */}
            <p className="text-base sm:text-lg lg:text-xl font-inter text-[#0A2540] leading-relaxed font-medium">
              "{current.content}"
            </p>

            {/* Author Info */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <img
                  src={current.avatar}
                  alt={current.name}
                  loading="lazy"
                  decoding="async"
                  className="w-12 h-12 rounded-full object-cover shadow-sm"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h3 className="text-sm sm:text-base font-poppins font-bold text-[#0A2540]">
                    {current.name}
                  </h3>
                  <p className="text-xs text-slate-600">
                    {current.role} • <strong className="text-[#0A2540]">{current.company}</strong>
                  </p>
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevTestimonial}
                  className="p-2.5 rounded-xl bg-white hover:bg-[#635BFF] hover:text-white text-[#0A2540] transition-colors cursor-pointer shadow-sm"
                  aria-label="Previous review"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="p-2.5 rounded-xl bg-white hover:bg-[#635BFF] hover:text-white text-[#0A2540] transition-colors cursor-pointer shadow-sm"
                  aria-label="Next review"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
