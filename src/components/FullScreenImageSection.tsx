import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

interface FullScreenImageSectionProps {
  imageSrc: string;
  text: string;
  subText?: string;
  imageAlt?: string;
}

function FullScreenImageSection({ imageSrc, text, subText, imageAlt = "Full Screen Image" }: FullScreenImageSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [displayedText, setDisplayedText] = useState('');
  const [displayedSubText, setDisplayedSubText] = useState('');
  const [isInView, setIsInView] = useState(false);
  
  // Parallax scroll effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  // Typewriting effect
  useEffect(() => {
    if (!isInView) return;

    let currentIndex = 0;
    setDisplayedText('');
    setDisplayedSubText('');

    const typeInterval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText(text.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typeInterval);
        
        // Start subtext typing after main text
        if (subText) {
          let subIndex = 0;
          const subTypeInterval = setInterval(() => {
            if (subIndex < subText.length) {
              setDisplayedSubText(subText.slice(0, subIndex + 1));
              subIndex++;
            } else {
              clearInterval(subTypeInterval);
            }
          }, 30);
        }
      }
    }, 50);

    return () => clearInterval(typeInterval);
  }, [isInView, text, subText]);

  return (
    <motion.div 
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-200px" }}
      onViewportEnter={() => setIsInView(true)}
      transition={{ duration: 0.8 }}
    >
      {/* Parallax Image */}
      <motion.div 
        className="absolute inset-0 w-full h-full"
        style={{ y, scale }}
      >
        <img 
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </motion.div>

      {/* Text Overlay with Typewriting Effect */}
      <motion.div 
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 md:px-12"
        style={{ opacity }}
      >
        <motion.h2 
          className="text-3xl md:text-5xl lg:text-7xl font-bold text-white uppercase tracking-tight mb-4"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3, ease: [0.6, 0.05, 0.01, 0.9] }}
        >
          {displayedText}
          <span className="inline-block w-[3px] h-[0.8em] bg-white ml-1 animate-pulse" />
        </motion.h2>
        
        {subText && displayedSubText && (
          <motion.p 
            className="text-sm md:text-lg lg:text-xl text-white/90 uppercase tracking-[0.3em] font-light max-w-3xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {displayedSubText}
          </motion.p>
        )}
      </motion.div>

      {/* Corner Labels */}
      <motion.div 
        className="absolute top-8 left-8 md:top-12 md:left-12"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <span className="text-white text-xs md:text-sm uppercase tracking-[0.3em] font-light">
          Nauli Consultants
        </span>
      </motion.div>

      <motion.div 
        className="absolute top-8 right-8 md:top-12 md:right-12"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <span className="text-white text-xs md:text-sm uppercase tracking-[0.3em] font-light">
          Est. 2021
        </span>
      </motion.div>
    </motion.div>
  );
}

export default FullScreenImageSection;

