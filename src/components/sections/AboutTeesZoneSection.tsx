import React from 'react';
import { motion } from 'motion/react';
import { Button } from '../common/Button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

// Import images from assets
import corporateImage from '../../assets/images/teeszone_corporate_polos_1786102801522.jpg';
import manufacturingImage from '../../assets/categories/Industrial_Factory_Uniforms.png';

interface AboutTeesZoneSectionProps {
  onOpenQuoteModal?: () => void;
}

export const AboutTeesZoneSection: React.FC<AboutTeesZoneSectionProps> = ({
  onOpenQuoteModal
}) => {
  return (
    <section 
      id="about" 
      className="py-16 sm:py-20 lg:py-28 bg-[#0A2540] text-white relative overflow-hidden select-none"
      aria-label="About TeesZone"
    >
      {/* Decorative background grid pattern for texture */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#635BFF_1px,transparent_1px)] [background-size:24px_24px]" />
      
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Highly readable copy & highlights */}
          <motion.div 
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-5 space-y-6 text-left"
          >
            {/* Small Label */}
            <span className="inline-block py-1.5 px-3 rounded-full bg-[#635BFF]/20 border border-[#635BFF]/30 text-[#38BDF8] text-[10px] font-poppins font-black uppercase tracking-wider shadow-sm">
              ABOUT TEESZONE
            </span>
            
            {/* Heading */}
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-poppins font-extrabold text-white tracking-tight leading-tight">
              Apparel Made for Brands That Mean Business.
            </h2>
            
            {/* Short Text */}
            <p className="text-sm sm:text-base text-slate-300 font-inter font-semibold leading-relaxed">
              From Tiruppur to businesses across India, TeesZone delivers premium customized apparel and uniform solutions with quality, precision, and reliable service.
            </p>
            
            {/* Highlights */}
            <div className="pt-2 pb-1">
              <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-poppins font-bold text-xs sm:text-sm text-slate-100">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0" />
                  <span>Premium Quality</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0" />
                  <span>Custom Manufacturing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0" />
                  <span>Pan-India Delivery</span>
                </li>
              </ul>
            </div>
            
            {/* CTA */}
            <div className="pt-2 flex">
              <Button
                variant="primary"
                size="md"
                onClick={() => {
                  const contactSec = document.getElementById('contact');
                  if (contactSec) {
                    contactSec.scrollIntoView({ behavior: 'smooth' });
                  } else if (onOpenQuoteModal) {
                    onOpenQuoteModal();
                  }
                }}
                icon={<ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
                className="shadow-lg shadow-[#635BFF]/20 hover:shadow-[#635BFF]/35 transition-all duration-300 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold group"
              >
                Discover TeesZone
              </Button>
            </div>
          </motion.div>
          
          {/* Right Column: Overlapping Image collage with 3D shadows */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7 relative flex justify-center lg:justify-end py-10"
          >
            {/* Large background Image (Corporate environment) */}
            <div className="relative w-[85%] sm:w-[75%] lg:w-[80%] aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl z-10 border border-white/10">
              <img 
                src={corporateImage} 
                alt="Corporate apparel in business environment" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-103"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/30 to-transparent pointer-events-none" />
            </div>

            {/* Smaller foreground overlapping Image (Manufacturing) */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="absolute bottom-0 left-4 sm:left-12 lg:left-0 w-[45%] sm:w-[38%] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl z-20 border-4 sm:border-8 border-white bg-white"
            >
              <img 
                src={manufacturingImage} 
                alt="Apparel Manufacturing Production" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Decorative colored glow bubble */}
            <div className="absolute -top-4 -right-4 w-48 h-48 bg-[#635BFF]/5 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-8 -left-4 w-56 h-56 bg-[#38BDF8]/5 rounded-full blur-3xl -z-10" />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};
