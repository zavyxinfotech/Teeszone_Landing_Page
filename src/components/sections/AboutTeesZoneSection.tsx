import React from 'react';
import { motion } from 'motion/react';

// Import images from assets
import corporateImage from '../../assets/images/corporate.png';
import manufacturingImage from '../../assets/categories/Industrial_Factory_Uniforms.png';

interface AboutTeesZoneSectionProps {
  onOpenQuoteModal?: () => void;
}

export const AboutTeesZoneSection: React.FC<AboutTeesZoneSectionProps> = () => {
  return (
    <section 
      id="about" 
      className="py-10 sm:py-16 lg:py-24 bg-cream-light text-[#241A1D] relative overflow-hidden select-none"
      aria-label="About TeesZone"
    >
      {/* Decorative background grid pattern for texture */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#80011F_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 max-w-7xl mx-auto relative z-10 space-y-12">
        
        {/* Intro Top Block */}
        <div className="max-w-3xl text-left space-y-3">
          <span className="text-xs font-poppins font-black uppercase tracking-widest text-[#80011F] block">
            ABOUT TEESZONE
          </span>
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-poppins font-extrabold text-[#241A1D] tracking-tight leading-tight">
            Built to Represent Your Brand.
          </h2>
          <p className="text-sm sm:text-base text-[#6B5B60] font-inter font-semibold leading-relaxed max-w-2xl">
            Premium apparel manufacturing and uniform solutions, crafted with quality, precision, and reliable service.
          </p>
        </div>

        {/* Vision & Mission staggered collage container (aligned close together like reference design) */}
        <div className="space-y-12 md:space-y-2 lg:space-y-0 mt-8">
          
          {/* Row 1: Our Vision (Image Left, Text Right) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 lg:gap-16 items-center relative py-6">
            
            {/* Left: Image with custom organic blob shape */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="md:col-span-5 relative z-10 flex justify-center md:justify-start"
            >
              {/* Decorative background bar closely fitting the image height */}
              <div className="absolute left-[-100vw] right-[15%] lg:right-[20%] top-4 bottom-4 bg-[#80011F]/10 rounded-r-[2.5rem] pointer-events-none hidden md:block z-0" />

              <div 
                className="w-44 h-44 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-72 lg:h-72 overflow-hidden border-[4px] border-[#38BDF8]/60 shadow-xl bg-transparent relative z-10"
                style={{ borderRadius: '42% 58% 50% 50% / 55% 45% 55% 45%' }}
              >
                <img 
                  src={corporateImage} 
                  alt="Our Vision" 
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
                />
              </div>
            </motion.div>

            {/* Right: Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="md:col-span-7 space-y-3 text-left pl-0 md:pl-6"
            >
              <h3 className="text-2xl sm:text-3xl font-poppins font-black uppercase text-[#241A1D] tracking-tight">
                OUR VISION
              </h3>
              <p className="text-sm sm:text-base text-[#6B5B60] font-inter font-medium leading-relaxed max-w-xl">
                To become a trusted apparel partner for businesses and organizations across India through quality, innovation, and reliable manufacturing.
              </p>
            </motion.div>
          </div>

          {/* Row 2: Our Mission (Text Left, Image Right) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 lg:gap-16 items-center relative py-6">
            
            {/* Left: Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="md:col-span-7 order-2 md:order-1 space-y-3 text-left pr-0 md:pr-6"
            >
              <h3 className="text-2xl sm:text-3xl font-poppins font-black uppercase text-[#241A1D] tracking-tight">
                Our Mission
              </h3>
              <p className="text-sm sm:text-base text-[#6B5B60] font-inter font-medium leading-relaxed max-w-xl">
                To deliver high-quality customized apparel through premium fabrics, precise manufacturing, professional branding, and timely delivery.
              </p>
            </motion.div>

            {/* Right: Image with custom organic blob shape */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="md:col-span-5 order-1 md:order-2 relative z-10 flex justify-center md:justify-end"
            >
              {/* Decorative background bar closely fitting the image height */}
              <div className="absolute right-[-100vw] left-[15%] lg:left-[20%] top-4 bottom-4 bg-[#38BDF8]/10 rounded-l-[2.5rem] pointer-events-none hidden md:block z-0" />

              <div 
                className="w-44 h-44 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-72 lg:h-72 overflow-hidden border-[4px] border-[#80011F]/60 shadow-xl bg-transparent relative z-10"
                style={{ borderRadius: '55% 45% 45% 55% / 45% 55% 45% 55%' }}
              >
                <img 
                  src={manufacturingImage} 
                  alt="Our Mission" 
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
                />
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};
