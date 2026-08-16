import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';

// Import process step images
import process01 from '../../assets/images/process_01.jpeg';
import process02 from '../../assets/images/process_02.jpeg';
import process03 from '../../assets/images/process_03.jpeg';
import process04 from '../../assets/images/process_04.jpeg';
import process05 from '../../assets/images/process_05.jpeg';

interface ApparelManufacturingSectionProps {
  onOpenQuoteModal?: () => void;
}

export const ApparelManufacturingSection: React.FC<ApparelManufacturingSectionProps> = () => {
  const steps = [
    {
      number: '01',
      title: 'SHARE REQUIREMENTS',
      sub: 'Quantity, Style, Logo',
      image: process01
    },
    {
      number: '02',
      title: 'RECEIVE FREE QUOTE',
      sub: 'Pricing in 24 Hrs',
      image: process02
    },
    {
      number: '03',
      title: 'APPROVE SAMPLE',
      sub: 'See Before You Commit',
      image: process03
    },
    {
      number: '04',
      title: 'CONFIRM & PAY',
      sub: 'Advance Locks Your Slot',
      image: process04
    },
    {
      number: '05',
      title: 'DELIVERED TO YOUR DOOR',
      sub: 'Pan-India Delivery',
      image: process05
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const pauseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = useCallback((index: number, dir: number) => {
    setDirection(dir);
    setActiveIndex(index);
  }, []);

  const next = useCallback(() => {
    const nextIdx = (activeIndex + 1) % steps.length;
    goTo(nextIdx, 1);
  }, [activeIndex, steps.length, goTo]);

  const startAutoPlay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (!isPaused) {
        setActiveIndex(prev => {
          const nextIdx = (prev + 1) % steps.length;
          setDirection(1);
          return nextIdx;
        });
      }
    }, 2800);
  }, [isPaused, steps.length]);

  useEffect(() => {
    startAutoPlay();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [startAutoPlay]);

  const handleUserInteraction = (index: number) => {
    // Pause on user interaction
    setIsPaused(true);
    const dir = index > activeIndex ? 1 : -1;
    goTo(index, dir);

    // Resume after 4 seconds of inactivity
    if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    pauseTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 4000);
  };

  useEffect(() => {
    return () => {
      if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    };
  }, []);

  // Carousel slide variants
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.88,
      rotateY: dir > 0 ? 12 : -12,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? '-100%' : '100%',
      opacity: 0,
      scale: 0.88,
      rotateY: dir > 0 ? -12 : 12,
    }),
  };

  return (
    <section
      id="manufacturing"
      className="py-16 sm:py-24 bg-cream-light text-[#241A1D] relative overflow-hidden select-none"
      aria-label="Apparel Ordering Process Timeline"
    >
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#80011F_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 max-w-7xl mx-auto relative z-10 space-y-12">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-poppins font-black uppercase tracking-widest text-[#80011F] block">
            HOW WE WORK
          </span>
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-poppins font-extrabold text-[#241A1D] tracking-tight">
            Our 5-Step Ordering Process
          </h2>
          <p className="text-sm sm:text-base text-[#6B5B60] font-inter font-semibold max-w-xl mx-auto pt-2">
            A simple, premium path from custom design requirements to door-step delivery.
          </p>
        </div>

        {/* ───────────────────────────────────────────────
            DESKTOP/LARGE-TABLET: Horizontal 5-column grid
        ─────────────────────────────────────────────── */}
        <div className="hidden lg:block relative pt-10">
          {/* Connector Line */}
          <div className="absolute top-[90px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-[#80011F]/10 via-[#80011F]/30 to-[#80011F]/10" />

          <div className="flex flex-row gap-6 justify-between relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col items-center text-center gap-0 group w-1/5 cursor-pointer"
                onClick={() => handleUserInteraction(idx)}
              >
                {/* Circular Image */}
                <div className="relative mb-5">
                  <div
                    className={`w-40 h-40 xl:w-44 xl:h-44 rounded-full overflow-hidden bg-white border-2 shadow-md transition-all duration-300 relative z-10 flex items-center justify-center
                      ${activeIndex === idx
                        ? 'border-[#80011F] shadow-xl scale-110'
                        : 'border-[#80011F]/20 group-hover:border-[#80011F] group-hover:shadow-xl group-hover:scale-105'
                      }`}
                  >
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover rounded-full"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  {/* Subtle glow ring for active */}
                  {activeIndex === idx && (
                    <motion.div
                      layoutId="desktop-active-ring"
                      className="absolute inset-0 rounded-full border-2 border-[#80011F]/40 scale-110"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </div>

                {/* Step label */}
                <span className="text-[10px] font-poppins font-black uppercase tracking-widest text-[#80011F]/60 mb-1">
                  STEP {step.number}
                </span>

                {/* Heading & Details */}
                <div className="space-y-1">
                  <h3 className={`text-sm font-poppins font-extrabold tracking-tight uppercase transition-colors ${activeIndex === idx ? 'text-[#80011F]' : 'text-[#241A1D] group-hover:text-[#80011F]'}`}>
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#6B5B60] font-inter font-medium leading-relaxed">
                    {step.sub}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ───────────────────────────────────────────────
            MOBILE / TABLET: Cinematic Auto-Rotating Carousel
        ─────────────────────────────────────────────── */}
        <div className="lg:hidden">
          {/* Carousel Stage */}
          <div className="relative w-full overflow-hidden" style={{ perspective: '1000px' }}>
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 280, damping: 30 },
                  opacity: { duration: 0.25 },
                  scale: { duration: 0.35 },
                  rotateY: { duration: 0.35 },
                }}
                className="flex flex-col items-center text-center gap-5 px-4 py-2"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.08}
                onDragEnd={(_e, info) => {
                  const threshold = 50;
                  if (info.offset.x < -threshold) {
                    const nextIdx = (activeIndex + 1) % steps.length;
                    handleUserInteraction(nextIdx);
                  } else if (info.offset.x > threshold) {
                    const prevIdx = (activeIndex - 1 + steps.length) % steps.length;
                    handleUserInteraction(prevIdx);
                  }
                }}
              >
                {/* Large Image */}
                <div className="relative">
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                    className="w-52 h-52 sm:w-64 sm:h-64 rounded-full overflow-hidden bg-white border-[3px] border-[#80011F]/30 shadow-2xl flex items-center justify-center mx-auto"
                    style={{
                      boxShadow: '0 20px 60px rgba(128,1,31,0.18), 0 6px 20px rgba(0,0,0,0.10)'
                    }}
                  >
                    <img
                      src={steps[activeIndex].image}
                      alt={steps[activeIndex].title}
                      className="w-full h-full object-cover rounded-full"
                      loading="lazy"
                      decoding="async"
                    />
                  </motion.div>
                  {/* Cinematic shadow beneath */}
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-36 h-4 bg-[#80011F]/10 blur-xl rounded-full" />
                </div>

                {/* Step label */}
                <span className="text-[10px] font-poppins font-black uppercase tracking-widest text-[#80011F]/60">
                  STEP {steps[activeIndex].number}
                </span>

                {/* Text */}
                <div className="space-y-1 max-w-xs">
                  <h3 className="text-base sm:text-lg font-poppins font-extrabold text-[#241A1D] tracking-tight uppercase">
                    {steps[activeIndex].title}
                  </h3>
                  <p className="text-sm text-[#6B5B60] font-inter font-medium leading-relaxed">
                    {steps[activeIndex].sub}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dot Navigation */}
          <div className="flex justify-center items-center gap-2 mt-6">
            {steps.map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleUserInteraction(idx)}
                aria-label={`Go to step ${idx + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  idx === activeIndex
                    ? 'w-6 h-2.5 bg-[#80011F]'
                    : 'w-2.5 h-2.5 bg-[#80011F]/25 hover:bg-[#80011F]/50'
                }`}
              />
            ))}
          </div>

          {/* Progress bar */}
          <div className="mt-4 mx-auto max-w-xs h-0.5 bg-[#80011F]/10 rounded-full overflow-hidden">
            <motion.div
              key={activeIndex + '-progress'}
              className="h-full bg-[#80011F]/60 rounded-full origin-left"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: isPaused ? 0 : 1 }}
              transition={{ duration: isPaused ? 0 : 2.8, ease: 'linear' }}
            />
          </div>

          {/* Swipe hint */}
          <p className="text-center text-[10px] text-[#6B5B60]/50 font-inter mt-3 tracking-wide">
            Swipe or tap dots to navigate
          </p>
        </div>

      </div>
    </section>
  );
};
