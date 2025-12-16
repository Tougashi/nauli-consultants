import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

function AboutHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress of hero section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Image 1 transforms (0% - 50% scroll)
  const image1Scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.85]);
  const image1Opacity = useTransform(scrollYProgress, [0, 0.4, 0.5], [1, 0.5, 0]);
  const image1Y = useTransform(scrollYProgress, [0, 0.5], [0, -50]);

  // Image 2 transforms (40% - 100% scroll)
  const image2Opacity = useTransform(scrollYProgress, [0.4, 0.5, 0.9, 1], [0, 1, 0.5, 0]);
  const image2Scale = useTransform(scrollYProgress, [0.5, 1], [1, 0.85]);
  const image2Y = useTransform(scrollYProgress, [0.5, 1], [0, -100]);

  // Text 1 (for image 1) - fades out early
  const text1Opacity = useTransform(scrollYProgress, [0, 0.3, 0.45], [1, 0.6, 0]);

  // Text 2 (for image 2) - fades in then out
  const text2Opacity = useTransform(scrollYProgress, [0.45, 0.55, 0.85, 1], [0, 1, 0.6, 0]);

  return (
    <div ref={containerRef} className="relative h-[300vh]">
      {/* Sticky Hero Container - Full screen */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-black" style={{ zIndex: 30 }}>
        {/* Image 1 - First hero state */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center"
          style={{ 
            scale: image1Scale, 
            y: image1Y,
            opacity: image1Opacity 
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 2.7, ease: [0.6, 0.05, 0.01, 0.9] }}
        >
          <div className="relative w-[85vw] md:w-[70vw] h-[70vh] md:h-[75vh]">
            <img 
              src="/images/about/heroleft.png" 
              alt="What We Do" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>
        </motion.div>

        {/* Image 2 - Second hero state */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center"
          style={{ 
            scale: image2Scale, 
            y: image2Y,
            opacity: image2Opacity 
          }}
        >
          <div className="relative w-[85vw] md:w-[70vw] h-[70vh] md:h-[75vh]">
            <img 
              src="/images/about/heroright.png" 
              alt="Who We Are" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>
        </motion.div>

        {/* Text Overlays Set 1 - For Image 1 */}
        <motion.div 
          className="absolute inset-0 pointer-events-none"
          style={{ opacity: text1Opacity }}
        >
          {/* Top Left - Small tag */}
          <motion.div 
            className="absolute top-20 md:top-24 left-8 md:left-12"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 3.0, ease: [0.6, 0.05, 0.01, 0.9] }}
          >
            <span className="text-white text-[10px] md:text-xs uppercase tracking-[0.25em] font-light">
              Architecture
            </span>
          </motion.div>

          {/* Center - Main Title */}
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 3.2, ease: [0.6, 0.05, 0.01, 0.9] }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-3">
              What We Do
            </h1>
            <div className="w-24 h-[1.5px] bg-white/60 mx-auto" />
          </motion.div>

          {/* Top Right - Category */}
          <motion.div 
            className="absolute top-20 md:top-24 right-8 md:right-12 text-right"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 3.1, ease: [0.6, 0.05, 0.01, 0.9] }}
          >
            <span className="text-white text-[10px] md:text-xs uppercase tracking-[0.25em] font-light">
              Design
            </span>
          </motion.div>

          {/* Bottom Left - Description */}
          <motion.div 
            className="absolute bottom-20 md:bottom-24 left-8 md:left-12 max-w-xs"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 3.3, ease: [0.6, 0.05, 0.01, 0.9] }}
          >
            <p className="text-white text-[10px] md:text-xs uppercase tracking-wider font-light leading-relaxed">
              Multidisciplinary<br />Consultants
            </p>
          </motion.div>

          {/* Bottom Right - Year */}
          <motion.div 
            className="absolute bottom-20 md:bottom-24 right-8 md:right-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 3.4, ease: [0.6, 0.05, 0.01, 0.9] }}
          >
            <span className="text-white text-[10px] md:text-xs uppercase tracking-[0.25em] font-light">
              Est. 2021
            </span>
          </motion.div>
        </motion.div>

        {/* Text Overlays Set 2 - For Image 2 */}
        <motion.div 
          className="absolute inset-0 pointer-events-none"
          style={{ opacity: text2Opacity }}
        >
          {/* Top Left - Small tag */}
          <div className="absolute top-20 md:top-24 left-8 md:left-12">
            <span className="text-white text-[10px] md:text-xs uppercase tracking-[0.25em] font-light">
              Interior
            </span>
          </div>

          {/* Center - Main Title */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-3">
              Who We Are
            </h1>
            <div className="w-24 h-[1.5px] bg-white/60 mx-auto" />
          </div>

          {/* Top Right - Category */}
          <div className="absolute top-20 md:top-24 right-8 md:right-12 text-right">
            <span className="text-white text-[10px] md:text-xs uppercase tracking-[0.25em] font-light">
              Bali
            </span>
          </div>

          {/* Bottom Left - Description */}
          <div className="absolute bottom-20 md:bottom-24 left-8 md:left-12 max-w-xs">
            <p className="text-white text-[10px] md:text-xs uppercase tracking-wider font-light leading-relaxed">
              Brother & Sister<br />Team
            </p>
          </div>

          {/* Bottom Right - CTA */}
          <div className="absolute bottom-20 md:bottom-24 right-8 md:right-12 pointer-events-auto">
            <motion.button 
              className="text-white text-[10px] md:text-xs uppercase tracking-[0.25em] font-light border-b border-white/40 pb-1 hover:border-white transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore
            </motion.button>
          </div>
        </motion.div>

        {/* Scroll indicator - Always visible */}
        <motion.div 
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3.8 }}
        >
          <span className="text-[10px] text-white uppercase tracking-widest">Scroll</span>
          <motion.div 
            className="w-[1px] h-12 bg-white"
            animate={{ scaleY: [1, 1.5, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </div>
  );
}

export default AboutHero;
