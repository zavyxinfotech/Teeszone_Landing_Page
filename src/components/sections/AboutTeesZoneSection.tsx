import React from 'react';
import { motion } from 'motion/react';

// Import images from assets
import corporateImage from '../../assets/images/corporate.png';
import manufacturingImage from '../../assets/categories/Industrial_Factory_Uniforms.png';

interface AboutTeesZoneSectionProps {
  onOpenQuoteModal?: () => void;
}

/**
 * InkSplashMask
 * ─────────────
 * Renders a hidden <svg> block that declares two <clipPath> elements —
 * one for Vision (id="inkSplashVision") and one for Mission (id="inkSplashMission",
 * mirrored horizontally).  Both are referenced via CSS clip-path url(#...).
 *
 * The path is hand-crafted from the reference ink-splash silhouette:
 *   – organic irregular outer blobs
 *   – small satellite droplet protrusions
 *   – smooth bezier curves, no straight lines
 * ViewBox: 0 0 200 200  — a square unit space so the shape scales uniformly.
 */
const INK_SPLASH_PATH =
  // Main irregular splash body — bezier curves give organic blob edges
  'M100,14 ' +
  'C108,4 122,-2 132,8 ' +
  'C140,16 138,28 148,30 ' +
  // top-right protrusion / droplet
  'C158,32 168,24 172,34 ' +
  'C176,44 166,54 162,60 ' +
  // right-side blob
  'C172,66 186,70 186,82 ' +
  'C186,94 174,100 174,110 ' +
  'C180,120 192,128 186,140 ' +
  'C180,152 164,152 158,162 ' +
  // bottom-right droplet
  'C162,172 168,184 158,190 ' +
  'C148,196 138,186 130,182 ' +
  // bottom-center
  'C122,192 112,202 100,196 ' +
  'C88,202 78,192 70,182 ' +
  // bottom-left droplet
  'C62,186 52,196 42,190 ' +
  'C32,184 38,172 42,162 ' +
  // lower-left blob
  'C36,152 20,152 14,140 ' +
  'C8,128 20,120 26,110 ' +
  'C26,100 14,94 14,82 ' +
  // left-side protrusion
  'C14,70 28,66 38,60 ' +
  'C34,54 24,44 28,34 ' +
  // top-left blob
  'C32,24 42,32 52,30 ' +
  'C62,28 60,16 68,8 ' +
  'C78,-2 92,4 100,14 Z ' +
  // ── small satellite droplets ──
  // top-right satellite
  'M152,10 C156,4 164,6 162,14 C160,20 152,18 152,10 Z ' +
  // right satellite
  'M190,96 C196,90 204,94 200,102 C196,110 188,108 190,96 Z ' +
  // bottom-right satellite
  'M166,188 C172,184 178,190 172,196 C166,202 160,196 166,188 Z ' +
  // bottom-left satellite
  'M34,188 C40,196 34,202 28,196 C22,190 28,184 34,188 Z ' +
  // left satellite
  'M10,96 C12,88 4,86 2,94 C0,102 8,106 10,96 Z ' +
  // top-left satellite
  'M50,8 C48,0 56,-4 60,4 C64,12 56,16 50,8 Z';

const InkSplashMask: React.FC = () => (
  <svg
    width="0"
    height="0"
    style={{ position: 'absolute', overflow: 'hidden' }}
    aria-hidden="true"
    focusable="false"
  >
    <defs>
      {/* Vision mask — normal orientation */}
      <clipPath id="inkSplashVision" clipPathUnits="objectBoundingBox">
        {/* We use a transform to map the 200×200 viewBox into 0–1 objectBoundingBox space */}
        <path
          d={INK_SPLASH_PATH}
          transform="scale(0.005, 0.005)"
        />
      </clipPath>

      {/* Mission mask — mirrored horizontally for variety */}
      <clipPath id="inkSplashMission" clipPathUnits="objectBoundingBox">
        <path
          d={INK_SPLASH_PATH}
          /* mirror: translate by 200 then scale x by -1, then scale both by 0.005 */
          transform="translate(200,0) scale(-0.005, 0.005)"
        />
      </clipPath>
    </defs>
  </svg>
);

export const AboutTeesZoneSection: React.FC<AboutTeesZoneSectionProps> = () => {
  return (
    <section
      id="about"
      className="py-10 sm:py-16 lg:py-24 bg-cream-light text-[#241A1D] relative overflow-hidden select-none"
      aria-label="About TeesZone"
    >
      {/* Hidden SVG mask definitions */}
      <InkSplashMask />

      {/* Decorative background grid pattern for texture */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#80011F_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 max-w-7xl mx-auto relative z-10 space-y-12">

        {/* Intro Top Block */}
        <div className="max-w-3xl text-left space-y-3">
          <span className="text-xs font-poppins font-black uppercase tracking-widest text-[#80011F] block">
            ABOUT TEESZONE
          </span>
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-poppins font-extrabold text-[#241A1D] tracking-tight leading-tight">
            Built to Represent Your Brand.
          </h2>
          <p className="text-sm sm:text-base text-[#6B5B60] font-inter font-semibold leading-relaxed max-w-2xl">
            Premium apparel manufacturing and uniform solutions, crafted with quality, precision, and reliable service.
          </p>
        </div>

        {/* Vision & Mission staggered collage container */}
        <div className="space-y-12 md:space-y-2 lg:space-y-0 mt-8">

          {/* ── Row 1: Our Vision — Image Left, Text Right ── */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 lg:gap-16 items-center relative py-6">

            {/* Left: Ink-splash masked image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="md:col-span-5 relative z-10 flex justify-center md:justify-start"
            >
              {/* Decorative background bar */}
              <div className="absolute left-[-100vw] right-[15%] lg:right-[20%] top-4 bottom-4 bg-[#80011F]/10 rounded-r-[2.5rem] pointer-events-none hidden md:block z-0" />

              {/*
                ── Ink-splash image wrapper ──
                clip-path references the SVG clipPath defined above.
                The container is square so the path maps correctly (objectBoundingBox).
                Padding gives breathing room so the subject isn't cropped at the edges.
              */}
              <div
                className="
                  relative z-10
                  w-52 h-52
                  sm:w-60 sm:h-60
                  md:w-64 md:h-64
                  lg:w-80 lg:h-80
                  xl:w-88 xl:h-88
                "
                style={{ clipPath: 'url(#inkSplashVision)' }}
              >
                {/* Soft blush background fill inside the splash shape */}
                <div className="absolute inset-0 bg-[#FCF0F2]" />
                <img
                  src={corporateImage}
                  alt="Our Vision"
                  className="
                    absolute inset-0 w-full h-full
                    object-contain
                    p-3
                    hover:scale-105 transition-transform duration-500
                  "
                />
              </div>
            </motion.div>

            {/* Right: Vision Text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="md:col-span-7 space-y-3 text-left pl-0 md:pl-6"
            >
              <h3 className="text-2xl sm:text-3xl font-poppins font-black uppercase text-[#241A1D] tracking-tight">
                OUR VISION
              </h3>
              <p className="text-sm sm:text-base text-[#6B5B60] font-inter font-medium leading-relaxed max-w-xl">
                To become a trusted apparel partner for businesses and organizations across India through quality, innovation, and reliable manufacturing.
              </p>
            </motion.div>
          </div>

          {/* ── Row 2: Our Mission — Text Left, Image Right ── */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 lg:gap-16 items-center relative py-6">

            {/* Left: Mission Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="md:col-span-7 order-2 md:order-1 space-y-3 text-left pr-0 md:pr-6"
            >
              <h3 className="text-2xl sm:text-3xl font-poppins font-black uppercase text-[#241A1D] tracking-tight">
                Our Mission
              </h3>
              <p className="text-sm sm:text-base text-[#6B5B60] font-inter font-medium leading-relaxed max-w-xl">
                To deliver high-quality customized apparel through premium fabrics, precise manufacturing, professional branding, and timely delivery.
              </p>
            </motion.div>

            {/* Right: Ink-splash masked image (mirrored variant) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="md:col-span-5 order-1 md:order-2 relative z-10 flex justify-center md:justify-end"
            >
              {/* Decorative background bar */}
              <div className="absolute right-[-100vw] left-[15%] lg:left-[20%] top-4 bottom-4 bg-[#38BDF8]/10 rounded-l-[2.5rem] pointer-events-none hidden md:block z-0" />

              <div
                className="
                  relative z-10
                  w-52 h-52
                  sm:w-60 sm:h-60
                  md:w-64 md:h-64
                  lg:w-80 lg:h-80
                  xl:w-88 xl:h-88
                "
                style={{ clipPath: 'url(#inkSplashMission)' }}
              >
                {/* Soft slate background fill inside the splash shape */}
                <div className="absolute inset-0 bg-[#EFF6FF]" />
                <img
                  src={manufacturingImage}
                  alt="Our Mission"
                  className="
                    absolute inset-0 w-full h-full
                    object-contain
                    p-3
                    hover:scale-105 transition-transform duration-500
                  "
                />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
