import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '../common/Button';
import { ArrowRight, ChevronLeft, ChevronRight, CheckCircle2, ShoppingCart } from 'lucide-react';

// Background/Product images for the slides
import customApparelBg from '../../assets/images/Hero_01.png';
import hero2A from '../../assets/images/Hero_02A.png';
import hero2B from '../../assets/images/Hero_02B.png';
import readyStockBg from '../../assets/images/hero_03.png';

interface HeroSectionProps {
  onOpenQuoteModal: () => void;
}

const HERO_SLIDES = [
  {
    id: 0,
    headingPrefix: "Built for Your Brand. ",
    headingAccent: "Made to Stand Out.",
    subheading: "Premium custom apparel and uniforms crafted for businesses, institutions, teams, and events—with quality, precision, and professional branding.",
    ctaText: "Explore Custom Apparel",
    productImage: customApparelBg
  },
  {
    id: 1,
    headingPrefix: "Professional Uniforms. ",
    headingAccent: "Powerful First Impressions.",
    subheading: "From corporate and office wear to industrial, hospitality, school, and college uniforms—designed to strengthen your organization's identity.",
    ctaText: "Explore Uniform Solutions",
    productImage: hero2A
  },
  {
    id: 2,
    headingPrefix: "Premium Tees. ",
    headingAccent: "Ready When You Are.",
    subheading: "Discover quality ready-stock polos, crew necks, and hoodies—premium fabrics, modern styles, and reliable quality for everyday wear.",
    ctaText: "Shop Ready Stock",
    productImage: readyStockBg
  }
];

const SLIDE_DURATION = 7000; // 7 seconds transition

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenQuoteModal
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHoveredSlide2, setIsHoveredSlide2] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  // Auto-slide transition
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  // Touch handlers for mobile swipe gesture
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 50) {
      handleNext();
    } else if (touchEndX - touchStartX > 50) {
      handlePrev();
    }
  };

  return (
    <section 
      className="relative h-screen w-full flex items-center overflow-hidden bg-white pt-[72px] sm:pt-[88px] lg:pt-[69px] select-none" 
      aria-label="TeesZone Custom Apparel Hero"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* 1. Diagonal Design Shapes (Split theme in background of right side) */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 overflow-hidden pointer-events-none hidden lg:block z-0">
        {/* Background diagonal stripe structure (Inspired by reference layout, using brand colors) */}
        <div className="absolute top-[-50%] right-[-10%] w-[120%] h-[200%] transform -rotate-12 bg-slate-50/80 -z-20" />
        <div className="absolute top-[-20%] right-[32%] w-[12%] h-[150%] transform -rotate-12 bg-[#80011F] opacity-90 -z-10" />
        <div className="absolute top-[-20%] right-[12%] w-[22%] h-[150%] transform -rotate-12 bg-[#A51F3D] opacity-90 -z-10" />
      </div>

      {/* Decorative Dot Grids (Inspired by reference top-right and bottom-left) */}
      <div className="absolute top-24 right-10 opacity-30 pointer-events-none hidden lg:block z-0">
        <div className="grid grid-cols-5 gap-2">
          {Array.from({ length: 15 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-slate-400" />
          ))}
        </div>
      </div>
      <div className="absolute bottom-10 left-10 opacity-30 pointer-events-none hidden lg:block z-0">
        <div className="grid grid-cols-5 gap-2">
          {Array.from({ length: 15 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-slate-400" />
          ))}
        </div>
      </div>

      {/* 2. Interactive Navigation Arrows (Hidden on small mobile screens) */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-3 rounded-full bg-white hover:bg-cream-light text-[#6B5B60] transition-all cursor-pointer hidden md:flex items-center justify-center border border-slate-200"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-3 rounded-full bg-white hover:bg-cream-light text-[#6B5B60] transition-all cursor-pointer hidden md:flex items-center justify-center border border-slate-200"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* 3. Main Split Content Grid */}
      <div className="w-full px-4 sm:px-10 lg:px-16 xl:px-20 relative z-20 h-full flex items-center py-4 lg:py-0">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12 items-center max-w-7xl mx-auto">
          
          {/* Left Column: Headline, Mobile Image, Trust Indicators, CTA */}
          <div className="lg:col-span-6 text-left flex flex-col justify-center">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex flex-col justify-center"
              >
                {/* 1. Small trust eyebrow indicator */}
                <span className="text-[10px] sm:text-xs font-poppins font-black uppercase tracking-widest text-[#80011F] block">
                  MADE IN TIRUPPUR • PAN-INDIA DELIVERY
                </span>

                {/* 2. Main Headline */}
                <h1 className="text-[32px] sm:text-[38px] md:text-[48px] lg:text-[56px] xl:text-[68px] font-poppins font-black text-[#0A2540] tracking-[-0.02em] md:tracking-[-0.03em] lg:tracking-[-0.03em] xl:tracking-[-0.04em] leading-[1.1] sm:leading-[1.08] md:leading-[1.08] lg:leading-[1.05] xl:leading-[1.05] max-w-full md:max-w-[560px] lg:max-w-[640px] xl:max-w-[740px] mt-4 sm:mt-6 lg:mt-8">
                  {HERO_SLIDES[currentSlide].headingPrefix} <br className="hidden sm:inline" />
                  <span className="text-[#80011F]">
                    {HERO_SLIDES[currentSlide].headingAccent}
                  </span>
                </h1>

                {/* 3. Mobile-only Image (Positioned directly under heading on mobile, using 3D rotating cylinder) */}
                <div className="block lg:hidden relative w-[80%] max-w-[250px] sm:max-w-[320px] aspect-[16/10] shrink-0 mx-auto [perspective:1000px] [transform-style:preserve-3d] overflow-visible mt-4">
                  <motion.div
                    className="relative w-full h-full [transform-style:preserve-3d]"
                    animate={{
                      rotateX: -currentSlide * 120
                    }}
                    transition={{
                      duration: 0.8,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                  >
                    {HERO_SLIDES.map((slide, idx) => {
                      const angle = idx * 120;
                      const zOffset = 90;
                      return (
                        <div
                          key={`mobile-${slide.id}`}
                          className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none"
                          style={{
                            transform: `rotateX(${angle}deg) translateZ(${zOffset}px)`,
                            backfaceVisibility: 'hidden',
                            WebkitBackfaceVisibility: 'hidden'
                          }}
                        >
                          <motion.img 
                            src={idx === 1 && isHoveredSlide2 ? hero2B : slide.productImage} 
                            alt="TeesZone Custom Apparel Mobile" 
                            className="w-full h-full object-contain pointer-events-auto"
                            onMouseEnter={() => idx === 1 && setIsHoveredSlide2(true)}
                            onMouseLeave={() => idx === 1 && setIsHoveredSlide2(false)}
                            onTouchStart={() => idx === 1 && setIsHoveredSlide2(true)}
                            onTouchEnd={() => idx === 1 && setIsHoveredSlide2(false)}
                            animate={{
                              y: [0, -4, 0],
                              rotateX: [idx === currentSlide ? -1.5 : 0, idx === currentSlide ? 1.5 : 0, idx === currentSlide ? -1.5 : 0]
                            }}
                            transition={{
                              duration: 5,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: idx * 0.5
                            }}
                          />
                        </div>
                      );
                    })}
                  </motion.div>
                </div>

                {/* 4. Supporting value/trust points */}
                <div className="flex flex-wrap items-center justify-start gap-x-2.5 sm:gap-x-4 gap-y-1.5 font-poppins font-semibold text-xs md:text-sm xl:text-[15px] tracking-[0.01em] text-[#6B5B60] mt-[20px] md:mt-[22px] lg:mt-[24px]">
                  <span>BULK ORDERS</span>
                  <span className="text-[#80011F]/30 font-light">•</span>
                  <span>FAST DELIVERY</span>
                  <span className="text-[#80011F]/30 font-light">•</span>
                  <span>PREMIUM QUALITY</span>
                </div>

                {/* 5. Primary and Secondary CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 items-stretch sm:items-center mt-[24px] lg:mt-[30px] w-full sm:w-auto">
                  {/* Primary CTA (Burgundy) */}
                  <button
                    onClick={onOpenQuoteModal}
                    className="h-[46px] sm:h-[48px] md:h-[50px] xl:h-[52px] px-5 sm:px-6 md:px-[24px] xl:px-[28px] rounded-[10px] sm:rounded-xl font-poppins font-semibold text-sm md:text-[15px] xl:text-[16px] tracking-wide bg-[#80011F] text-[#F7E7CE] hover:bg-[#600018] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer border-0 shadow-xs"
                  >
                    {HERO_SLIDES[currentSlide].ctaText}
                  </button>

                  {/* Secondary CTA (White with Burgundy Border) */}
                  <button
                    onClick={onOpenQuoteModal}
                    className="h-[46px] sm:h-[48px] md:h-[50px] xl:h-[52px] px-5 sm:px-6 md:px-[24px] xl:px-[28px] rounded-[10px] sm:rounded-xl font-poppins font-semibold text-sm md:text-[15px] xl:text-[16px] tracking-wide bg-white text-[#80011F] border-2 border-[#80011F] hover:bg-[#FFF8F9] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-xs animate-none"
                  >
                    {currentSlide === 2 ? "Explore Custom Apparel" : "Shop Ready Stock"}
                  </button>
                </div>

              </motion.div>
            </AnimatePresence>

          </div>

          {/* Right Column: Desktop-only floating product image overlaying diagonal graphics with 3D rotating cylinder */}
          <div className="lg:col-span-6 relative hidden lg:flex items-center justify-end h-[400px] lg:h-[450px] [perspective:1500px] [transform-style:preserve-3d] overflow-visible">
            
            <motion.div
              className="relative w-[95%] h-[95%] [transform-style:preserve-3d]"
              animate={{
                rotateX: -currentSlide * 120
              }}
              transition={{
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1]
              }}
            >
              {HERO_SLIDES.map((slide, idx) => {
                const angle = idx * 120;
                const zOffset = 200;
                return (
                  <div
                    key={`desktop-${slide.id}`}
                    className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none"
                    style={{
                      transform: `rotateX(${angle}deg) translateZ(${zOffset}px)`,
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden'
                    }}
                  >
                    <motion.img 
                      src={idx === 1 && isHoveredSlide2 ? hero2B : slide.productImage} 
                      alt="TeesZone Custom Apparel" 
                      className="w-full h-full object-contain pointer-events-auto cursor-pointer"
                      onMouseEnter={() => idx === 1 && setIsHoveredSlide2(true)}
                      onMouseLeave={() => idx === 1 && setIsHoveredSlide2(false)}
                      animate={{
                        y: [0, -8, 0],
                        rotateX: [idx === currentSlide ? -2 : 0, idx === currentSlide ? 2 : 0, idx === currentSlide ? -2 : 0]
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: idx * 0.5
                      }}
                    />
                  </div>
                );
              })}
            </motion.div>
            
          </div>

        </div>
      </div>

      {/* 4. Slide indicators (dots) */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {HERO_SLIDES.map((slide, idx) => (
          <button
            key={slide.id}
            onClick={() => setCurrentSlide(idx)}
            className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
              idx === currentSlide ? 'w-8 bg-[#80011F]' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
