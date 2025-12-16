import { useEffect } from 'react';
import '../index.css';
import AboutHero from '../components/AboutHero';
import AboutServices from '../components/AboutServices';
import AboutWhatWeDo from '../components/AboutWhatWeDo';
import AboutServiceSecond from '../components/AboutFounders';
import Footer from '../components/Footer';
import Header from '../components/Header';

function About() {
  // Smooth scroll behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen text-white font-geist relative bg-black">
      {/* Fixed Header with transparent background */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Header className="p-4 md:p-12" />
      </div>

      {/* Hero Section - Isolated layer with z-index higher than footer */}
      <div className="relative" style={{ zIndex: 30 }}>
        <AboutHero />
      </div>

      {/* Content Sections - Higher z-index, slides over hero AND covers footer until end */}
      <div className="relative z-10 bg-white">
        {/* Services Section */}
        <AboutServices />

        {/* What We Do Section */}
        <AboutWhatWeDo />

        {/* Founders Section */}
        <AboutServiceSecond />

        {/* Footer - animation now inside Footer component */}
        <Footer />
      </div>
    </div>
  );
}

export default About;
