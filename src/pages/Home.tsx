import '../index.css';
import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
import Header from '../components/Header';
import HoverRevealText from '../components/HoverRevealText';

function Home() {
  return (
    <div className="min-h-screen md:h-screen bg-[#232323] text-white p-4 md:p-8 flex flex-col overflow-y-auto md:overflow-hidden">
      <Header className="p-4 md:p-8 shrink-0" />

      {/* Main Grid */}
      <main className="flex-1 min-h-0 flex items-center justify-center py-8">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-8xl mx-auto w-full h-full content-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 2.7, ease: "easeOut" }}
        >
          {/* Column 1 */}
          <div className="flex flex-col justify-center gap-6">
            <motion.div 
              className="w-full flex justify-center cursor-pointer"
              initial={{ opacity: 0, x: "50vw", y: 0, scale: 0.3 }}
              animate={{ opacity: 1, x: "-2rem", y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 2.7, ease: [0.6, 0.05, 0.01, 0.9] }}
            >
               <motion.img 
                 src="/images/home/ss 1.png" 
                 alt="Project 1" 
                 className="max-h-[24vh] w-auto object-contain"
                 whileHover={{ scale: 1.18, rotate: 0.6, y: -8, filter: 'saturate(1.2) brightness(1.05)', boxShadow: '0 20px 35px rgba(0,0,0,0.4)' }}
                 whileTap={{ scale: 0.95 }}
                 transition={{ type: 'spring', stiffness: 220, damping: 16 }}
               />
            </motion.div>
            <motion.div 
              className="w-full flex justify-center cursor-pointer"
              initial={{ opacity: 0, x: "50vw", y: 0, scale: 0.3 }}
              animate={{ opacity: 1, x: "2rem", y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 2.8, ease: [0.6, 0.05, 0.01, 0.9] }}
            >
               <motion.img 
                 src="/images/home/ss 4.png" 
                 alt="Project 4" 
                 className="max-h-[24vh] w-auto object-contain"
                 whileHover={{ scale: 1.18, rotate: -0.5, y: -8, filter: 'saturate(1.2) brightness(1.05)', boxShadow: '0 20px 35px rgba(0,0,0,0.4)' }}
                 whileTap={{ scale: 0.95 }}
                 transition={{ type: 'spring', stiffness: 220, damping: 16 }}
               />
            </motion.div>
            <motion.div 
              className="w-full flex justify-center cursor-pointer"
              initial={{ opacity: 0, x: "50vw", y: 0, scale: 0.3 }}
              animate={{ opacity: 1, x: "-2rem", y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 2.9, ease: [0.6, 0.05, 0.01, 0.9] }}
            >
               <motion.img 
                 src="/images/home/ss 6.png" 
                 alt="Project 6" 
                 className="max-h-[24vh] w-auto object-contain"
                 whileHover={{ scale: 1.18, rotate: 0.3, y: -8, filter: 'saturate(1.2) brightness(1.05)', boxShadow: '0 20px 35px rgba(0,0,0,0.4)' }}
                 whileTap={{ scale: 0.95 }}
                 transition={{ type: 'spring', stiffness: 220, damping: 16 }}
               />
            </motion.div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col justify-center gap-12 md:gap-28 lg:pt-12">
            <motion.div 
              className="w-full flex justify-center cursor-pointer"
              initial={{ opacity: 0, x: 0, y: 0, scale: 0.3 }}
              animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 2.75, ease: [0.6, 0.05, 0.01, 0.9] }}
            >
               <motion.img 
                 src="/images/home/ss 2.png" 
                 alt="Project 2" 
                 className="max-h-[24vh] w-auto object-contain"
                 whileHover={{ scale: 1.18, rotate: -0.4, y: -8, filter: 'saturate(1.2) brightness(1.05)', boxShadow: '0 20px 35px rgba(0,0,0,0.4)' }}
                 whileTap={{ scale: 0.95 }}
                 transition={{ type: 'spring', stiffness: 220, damping: 16 }}
               />
            </motion.div>
            <motion.div 
              className="w-full flex justify-center cursor-pointer"
              initial={{ opacity: 0, x: 0, y: 0, scale: 0.3 }}
              animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 2.95, ease: [0.6, 0.05, 0.01, 0.9] }}
            >
               <motion.img 
                 src="/images/home/ss 5.png" 
                 alt="Project 5" 
                 className="max-h-[24vh] w-auto object-contain"
                 whileHover={{ scale: 1.18, rotate: 0.25, y: -8, filter: 'saturate(1.2) brightness(1.05)', boxShadow: '0 20px 35px rgba(0,0,0,0.4)' }}
                 whileTap={{ scale: 0.95 }}
                 transition={{ type: 'spring', stiffness: 220, damping: 16 }}
               />
            </motion.div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col justify-center gap-6">
            <motion.div 
              className="w-full flex justify-center cursor-pointer"
              initial={{ opacity: 0, x: "-50vw", y: 0, scale: 0.3 }}
              animate={{ opacity: 1, x: "2rem", y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 2.8, ease: [0.6, 0.05, 0.01, 0.9] }}
            >
               <motion.img 
                 src="/images/home/ss 3.png" 
                 alt="Project 3" 
                 className="max-h-[24vh] w-auto object-contain"
                 whileHover={{ scale: 1.18, rotate: 0.2, y: -8, filter: 'saturate(1.2) brightness(1.05)', boxShadow: '0 20px 35px rgba(0,0,0,0.4)' }}
                 whileTap={{ scale: 0.95 }}
                 transition={{ type: 'spring', stiffness: 220, damping: 16 }}
               />
            </motion.div>
            <motion.div 
              className="w-full flex justify-center cursor-pointer"
              initial={{ opacity: 0, x: "-50vw", y: 0, scale: 0.3 }}
              animate={{ opacity: 1, x: "-2rem", y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 2.85, ease: [0.6, 0.05, 0.01, 0.9] }}
            >
               <motion.img 
                 src="/images/home/ss 8.png" 
                 alt="Project 8" 
                 className="max-h-[24vh] w-auto object-contain"
                 whileHover={{ scale: 1.18, rotate: -0.35, y: -8, filter: 'saturate(1.2) brightness(1.05)', boxShadow: '0 20px 35px rgba(0,0,0,0.4)' }}
                 whileTap={{ scale: 0.95 }}
                 transition={{ type: 'spring', stiffness: 220, damping: 16 }}
               />
            </motion.div>
            <motion.div 
              className="w-full flex justify-center cursor-pointer"
              initial={{ opacity: 0, x: "-50vw", y: 0, scale: 0.3 }}
              animate={{ opacity: 1, x: "2rem", y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 3.0, ease: [0.6, 0.05, 0.01, 0.9] }}
            >
               <motion.img 
                 src="/images/home/ss 7.png" 
                 alt="Project 7" 
                 className="max-h-[24vh] w-auto object-contain"
                 whileHover={{ scale: 1.18, rotate: 0.15, y: -8, filter: 'saturate(1.2) brightness(1.05)', boxShadow: '0 20px 35px rgba(0,0,0,0.4)' }}
                 whileTap={{ scale: 0.95 }}
                 transition={{ type: 'spring', stiffness: 220, damping: 16 }}
               />
            </motion.div>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <motion.footer 
        className="flex justify-between items-center text-xs uppercase tracking-wider shrink-0 px-4 md:px-16 pb-4 md:pb-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 3.2, ease: "easeOut" }}
      >
        <HoverRevealText text="Contact" to="/contact" />
        <div className="flex gap-6">
          <a href="#" className="w-5 h-5 flex items-center justify-center">
             <img src="/images/icon/facebook.png" alt="Facebook" className="w-full h-full object-contain" />
          </a>
          <a href="https://www.instagram.com/nauliconsultants/" className="w-5 h-5 flex items-center justify-center">
             <img src="/images/icon/instagram.png" alt="Instagram" className="w-full h-full object-contain" />
          </a>
          <a href="#" className="w-5 h-5 flex items-center justify-center">
             <img src="/images/icon/facebook.png" alt="Facebook" className="w-full h-full object-contain" />
          </a>
        </div>
        <HoverRevealText text="Contact" to="/contact" />
      </motion.footer>
    </div>
  );
}

export default Home;

