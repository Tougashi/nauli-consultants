import { motion } from 'framer-motion';
import FullScreenImageSection from './FullScreenImageSection';

function AboutServices() {
  return (
    <div className="relative min-h-screen bg-white text-black py-12">
      <div className="px-6 md:px-12 lg:px-20">
        {/* Section Title - Large and Bold */}
        <motion.div 
          className="mb-6 md:mb-6 relative inline-block"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
        >
          <div className="relative px-6 md:px-8 py-4 md:py-6">
            <img 
              src="/images/about/whatwedoborder.png" 
              alt="Services Border" 
              className="absolute inset-0 w-[120%] max-w-none object-contain -mt-6 md:-mt-8 -ml-6 md:-ml-8"
            />
            <h2 className="text-xl md:text-2xl font-bold tracking-widest uppercase relative z-10 -ml-6 md:-ml-8">
              Services
            </h2>
          </div>
        </motion.div>

        {/* Services Grid - Minimal, No borders */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-6 max-w-7xl mx-auto">
          {/* Design Column */}
          <motion.div 
            className="group"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.6, 0.05, 0.01, 0.9] }}
          >
            <div className="mb-6">
              <h3 className="text-xl md:text-2xl font-bold mb-6 tracking-tight uppercase">Design</h3>
              <div className="w-12 h-[2px] bg-black/20 group-hover:w-20 group-hover:bg-black transition-all duration-500" />
            </div>
            
            <div className="space-y-6 mb-6 font-mono text-xs font-bold uppercase tracking-wide text-black/60">
              <p>Architecture</p>
              <p>Interior</p>
              <p>Furniture</p>
              <p>Landscaping</p>
            </div>
            
            <div className="space-y-6 text-xs md:text-sm font-bold leading-relaxed text-black uppercase">
              <p>
                Design is at the core of what we do. At Nauli Consultants, we offer comprehensive design packages that cover architecture, interior design, and landscape design as a fully integrated service.
              </p>
              <p>
                Our design process is grounded in context, function, and aesthetics – ensuring that every element, from building form to material palette to outdoor space, works in harmony.
              </p>
              <p>
                Whether you're building a home, a hospitality project, or a public space, our design team works closely with you to craft environments that are meaningful, functional, and distinctly your own.
              </p>
            </div>
          </motion.div>

          {/* Post-Production Column */}
          <motion.div 
            className="group"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.6, 0.05, 0.01, 0.9] }}
          >
            <div className="mb-6">
              <h3 className="text-xl md:text-2xl font-bold mb-6 tracking-tight uppercase">Post-Production</h3>
              <div className="w-12 h-[2px] bg-black/20 group-hover:w-20 group-hover:bg-black transition-all duration-500" />
            </div>
            
            <div className="space-y-6 mb-6 font-mono text-xs font-bold uppercase tracking-wide text-black/60">
              <p>Architectural Drawings</p>
              <p>MEP</p>
              <p>Structural Drawings</p>
              <p>Renderings</p>
            </div>
            
            <div className="space-y-6 text-xs md:text-sm font-bold leading-relaxed text-black uppercase">
              <p>
                Post-production is a crucial step in bringing design concepts to life. At Nauli Consultants, we understand the importance of translating ideas into reality through detailed drawings.
              </p>
              <p>
                From main construction drawings to MEP, structural plans, and renders, we meticulously create and refine every document to ensure seamless execution.
              </p>
            </div>
          </motion.div>

          {/* Construction Column */}
          <motion.div 
            className="group"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.6, 0.05, 0.01, 0.9] }}
          >
            <div className="mb-6">
              <h3 className="text-xl md:text-2xl font-bold mb-6 tracking-tight uppercase">Construction</h3>
              <div className="w-12 h-[2px] bg-black/20 group-hover:w-20 group-hover:bg-black transition-all duration-500" />
            </div>
            
            <div className="space-y-6 mb-6 font-mono text-xs font-bold uppercase tracking-wide text-black/60">
              <p>Architecture & Interior</p>
              <p>Construction Management</p>
              <p>Installation</p>
            </div>
            
            <div className="space-y-6 text-xs md:text-sm font-bold leading-relaxed text-black uppercase">
              <p>
                Here at Nauli Consultants, we bring ideas to life. We offer build services that ensure every project is executed with precision, quality, and expertise.
              </p>
              <p>
                From structural work to detailed finishing, our team delivers seamless construction solutions tailored to each design.
              </p>
            </div>
          </motion.div>
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
