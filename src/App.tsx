import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import Home from './pages/Home';
import ProjectMenu from './pages/ProjectMenu';
import About from './pages/About';
import Contact from './pages/Contact';
import ProjectPage from './pages/ProjectPage';
import ProjectPage2 from './pages/ProjectPage2';
import SplashScreen from './components/SplashScreen';
import './index.css';

function App() {
  const location = useLocation();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 2.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={
        <SplashScreen>
          <Home />
        </SplashScreen>
      } />
      <Route path="/project-menu" element={
        <SplashScreen>
          <ProjectMenu />
        </SplashScreen>
      } />
      <Route path="/about" element={
        <SplashScreen>
          <About />
        </SplashScreen>
      } />
      <Route path="/contact" element={
        <SplashScreen>
          <Contact />
        </SplashScreen>
      } />
      <Route path="/project-page" element={
        <SplashScreen>
          <ProjectPage />
        </SplashScreen>
      } />
      <Route path="/project-page-2" element={
        <SplashScreen>
          <ProjectPage2 />
        </SplashScreen>
      } />
    </Routes>
  );
}

export default App;
