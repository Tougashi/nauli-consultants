import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import HoverRevealText from './HoverRevealText';

interface HeaderProps {
  className?: string;
  logoClassName?: string;
}

const Header = ({ className = "", logoClassName = "" }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

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
            key="header"
            className={`flex justify-between items-start z-50 ${className}`}
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
              <span className="w-full h-[1px] bg-white block transition-all duration-300"></span>
              <span className="w-full h-[1px] bg-white block transition-all duration-300"></span>
              <span className="w-full h-[1px] bg-white block transition-all duration-300"></span>
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

