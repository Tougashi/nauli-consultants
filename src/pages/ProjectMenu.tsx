import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

function ProjectMenu() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  // Map 12 videos
  const videos = [
    '/videos/clip (1).mp4',
    '/videos/clip (2).mp4',
    '/videos/clip (3).mp4',
    '/videos/clip (4).mp4',
    '/videos/clip (5).mp4',
    '/videos/clip (6).mp4',
    '/videos/clip (7).mp4',
    '/videos/clip (8).mp4',
    '/videos/clip (9).mp4',
    '/videos/clip (10).mp4',
    '/videos/clip (11).mp4',
    '/videos/clip (12).mp4',
  ];

  // Create an array of 12 items to render the grid
  const items = Array(12).fill(null);

  // Auto-play videos on mobile
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (!isMobile) return;

    const interval = setInterval(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
    }, 5000); // Change video every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen md:h-screen bg-[#232323] text-white p-4 md:p-8 flex flex-col overflow-y-auto md:overflow-hidden relative">
      {/* Background Video Layer */}
      <AnimatePresence mode="wait">
        {/* Desktop: Show video on hover */}
        {hoveredIndex !== null && (
          <motion.div
            key={`hover-${hoveredIndex}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 z-0 hidden md:block"
          >
             <video
               src={videos[hoveredIndex]}
               autoPlay
               loop
               muted
               playsInline
               className="w-full h-full object-cover opacity-50"
             />
             <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
          </motion.div>
        )}
        
        {/* Mobile: Auto-play videos in sequence */}
        <motion.div
          key={`mobile-${currentVideoIndex}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 z-0 md:hidden"
        >
           <video
             src={videos[currentVideoIndex]}
             autoPlay
             loop
             muted
             playsInline
             className="w-full h-full object-cover opacity-50"
           />
           <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 flex flex-col h-full pointer-events-none">
        <Header className="shrink-0 pointer-events-auto" />

        {/* Main Content */}
        <main className="flex-1 min-h-0 flex items-center justify-center py-8 w-full">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 md:gap-x-20 gap-y-8 md:gap-y-12 max-w-6xl mx-auto pointer-events-auto w-full px-4 md:pl-12 md:pr-0"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 2.7, ease: "easeOut" }}
          >
            {items.map((_, index) => (
              <Link 
                to={index % 2 === 0 ? "/project-page" : "/project-page-2"}
                key={index} 
                className={`flex items-start gap-3 md:gap-4 transition-all duration-300 cursor-pointer group ${
                  hoveredIndex !== null && hoveredIndex !== index ? 'md:opacity-30 md:blur-[1px]' : 'opacity-100'
                } ${index % 2 === 0 ? 'justify-start' : 'justify-end md:justify-start'}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="w-16 h-16 md:w-20 md:h-20 shrink-0 flex items-center justify-center -mt-4">
                  <img 
                    src="/images/icon/project-menu-icon.png" 
                    alt="Project Icon" 
                    className="w-full h-full object-contain scale-125 md:scale-150 transition-transform duration-300 group-hover:scale-[1.4] md:group-hover:scale-[1.7]" 
                  />
                </div>
                <div className="font-mono text-xs md:text-sm leading-relaxed">
                  <p>{index + 1} : 2021 - 2023</p>
                  <p>VILLA TERRA - BALI</p>
                </div>
              </Link>
            ))}
          </motion.div>
        </main>

        {/* Footer */}
        <motion.footer 
          className="grid grid-cols-1 md:grid-cols-3 items-end text-xs uppercase tracking-wider shrink-0 pointer-events-auto gap-6 md:gap-0 pb-4 md:pb-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.2, ease: "easeOut" }}
        >
          {/* Left: Footer Icon Image */}
          <div className="flex justify-center md:justify-start">
            <img 
              src="/images/footer-icon.png" 
              alt="Nauli Consultants" 
              className="h-16 md:h-24 w-auto object-contain"
            />
          </div>

          {/* Center: Let's Work Together */}
          <div className="flex justify-center pb-0 md:pb-4">
            <span className="text-2xl md:text-4xl tracking-widest text-center">LET'S WORK <br />TOGETHER</span>
          </div>

          {/* Right: Social & Contact */}
          <div className="flex flex-col items-center md:items-end gap-4 pb-0 md:pb-4">
            <div className="flex gap-8 md:gap-14">
              <a href="#" className="w-5 h-6 md:w-6 md:h-8 flex items-center justify-center">
                 <img src="/images/icon/instagram.png" alt="Instagram" className="w-full h-full object-contain" />
              </a>
              <a href="#" className="w-5 h-6 md:w-6 md:h-8 flex items-center justify-center">
                 <img src="/images/icon/instagram.png" alt="Instagram" className="w-full h-full object-contain" />
              </a>
              <a href="#" className="w-5 h-6 md:w-6 md:h-8 flex items-center justify-center">
                 <img src="/images/icon/instagram.png" alt="Instagram" className="w-full h-full object-contain" />
              </a>
            </div>
            <div className="text-center md:text-left font-mono text-xs leading-tight text-white">
              <p>HELLO@NAULICONSULTANTS.COM</p>
              <p>@NAULICONSULTANTS</p>
              <p>+62 - 822 - 3084 - 6505</p>
            </div>
          </div>
        </motion.footer>
      </div>
    </div>
  );
}

export default ProjectMenu;
