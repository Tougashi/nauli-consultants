import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showContent, setShowContent] = useState(true);
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    // Skip transition on first load (initial splash handles that)
    if (isFirstLoad) {
      setIsFirstLoad(false);
      return;
    }

    // Trigger transition on route change
    setIsTransitioning(true);
    setShowContent(false);

    // After transition animation ends, show content
    const timer = setTimeout(() => {
      setIsTransitioning(false);
      setShowContent(true);
    }, 2000); // Total transition duration

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="relative">
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            className="fixed inset-0 bg-black z-[100] flex items-center justify-center overflow-hidden"
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ 
              duration: 0.6, 
              ease: [0.76, 0, 0.24, 1],
            }}
          >
            <div className="flex items-center justify-center gap-4 md:gap-8 text-white text-lg font-bold tracking-widest uppercase">
              {/* Let's - starts from left */}
              <motion.span
                initial={{ y: 100, opacity: 0, x: -100 }}
                animate={{ 
                  y: 0, 
                  opacity: 1, 
                  x: 0,
                  transition: {
                    y: { duration: 0.5, delay: 0.3, ease: [0.76, 0, 0.24, 1] },
                    opacity: { duration: 0.5, delay: 0.3 },
                    x: { duration: 0.5, delay: 0.8, ease: [0.76, 0, 0.24, 1] }
                  }
                }}
              >
                Let's
              </motion.span>

              {/* Work - center, just appears from bottom */}
              <motion.span
                initial={{ y: 100, opacity: 0 }}
                animate={{ 
                  y: 0, 
                  opacity: 1,
                  transition: {
                    y: { duration: 0.5, delay: 0.4, ease: [0.76, 0, 0.24, 1] },
                    opacity: { duration: 0.5, delay: 0.4 }
                  }
                }}
              >
                Work
              </motion.span>

              {/* Together - starts from right */}
              <motion.span
                initial={{ y: 100, opacity: 0, x: 100 }}
                animate={{ 
                  y: 0, 
                  opacity: 1, 
                  x: 0,
                  transition: {
                    y: { duration: 0.5, delay: 0.5, ease: [0.76, 0, 0.24, 1] },
                    opacity: { duration: 0.5, delay: 0.5 },
                    x: { duration: 0.5, delay: 0.8, ease: [0.76, 0, 0.24, 1] }
                  }
                }}
              >
                Together
              </motion.span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showContent ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default PageTransition;
