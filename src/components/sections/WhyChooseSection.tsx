import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Factory, 
  Layers, 
  Printer, 
  RefreshCw, 
  Users, 
  Truck,
  Sparkles
} from 'lucide-react';
import whyTeeszoneBg from '../../assets/backgrounds/why_teeszone_bg.png';

interface ValuePillar {
  id: string;
  title: string;
  description: string;
  badge: string;
  icon: React.ElementType;
  color: string;
  glowColor: string;
}

const PILLARS: ValuePillar[] = [
  {
    id: 'direct-manufacturer',
    title: 'Direct Manufacturer',
    description: 'Made in Tiruppur with quality-focused manufacturing.',
    badge: 'Tiruppur Manufacturing Hub',
    icon: Factory,
    color: '#635BFF',
    glowColor: 'rgba(99,91,255,0.4)',
  },
  {
    id: 'premium-fabrics',
    title: 'Premium Fabrics',
    description: 'Cotton, Polycotton, EcoBlend & Nano Poly options.',
    badge: '240 GSM Bio-Washed',
    icon: Layers,
    color: '#38BDF8',
    glowColor: 'rgba(56,189,248,0.4)',
  },
  {
    id: 'custom-branding',
    title: 'Custom Branding',
    description: 'Professional printing and embroidery.',
    badge: '1200 DPI Screen & Embroidery',
    icon: Printer,
    color: '#10B981',
    glowColor: 'rgba(16,185,129,0.4)',
  },
  {
    id: 'end-to-end',
    title: 'End-to-End Service',
    description: 'From design and manufacturing to delivery.',
    badge: 'Complete Prepress & Dispatch',
    icon: RefreshCw,
    color: '#F59E0B',
    glowColor: 'rgba(245,158,11,0.4)',
  },
  {
    id: 'bulk-ready',
    title: 'Bulk Order Ready',
    description: 'Competitive solutions for businesses & organizations.',
    badge: 'Low MOQ & Enterprise Wholesale',
    icon: Users,
    color: '#A855F7',
    glowColor: 'rgba(168,85,247,0.4)',
  },
  {
    id: 'pan-india',
    title: 'Pan-India Delivery',
    description: 'Reliable delivery across India.',
    badge: '48-Hour Express Dispatch',
    icon: Truck,
    color: '#06B6D4',
    glowColor: 'rgba(6,182,212,0.4)',
  },
];

const AUTO_ROTATE_INTERVAL = 3800; // 3.8 seconds per pillar

export const WhyChooseSection: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  // Auto-rotating highlight loop
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % PILLARS.length);
    }, AUTO_ROTATE_INTERVAL);

    return () => clearInterval(timer);
  }, [isPaused]);

  const activePillar = PILLARS[activeIdx];

  return (
    <section 
      id="why-us" 
      className="relative min-h-[90vh] lg:min-h-screen py-16 lg:py-24 flex items-center overflow-hidden bg-slate-950 text-white select-none"
      aria-label="Why Choose TeesZone"
    >
      
      {/* 1. Cinematic Seamless Background Layer (Zero Vertical Line Split) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src={whyTeeszoneBg}
          alt="Why Choose TeesZone Background"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-center filter brightness-95 contrast-105 transition-all duration-700"
        />

        {/* Seamless Continuous Soft Scrim Overlay (No Vertical Boundaries or Hard Stops) */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/75 to-slate-950/45 w-full h-full" />
        
        {/* Subtle Radial Ambient Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,91,255,0.18),transparent_70%)]" />

        {/* Top & Bottom Seamless Edge Transitions */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-slate-950 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-950 to-transparent" />
      </div>

      {/* 2. Animated Ambient Smoky Motion Particles (Behind Text & Hub) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Animated Purple Smoky Glow Behind Header */}
        <motion.div
          animate={{
            x: [-40, 40, -40],
            y: [-15, 15, -15],
            scale: [1, 1.12, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[radial-gradient(ellipse_at_center,rgba(99,91,255,0.25),transparent_70%)] blur-3xl rounded-full"
        />

        {/* Floating Sky-Blue Ambient Particle Mist */}
        <motion.div
          animate={{
            x: [30, -30, 30],
            y: [20, -20, 20],
            scale: [1.05, 0.95, 1.05],
            opacity: [0.25, 0.5, 0.25],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-10 right-10 w-[500px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.2),transparent_70%)] blur-3xl rounded-full"
        />
      </div>

      {/* Main Section Container */}
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 max-w-7xl mx-auto relative z-10">
        
        {/* Section Header with Animated Smoky Glow Backdrop */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3 relative">
          
          <span className="inline-flex items-center gap-2 text-xs font-poppins font-bold uppercase tracking-widest text-[#38BDF8] drop-shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-[#38BDF8]" />
            THE TEESZONE ADVANTAGE
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-extrabold text-white tracking-tight leading-tight drop-shadow-lg">
            Why Choose TeesZone?
          </h2>

          <p className="text-sm sm:text-base text-slate-200 font-inter font-semibold leading-relaxed drop-shadow-md">
            Quality apparel. Custom solutions. Reliable service.
          </p>

        </div>

        {/* 3. Infographic Radial Arc Node Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Central Animated Circular Hub Node */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative py-6">
            
            {/* Outer Rotating Arc Ring */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 flex items-center justify-center">
              
              {/* Outer Decorative Ring SVG */}
              <motion.svg
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 w-full h-full text-[#635BFF]/30 pointer-events-none"
                viewBox="0 0 400 400"
              >
                <circle
                  cx="200"
                  cy="200"
                  r="180"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="8 12"
                />
              </motion.svg>

              {/* Active Glowing Sub-Arc Ring */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 400">
                <circle
                  cx="200"
                  cy="200"
                  r="185"
                  fill="none"
                  stroke="rgba(56, 189, 248, 0.4)"
                  strokeWidth="3"
                />
              </svg>

              {/* Central White Circular Node (Borderless) */}
              <motion.div
                animate={{
                  boxShadow: [
                    '0 0 30px rgba(99,91,255,0.3)',
                    '0 0 50px rgba(56,189,248,0.5)',
                    '0 0 30px rgba(99,91,255,0.3)'
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="w-48 h-48 sm:w-60 sm:h-60 lg:w-72 lg:h-72 rounded-full bg-white/95 backdrop-blur-xl text-[#0A2540] flex flex-col items-center justify-center p-6 text-center border-0 shadow-2xl relative z-10 cursor-pointer group"
                onClick={() => setActiveIdx((prev) => (prev + 1) % PILLARS.length)}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activePillar.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center justify-center space-y-2"
                  >
                    <div 
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white shadow-md mb-1 border-0"
                      style={{ backgroundColor: activePillar.color }}
                    >
                      <activePillar.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <span className="text-[10px] sm:text-xs font-poppins font-black uppercase tracking-wider text-[#635BFF]">
                      Pillar 0{activeIdx + 1} of 06
                    </span>
                    <h3 className="text-base sm:text-xl font-poppins font-extrabold text-[#0A2540] leading-tight">
                      {activePillar.title}
                    </h3>
                  </motion.div>
                </AnimatePresence>
              </motion.div>

              {/* 6 Circular Arc Node ICONS along the Circle Perimeter */}
              {PILLARS.map((p, idx) => {
                const angle = (idx * (360 / PILLARS.length) - 90) * (Math.PI / 180);
                const radius = 180; // Distance from center
                const x = 200 + radius * Math.cos(angle);
                const y = 200 + radius * Math.sin(angle);
                const isActive = idx === activeIdx;
                const OrbitIcon = p.icon;

                return (
                  <button
                    key={p.id}
                    onClick={() => {
                      setActiveIdx(idx);
                      setIsPaused(true);
                    }}
                    onMouseEnter={() => {
                      setActiveIdx(idx);
                      setIsPaused(true);
                    }}
                    onMouseLeave={() => setIsPaused(false)}
                    aria-label={`Highlight ${p.title}`}
                    className="absolute w-9 h-9 sm:w-11 sm:h-11 -ml-4.5 -mt-4.5 sm:-ml-5.5 sm:-mt-5.5 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer z-20"
                    style={{
                      left: `${(x / 400) * 100}%`,
                      top: `${(y / 400) * 100}%`,
                    }}
                  >
                    <span
                      className={`w-full h-full rounded-full flex items-center justify-center border-0 transition-all duration-300 shadow-lg ${
                        isActive
                          ? 'scale-125 text-white shadow-lg shadow-[#38BDF8]/60 ring-4 ring-[#38BDF8]/40'
                          : 'bg-slate-900/90 text-slate-300 hover:bg-[#635BFF] hover:text-white hover:scale-110'
                      }`}
                      style={{
                        backgroundColor: isActive ? p.color : undefined
                      }}
                    >
                      <OrbitIcon className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.25]" />
                    </span>
                  </button>
                );
              })}

            </div>

          </div>

          {/* Right Column: Borderless Horizontal Pill Shapes */}
          <div 
            className="lg:col-span-7 space-y-3.5 flex flex-col justify-center"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {PILLARS.map((pillar, idx) => {
              const isActive = idx === activeIdx;
              const IconComp = pillar.icon;

              return (
                <motion.div
                  key={pillar.id}
                  onClick={() => {
                    setActiveIdx(idx);
                    setIsPaused(true);
                  }}
                  onMouseEnter={() => {
                    setActiveIdx(idx);
                    setIsPaused(true);
                  }}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className={`relative cursor-pointer rounded-full transition-all duration-300 p-3 sm:p-4 px-5 sm:px-7 flex items-center justify-between border-0 backdrop-blur-xl ${
                    isActive
                      ? 'bg-white/95 text-[#0A2540] shadow-2xl scale-[1.02] translate-x-2'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                  style={{
                    boxShadow: isActive ? `0 10px 30px ${pillar.glowColor}` : 'none'
                  }}
                >
                  {/* Left Icon Badge & Text Content */}
                  <div className="flex items-center gap-4 sm:gap-5 min-w-0">
                    
                    {/* Circle Icon Badge (Borderless) */}
                    <div 
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 border-0 ${
                        isActive ? 'scale-110 shadow-md text-white' : 'bg-white/15 text-white'
                      }`}
                      style={{
                        backgroundColor: isActive ? pillar.color : undefined
                      }}
                    >
                      <IconComp className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>

                    {/* Title & Description */}
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <h3 className={`text-sm sm:text-base font-poppins font-extrabold truncate ${
                          isActive ? 'text-[#0A2540]' : 'text-white'
                        }`}>
                          {pillar.title}
                        </h3>
                        <span className={`text-[10px] font-poppins font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full hidden sm:inline-block border-0 ${
                          isActive ? 'bg-[#635BFF]/10 text-[#635BFF]' : 'bg-white/10 text-[#38BDF8]'
                        }`}>
                          {pillar.badge}
                        </span>
                      </div>
                      <p className={`text-xs sm:text-sm font-inter leading-relaxed truncate mt-0.5 ${
                        isActive ? 'text-[#425466]' : 'text-slate-300'
                      }`}>
                        {pillar.description}
                      </p>
                    </div>

                  </div>

                  {/* Active Left Indicator Bar */}
                  {isActive && (
                    <motion.div
                      layoutId="activePillarBar"
                      className="absolute left-0 top-0 bottom-0 w-2 rounded-l-full"
                      style={{ backgroundColor: pillar.color }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}

                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
