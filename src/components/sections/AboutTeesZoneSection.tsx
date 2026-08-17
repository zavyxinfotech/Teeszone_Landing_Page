import React from 'react';
import { motion } from 'motion/react';

// Import images from assets
import corporateImage from '../../assets/images/corporate.png';
import visionBgImage from '../../assets/images/ourvision.jpeg';
import manufacturingImage from '../../assets/categories/Industrial_Factory_Uniforms.png';

interface AboutTeesZoneSectionProps {
  onOpenQuoteModal?: () => void;
}

/*
  Organic ink-splash shapes defined as CSS polygon clip-paths.
  These work inline (no external SVG ID reference needed) and are
  immune to overflow:hidden clipping the SVG defs element.

  Vision  — irregular left-leaning blob with droplet protrusions
  Mission — mirrored / rotated variant for variety
*/
const SPLASH_VISION =
  'polygon(' +
  '50% 2%,' +
  '58% 0%,' +
  '67% 4%,' +
  '74% 2%,' +
  '80% 8%,' +
  '86% 6%,' +
  '92% 12%,' +
  '98% 18%,' +
  '100% 26%,' +
  '96% 34%,' +
  '100% 42%,' +
  '98% 52%,' +
  '100% 60%,' +
  '96% 68%,' +
  '98% 76%,' +
  '94% 84%,' +
  '88% 90%,' +
  '80% 96%,' +
  '72% 100%,' +
  '62% 98%,' +
  '54% 100%,' +
  '44% 96%,' +
  '36% 98%,' +
  '28% 94%,' +
  '20% 90%,' +
  '14% 82%,' +
  '8% 74%,' +
  '4% 64%,' +
  '0% 56%,' +
  '4% 46%,' +
  '2% 36%,' +
  '6% 28%,' +
  '4% 18%,' +
  '10% 10%,' +
  '18% 6%,' +
  '28% 2%,' +
  '38% 0%,' +
  '44% 4%,' +
  '50% 2%' +
  ')';

const SPLASH_MISSION =
  'polygon(' +
  '50% 4%,' +
  '60% 0%,' +
  '68% 2%,' +
  '76% 0%,' +
  '84% 6%,' +
  '90% 4%,' +
  '96% 10%,' +
  '100% 20%,' +
  '98% 30%,' +
  '100% 40%,' +
  '96% 50%,' +
  '100% 58%,' +
  '96% 68%,' +
  '92% 78%,' +
  '86% 86%,' +
  '78% 92%,' +
  '68% 98%,' +
  '58% 100%,' +
  '48% 98%,' +
  '40% 100%,' +
  '30% 96%,' +
  '22% 92%,' +
  '14% 86%,' +
  '8% 78%,' +
  '2% 68%,' +
  '0% 58%,' +
  '4% 48%,' +
  '0% 38%,' +
  '4% 28%,' +
  '2% 18%,' +
  '8% 10%,' +
  '16% 4%,' +
  '26% 0%,' +
  '36% 2%,' +
  '44% 0%,' +
  '50% 4%' +
  ')';

export const AboutTeesZoneSection: React.FC<AboutTeesZoneSectionProps> = () => {
  return (
    <section
      id="about"
      className="py-10 sm:py-16 lg:py-24 bg-cream-light text-[#241A1D] relative overflow-hidden select-none"
      aria-label="About TeesZone"
    >
      {/* No hidden SVG needed — clip-paths are inline polygon() values */}

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
                className="relative z-10 w-52 h-52 sm:w-60 sm:h-60 md:w-64 md:h-64 lg:w-80 lg:h-80"
                style={{ clipPath: SPLASH_VISION }}
              >
                {/* Soft blush background fill inside the splash shape */}
                <div className="absolute inset-0 bg-[#FCF0F2]" />
                <img
                  src={corporateImage}
                  alt="Our Vision"
                  className="absolute inset-0 w-full h-full object-contain p-3 hover:scale-105 transition-transform duration-500"
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
                className="relative z-10 w-52 h-52 sm:w-60 sm:h-60 md:w-64 md:h-64 lg:w-80 lg:h-80"
                style={{ clipPath: SPLASH_MISSION }}
              >
                {/* Soft blue background fill inside the splash shape */}
                <div className="absolute inset-0 bg-[#EFF6FF]" />
                <img
                  src={visionBgImage}
                  alt="Our Mission"
                  className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
