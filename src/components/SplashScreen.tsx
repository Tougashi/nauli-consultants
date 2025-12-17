import { motion, type Variants } from 'framer-motion';
import React, { useEffect, useState } from 'react';

const SplashScreen = ({ children }: { children: React.ReactNode }) => {
  // Check sessionStorage immediately to determine initial state
  const [showSplash] = useState(() => {
    if (typeof window !== 'undefined') {
      return !sessionStorage.getItem('hasSeenSplash');
    }
    return true;
  });
  
  const text = "NAULI CONSULTANTS";
  
  useEffect(() => {
    // Mark splash as seen
    if (showSplash) {
      sessionStorage.setItem('hasSeenSplash', 'true');
    }
  }, [showSplash]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.3,
      }
    }
  };

  const letterAnim = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", damping: 12, stiffness: 100 } }
  };

  // If splash was already shown, just render children
  if (!showSplash) {
    return <>{children}</>;
  }

  return (
    <div className="relative">
      <motion.div
        className="fixed inset-0 bg-white z-[100] flex items-center justify-center"
        initial={{ y: "0%" }}
        animate={{ y: "-100%" }}
        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 1.8 }}
      >
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex text-black text-2xl md:text-4xl font-bold tracking-widest overflow-hidden"
        >
          {text.split("").map((char, index) => (
            <motion.span key={index} variants={letterAnim as Variants}>
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
      {children}
    </div>
  )
}

export default SplashScreen;
