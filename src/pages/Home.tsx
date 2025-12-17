import '../index.css';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';
import Header from '../components/Header';

// Project data with positions for scattered layout
const projects = [
  // Top row (1 baris di atas)
  { id: 1, src: '/images/home/ss 1.png', title: 'TAMAN NAULI', location: 'BALI', x: 6, y: 2, width: 280, delay: 0 },
  { id: 2, src: '/images/home/ss 2.png', title: 'SCAPE KENSINGTON', location: 'NSW', x: 17, y: 5, width: 300, delay: 0.1 },
  { id: 3, src: '/images/home/ss 3.png', title: 'URBAN LIVING', location: 'JAKARTA', x: 29, y: 3, width: 270, delay: 0.15 },
  { id: 4, src: '/images/home/ss 4.png', title: 'HERITAGE TOWER', location: 'SYDNEY', x: 41, y: 6, width: 290, delay: 0.2 },
  
  // Middle rows - LEFT side (fix overlap - more spread vertically)
  { id: 5, src: '/images/home/ss 5.png', title: 'GREEN RESIDENCE', location: 'UBUD', x: -6, y: 18, width: 270, delay: 0.25 },
  { id: 6, src: '/images/home/ss 6.png', title: 'COASTAL VILLA', location: 'SEMINYAK', x: -4, y: 40, width: 300, delay: 0.3 },
  { id: 7, src: '/images/home/ss 7.png', title: 'BAMBOO HOUSE', location: 'SIDEMEN', x: -6, y: 62, width: 280, delay: 0.35 },
  
  // Middle rows - CENTER (adjust to not overlap with left)
  { id: 8, src: '/images/home/ss 8.png', title: 'MODERN LOFT', location: 'MELBOURNE', x: 8, y: 22, width: 280, delay: 0.2 },
  { id: 9, src: '/images/home/ss 1.png', title: 'SKYLINE TOWER', location: 'SINGAPORE', x: 20, y: 25, width: 290, delay: 0.35 },
  { id: 10, src: '/images/home/ss 2.png', title: 'NATURE RETREAT', location: 'CANGGU', x: 32, y: 21, width: 260, delay: 0.25 },
  { id: 11, src: '/images/home/ss 3.png', title: 'BEACH HOUSE', location: 'KUTA', x: 44, y: 24, width: 280, delay: 0.3 },
  
  // Middle rows - RIGHT side (6 gambar)
  { id: 12, src: '/images/home/ss 4.png', title: 'SUNSET VILLA', location: 'ULUWATU', x: 53, y: 5, width: 290, delay: 0.25 },
  { id: 13, src: '/images/home/ss 5.png', title: 'CLIFF RESORT', location: 'PECATU', x: 65, y: 3, width: 270, delay: 0.3 },
  { id: 14, src: '/images/home/ss 6.png', title: 'OCEAN VIEW', location: 'NUSA DUA', x: 56, y: 24, width: 300, delay: 0.35 },
  { id: 15, src: '/images/home/ss 7.png', title: 'TROPICAL HOUSE', location: 'JIMBARAN', x: 68, y: 22, width: 280, delay: 0.4 },
  { id: 16, src: '/images/home/ss 8.png', title: 'BEACHFRONT', location: 'SANUR', x: 55, y: 44, width: 260, delay: 0.45 },
  { id: 17, src: '/images/home/ss 1.png', title: 'PARADISE VILLA', location: 'LOMBOK', x: 67, y: 42, width: 290, delay: 0.5 },
  
  // Bottom rows - many (adjust to not overlap with left)
  { id: 18, src: '/images/home/ss 2.png', title: 'JUNGLE VILLA', location: 'UBUD', x: 7, y: 44, width: 290, delay: 0.4 },
  { id: 19, src: '/images/home/ss 3.png', title: 'SUNSET VIEW', location: 'ULUWATU', x: 19, y: 47, width: 270, delay: 0.45 },
  { id: 20, src: '/images/home/ss 4.png', title: 'RICE TERRACE', location: 'TEGALLALANG', x: 31, y: 42, width: 300, delay: 0.5 },
  { id: 21, src: '/images/home/ss 5.png', title: 'CLIFF HOUSE', location: 'PECATU', x: 43, y: 45, width: 280, delay: 0.45 },
  
  // Extra bottom row (adjust to not overlap)
  { id: 22, src: '/images/home/ss 6.png', title: 'TEMPLE HOUSE', location: 'TABANAN', x: 7, y: 68, width: 280, delay: 0.55 },
  { id: 23, src: '/images/home/ss 7.png', title: 'FOREST RETREAT', location: 'MUNDUK', x: 19, y: 71, width: 300, delay: 0.6 },
  { id: 24, src: '/images/home/ss 8.png', title: 'COASTAL LIVING', location: 'AMED', x: 31, y: 67, width: 270, delay: 0.55 },
  { id: 25, src: '/images/home/ss 1.png', title: 'WATERFALL VILLA', location: 'SEKUMPUL', x: 43, y: 70, width: 290, delay: 0.6 },
  { id: 26, src: '/images/home/ss 2.png', title: 'LAKESIDE', location: 'BERATAN', x: 55, y: 68, width: 260, delay: 0.65 },
  { id: 27, src: '/images/home/ss 3.png', title: 'MOUNTAIN VIEW', location: 'KINTAMANI', x: 67, y: 70, width: 280, delay: 0.6 },
  { id: 28, src: '/images/home/ss 4.png', title: 'VOLCANO LODGE', location: 'BATUR', x: 79, y: 67, width: 290, delay: 0.65 },
  
  // Extra RIGHT side (9 images)
  { id: 29, src: '/images/home/ss 5.png', title: 'HILLSIDE RETREAT', location: 'MUNDUK', x: 80, y: 5, width: 280, delay: 0.35 },
  { id: 30, src: '/images/home/ss 6.png', title: 'JUNGLE ESCAPE', location: 'UBUD', x: 92, y: 8, width: 290, delay: 0.4 },
  { id: 31, src: '/images/home/ss 7.png', title: 'RIVER HOUSE', location: 'AYUNG', x: 82, y: 24, width: 270, delay: 0.45 },
  { id: 32, src: '/images/home/ss 8.png', title: 'PALM VILLA', location: 'CANGGU', x: 94, y: 27, width: 300, delay: 0.5 },
  { id: 33, src: '/images/home/ss 1.png', title: 'OCEAN BREEZE', location: 'SEMINYAK', x: 80, y: 44, width: 280, delay: 0.5 },
  { id: 34, src: '/images/home/ss 2.png', title: 'SUNSET POINT', location: 'ULUWATU', x: 92, y: 44, width: 290, delay: 0.55 },
  { id: 35, src: '/images/home/ss 3.png', title: 'GARDEN HOUSE', location: 'SANUR', x: 91, y: 68, width: 270, delay: 0.6 },

];

function Home() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Motion values for smooth parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Spring config for smooth movement - instant response
  const springConfig = { damping: 20, stiffness: 500, mass: 0.3 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Set loaded after splash screen
    const timer = setTimeout(() => setIsLoaded(true), 2700);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate how much to move based on cursor position
      // Move opposite to cursor for natural parallax feel
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      // Parallax intensity (how much the canvas moves)
      const intensityX = 300;
      const intensityY = 200;
      
      const moveX = ((e.clientX - centerX) / centerX) * -intensityX;
      const moveY = ((e.clientY - centerY) / centerY) * -intensityY;
      
      mouseX.set(moveX);
      mouseY.set(moveY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="h-screen w-screen bg-black text-white overflow-hidden relative">
      {/* Fixed Header */}
      <Header className="fixed top-0 left-0 right-0 z-50 p-4 md:p-8" />

      {/* Parallax Canvas Container */}
      <motion.div
        className="absolute inset-0 w-[250vw] h-[200vh]"
        style={{ 
          x, 
          y,
          left: '-75vw',
          top: '-50vh',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Scattered Project Images */}
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="absolute cursor-pointer"
            style={{
              left: `${project.x}%`,
              top: `${project.y}%`,
              width: project.width,
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.6, 
              delay: 2.7 + project.delay,
              ease: "easeOut" 
            }}
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            {/* Image */}
            <motion.div
              className="relative overflow-hidden"
              animate={{
                filter: hoveredProject === null || hoveredProject === project.id 
                  ? 'brightness(1)' 
                  : 'brightness(0.4)',
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src={project.src}
                alt={project.title}
                className="w-full h-auto object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Center Project Info - Shows on hover */}
      {hoveredProject && (
        <motion.div
          className="fixed inset-0 flex flex-col justify-center items-center z-40 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.span 
            className="text-sm md:text-base uppercase tracking-widest text-white/80 mb-2"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.05 }}
          >
            {projects.find(p => p.id === hoveredProject)?.location}
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-7xl lg:text-8xl font-bold uppercase tracking-wider text-white text-center leading-tight"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            {projects.find(p => p.id === hoveredProject)?.title}
          </motion.h2>
        </motion.div>
      )}

      {/* Fixed UI Elements */}
      <motion.div 
        className="fixed bottom-4 md:bottom-8 left-4 md:left-8 z-50 flex gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
        transition={{ duration: 0.8, delay: 3.2 }}
      >
        <a href="#" className="w-5 h-5 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
          <img src="/images/icon/facebook.png" alt="Facebook" className="w-full h-full object-contain" />
        </a>
        <a href="https://www.instagram.com/nauliconsultants/" className="w-5 h-5 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
          <img src="/images/icon/instagram.png" alt="Instagram" className="w-full h-full object-contain" />
        </a>
      </motion.div>

      <motion.div 
        className="fixed bottom-4 md:bottom-8 right-4 md:right-8 z-50 text-xs uppercase tracking-wider"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
        transition={{ duration: 0.8, delay: 3.2 }}
      >
        <a href="/contact" className="opacity-70 hover:opacity-100 transition-opacity">Contact</a>
      </motion.div>
    </div>
  );
}

export default Home;

