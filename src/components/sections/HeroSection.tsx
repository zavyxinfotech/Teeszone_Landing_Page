import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Button } from '../common/Button';
import { 
  ArrowRight, 
  Play, 
  Pause,
  Sparkles,
  Zap,
  ShieldCheck,
  Clock
} from 'lucide-react';
import heroBgVideo from '../../assets/videos/Hero_Section_Background_Video.mp4';

interface HeroSectionProps {
  onOpenQuoteModal: () => void;
  onOpenSampleModal?: () => void;
  onOpenCustomizerModal?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenQuoteModal
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

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

  // Animation variants for smooth entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.215, 0.61, 0.355, 1] },
    },
  };

  return (
    <section className="relative min-h-screen lg:h-screen flex items-center overflow-hidden bg-slate-950 -mt-[69px] pt-[69px]">
      {/* 1. Single Background Animation Video Layer (Aligned Right) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-right filter brightness-[1.05] contrast-[1.05] saturate-[1.05] transition-all duration-700"
        >
          <source src={heroBgVideo} type="video/mp4" />
          <source src="/assets/videos/Hero_Section_Background_Video.mp4" type="video/mp4" />
        </video>

        {/* Dark Left Scrim Gradient for Readability, Clear Right Side Video */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent w-full lg:w-[65%]" />
        <div className="absolute inset-0 bg-slate-950/20" />

        {/* Bottom Fade to Page Background (#F8FAFC) */}
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#F8FAFC] via-slate-950/20 to-transparent" />
      </div>

      {/* 2. Cinematic 3D Motion Effects (Bottom Right to Top Right) */}
      <div className="absolute inset-0 z-5 pointer-events-none overflow-hidden">
        {/* Diagonal Glowing 3D Ambient Light Sweep */}
        <motion.div
          initial={{ opacity: 0.3, scale: 0.9, rotate: -30 }}
          animate={{ 
            opacity: [0.35, 0.75, 0.35], 
            scale: [0.95, 1.15, 0.95],
            rotate: [-30, -24, -30]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-24 -bottom-36 w-[500px] h-[950px] bg-gradient-to-tr from-[#38BDF8]/25 via-[#635BFF]/20 to-purple-500/10 blur-3xl rounded-full transform origin-bottom-right"
        />

        {/* Floating 3D Motion Particles (Ascending from Bottom-Right to Top-Right) */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: 120 + i * 35, 
              y: 550 + i * 45, 
              opacity: 0, 
              scale: 0.4,
              rotateX: 0,
              rotateY: 0 
            }}
            animate={{ 
              y: [-20, -580], 
              x: [100 + i * 30, -80 - i * 25], 
              opacity: [0, 0.9, 0], 
              scale: [0.4, 1.25, 0.6],
              rotateX: [0, 180, 360],
              rotateY: [0, 180, 360]
            }}
            transition={{ 
              duration: 5.5 + i * 1.2, 
              repeat: Infinity, 
              delay: i * 1.1, 
              ease: "easeOut" 
            }}
            className="absolute bottom-0 right-16 w-5 h-5 sm:w-7 sm:h-7 rounded-xl bg-gradient-to-br from-[#38BDF8]/40 via-[#635BFF]/35 to-transparent border border-white/40 backdrop-blur-xs shadow-lg shadow-[#38BDF8]/20"
          />
        ))}

        {/* 3D Floating Glass Feature Chips (Right Edge Diagonal Trajectory) */}
        <motion.div
          animate={{ y: [-8, 8, -8], rotateZ: [-1, 2, -1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="hidden lg:flex items-center gap-3 absolute bottom-24 right-20 bg-slate-950/70 backdrop-blur-xl px-4 py-2.5 rounded-2xl border border-white/20 shadow-2xl text-white transform rotate-[-4deg]"
        >
          <Zap className="w-4 h-4 text-[#38BDF8]" />
          <span className="text-xs font-poppins font-bold">1200 DPI HD Printing</span>
        </motion.div>

        <motion.div
          animate={{ y: [8, -8, 8], rotateZ: [2, -1, 2] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="hidden lg:flex items-center gap-3 absolute top-1/2 right-12 bg-slate-950/70 backdrop-blur-xl px-4 py-2.5 rounded-2xl border border-white/20 shadow-2xl text-white transform rotate-[3deg]"
        >
          <Clock className="w-4 h-4 text-emerald-400" />
          <span className="text-xs font-poppins font-bold">48h Express Dispatch</span>
        </motion.div>

        <motion.div
          animate={{ y: [-10, 6, -10], rotateZ: [-2, 1, -2] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="hidden lg:flex items-center gap-3 absolute top-28 right-24 bg-slate-950/70 backdrop-blur-xl px-4 py-2.5 rounded-2xl border border-white/20 shadow-2xl text-white transform rotate-[-3deg]"
        >
          <ShieldCheck className="w-4 h-4 text-[#C084FC]" />
          <span className="text-xs font-poppins font-bold">100% Color Accuracy</span>
        </motion.div>
      </div>

      {/* 3. Main Desktop Content Container (Left-Aligned Text with Reduced Font Sizes) */}
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 relative z-10 py-10 lg:py-0">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl text-left space-y-6"
        >
          {/* Main Headline (Decreased Font Size) */}
          <motion.h1 
            variants={itemVariants} 
            className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-extrabold text-white tracking-tight leading-[1.18] drop-shadow-md text-left"
          >
            Precision Custom T-Shirts & <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#C084FC] bg-clip-text text-transparent">
              Corporate Apparel.
            </span>
          </motion.h1>

          {/* Sub-headline Body (Decreased Font Size) */}
          <motion.p 
            variants={itemVariants}
            className="text-sm sm:text-base lg:text-lg text-slate-200 font-inter font-medium leading-relaxed max-w-lg text-left drop-shadow-md"
          >
            Elevate your team identity with high-density embroidered polos, 240 GSM heavy cotton tees, and custom swag boxes. Engineered with zero-compromise fabric, 100% color accuracy, and express dispatch.
          </motion.p>

          {/* Primary CTA Button */}
          <motion.div variants={itemVariants} className="pt-1 flex text-left">
            <Button
              variant="primary"
              size="md"
              onClick={onOpenQuoteModal}
              icon={<ArrowRight className="w-4 h-4" />}
              className="shadow-xl shadow-[#635BFF]/40 hover:shadow-[#635BFF]/60 transition-all duration-300 px-6 py-3.5 rounded-xl text-sm font-bold transform hover:-translate-y-0.5"
            >
              Get Instant Quote
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* 4. Small Play/Pause Button Only (Bottom Right Corner) */}
      <button
        onClick={togglePlay}
        className="absolute bottom-6 right-6 z-20 p-2.5 bg-slate-950/80 hover:bg-slate-900 backdrop-blur-md rounded-full border border-white/20 text-white shadow-xl transition-all cursor-pointer hover:scale-110"
        title={isPlaying ? "Pause Video" : "Play Video"}
        aria-label={isPlaying ? "Pause Video" : "Play Video"}
      >
        {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
      </button>

    </section>
  );
};
