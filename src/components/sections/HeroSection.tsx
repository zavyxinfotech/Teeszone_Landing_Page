import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '../common/Button';
import { ArrowRight, ChevronLeft, ChevronRight, CheckCircle2, ShoppingCart } from 'lucide-react';

// Background/Product images for the slides
import customApparelBg from '../../assets/images/hero01.png';
import corporateSolutionsBg from '../../assets/images/teeszone_corporate_polos_1786102801522.jpg';
import readyStockBg from '../../assets/images/teeszone_hoodies_sweats_1786102824199.jpg';

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
    productImage: corporateSolutionsBg
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
      className="relative h-[calc(100vh-69px)] lg:h-screen w-full flex items-center overflow-hidden bg-white pt-16 lg:pt-[69px] select-none" 
      aria-label="TeesZone Custom Apparel Hero"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* 1. Diagonal Design Shapes (Split theme in background of right side) */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 overflow-hidden pointer-events-none hidden lg:block z-0">
        {/* Background diagonal stripe structure (Inspired by reference layout, using brand colors) */}
        <div className="absolute top-[-50%] right-[-10%] w-[120%] h-[200%] transform -rotate-12 bg-slate-50/80 -z-20" />
        <div className="absolute top-[-20%] right-[32%] w-[12%] h-[150%] transform -rotate-12 bg-[#635BFF] opacity-90 -z-10" />
        <div className="absolute top-[-20%] right-[12%] w-[22%] h-[150%] transform -rotate-12 bg-[#38BDF8] opacity-90 -z-10" />
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
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-all cursor-pointer hidden md:flex items-center justify-center border border-slate-200"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-all cursor-pointer hidden md:flex items-center justify-center border border-slate-200"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* 3. Main Split Content Grid */}
      <div className="w-full px-4 sm:px-10 lg:px-16 xl:px-20 relative z-20 h-full flex items-center py-4 lg:py-0">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12 items-center max-w-7xl mx-auto">
          
          {/* Left Column: Headline, Mobile Image, Description, Supporting badging, CTA */}
          <div className="lg:col-span-6 space-y-3.5 lg:space-y-5 text-left">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="space-y-3 lg:space-y-5 flex flex-col justify-center"
              >
                {/* Main Headline */}
                <h1 className="text-xl sm:text-4xl lg:text-5xl font-poppins font-black text-[#0A2540] tracking-tight leading-[1.15]">
                  {HERO_SLIDES[currentSlide].headingPrefix} <br className="hidden sm:inline" />
                  <span className="text-[#635BFF]">
                    {HERO_SLIDES[currentSlide].headingAccent}
                  </span>
                </h1>

                {/* Mobile-only Image (Positioned directly under heading on mobile, using 3D rotating cylinder) */}
                <div className="block lg:hidden relative w-full max-w-[280px] sm:max-w-[340px] aspect-[16/10] shrink-0 my-1 mx-auto [perspective:1000px] [transform-style:preserve-3d] overflow-visible">
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
                            src={slide.productImage} 
                            alt="TeesZone Custom Apparel Mobile" 
                            className="w-full h-full object-contain"
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

                {/* Subheading / Description */}
                <p className="text-xs sm:text-base text-slate-600 font-inter font-semibold leading-relaxed max-w-xl">
                  {HERO_SLIDES[currentSlide].subheading}
                </p>

                {/* Checklist Inline Badges (Hidden on mobile to fit the screen) */}
                <div className="hidden sm:flex flex-wrap gap-x-4 gap-y-1.5 text-xs sm:text-sm text-slate-600 font-poppins font-bold items-center">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#635BFF]" />
                    <span>Premium Quality</span>
                  </div>
                  <span className="text-slate-300">|</span>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#635BFF]" />
                    <span>Bulk Orders</span>
                  </div>
                  <span className="text-slate-300">|</span>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#635BFF]" />
                    <span>Fast Delivery</span>
                  </div>
                </div>

                {/* Action CTA Button */}
                <div className="pt-1 flex">
                  <Button
                    variant="primary"
                    size="md"
                    onClick={onOpenQuoteModal}
                    icon={<ShoppingCart className="w-4 h-4 ml-1 shrink-0" />}
                    className="shadow-xl shadow-[#635BFF]/35 hover:shadow-[#635BFF]/50 transition-all duration-300 px-6 py-2.5 rounded-full text-xs sm:text-sm font-poppins font-bold bg-[#635BFF] hover:bg-[#635BFF]/90 border-0 flex items-center justify-center gap-2"
                  >
                    {HERO_SLIDES[currentSlide].ctaText}
                  </Button>
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
                      src={slide.productImage} 
                      alt="TeesZone Custom Apparel" 
                      className="w-full h-full object-contain"
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
              idx === currentSlide ? 'w-8 bg-[#635BFF]' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
