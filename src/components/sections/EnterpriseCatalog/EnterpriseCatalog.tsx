import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'motion/react';
import { CUSTOM_BULK_PRODUCTS } from '../../../data/products';

interface EnterpriseCatalogProps {
  onOpenQuoteModal?: () => void;
}

export const EnterpriseCatalog: React.FC<EnterpriseCatalogProps> = () => {
  // Duplicate array multiple times for seamless infinite scrolling
  const scrollItems = [...CUSTOM_BULK_PRODUCTS, ...CUSTOM_BULK_PRODUCTS, ...CUSTOM_BULK_PRODUCTS];
  
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const marqueeControls = useAnimation();

  useEffect(() => {
    if (hoveredIndex === null) {
      // Resume marquee
      marqueeControls.start({
        x: ["0%", "-33.333333%"],
        transition: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 60, // Slowed down since items are huge
          ease: "linear",
        }
      });
    } else {
      // Pause marquee
      marqueeControls.stop();
    }
  }, [hoveredIndex, marqueeControls]);

  return (
    <section 
      id="categories" 
      className="py-16 lg:py-24 bg-white relative overflow-hidden select-none" 
      aria-label="Enterprise Apparel Catalog"
      style={{ perspective: '1000px' }} // For 3D transforms
    >
      
      <div className="w-full relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20 px-6 space-y-3">
          <span className="inline-block py-1.5 px-3 rounded-full bg-sky-100 text-sky-700 text-[10px] font-poppins font-bold uppercase tracking-wider mb-2 shadow-sm">
            ENTERPRISE APPAREL
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-extrabold text-[#241A1D] tracking-tight">
            Custom & Bulk Apparel
          </h2>
          <p className="text-sm sm:text-base text-[#425466] font-inter font-semibold leading-relaxed max-w-2xl mx-auto">
            High-density customized apparel solutions engineered for corporate, institutional, industrial, and event requirements.
          </p>
        </div>

        {/* Horizontal Infinite Marquee (Single Item Scroll) */}
        <div 
          className="relative w-full py-12 flex items-center justify-start overflow-visible"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <motion.div
            className="flex items-center gap-12 md:gap-20 will-change-transform"
            animate={marqueeControls}
            style={{ width: "fit-content", transformStyle: 'preserve-3d' }}
            onHoverStart={() => setHoveredIndex(null)} // Reset just in case
          >
            {scrollItems.map((item, index) => {
              const isHovered = hoveredIndex === index;
              const isOtherHovered = hoveredIndex !== null && hoveredIndex !== index;

              return (
                <motion.div 
                  key={`${item.id}-${index}`} 
                  className="w-[260px] md:w-[300px] lg:w-[340px] flex flex-col items-center justify-center group cursor-pointer relative"
                  style={{ transformStyle: 'preserve-3d' }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onTouchStart={() => setHoveredIndex(index)}
                  onTouchEnd={() => setHoveredIndex(null)}
                  animate={
                    isHovered 
                      ? { scale: 1.25, zIndex: 50, opacity: 1 } 
                      : isOtherHovered 
                        ? { scale: 0.8, opacity: 0.4, zIndex: 0 } 
                        : { scale: 0.9, opacity: 1, zIndex: 10 }
                  }
                  transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  {/* Container for Garment and Floor Shadow */}
                  <div 
                    className="relative w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] lg:w-[340px] lg:h-[340px] mb-8 flex items-center justify-center will-change-transform"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    {/* Floating & Rotating Garment */}
                    <motion.div
                      className="w-full h-full absolute inset-0 z-10"
                      animate={
                        isHovered 
                          ? { 
                              y: 0, 
                              rotateY: 360 
                            } 
                          : { 
                              y: 0, 
                              rotateY: [-10, 10, -10] 
                            }
                      }
                      transition={
                        isHovered 
                          ? { duration: 1.5, ease: "easeInOut" } 
                          : { 
                              rotateY: { duration: 8, repeat: Infinity, ease: "easeInOut" } 
                            }
                      }
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      <img
                         src={item.image}
                         alt={item.name}
                         loading="lazy"
                         className="w-full h-full object-contain pointer-events-none"
                         style={{ 
                           filter: 'contrast(1.02) brightness(1.02)',
                           mixBlendMode: 'darken' 
                         }}
                      />
                    </motion.div>

                    {/* Floor Contact Shadow */}
                    <motion.div
                      className="absolute -bottom-10 w-48 lg:w-64 h-6 bg-black/10 rounded-[100%] blur-[8px] z-0"
                      animate={
                        isHovered
                          ? { scale: 1.3, opacity: 0.4 }
                          : { scale: 1, opacity: 0.2 }
                      }
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    />

                  </div>

                  {/* Transparent Background Badge */}
                  <motion.div 
                    className="px-6 py-2.5 bg-[#241A1D]/5 backdrop-blur-[6px] text-[#241A1D] font-poppins font-extrabold text-sm sm:text-base rounded-full border border-[#241A1D]/10 whitespace-nowrap z-20 shadow-sm"
                    animate={
                      isHovered 
                        ? { scale: 1.08, backgroundColor: "rgba(10, 37, 64, 0.1)", borderColor: "rgba(10, 37, 64, 0.2)" }
                        : isOtherHovered
                          ? { scale: 0.95, opacity: 0.6 }
                          : { scale: 1, opacity: 1 }
                    }
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    {item.name.toUpperCase()}
                  </motion.div>

                  </motion.div>
              );
            })}
          </motion.div>
        </div>

      </div>
    </section>
  );
};
