import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import HoverRevealText from './HoverRevealText';

interface HeaderProps {
  className?: string;
  logoClassName?: string;
}

const Header = ({ className = "", logoClassName = "" }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOnWhiteBg, setIsOnWhiteBg] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Detect background color under header
  useEffect(() => {
    const checkBackground = () => {
      if (!headerRef.current) return;

      const headerRect = headerRef.current.getBoundingClientRect();
      const headerHeight = headerRect.height;
      
      // Get element at the position right below header (where hamburger button is)
      const centerX = headerRect.left + headerRect.width - 60; // Position near hamburger button
      const checkY = headerRect.top + headerHeight + 5; // Just below header
      
      // Get element at that position
      const elementBelow = document.elementFromPoint(centerX, checkY);
      
      if (!elementBelow) {
        setIsOnWhiteBg(false);
        return;
      }

      // Traverse up the DOM tree to find the element with background color
      let currentElement: HTMLElement | null = elementBelow as HTMLElement;
      let foundWhiteBg = false;

      while (currentElement && currentElement !== document.body) {
        const computedStyle = window.getComputedStyle(currentElement);
        const bgColor = computedStyle.backgroundColor;
        const bgClass = currentElement.className || '';
        
        // Check if element has bg-white class
        if (bgClass.includes('bg-white')) {
          foundWhiteBg = true;
          break;
        }
        
        // Check background color
        if (bgColor && bgColor !== 'rgba(0, 0, 0, 0)' && bgColor !== 'transparent') {
          // Check for white or very light colors
          if (
            bgColor === 'rgb(255, 255, 255)' ||
            bgColor === '#ffffff' ||
            bgColor === 'white'
          ) {
            foundWhiteBg = true;
            break;
          }
          
          // Check if it's a very light color (close to white)
          const rgb = bgColor.match(/\d+/g);
          if (rgb && rgb.length >= 3) {
            const r = parseInt(rgb[0]);
            const g = parseInt(rgb[1]);
            const b = parseInt(rgb[2]);
            // If it's a very light color (close to white)
            if (r > 240 && g > 240 && b > 240) {
              foundWhiteBg = true;
              break;
            }
          }
        }

        currentElement = currentElement.parentElement;
      }

      setIsOnWhiteBg(foundWhiteBg);
    };

    // Check on mount and scroll
    const handleScroll = () => {
      requestAnimationFrame(checkBackground);
    };
    
    checkBackground();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    // Use Intersection Observer for better detection
    const observer = new IntersectionObserver(
      (entries) => {
        let shouldBeBlack = false;
        
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            const rect = entry.boundingClientRect;
            
            // Check if white background section is at or above header position
            if (rect.top <= 100) {
              const bgClass = target.className || '';
              const computedStyle = window.getComputedStyle(target);
              const bgColor = computedStyle.backgroundColor;
              
              const hasWhiteBg = 
                bgClass.includes('bg-white') ||
                bgColor === 'rgb(255, 255, 255)' ||
                bgColor === '#ffffff' ||
                bgColor === 'white';
              
              if (hasWhiteBg) {
                shouldBeBlack = true;
              }
            }
          }
        });
        
        if (shouldBeBlack) {
          setIsOnWhiteBg(true);
        } else {
          // Only set to false if no white bg is intersecting
          checkBackground();
        }
      },
      {
        rootMargin: '-100px 0px 0px 0px',
        threshold: [0, 0.1, 0.5, 1],
      }
    );

    // Observe all elements with bg-white class and their parents
    const whiteBgElements = document.querySelectorAll('.bg-white');
    whiteBgElements.forEach((el) => {
      observer.observe(el);
      // Also observe parent containers
      let parent = el.parentElement;
      let depth = 0;
      while (parent && depth < 3) {
        observer.observe(parent);
        parent = parent.parentElement;
        depth++;
      }
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      document.documentElement.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.documentElement.style.overflow = 'unset';
    };
  }, [isOpen]);

  const menuItems = [
    { title: "HOME", path: "/" },
    { title: "PROJECTS", path: "/project-menu" },
    { title: "ABOUT", path: "/about" },
    { title: "CONTACT", path: "/contact" },
  ];

  return (
    <>
      <AnimatePresence mode="wait">
        {!isOpen && (
          <motion.header 
            ref={headerRef}
            key="header"
            className={`flex justify-between items-start z-50 fixed top-0 left-0 right-0 ${className}`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-12 pointer-events-auto">
               <Link to="/">
                <img src="/images/logo.png" alt="nc logo" className={`w-full ${logoClassName}`} />
               </Link>
            </div>
            <button 
              onClick={toggleMenu} 
              className="flex flex-col gap-3 w-10 cursor-pointer pointer-events-auto z-50 group"
            >
              <span className={`w-full h-[2px] block transition-all duration-300 ${isOnWhiteBg ? 'bg-gray-400' : 'bg-white'}`}></span>
              <span className={`w-full h-[2px] block transition-all duration-300 ${isOnWhiteBg ? 'bg-gray-400' : 'bg-white'}`}></span>
              <span className={`w-full h-[2px] block transition-all duration-300 ${isOnWhiteBg ? 'bg-gray-400' : 'bg-white'}`}></span>
            </button>
          </motion.header>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay to block pointer events */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-transparent z-[9998] pointer-events-auto"
              onClick={toggleMenu}
            />
            
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
              className="fixed inset-0 bg-[#1a1a1a] z-[9999] flex flex-col justify-center items-center text-white overflow-hidden pointer-events-auto"
            >
              {/* Logo and Close Button in Sidebar */}
              <div className="absolute top-0 left-0 right-0 flex justify-between items-start p-4 md:p-8 z-50">
              <div className="w-12">
                <Link to="/" onClick={toggleMenu}>
                  <img src="/images/logo.png" alt="nc logo" className="w-full" />
                </Link>
              </div>
              <button 
                onClick={toggleMenu} 
                className="flex flex-col gap-3 w-10 cursor-pointer"
              >
                <span className="w-full h-[1px] bg-white block rotate-45 translate-y-3.5"></span>
                <span className="w-full h-[1px] bg-white block opacity-0"></span>
                <span className="w-full h-[1px] bg-white block -rotate-45 -translate-y-3.5"></span>
              </button>
            </div>

            <nav className="flex flex-col gap-8 text-center">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  onClick={toggleMenu}
                >
                  <HoverRevealText 
                    text={item.title} 
                    to={item.path} 
                    className="text-4xl font-light tracking-widest"
                  />
                </motion.div>
              ))}
            </nav>
            
            {/* Sidebar Footer Info */}
            <motion.div 
              className="absolute bottom-12 text-center font-mono text-xs text-gray-400 space-y-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
               <p>HELLO@NAULICONSULTANTS.COM</p>
               <p>@NAULICONSULTANTS</p>
            </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;

