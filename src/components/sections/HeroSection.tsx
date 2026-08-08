import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '../common/Button';
import { 
  ArrowRight, 
  Play, 
  Pause 
} from 'lucide-react';
import heroBgVideo from '../../assets/videos/Hero_Section_Background_Video.mp4';

interface HeroSectionProps {
  onOpenQuoteModal: () => void;
  onOpenSampleModal?: () => void;
  onOpenCustomizerModal?: () => void;
}

// Hero Carousel Slide Data
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
    subtitle: "Fastest turnaround time in the custom apparel industry with zero MOQ constraints. Order executive sample prototypes or 10,000 corporate polo units with live pricing.",
    ctaText: "Start Order Inquiry"
  }
];

const SLIDE_DURATION = 6000; // 6 seconds per slide

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenQuoteModal
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slide carousel with linear loader timing
  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, SLIDE_DURATION);

    return () => clearInterval(timer);
  }, [isPlaying, currentSlide]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const activeSlideData = HERO_SLIDES[currentSlide];

  return (
    <section className="relative min-h-screen lg:h-screen flex items-center overflow-hidden bg-slate-950 -mt-[69px] pt-[69px]">
      {/* 1. Single Optimized Background Animation Video Layer (Aligned Right) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="w-full h-full object-cover object-right filter brightness-[1.05] contrast-[1.05] saturate-[1.05] transition-all duration-700"
        >
          <source src={heroBgVideo} type="video/mp4" />
          <source src="/assets/videos/Hero_Section_Background_Video.mp4" type="video/mp4" />
        </video>

        {/* Dark Left Scrim Gradient for Readability, Clear Right Side Video */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-transparent w-full lg:w-[65%]" />
        <div className="absolute inset-0 bg-slate-950/20" />

        {/* Bottom Fade to Page Background (#F8FAFC) */}
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#F8FAFC] via-slate-950/20 to-transparent" />
      </div>

      {/* 2. Main Hero Content Container with Animated Carousel Slide Content */}
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 relative z-10 py-10 lg:py-0">
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
              <div className="pt-1 flex text-left">
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

          {/* 3. Hero Carousel Linear Style Loaders (Progress Fill Indicators) */}
          <div className="pt-4 flex items-center gap-3">
            {HERO_SLIDES.map((slide, index) => {
              const isActive = index === currentSlide;
              return (
                <button
                  key={slide.id}
                  onClick={() => setCurrentSlide(index)}
                  className="group py-2 cursor-pointer flex flex-col gap-1.5 focus:outline-none"
                  aria-label={`Go to slide ${index + 1}`}
                >
                  <div className="w-20 sm:w-28 h-1.5 bg-white/20 rounded-full overflow-hidden relative shadow-xs">
                    {isActive ? (
                      <motion.div
                        key={`loader-${currentSlide}`}
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: SLIDE_DURATION / 1000, ease: "linear" }}
                        className="h-full bg-gradient-to-r from-[#38BDF8] via-[#635BFF] to-[#C084FC] rounded-full"
                      />
                    ) : (
                      <div className="w-0 h-full bg-white/40 group-hover:w-full transition-all duration-300 rounded-full" />
                    )}
                  </div>
                  <span className={`text-[10px] font-poppins font-bold uppercase tracking-wider text-left ${isActive ? 'text-[#38BDF8]' : 'text-slate-400 group-hover:text-slate-200'}`}>
                    0{index + 1} Slide
                  </span>
                </button>
              );
            })}
          </div>

        </div>
      </div>

      {/* 4. Small Play/Pause Button Only (Bottom Right Corner) */}
      <button
        onClick={togglePlay}
        className="absolute bottom-6 right-6 z-20 p-2.5 bg-slate-950/80 hover:bg-slate-900 backdrop-blur-md rounded-full text-white shadow-xl transition-all cursor-pointer hover:scale-110"
        title={isPlaying ? "Pause Video" : "Play Video"}
        aria-label={isPlaying ? "Pause Video" : "Play Video"}
      >
        {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
      </button>

    </section>
  );
};
