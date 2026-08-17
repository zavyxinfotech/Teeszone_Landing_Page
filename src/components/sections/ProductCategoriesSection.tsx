import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import transparent PNG model category product images
import corporateImg from '../../assets/images/corporate.png';
import sportsImg from '../../assets/images/sports.png';
import industryImg from '../../assets/images/industry.png';
import schoolImg from '../../assets/images/school.png';
import eventImg from '../../assets/images/events.png';
import readyStockImg from '../../assets/images/readyStock.png';

// Import category dynamic background images
import corporateBg from '../../assets/images/corporate_bg.jpeg';
import sportsBg from '../../assets/images/sports_bg.jpeg';
import industryBg from '../../assets/images/industry_bg.jpeg';
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
  subLabel: string;
  type: 'Custom Apparel' | 'Ready Stock';
  image: string;
  bgImage: string;
  specLeft: string;
  specRight: string;
  tagLine: string;
}

export const ProductCategoriesSection: React.FC<ProductCategoriesSectionProps> = () => {
  const tabs: ProductTab[] = [
    {
      id: 'office',
      menuLabel: 'OFFICE',
      backdropText: 'CORPORATE',
      heading: 'Corporate & Office Uniforms',
      subLabel: 'Custom Apparel',
      type: 'Custom Apparel',
      image: corporateImg,
      bgImage: corporateBg,
      specLeft: 'Corporate Uniforms',
      specRight: 'Office Uniforms',
      tagLine: 'Dress your brand with confidence'
    },
    {
      id: 'sports',
      menuLabel: 'SPORTS',
      backdropText: 'SPORTSWEAR',
      heading: 'High-Performance Jerseys',
      subLabel: 'Custom Apparel',
      type: 'Custom Apparel',
      image: sportsImg,
      bgImage: sportsBg,
      specLeft: 'Sports Jerseys',
      specRight: 'Team Training Kits',
      tagLine: 'Built for peak performance'
    },
    {
      id: 'industrial',
      menuLabel: 'INDUSTRIAL',
      backdropText: 'INDUSTRIAL',
      heading: 'Heavy-Duty Factory Wear',
      subLabel: 'Custom Apparel',
      type: 'Custom Apparel',
      image: industryImg,
      bgImage: industryBg,
      specLeft: 'Industrial Uniforms',
      specRight: 'Factory Safety Wear',
      tagLine: 'Safety meets professional style'
    },
    {
      id: 'schools',
      menuLabel: 'SCHOOLS',
      backdropText: 'ACADEMIC',
      heading: 'School & College Uniforms',
      subLabel: 'Custom Apparel',
      type: 'Custom Apparel',
      image: schoolImg,
      bgImage: schoolBg,
      specLeft: 'School Uniforms',
      specRight: 'College Uniforms',
      tagLine: 'Uniform pride, individual identity'
    },
    {
      id: 'events',
      menuLabel: 'EVENTS',
      backdropText: 'PROMOTIONAL',
      heading: 'Event & Promo Clothing',
      subLabel: 'Custom Apparel',
      type: 'Custom Apparel',
      image: eventImg,
      bgImage: eventBg,
      specLeft: 'Event T-Shirts',
      specRight: 'Promotional Apparel',
      tagLine: 'Make every event memorable'
    },
    {
      id: 'ready-stock',
      menuLabel: 'READY STOCK',
      backdropText: 'READY STOCK',
      heading: 'Premium Ready Apparel',
      subLabel: 'Ready to Ship',
      type: 'Ready Stock',
      image: readyStockImg,
      bgImage: corporateBg,
      specLeft: 'AeroSoft Polo T-Shirts',
      specRight: 'Customized Hoodies',
      tagLine: 'Premium quality, immediate dispatch'
    }
  ];

  const [activeTabIdx, setActiveTabIdx] = useState<number>(0);
  const [slideDirection, setSlideDirection] = useState<number>(1);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const pauseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const activeTab = tabs[activeTabIdx];

  // Scroll parallax effects for 3D depth
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const watermarkParallaxY = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  const modelParallaxY = useTransform(scrollYProgress, [0, 1], [15, -15]);
  const modelRotateParallax = useTransform(scrollYProgress, [0, 1], [-2, 2]);

  // Auto-rotation every 1.5 seconds (stops on hover or manual pause)
  const startAutoPlay = useCallback(() => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(() => {
      if (!isPaused && !isHovered) {
        setSlideDirection(1);
        setActiveTabIdx((prev) => (prev + 1) % tabs.length);
      }
    }, 1500);
  }, [isPaused, isHovered, tabs.length]);

  useEffect(() => {
    startAutoPlay();
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [startAutoPlay]);

  // Pause auto-rotation on user interaction, resume after 5 seconds
  const pauseAndResume = useCallback(() => {
    setIsPaused(true);
    if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
    pauseTimerRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 5000);
  }, []);

  useEffect(() => {
    return () => {
      if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
    };
  }, []);

  const handleNextTab = useCallback(() => {
    setSlideDirection(1);
    setActiveTabIdx((prev) => (prev + 1) % tabs.length);
    pauseAndResume();
  }, [tabs.length, pauseAndResume]);

  const handlePrevTab = useCallback(() => {
    setSlideDirection(-1);
    setActiveTabIdx((prev) => (prev - 1 + tabs.length) % tabs.length);
    pauseAndResume();
  }, [tabs.length, pauseAndResume]);

  const handleTabClick = useCallback((idx: number) => {
    setSlideDirection(idx > activeTabIdx ? 1 : -1);
    setActiveTabIdx(idx);
    pauseAndResume();
  }, [activeTabIdx, pauseAndResume]);

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
      className="py-8 sm:py-14 lg:py-16 bg-[#FFFCFA] text-[#241A1D] relative overflow-hidden select-none min-h-[700px] lg:min-h-[850px] flex flex-col justify-between [perspective:1400px]"
      aria-label="Apparel Product Categories Catalog"
    >
      {/* 1. Dynamic Background Image — clearer visibility with reduced overlay opacity */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <AnimatePresence mode="wait">
          {activeTab.bgImage && (
            <motion.div
              key={activeTab.id}
              initial={{ opacity: 0, scale: 1.06 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0"
            >
              <img
                src={activeTab.bgImage}
                alt=""
                className="w-full h-full object-cover object-center transform-gpu"
                loading="lazy"
                decoding="async"
              />
              {/* Overlay: reduced opacity so background image is more visible */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#FCF5EA]/78 via-[#FCF5EA]/70 to-[#FCF5EA]/85" />
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
        <div className="relative w-full flex flex-col justify-between items-center z-10 [transform-style:preserve-3d] flex-grow">

          {/* Background Oversized Parallax Watermark Text — customized font size so full text displays clearly */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0 px-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                style={{ y: watermarkParallaxY }}
                initial={{ opacity: 0, scale: 0.9, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.08, y: -15 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="font-poppins font-black text-[7vw] sm:text-[6vw] md:text-[5vw] lg:text-[4.5vw] xl:text-[4.5rem] text-center select-none leading-none tracking-normal uppercase transform-gpu will-change-transform max-w-full"
              >
                {/* Darker watermark: stronger stroke + semi-transparent fill */}
                <span
                  style={{
                    WebkitTextStroke: '1.5px rgba(36, 26, 29, 0.22)',
                    color: 'rgba(128,1,31,0.08)',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {activeTab.backdropText}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Top Category Title Banner */}
          <div className="text-center z-20 pointer-events-none mt-1 sm:mt-3 w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, y: -18, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 18, scale: 0.95 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="space-y-1"
              >
                {/* Category type pill */}
                <span className="inline-block text-[9px] sm:text-[10px] font-poppins font-semibold uppercase tracking-widest text-[#80011F] bg-[#80011F]/8 px-3 py-1 rounded-full">
                  {activeTab.subLabel}
                </span>
                <h3 className="text-base sm:text-xl lg:text-2xl xl:text-3xl font-poppins font-bold text-[#241A1D] mt-1 uppercase tracking-tight leading-tight">
                  {activeTab.heading}
                </h3>
                {/* Tagline below heading */}
                <p className="text-[11px] sm:text-xs lg:text-sm font-inter font-normal text-slate-500 italic tracking-wide">
                  {activeTab.tagLine}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Center 3D Floating Product Image with side spec callouts */}
          <div className="relative w-full flex-grow flex items-center justify-center my-3 sm:my-4 [perspective:1000px]">

            {/* Left Specification Callout */}
            <div className="absolute left-0 sm:left-4 md:left-8 lg:left-10 xl:left-16 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab.id}
                  initial={{ opacity: 0, x: -36 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -36 }}
                  transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 }}
                  className="max-w-[72px] xs:max-w-[88px] sm:max-w-[140px] md:max-w-[180px] lg:max-w-[210px] text-left space-y-1 sm:space-y-1.5"
                >
                  {/* Decorative line */}
                  <div className="flex items-center gap-1.5 mb-1">
                    <div className="w-4 sm:w-6 h-px bg-[#80011F]/50" />
                    <span className="text-[8px] sm:text-[10px] font-poppins font-semibold text-[#80011F]/70 uppercase tracking-widest">
                      Featured
                    </span>
                  </div>
                  <h4 className="text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg font-poppins font-semibold text-[#241A1D] leading-snug break-words">
                    {activeTab.specLeft}
                  </h4>
                  <p className="text-[7px] sm:text-[9px] md:text-[10px] text-slate-400 font-inter font-normal leading-snug hidden xs:block italic">
                    Premium custom build.
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Large Central Product Image — increased size & pause auto-rotation on hover */}
            <div
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="relative w-72 h-80 sm:w-96 sm:h-[400px] md:w-[480px] md:h-[470px] lg:w-[620px] lg:h-[560px] xl:w-[680px] xl:h-[600px] flex items-center justify-center [transform-style:preserve-3d] cursor-pointer"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab.id}
                  initial={{
                    opacity: 0,
                    y: 30 * slideDirection,
                    rotateY: 18 * slideDirection,
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
                    y: -30 * slideDirection,
                    rotateY: -18 * slideDirection,
                    scale: 0.88
                  }}
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full flex flex-col items-center justify-center relative [transform-style:preserve-3d]"
                >
                  <motion.div
                    style={{
                      y: modelParallaxY,
                      rotateZ: modelRotateParallax
                    }}
                    className="w-full h-full flex items-center justify-center relative z-20 group transform-gpu will-change-transform"
                  >
                    <motion.img
                      src={activeTab.image}
                      alt={activeTab.heading}
                      className="w-full h-full object-contain filter drop-shadow-[0_24px_48px_rgba(0,0,0,0.22)] group-hover:scale-[1.05] transition-transform duration-500 ease-out"
                      loading="eager"
                      decoding="async"
                    />
                  </motion.div>

                  {/* Cinematic ground shadow */}
                  <motion.div
                    animate={{
                      scaleX: [1, 0.80, 1],
                      scaleY: [1, 0.70, 1],
                      opacity: [0.30, 0.14, 0.30]
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }}
                    className="absolute -bottom-2 sm:-bottom-4 left-1/2 -translate-x-1/2 w-44 sm:w-72 lg:w-96 h-4 sm:h-6 rounded-full bg-black/40 blur-md pointer-events-none z-10"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Specification Callout */}
            <div className="absolute right-0 sm:right-4 md:right-8 lg:right-10 xl:right-16 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab.id}
                  initial={{ opacity: 0, x: 36 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 36 }}
                  transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 }}
                  className="max-w-[72px] xs:max-w-[88px] sm:max-w-[140px] md:max-w-[180px] lg:max-w-[210px] text-right space-y-1 sm:space-y-1.5"
                >
                  {/* Decorative line */}
                  <div className="flex items-center justify-end gap-1.5 mb-1">
                    <span className="text-[8px] sm:text-[10px] font-poppins font-semibold text-[#80011F]/70 uppercase tracking-widest">
                      Material
                    </span>
                    <div className="w-4 sm:w-6 h-px bg-[#80011F]/50" />
                  </div>
                  <h4 className="text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg font-poppins font-semibold text-[#241A1D] leading-snug break-words">
                    {activeTab.specRight}
                  </h4>
                  <p className="text-[7px] sm:text-[9px] md:text-[10px] text-slate-400 font-inter font-normal leading-snug hidden xs:block italic">
                    Zero compromise fabric.
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Ready Stock 3rd item (conditional) */}
          {activeTab.type === 'Ready Stock' && (
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ duration: 0.3 }}
                className="z-20 text-center mb-1"
              >
                <span className="text-[8px] sm:text-[10px] font-inter font-normal text-slate-400 uppercase tracking-widest block italic">
                  Also Available
                </span>
                <p className="text-xs sm:text-sm font-poppins font-semibold text-[#241A1D]">
                  Crew Neck T-Shirts
                </p>
              </motion.div>
            </AnimatePresence>
          )}
        </div>

        {/* 4. Bottom Tab Navigation — borderless/backgroundless arrows + lighter tab labels */}
        <div className="mt-4 sm:mt-6 pt-3 border-t border-slate-200/60 flex items-center justify-between gap-2 sm:gap-4 shrink-0 relative z-30">

          {/* Prev arrow — no border, no background */}
          <button
            onClick={handlePrevTab}
            className="p-1.5 sm:p-2 text-[#6B5B60]/60 hover:text-[#80011F] transition-all cursor-pointer flex shrink-0 active:scale-90 hover:scale-110"
            aria-label="Previous category tab"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.5} />
          </button>

          {/* Scrollable Tab Labels */}
          <div
            ref={scrollContainerRef}
            className="flex items-center gap-3 sm:gap-6 lg:gap-8 overflow-x-auto py-2 px-1 w-full justify-start sm:justify-center no-scrollbar"
            style={{ scrollbarWidth: 'none' }}
          >
            {tabs.map((tab, idx) => {
              const isActive = idx === activeTabIdx;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(idx)}
                  className={`relative py-1.5 px-1 sm:px-2 text-[10px] sm:text-[11px] lg:text-xs font-poppins uppercase tracking-wider transition-all duration-300 shrink-0 cursor-pointer ${
                    isActive
                      ? 'text-[#80011F] font-semibold scale-105'
                      : 'text-slate-400 font-normal hover:text-slate-600'
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

          {/* Next arrow — no border, no background */}
          <button
            onClick={handleNextTab}
            className="p-1.5 sm:p-2 text-[#6B5B60]/60 hover:text-[#80011F] transition-all cursor-pointer flex shrink-0 active:scale-90 hover:scale-110"
            aria-label="Next category tab"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.5} />
          </button>
        </div>

        {/* Auto-play progress strip */}
        <div className="mt-2 mx-auto w-24 sm:w-32 h-px bg-slate-200/60 rounded-full overflow-hidden">
          <motion.div
            key={activeTabIdx + '-strip'}
            className="h-full bg-[#80011F]/50 rounded-full origin-left"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: isPaused || isHovered ? 0 : 1 }}
            transition={{ duration: isPaused || isHovered ? 0 : 1.5, ease: 'linear' }}
          />
        </div>

      </div>
    </section>
  );
};
