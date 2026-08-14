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
      className="py-20 lg:py-28 bg-[#0A2540] text-white relative overflow-hidden select-none"
      aria-label="About TeesZone"
    >
      {/* Decorative background grid pattern for texture */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#38BDF8_1px,transparent_1px)] [background-size:24px_24px]" />
      
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 max-w-7xl mx-auto relative z-10 space-y-16 lg:space-y-24">
        
        {/* Intro Top Block */}
        <div className="max-w-3xl text-left space-y-4">
          <span className="text-xs font-poppins font-black uppercase tracking-widest text-[#38BDF8] block">
            ABOUT TEESZONE
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-poppins font-extrabold text-white tracking-tight leading-tight">
            Built to Represent Your Brand.
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-inter leading-relaxed max-w-2xl">
            Premium apparel manufacturing and uniform solutions, crafted with quality, precision, and reliable service.
          </p>
        </div>

        {/* Row 1: Our Vision (Text Left, Image Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-6 space-y-4 text-left"
          >
            <span className="text-xs font-poppins font-black uppercase tracking-widest text-[#38BDF8] block">
              OUR VISION
            </span>
            <p className="text-sm sm:text-base text-slate-300 font-inter leading-relaxed">
              To become a trusted apparel partner for businesses and organizations across India through quality, innovation, and reliable manufacturing.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-6 w-full"
          >
            <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-slate-900/40">
              <img 
                src={corporateImage} 
                alt="Corporate apparel vision" 
                className="w-full h-full object-cover hover:scale-103 transition-transform duration-500"
              />
            </div>
          </motion.div>
        </div>

        {/* Row 2: Our Mission (Image Left, Text Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-6 order-2 lg:order-1 w-full"
          >
            <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-slate-900/40">
              <img 
                src={manufacturingImage} 
                alt="Apparel manufacturing mission" 
                className="w-full h-full object-cover hover:scale-103 transition-transform duration-500"
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-6 order-1 lg:order-2 space-y-4 text-left"
          >
            <span className="text-xs font-poppins font-black uppercase tracking-widest text-[#38BDF8] block">
              OUR MISSION
            </span>
            <p className="text-sm sm:text-base text-slate-300 font-inter leading-relaxed">
              To deliver high-quality customized apparel through premium fabrics, precise manufacturing, professional branding, and timely delivery.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
