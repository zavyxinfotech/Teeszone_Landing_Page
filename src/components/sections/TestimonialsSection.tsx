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
          <h2 className="text-2xl sm:text-4xl font-poppins font-extrabold text-[#241A1D] tracking-tight">
            Trusted by 12,000+ Corporate Buyers & HR Leaders
          </h2>
          <p className="text-xs sm:text-sm text-[#6B5B60] font-inter leading-relaxed">
            See why Fortune 500 brands and high-growth technology startups choose TeesZone for conference merchandise, uniforms, and swag.
          </p>
        </div>
      </div>

      {/* Testimonials Horizontal Marquee */}
      <div className="relative w-full overflow-hidden mt-12 py-10">
          <div className="animate-marquee gap-8">
            {/* Double the array for seamless looping */}
            {[...TESTIMONIALS, ...TESTIMONIALS].map((testimonial, idx) => (
              <div key={idx} className="relative pt-8 z-10 w-[300px] md:w-[350px] shrink-0 mx-4">
                <div className="relative bg-[#FCF5EA] rounded-[2rem] p-8 pb-10 shadow-lg text-center flex flex-col items-center h-full">
                  {/* Avatar */}
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full border-[6px] border-white overflow-hidden bg-slate-100 z-20">
                    <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                  </div>

                  {/* Name and Location */}
                  <div className="mt-8 mb-2">
                    <h3 className="text-sm md:text-base font-poppins font-medium text-[#80011F]">
                      - {testimonial.name}, {testimonial.company}
                    </h3>
                  </div>

                  {/* Stars */}
                  <div className="flex items-center justify-center gap-1 text-[#80011F] mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#80011F] text-[#80011F]" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-xs md:text-sm text-[#6B5B60] font-inter leading-relaxed">
                    "{testimonial.content}"
                  </p>

                  {/* Speech Bubble Tail */}
                  <div 
                    className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-10 h-10 bg-[#FCF5EA] rotate-45 rounded-br-xl" 
                    style={{ boxShadow: '6px 6px 15px -3px rgba(0, 0, 0, 0.05), 4px 4px 6px -2px rgba(0, 0, 0, 0.02)', zIndex: -1 }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
      </div>
    </section>
  );
};

