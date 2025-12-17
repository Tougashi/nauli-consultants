import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import FullScreenImageSection from './FullScreenImageSection';

function AboutServices() {
  const [showMoreDesign, setShowMoreDesign] = useState(false);

  return (
    <div className="relative min-h-screen bg-white text-black py-12">
      <div className="px-6 md:px-12 lg:px-20">
        {/* Section Title - With Image Border */}
        <motion.div 
          className="mb-8 md:mb-12 relative inline-block"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
        >
          <div className="relative px-6 md:px-8 py-4 md:py-6">
            <img 
              src="/images/about/whatwedoborder.png" 
              alt="Services Border" 
              className="absolute inset-0 w-[120%] max-w-none object-contain -mt-6 md:-mt-6 -ml-6 md:-ml-8"
            />
            <h2 className="text-lg md:text-xl font-bold tracking-widest uppercase relative z-10 -ml-6 md:-ml-8">
              Services
            </h2>
          </div>
        </motion.div>

        {/* Services Table - Desktop: Row-based, Mobile: Card-based */}
        <div className="max-w-7xl mx-auto">
          {/* Mobile Layout - Card per Service */}
          <div className="md:hidden border border-black">
            {/* Design Card */}
            <motion.div 
              className="border-b border-black"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.6, 0.05, 0.01, 0.9] }}
            >
              <h3 className="text-sm font-bold tracking-widest uppercase p-6 border-b border-black">Design</h3>
              <div className="space-y-2 font-mono text-xs uppercase tracking-wide p-6 border-b border-black">
                <p>1. Architecture</p>
                <p>2. Interior</p>
                <p>3. Furniture</p>
                <p>4. Landscaping</p>
              </div>
              <div className="space-y-4 text-xs leading-relaxed uppercase p-6">
                <p>
                  Design is at the core of what we do. At Nauli Consultants, we offer comprehensive design packages that cover architecture, interior design, and landscape design as a fully integrated service.
                </p>
                <AnimatePresence>
                  {showMoreDesign && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4 overflow-hidden"
                    >
                      <p>
                        Our design process is grounded in context, function, and aesthetics – ensuring that every element, from building form to material palette to outdoor space, works in harmony.
                      </p>
                      <p>
                        Whether you're building a home, a hospitality project, or a public space, our design team works closely with you to craft environments that are meaningful, functional, and distinctly your own.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
                <button 
                  onClick={() => setShowMoreDesign(!showMoreDesign)}
                  className="text-xs uppercase tracking-widest underline hover:no-underline transition-all duration-300 mt-2"
                >
                  {showMoreDesign ? 'Read Less' : 'Read More'}
                </button>
              </div>
            </motion.div>

            {/* Post-Production Card */}
            <motion.div 
              className="border-b border-black"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.6, 0.05, 0.01, 0.9] }}
            >
              <h3 className="text-sm font-bold tracking-widest uppercase p-6 border-b border-black">Post - Production</h3>
              <div className="space-y-2 font-mono text-xs uppercase tracking-wide p-6 border-b border-black">
                <p>1. Architectural Drawings</p>
                <p>2. Mechanical, Electrical & Plumbing</p>
                <p>3. Structural Drawings</p>
                <p>4. Still & Video Renderings</p>
              </div>
              <div className="space-y-4 text-xs leading-relaxed uppercase p-6">
                <p>
                  Post-production is a crucial step in bringing design concepts to life. At Nauli Consultants, we understand the importance of translating ideas into reality through detailed drawings, from main construction drawings to MEP, structural plans, and renders, we meticulously create and refine every document to ensure seamless execution.
                </p>
              </div>
            </motion.div>

            {/* Construction Card */}
            <motion.div 
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.6, 0.05, 0.01, 0.9] }}
            >
              <h3 className="text-sm font-bold tracking-widest uppercase p-6 border-b border-black">Construction</h3>
              <div className="space-y-2 font-mono text-xs uppercase tracking-wide p-6 border-b border-black">
                <p>1. Architecture, Interior & Landscaping</p>
                <p>2. Construction Management</p>
                <p>3. Installation</p>
              </div>
              <div className="space-y-4 text-xs leading-relaxed uppercase p-6">
                <p>
                  Here at Nauli Consultants, we bring ideas to life. We offer build services that ensure every project is executed with precision, quality, and expertise. From structural work to detailed finishing, our team delivers seamless construction solutions tailored to each design.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Desktop Layout - Row-based Table */}
          <div className="hidden md:block border border-black">
            {/* Header Row */}
            <div className="grid grid-cols-3 border-b border-black">
              <motion.h3 
                className="text-base font-bold tracking-widest uppercase p-8 border-r border-black"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.6, 0.05, 0.01, 0.9] }}
              >
                Design
              </motion.h3>
              <motion.h3 
                className="text-base font-bold tracking-widest uppercase p-8 border-r border-black"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.6, 0.05, 0.01, 0.9] }}
              >
                Post - Production
              </motion.h3>
              <motion.h3 
                className="text-base font-bold tracking-widest uppercase p-8"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.6, 0.05, 0.01, 0.9] }}
              >
                Construction
              </motion.h3>
            </div>

            {/* List Row */}
            <div className="grid grid-cols-3 border-b border-black">
              <motion.div 
                className="space-y-2 font-mono text-xs uppercase tracking-wide p-8 border-r border-black"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.6, 0.05, 0.01, 0.9] }}
              >
                <p>1. Architecture</p>
                <p>2. Interior</p>
                <p>3. Furniture</p>
                <p>4. Landscaping</p>
              </motion.div>
              <motion.div 
                className="space-y-2 font-mono text-xs uppercase tracking-wide p-8 border-r border-black"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.6, 0.05, 0.01, 0.9] }}
              >
                <p>1. Architectural Drawings</p>
                <p>2. Mechanical, Electrical & Plumbing</p>
                <p>3. Structural Drawings</p>
                <p>4. Still & Video Renderings</p>
              </motion.div>
              <motion.div 
                className="space-y-2 font-mono text-xs uppercase tracking-wide p-8"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.6, 0.05, 0.01, 0.9] }}
              >
                <p>1. Architecture, Interior & Landscaping</p>
                <p>2. Construction Management</p>
                <p>3. Installation</p>
              </motion.div>
            </div>

            {/* Description Row */}
            <div className="grid grid-cols-3">
              <motion.div 
                className="space-y-4 text-xs leading-relaxed uppercase p-8 border-r border-black"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.6, 0.05, 0.01, 0.9] }}
              >
                <p>
                  Design is at the core of what we do. At Nauli Consultants, we offer comprehensive design packages that cover architecture, interior design, and landscape design as a fully integrated service.
                </p>
                <AnimatePresence>
                  {showMoreDesign && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4 overflow-hidden"
                    >
                      <p>
                        Our design process is grounded in context, function, and aesthetics – ensuring that every element, from building form to material palette to outdoor space, works in harmony.
                      </p>
                      <p>
                        Whether you're building a home, a hospitality project, or a public space, our design team works closely with you to craft environments that are meaningful, functional, and distinctly your own.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
                <button 
                  onClick={() => setShowMoreDesign(!showMoreDesign)}
                  className="text-xs uppercase tracking-widest underline hover:no-underline transition-all duration-300 mt-2"
                >
                  {showMoreDesign ? 'Read Less' : 'Read More'}
                </button>
              </motion.div>
              <motion.div 
                className="space-y-4 text-xs leading-relaxed uppercase p-8 border-r border-black"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.6, 0.05, 0.01, 0.9] }}
              >
                <p>
                  Post-production is a crucial step in bringing design concepts to life. At Nauli Consultants, we understand the importance of translating ideas into reality through detailed drawings, from main construction drawings to MEP, structural plans, and renders, we meticulously create and refine every document to ensure seamless execution.
                </p>
              </motion.div>
              <motion.div 
                className="space-y-4 text-xs leading-relaxed uppercase p-8"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.6, 0.05, 0.01, 0.9] }}
              >
                <p>
                  Here at Nauli Consultants, we bring ideas to life. We offer build services that ensure every project is executed with precision, quality, and expertise. From structural work to detailed finishing, our team delivers seamless construction solutions tailored to each design.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Full Screen Image with Typewriting Effect */}
      <FullScreenImageSection 
        imageSrc="/images/about/contentfirst.png"
        text="Services"
        subText="Design • Post-Production • Construction"
        imageAlt="Services"
      />
    </div>
  );
}

export default AboutServices;
