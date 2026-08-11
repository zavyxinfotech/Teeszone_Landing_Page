import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '../common/Button';
import { ArrowRight } from 'lucide-react';
import heroBgVideo from '../../assets/videos/Hero_Section_Background_Video.mp4';

interface HeroSectionProps {
  onOpenQuoteModal: () => void;
  onOpenSampleModal?: () => void;
  onOpenCustomizerModal?: () => void;
}

// Hero Carousel Headline Messages (Auto-rotating silently)
const HERO_SLIDES = [
  {
    id: 0,
    headlinePrefix: "Precision Custom T-Shirts & ",
    headlineGradient: "Corporate Apparel.",
    subtitle: "Elevate your team identity with high-density embroidered polos, 240 GSM heavy cotton tees, and custom swag boxes. Engineered with zero-compromise fabric, 100% color accuracy, and express dispatch.",
    ctaText: "Get Instant Quote"
  },
  {
    id: 1,
    headlinePrefix: "1200 DPI High-Density ",
    headlineGradient: "HD Print Quality.",
    subtitle: "Vibrant automatic screen printing and precision DTF customization engineered for corporate uniforms, startup swag kits, and athletic wear that never cracks, peels, or fades.",
    ctaText: "Explore Print Options"
  },
  {
    id: 2,
    headlinePrefix: "Express 48-Hour Dispatch & ",
    headlineGradient: "Low 10 Pcs MOQ.",
    subtitle: "Fastest turnaround time in the custom apparel industry with zero MOQ constraints. Order executive sample prototypes or 10,000 corporate polo units with live specs.",
    ctaText: "Start Order Inquiry"
  }
];

const SLIDE_DURATION = 6000; // 6 seconds silent auto-transition

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenQuoteModal
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Silent background headline rotation
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, SLIDE_DURATION);

    return () => clearInterval(timer);
  }, []);

  const activeSlideData = HERO_SLIDES[currentSlide];

  return (
    <section className="relative min-h-[85vh] sm:min-h-screen flex items-center overflow-hidden bg-slate-950 -mt-[69px] pt-[69px]" aria-label="TeesZone Custom Apparel Hero">
      
      {/* 1. Full-Width Balanced Background Video Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="w-full h-full object-cover object-center filter brightness-[1.05] contrast-[1.05] saturate-[1.05] transition-all duration-700"
        >
          <source src={heroBgVideo} type="video/mp4" />
          <source src="/assets/videos/Hero_Section_Background_Video.mp4" type="video/mp4" />
        </video>

        {/* Cohesive Full-Width Cinematic Scrim Gradient (No Harsh Vertical Half-Split) */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-slate-950/35 w-full h-full" />
        
        {/* Subtle Ambient Radial Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(99,91,255,0.15),transparent_60%)]" />

        {/* Seamless Dark Blend Transition to Next Section (bg-slate-950) */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
      </div>

      {/* 2. Bottom-Left Animated Glowing Particle Effect */}
      <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 z-10 pointer-events-none">
        <motion.div
          animate={{
            scale: [0.9, 1.15, 0.9],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 45, 0]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-tr from-[#38BDF8]/20 via-[#635BFF]/15 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 15, -15, 0],
            y: [0, -15, 15, 0],
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-6 left-6 w-3 h-3 bg-[#38BDF8] rounded-full blur-xs shadow-lg shadow-[#38BDF8]/50"
        />
        <motion.div
          animate={{
            x: [0, -20, 20, 0],
            y: [0, 20, -20, 0],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-12 left-14 w-2 h-2 bg-[#635BFF] rounded-full blur-xs shadow-lg shadow-[#635BFF]/50"
        />
      </div>

      {/* 3. Bottom-Right Soft Cinematic Smoky Mist Effect */}
      <div className="absolute bottom-0 right-0 z-10 pointer-events-none overflow-hidden w-72 h-72 sm:w-96 sm:h-96">
        <motion.div
          animate={{
            x: [20, -20, 20],
            y: [10, -15, 10],
            scale: [1, 1.1, 1],
            opacity: [0.25, 0.5, 0.25]
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 right-0 w-full h-full rounded-full blur-3xl bg-[radial-gradient(circle_at_90%_90%,rgba(255,255,255,0.1),rgba(99,91,255,0.08),transparent_70%)]"
        />
        <motion.div
          animate={{
            x: [-15, 15, -15],
            y: [-10, 15, -10],
            scale: [1.05, 0.95, 1.05],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-4 right-4 w-4/5 h-4/5 rounded-full blur-2xl bg-[radial-gradient(circle_at_80%_80%,rgba(56,189,248,0.1),rgba(10,37,64,0.15),transparent_65%)]"
        />
      </div>

      {/* 4. Main Hero Content Container */}
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 relative z-20 py-12 sm:py-16 lg:py-0">
        <div className="max-w-2xl text-left space-y-6">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.45, ease: [0.215, 0.61, 0.355, 1] }}
              className="space-y-6 text-left"
            >
              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-extrabold text-white tracking-tight leading-[1.18] drop-shadow-md text-left">
                {activeSlideData.headlinePrefix} <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#C084FC] bg-clip-text text-transparent">
                  {activeSlideData.headlineGradient}
                </span>
              </h1>

              {/* Sub-headline Body */}
              <p className="text-sm sm:text-base lg:text-lg text-slate-200 font-inter font-medium leading-relaxed max-w-lg text-left drop-shadow-md">
                {activeSlideData.subtitle}
              </p>

              {/* Primary CTA Button */}
              <div className="pt-2 flex text-left">
                <Button
                  variant="primary"
                  size="md"
                  onClick={onOpenQuoteModal}
                  icon={<ArrowRight className="w-4 h-4" />}
                  className="shadow-xl shadow-[#635BFF]/40 hover:shadow-[#635BFF]/60 transition-all duration-300 px-6 py-3.5 rounded-xl text-sm font-bold transform hover:-translate-y-0.5"
                >
                  {activeSlideData.ctaText}
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>

        </div>
      </div>

    </section>
  );
};
