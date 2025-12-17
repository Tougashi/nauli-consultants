import { motion } from 'framer-motion';
import { useState, type FormEvent } from 'react';
import Header from '../components/Header';
import AnimatedStroke from '../components/AnimatedStroke';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    whatsapp: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitMessage({ type: 'success', text: 'MESSAGE SENT SUCCESSFULLY. WE\'LL GET BACK TO YOU SOON.' });
        setFormData({ name: '', company: '', email: '', whatsapp: '', message: '' });
      } else {
        setSubmitMessage({ type: 'error', text: 'FAILED TO SEND MESSAGE. PLEASE TRY AGAIN.' });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitMessage({ type: 'error', text: 'AN ERROR OCCURRED. PLEASE TRY AGAIN LATER.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white font-geist relative flex flex-col">
      <Header className="p-4 md:p-8" />

      <main className="flex-1 grid grid-cols-1 md:grid-cols-2 w-full max-w-[1400px] mx-auto pt-24 md:pt-32 px-4 md:px-8 gap-12 md:gap-20 items-start">
        {/* Left Column */}
        <motion.div 
          className="flex flex-col gap-8 md:gap-12 md:sticky md:top-24 md:self-start"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 2.7, ease: "easeOut" }}
        >
            {/* Connect Title */}
            <div className="relative inline-block">
                <div className="relative py-2 md:py-4">
                    {/* Pure SVG chalk stroke around CONNECT (no glow, slightly tighter oval) */}
                    <AnimatedStroke
                        type="border"
                        // Chalk oval around CONNECT, with extra waviness for natural stroke
                        path="M 150 12 C 180 0 210 20 240 18 C 270 16 305 30 290 55 C 275 80 230 65 190 72 C 150 79 110 65 70 74 C 30 83 -5 60 15 35 C 35 10 70 15 100 8 C 120 4 140 16 150 12 Z"
                        viewBox="0 0 300 80"
                        strokeWidth={5}
                        strokeColor="white"
                        delay={2.3}
                        duration={2.2}
                        className="absolute top-1/2 left-1/2 -translate-x-[75%] md:-translate-x-[65%] -translate-y-[52%] w-[75%] md:w-[90%] max-w-none h-auto"
                    />
                    <h1 className="text-5xl md:text-8xl font-bold tracking-widest relative z-10 uppercase">CONNECT</h1>
                </div>
            </div>

            {/* Intro Text */}
            <div className="font-mono text-xs space-y-3 md:space-y-4 leading-relaxed max-w-md">
                <p className="uppercase">
                    BIG IDEAS START WITH A CONVERSATION. WHETHER IT'S A NEW PROJECT, A BIG VISION, OR JUST A SPARK OF INSPIRATION, WE'RE HERE TO MAKE IT HAPPEN.
                </p>
                
                <div className="relative inline-block pt-3 md:pt-4 mt-1 md:mt-2">
                    <p className="uppercase relative z-10 mb-2">LET'S CREATE SOMETHING REMARKABLE.</p>
                    <div className="absolute bottom-0 left-0 w-full h-auto translate-y-1/2">
                        <AnimatedStroke
                            type="underline"
                            path="M 3 28 Q 8 25, 15 28 Q 20 20, 40 28 T 80 28 Q 100 22, 120 28 T 160 28 Q 180 24, 185 28 Q 192 25, 197 28"
                            viewBox="0 0 200 50"
                            strokeWidth={5}
                            strokeColor="white"
                            delay={3.0}
                            duration={1.8}
                            className="w-full h-full"
                    />
                    </div>
                </div>
            </div>

            {/* Contact Info */}
            <div className="font-mono text-xs space-y-3 md:space-y-4 mt-4 md:mt-8">
                <p>HELLO@NAULICONSULTANTS.COM</p>
                <div className="relative inline-block">
                    <p className="relative z-10">+62 - 822 - 3084 - 6505</p>
                    <div className="absolute top-2 left-0 w-full h-auto">
                        <AnimatedStroke
                            type="underline"
                            path="M 3 25 Q 8 22, 15 25 Q 20 18, 40 25 T 80 25 Q 100 20, 120 25 T 160 25 Q 180 22, 185 25 Q 192 22, 197 25"
                            viewBox="0 0 200 45"
                            strokeWidth={5}
                            strokeColor="white"
                            delay={3.2}
                            duration={1.8}
                            className="w-full h-full"
                    />
                    </div>
                </div>
            </div>
        </motion.div>

        {/* Right Column */}
        <motion.div 
          className="flex flex-col gap-10 md:gap-16"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 2.9, ease: "easeOut" }}
        >
            {/* Social Icons */}
            <div className="flex gap-3 md:gap-4">
                <a href="#" className="w-6 h-6 flex items-center justify-center p-0.5 rounded-sm">
                    <img src="/images/icon/facebook.png" alt="Facebook" className="w-full h-full object-contain" />
                </a>
                <a href="https://www.instagram.com/nauliconsultants/" className="w-6 h-6 flex items-center justify-center p-0.5 rounded-sm">
                    <img src="/images/icon/instagram.png" alt="Instagram" className="w-full h-full object-contain" />
                </a>
                <a href="#" className="w-6 h-6 flex items-center justify-center p-0.5 rounded-sm">
                    <img src="/images/icon/facebook.png" alt="Facebook" className="w-full h-full object-contain" />
                </a>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:gap-6 font-mono text-xs uppercase">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="name">NAME *</label>
                        <input 
                          type="text" 
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          disabled={isSubmitting}
                          className="bg-[#d9d9d9] h-8 w-full px-2 text-black disabled:opacity-50" 
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="company">COMPANY / PROJECT</label>
                        <input 
                          type="text" 
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          className="bg-[#d9d9d9] h-8 w-full px-2 text-black disabled:opacity-50" 
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email">EMAIL *</label>
                        <input 
                          type="email" 
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          disabled={isSubmitting}
                          className="bg-[#d9d9d9] h-8 w-full px-2 text-black disabled:opacity-50" 
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="whatsapp">WHATSAPP NUMBER *</label>
                        <input 
                          type="text" 
                          id="whatsapp"
                          name="whatsapp"
                          value={formData.whatsapp}
                          onChange={handleChange}
                          required
                          disabled={isSubmitting}
                          className="bg-[#d9d9d9] h-8 w-full px-2 text-black disabled:opacity-50" 
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="message">MESSAGE</label>
                    <textarea 
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="bg-[#d9d9d9] h-32 w-full p-2 text-black resize-none disabled:opacity-50"
                    ></textarea>
                </div>

                {/* Submit Message */}
                {submitMessage && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-3 text-xs font-bold ${
                      submitMessage.type === 'success' 
                        ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
                        : 'bg-red-500/20 text-red-300 border border-red-500/30'
                    }`}
                  >
                    {submitMessage.text}
                  </motion.div>
                )}

                <div className="flex justify-end">
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="bg-[#d9d9d9] text-black px-8 py-1 uppercase text-xs font-bold hover:bg-white transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'SENDING...' : 'SUBMIT'}
                    </button>
                </div>
            </form>

            {/* Our Studio */}
            <div className="flex flex-col gap-3 md:gap-4 mt-4 md:mt-8">
                <div className="relative inline-block self-start">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-wider uppercase relative z-10">OUR STUDIO</h2>
                    <div className="absolute bottom-0 left-0 w-full h-auto translate-y-1/2">
                        <AnimatedStroke
                            type="underline"
                            path="M 3 32 Q 8 29, 15 32 Q 20 24, 40 32 T 80 32 Q 100 26, 120 32 T 160 32 Q 180 28, 200 32 T 240 32 Q 260 30, 280 32 Q 285 29, 290 32"
                            viewBox="0 0 293 50"
                            strokeWidth={5}
                            strokeColor="white"
                            delay={3.0}
                            duration={1.8}
                            className="w-full h-full"
                    />
                    </div>
                </div>
                <div className="font-mono text-xs md:text-sm space-y-2 mt-1 md:mt-2 uppercase max-w-md">
                    <p>TAMAN NAULI</p>
                    <p>BANJAR ANYAR KAJA JL, RAYA CANGGU NO.176, KEROBOKAN, KEC. KUTA UTARA, KABUPATEN BADUNG, BALI 80361</p>
                </div>
            </div>

            {/* Career */}
            <div className="flex flex-col gap-3 md:gap-4 mt-4 md:mt-8">
                <div className="relative inline-block self-start">
                    <div className="relative px-4 md:px-6 py-1 md:py-2">
                        {/* Pure SVG chalk stroke around CAREER */}
                        <AnimatedStroke
                            type="border"
                            // Chalk oval around CAREER, with extra waviness for natural stroke
                            path="M 135 10 C 160 2 190 18 220 15 C 250 12 275 30 260 50 C 245 70 200 62 160 66 C 120 70 80 62 40 68 C 10 74 -10 50 10 30 C 30 10 70 15 100 8 C 120 4 130 14 135 10 Z"
                            viewBox="0 0 270 70"
                            strokeWidth={4.5}
                            strokeColor="white"
                            delay={3.2}
                            duration={2.0}
                            className="absolute bottom-0 -left-2 md:-left-4 w-[115%] max-w-none h-auto translate-y-[-2%]"
                        />
                        <h2 className="text-3xl md:text-5xl font-bold tracking-wider uppercase relative z-10">CAREER</h2>
                    </div>
                </div>
                
                <div className="font-mono text-xs md:text-sm space-y-3 md:space-y-4 uppercase leading-relaxed max-w-lg">
                    <p>
                        WE'RE ALWAYS LOOKING FOR SHARP MINDS AND CREATIVE THINKERS. ARCHITECTS, DESIGNERS, PROBLEM-SOLVERS—IF YOU'RE PASSIONATE ABOUT PLACES THAT PERFORM AND THRIVE IN A STUDIO THAT MOVES FAST AND THINKS BIG, WE'D LOVE TO HEAR FROM YOU. WITH PROJECTS ACROSS INDONESIA AND BEYOND, WE OFFER THE CHANCE TO WORK ON SHAPING, COMMUNITY-BUILDING PROJECTS WITH A TEAM THAT BACKS BOLD IDEAS AND DELIVERS WITH PRECISION.
                    </p>
                    <p>
                        SEND YOUR RESUME & PORTFOLIO TO THIS EMAIL
                        <br/>
                        HELLO@NAULICONSULTANTS.COM
                    </p>
                </div>
            </div>
        </motion.div>
      </main>

      {/* Custom Footer for Contact Page (Dark Version) */}
      <motion.footer 
        className="grid grid-cols-1 md:grid-cols-3 items-end text-xs uppercase tracking-wider shrink-0 p-4 md:p-12 mt-12 md:mt-20 text-center md:text-left"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 3.2, ease: "easeOut" }}
      >
        {/* Left: Footer Icon Image */}
        <div className="flex justify-center md:justify-start mb-4 md:mb-0">
          <img 
            src="/images/footer-icon.png" 
            alt="Nauli Consultants" 
            className="h-16 md:h-24 w-auto object-contain"
          />
        </div>

        {/* Center: Let's Work Together */}
        <div className="flex justify-center pb-4">
          <span className="text-2xl md:text-4xl tracking-widest text-center text-white">LET'S WORK <br />TOGETHER</span>
        </div>

        {/* Right: Social & Contact */}
        <div className="flex flex-col items-center md:items-end gap-4 pb-4">
          <div className="flex gap-10 md:gap-14">
            <a href="https://www.instagram.com/nauliconsultants/" className="w-5 h-6 md:w-6 md:h-8 flex items-center justify-center">
               <img src="/images/icon/instagram.png" alt="Instagram" className="w-full h-full object-contain" />
            </a>
            <a href="https://www.instagram.com/nauliconsultants/" className="w-5 h-6 md:w-6 md:h-8 flex items-center justify-center">
               <img src="/images/icon/instagram.png" alt="Instagram" className="w-full h-full object-contain" />
            </a>
            <a href="https://www.instagram.com/nauliconsultants/" className="w-5 h-6 md:w-6 md:h-8 flex items-center justify-center">
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
  );
}

export default Contact;
