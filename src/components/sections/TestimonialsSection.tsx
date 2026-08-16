import React from 'react';
import { TESTIMONIALS } from '../../data/testimonials';
import { Badge } from '../common/Badge';
import { Star } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-white relative w-full overflow-hidden select-none" aria-label="Client Testimonials">
      
      {/* Section Header */}
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <Badge size="md" className="text-[#80011F]">
            VERIFIED CLIENT REVIEWS
          </Badge>
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-poppins font-extrabold text-[#241A1D] tracking-tight">
            Trusted by 12,000+ Corporate Buyers & HR Leaders
          </h2>
          <p className="text-sm sm:text-base text-[#6B5B60] font-inter font-semibold max-w-xl mx-auto pt-2">
            See why Fortune 500 brands and high-growth technology startups choose TeesZone for conference merchandise, uniforms, and swag.
          </p>
        </div>
      </div>

      {/* Testimonials Horizontal Marquee */}
      <div className="relative w-full overflow-hidden mt-12 py-10">
          <div className="animate-marquee gap-8">
            {/* Double the array for seamless looping */}
            {[...TESTIMONIALS, ...TESTIMONIALS].map((testimonial, idx) => (
              <div key={idx} className="relative pt-7 z-10 w-[260px] md:w-[290px] shrink-0 mx-4">
                <div className="relative bg-[#FCF5EA] rounded-[1.5rem] p-5 pb-6 shadow-md text-center flex flex-col items-center h-full">
                  {/* Avatar */}
                  <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full border-4 border-white overflow-hidden bg-slate-100 z-20 shadow-sm">
                    <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                  </div>

                  {/* Name and Location */}
                  <div className="mt-7 mb-1.5">
                    <h3 className="text-xs md:text-sm font-poppins font-bold text-[#80011F]">
                      {testimonial.name}
                    </h3>
                    <p className="text-[10px] text-slate-500 font-inter font-semibold">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>

                  {/* Stars */}
                  <div className="flex items-center justify-center gap-0.5 text-[#80011F] mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#80011F] text-[#80011F]" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-[11px] md:text-xs text-[#6B5B60] font-inter leading-relaxed px-1">
                    "{testimonial.content}"
                  </p>

                  {/* Speech Bubble Tail */}
                  <div 
                    className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-7 h-7 bg-[#FCF5EA] rotate-45 rounded-br-md" 
                    style={{ boxShadow: '4px 4px 10px -3px rgba(0, 0, 0, 0.05)', zIndex: -1 }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
      </div>
    </section>
  );
};

