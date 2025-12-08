import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function ProjectHero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/images/project-page2/hero.png",
    // "/images/project-page2/hero2.png",
    // "/images/project-page2/hero3.png",
    // "/images/project-page2/hero4.png"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="h-screen w-full relative overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <motion.img 
          key={currentIndex}
          src={images[currentIndex]}
          alt={`Project Hero ${currentIndex + 1}`}
          className="w-full h-full object-cover absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        />
      </AnimatePresence>
        
      {/* Slider Arrows */}
      <div className="absolute inset-0 flex justify-between items-center px-4 md:px-8 pointer-events-none z-10">
          <button 
            onClick={handlePrev}
            className="pointer-events-auto cursor-pointer hover:opacity-75 transition-opacity bg-white/20 p-2 md:p-4 backdrop-blur-sm border border-white/30"
          >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="md:w-6 md:h-6">
                  <path d="M15 18l-6-6 6-6" />
              </svg>
          </button>
          <button 
            onClick={handleNext}
            className="pointer-events-auto cursor-pointer hover:opacity-75 transition-opacity bg-white/20 p-2 md:p-4 backdrop-blur-sm border border-white/30"
          >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="md:w-6 md:h-6">
                  <path d="M9 18l6-6-6-6" />
              </svg>
          </button>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 pointer-events-none z-10">
          <div className="bg-white/20 backdrop-blur-sm px-4 md:px-6 py-2 border border-white/30 text-[8px] md:text-[10px] uppercase tracking-widest text-white">
              SCROLL DOWN FOR STORY
          </div>
      </div>
    </div>
  );
}

export default ProjectHero;
