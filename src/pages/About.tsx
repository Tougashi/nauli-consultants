import { motion } from 'framer-motion';
import '../index.css';
import AboutHero from '../components/AboutHero';
import AboutServices from '../components/AboutServices';
import AboutWhatWeDo from '../components/AboutWhatWeDo';
import AboutServiceSecond from '../components/AboutFounders';
import Footer from '../components/Footer';
import Header from '../components/Header';

function About() {
  return (
    <div className="min-h-screen text-white font-geist relative">
      <div className="relative z-10 bg-white">
        <Header className="p-4 md:p-12 absolute top-0 left-0 w-full pointer-events-none" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.7, ease: "easeOut" }}
        >
          <AboutHero />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <AboutServices />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <AboutWhatWeDo />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <AboutServiceSecond />
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

export default About;
