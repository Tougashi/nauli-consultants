import { motion } from 'framer-motion';
import '../index.css';
import ProjectHero from '../components/project2/ProjectHero';
import ProjectAbout from '../components/project2/ProjectAbout';
import ProjectFounders from '../components/project2/ProjectFounders';
import ProjectFounders2 from '../components/project2/ProjectFounders2';
import Footer from '../components/Footer';
import Header from '../components/Header';

function ProjectPage2() {
  return (
    <div className="min-h-screen text-white font-geist relative">
      <div className="relative z-10 bg-white">
        <Header 
          className="p-4 md:p-12 pointer-events-none" 
          logoClassName="opacity-100 whitecale brightness-80" 
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.7, ease: "easeOut" }}
        >
          <ProjectHero />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <ProjectAbout />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <ProjectFounders />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <ProjectFounders2 />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 3.2, ease: "easeOut" }}
      >
        <Footer />
      </motion.div>
    </div>
  );
}

export default ProjectPage2;
