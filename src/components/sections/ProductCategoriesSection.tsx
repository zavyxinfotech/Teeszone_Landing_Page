import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import transparent PNG model category product images
import corporateImg from '../../assets/images/corporate.png';
import sportsImg from '../../assets/images/sports.png';
import industryImg from '../../assets/images/industry.png';
import schoolImg from '../../assets/images/school.png';
import hospitalImg from '../../assets/images/hospital.png';
import eventImg from '../../assets/images/events.png';
import readyStockImg from '../../assets/images/readyStock.png';

// Import category dynamic background images
import corporateBg from '../../assets/images/corporate_bg.jpeg';
import sportsBg from '../../assets/images/sports_bg.jpeg';
import industryBg from '../../assets/images/industry_bg.jpeg';
import hospitalBg from '../../assets/images/hospital_bg.jpeg';
import schoolBg from '../../assets/images/school_bg.jpeg';
import eventBg from '../../assets/images/event_bg.jpeg';

interface ProductCategoriesSectionProps {
  onOpenQuoteModal?: () => void;
}

interface ProductTab {
  id: string;
  menuLabel: string;
  backdropText: string;
  heading: string;
  type: 'Custom Apparel' | 'Ready Stock';
  image: string;
  bgImage: string;
  productsList: string[];
}

export const ProductCategoriesSection: React.FC<ProductCategoriesSectionProps> = () => {
  const tabs: ProductTab[] = [
    {
      id: 'office',
      menuLabel: 'OFFICE',
      backdropText: 'CORPORATE',
      heading: 'Corporate & Office Uniforms',
      type: 'Custom Apparel',
      image: corporateImg,
      bgImage: corporateBg,
      productsList: ['Corporate Uniforms', 'Office Uniforms']
    },
    {
      id: 'sports',
      menuLabel: 'SPORTS',
      backdropText: 'SPORTSWEAR',
      heading: 'High-Performance Jerseys',
      type: 'Custom Apparel',
      image: sportsImg,
      bgImage: sportsBg,
      productsList: ['Sports Jerseys', 'Team Training Kits']
    },
    {
      id: 'industrial',
      menuLabel: 'INDUSTRIAL',
      backdropText: 'INDUSTRIAL',
      heading: 'Heavy-Duty Factory Wear',
      type: 'Custom Apparel',
      image: industryImg,
      bgImage: industryBg,
      productsList: ['Industrial Uniforms', 'Factory Safety Wear']
    },
    {
      id: 'schools',
      menuLabel: 'SCHOOLS',
      backdropText: 'ACADEMIC',
      heading: 'School & College Uniforms',
      type: 'Custom Apparel',
      image: schoolImg,
      bgImage: schoolBg,
      productsList: ['School Uniforms', 'College Uniforms']
    },
    {
      id: 'hospitality',
      menuLabel: 'HOSPITALITY',
      backdropText: 'HOSPITALITY',
      heading: 'Premium Service Apparel',
      type: 'Custom Apparel',
      image: hospitalImg,
      bgImage: hospitalBg,
      productsList: ['Hospitality Uniforms', 'Restaurant & Hotel Wear']
    },
    {
      id: 'events',
      menuLabel: 'EVENTS',
      backdropText: 'PROMOTIONAL',
      heading: 'Event & Promo Clothing',
      type: 'Custom Apparel',
      image: eventImg,
      bgImage: eventBg,
      productsList: ['Event T-Shirts', 'Promotional Apparel']
    },
    {
      id: 'ready-stock',
      menuLabel: 'READY STOCK',
      backdropText: 'READY STOCK',
      heading: 'Premium Ready Apparel',
      type: 'Ready Stock',
      image: readyStockImg,
      bgImage: corporateBg,
      productsList: ['AeroSoft Polo T-Shirts', 'Crew Neck T-Shirts', 'Customized Hoodies']
    }
  ];

  const [activeTabIdx, setActiveTabIdx] = useState<number>(0);
  const [slideDirection, setSlideDirection] = useState<number>(1);
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const activeTab = tabs[activeTabIdx];

  // Scroll parallax effects for 3D depth
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const watermarkParallaxY = useTransform(scrollYProgress, [0, 1], [-25, 25]);
  const modelParallaxY = useTransform(scrollYProgress, [0, 1], [15, -15]);
  const modelRotateParallax = useTransform(scrollYProgress, [0, 1], [-2, 2]);

  const handleNextTab = useCallback(() => {
    setSlideDirection(1);
    setActiveTabIdx((prev) => (prev + 1) % tabs.length);
  }, [tabs.length]);

  const handlePrevTab = useCallback(() => {
    setSlideDirection(-1);
    setActiveTabIdx((prev) => (prev - 1 + tabs.length) % tabs.length);
  }, [tabs.length]);

  // Center the active tab in the scrolling menu
  useEffect(() => {
    if (scrollContainerRef.current) {
      const activeEl = scrollContainerRef.current.children[activeTabIdx] as HTMLElement;
      if (activeEl) {
        const containerWidth = scrollContainerRef.current.offsetWidth;
        const activeWidth = activeEl.offsetWidth;
        const activeLeft = activeEl.offsetLeft;
        scrollContainerRef.current.scrollTo({
          left: activeLeft - containerWidth / 2 + activeWidth / 2,
          behavior: 'smooth'
        });
      }
    }
  }, [activeTabIdx]);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="py-8 sm:py-14 lg:py-16 bg-[#FFFCFA] text-[#241A1D] relative overflow-hidden select-none min-h-[700px] lg:min-h-[800px] flex flex-col justify-between [perspective:1400px]"
      aria-label="Apparel Product Categories Catalog"
    >
      {/* 1. Dynamic Background Image with Smooth 60fps Crossfade */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <AnimatePresence mode="wait">
          {activeTab.bgImage && (
            <motion.div
              key={activeTab.id}
              initial={{ opacity: 0, scale: 1.06 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0"
            >
              <img
                src={activeTab.bgImage}
                alt=""
                className="w-full h-full object-cover object-center transform-gpu"
                loading="lazy"
                decoding="async"
              />
              {/* Subtle ambient brand gradient overlay ensuring high text readability & contrast */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#FCF5EA]/94 via-[#FCF5EA]/88 to-[#FCF5EA]/96" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 2. Decorative ambient 3D depth lights */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#80011F] opacity-[0.035] blur-[150px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#80011F] opacity-[0.025] blur-[150px] rounded-full pointer-events-none z-0" />

      <div className="w-full px-4 sm:px-8 lg:px-12 relative z-10 max-w-7xl mx-auto flex flex-col justify-between flex-grow">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-4 sm:mb-6 space-y-2 shrink-0">
          <span className="text-[10px] font-poppins font-black uppercase tracking-widest text-[#80011F] block">
            OUR SERVICES
          </span>
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-poppins font-extrabold text-[#241A1D] tracking-tight">
            Apparel for Every Purpose.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-inter font-semibold leading-relaxed max-w-2xl mx-auto">
            From corporate uniforms to everyday essentials, explore apparel designed for teams, institutions, industries, sports, events, and brands.
          </p>
        </div>

        {/* 3. Main 3D Poster Showcase Stage */}
        <div className="relative w-full min-h-[360px] sm:min-h-[460px] lg:min-h-[500px] flex flex-col justify-between items-center z-10 [transform-style:preserve-3d]">
          
          {/* Background Oversized Parallax Watermark Text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                style={{ y: watermarkParallaxY }}
                initial={{ opacity: 0, scale: 0.9, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.08, y: -15 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="font-poppins font-black text-[15vw] sm:text-[12vw] lg:text-[10.5vw] text-center select-none leading-none tracking-tight uppercase transform-gpu will-change-transform"
              >
                <span
                  style={{
                    WebkitTextStroke: '2.5px rgba(10, 37, 64, 0.07)',
                    color: 'transparent',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {activeTab.backdropText}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Top Category Title Banner */}
          <div className="text-center z-20 pointer-events-none mt-1 sm:mt-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, y: -16, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 16, scale: 0.96 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
              >
                <span className="text-[10px] sm:text-xs font-poppins font-black uppercase tracking-widest text-[#80011F]">
                  Our Premium Collection of
                </span>
                <h3 className="text-lg sm:text-2xl lg:text-3xl font-poppins font-extrabold text-[#241A1D] mt-0.5 sm:mt-1 uppercase tracking-tight">
                  {activeTab.heading}
                </h3>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Center 3D Floating Product Showcase */}
          <div className="relative w-full flex-grow flex items-center justify-center my-2 sm:my-0 [perspective:1000px]">
            <div className="relative w-56 h-48 sm:w-80 sm:h-72 md:w-96 md:h-80 lg:w-[480px] lg:h-[360px] flex items-center justify-center [transform-style:preserve-3d]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab.id}
                  initial={{ 
                    opacity: 0, 
                    y: 35 * slideDirection, 
                    rotateY: 20 * slideDirection, 
                    scale: 0.88 
                  }}
                  animate={{ 
                    opacity: 1, 
                    y: 0, 
                    rotateY: 0, 
                    scale: 1 
                  }}
                  exit={{ 
                    opacity: 0, 
                    y: -35 * slideDirection, 
                    rotateY: -20 * slideDirection, 
                    scale: 0.88 
                  }}
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full flex flex-col items-center justify-center relative [transform-style:preserve-3d]"
                >
                  {/* Floating Central Model/Apparel Container */}
                  <motion.div
                    style={{ 
                      y: modelParallaxY,
                      rotateZ: modelRotateParallax
                    }}
                   
                    className="w-full h-full flex items-center justify-center relative z-20 cursor-pointer group transform-gpu will-change-transform"
                  >
                    <a
                      href="#services"
                      className="w-full h-full flex items-center justify-center"
                      aria-label={`View catalog details for ${activeTab.heading}`}
                    >
                      <motion.img
                        src={activeTab.image}
                        alt={activeTab.heading}
                        className="w-full h-full max-h-[190px] sm:max-h-[290px] md:max-h-[320px] lg:max-h-[360px] object-contain filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.18)] group-hover:scale-105 transition-transform duration-500 ease-out"
                        loading="eager"
                        decoding="async"
                      />
                    </a>
                  </motion.div>

                  {/* Soft Cinematic Dynamic 3D Ground Shadow */}
                  <motion.div
                    animate={{
                      scaleX: [1, 0.82, 1],
                      scaleY: [1, 0.75, 1],
                      opacity: [0.35, 0.18, 0.35]
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }}
                    className="absolute -bottom-2 sm:-bottom-4 left-1/2 -translate-x-1/2 w-32 sm:w-56 lg:w-64 h-4 sm:h-6 rounded-full bg-black/40 blur-md pointer-events-none z-10"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Left Specification Callout ("FEATURED SPEC") */}
            <div className="absolute left-1 sm:left-4 md:left-8 lg:left-12 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab.id}
                  initial={{ opacity: 0, x: -40, rotateY: -15 }}
                  animate={{ opacity: 1, x: 0, rotateY: 0 }}
                  exit={{ opacity: 0, x: -40, rotateY: -15 }}
                  transition={{ duration: 0.45, ease: 'easeOut', delay: 0.1 }}
                  className="max-w-[80px] xs:max-w-[95px] sm:max-w-[170px] md:max-w-[210px] text-left space-y-0.5 sm:space-y-1"
                >
                  <span className="text-[9px] sm:text-xs font-poppins font-bold text-[#80011F] uppercase tracking-wider block">
                    FEATURED SPEC
                  </span>
                  <h4 className="text-[11px] xs:text-xs sm:text-base md:text-lg lg:text-xl font-poppins font-black text-[#241A1D] leading-tight break-words">
                    {activeTab.productsList[0]}
                  </h4>
                  <p className="text-[8px] sm:text-[10px] md:text-xs text-slate-500 font-inter font-medium hidden xs:block">
                    Premium custom build.
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Specification Callout ("MATERIAL STANDARD") */}
            <div className="absolute right-1 sm:right-4 md:right-8 lg:right-12 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab.id}
                  initial={{ opacity: 0, x: 40, rotateY: 15 }}
                  animate={{ opacity: 1, x: 0, rotateY: 0 }}
                  exit={{ opacity: 0, x: 40, rotateY: 15 }}
                  transition={{ duration: 0.45, ease: 'easeOut', delay: 0.1 }}
                  className="max-w-[80px] xs:max-w-[95px] sm:max-w-[170px] md:max-w-[210px] text-right space-y-0.5 sm:space-y-1"
                >
                  <span className="text-[9px] sm:text-xs font-poppins font-bold text-[#80011F] uppercase tracking-wider block">
                    MATERIAL STANDARD
                  </span>
                  <h4 className="text-[11px] xs:text-xs sm:text-base md:text-lg lg:text-xl font-poppins font-black text-[#241A1D] leading-tight break-words">
                    {activeTab.productsList[1] || 'Custom Fit'}
                  </h4>
                  <p className="text-[8px] sm:text-[10px] md:text-xs text-slate-500 font-inter font-medium hidden xs:block">
                    Zero compromise fabric.
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Ready Stock 3rd Product (conditional) */}
          {activeTab.productsList[2] && (
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ duration: 0.3 }}
                className="z-20 text-center mb-1"
              >
                <span className="text-[8px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
                  Also Available
                </span>
                <p className="text-xs sm:text-sm font-poppins font-black text-[#241A1D]">
                  {activeTab.productsList[2]}
                </p>
              </motion.div>
            </AnimatePresence>
          )}

        </div>

        {/* 4. Bottom Horizontal Tab Navigation with Flanking Arrow Controls */}
        <div className="mt-4 sm:mt-6 pt-3 border-t border-slate-200/80 flex items-center justify-between gap-2 sm:gap-4 shrink-0 relative z-30">
          <button
            onClick={handlePrevTab}
            className="p-2 sm:p-2.5 rounded-xl bg-white/90 backdrop-blur-sm hover:bg-white hover:border-[#80011F]/30 text-[#6B5B60] hover:text-[#80011F] transition-all cursor-pointer flex shrink-0 border border-slate-200/80 shadow-xs active:scale-95"
            aria-label="Previous category tab"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          <div
            ref={scrollContainerRef}
            className="flex items-center gap-4 sm:gap-8 lg:gap-10 overflow-x-auto scrollbar-none py-2 px-1 w-full justify-start sm:justify-center no-scrollbar"
          >
            {tabs.map((tab, idx) => {
              const isActive = idx === activeTabIdx;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setSlideDirection(idx > activeTabIdx ? 1 : -1);
                    setActiveTabIdx(idx);
                  }}
                  className={`relative py-1.5 px-2.5 sm:px-3 text-[11px] sm:text-xs lg:text-sm font-poppins font-black uppercase tracking-wider transition-all duration-300 shrink-0 cursor-pointer ${
                    isActive ? 'text-[#80011F] scale-105' : 'text-slate-400 hover:text-slate-700'
                  }`}
                >
                  {tab.menuLabel}
                  {isActive && (
                    <motion.div
                      layoutId="servicesActiveTabUnderline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#80011F] rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          <button
            onClick={handleNextTab}
            className="p-2 sm:p-2.5 rounded-xl bg-white/90 backdrop-blur-sm hover:bg-white hover:border-[#80011F]/30 text-[#6B5B60] hover:text-[#80011F] transition-all cursor-pointer flex shrink-0 border border-slate-200/80 shadow-xs active:scale-95"
            aria-label="Next category tab"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};
