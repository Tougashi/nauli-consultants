import { motion } from 'framer-motion';
import Header from '../components/Header';

function Contact() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white font-geist relative flex flex-col">
      <Header className="p-4 md:p-8 absolute top-0 left-0 w-full" />

      <main className="flex-1 grid grid-cols-1 md:grid-cols-2 w-full max-w-[1400px] mx-auto pt-24 md:pt-32 px-4 md:px-8 gap-12 md:gap-20">
        {/* Left Column */}
        <motion.div 
          className="flex flex-col gap-8 md:gap-12"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 2.7, ease: "easeOut" }}
        >
            {/* Connect Title */}
            <div className="relative inline-block">
                <div className="relative py-2 md:py-4">
                    <img 
                        src="/images/contact/connect-border.png" 
                        alt="Connect Border" 
                        className="absolute top-1/2 left-1/2 -translate-x-[60%] -translate-y-[48%] -translate-y-1/2 w-[90%] max-w-none h-auto object-contain"
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
                    <p className="uppercase relative z-10">LET'S CREATE SOMETHING REMARKABLE.</p>
                    <img 
                        src="/images/contact/create-border.png" 
                        alt="Underline" 
                        className="absolute bottom-0 -left-4 md:-left-8 w-[150%] max-w-none h-auto object-contain translate-y-1/2"
                    />
                </div>
            </div>

            {/* Contact Info */}
            <div className="font-mono text-xs space-y-3 md:space-y-4 mt-4 md:mt-8">
                <p>HELLO@NAULICONSULTANTS.COM</p>
                <div className="relative inline-block">
                    <p className="relative z-10">+62 - 822 - 3084 - 6505</p>
                    <img 
                        src="/images/contact/phonenumber-underline.png" 
                        alt="Underline" 
                        className="absolute top-2 -left-4 md:-left-8 w-[200%] max-w-none h-auto object-contain"
                    />
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
                <a href="#" className="w-6 h-6 flex items-center justify-center p-0.5 rounded-sm">
                    <img src="/images/icon/instagram.png" alt="Instagram" className="w-full h-full object-contain" />
                </a>
                <a href="#" className="w-6 h-6 flex items-center justify-center p-0.5 rounded-sm">
                    <img src="/images/icon/facebook.png" alt="Facebook" className="w-full h-full object-contain" />
                </a>
            </div>

            {/* Form */}
            <form className="flex flex-col gap-4 md:gap-6 font-mono text-xs uppercase">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                    <div className="flex flex-col gap-2">
                        <label>NAME</label>
                        <input type="text" className="bg-[#d9d9d9] h-8 w-full px-2 text-black" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label>COMPANY / PROJECT</label>
                        <input type="text" className="bg-[#d9d9d9] h-8 w-full px-2 text-black" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                    <div className="flex flex-col gap-2">
                        <label>EMAIL</label>
                        <input type="email" className="bg-[#d9d9d9] h-8 w-full px-2 text-black" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label>WHATSAPP NUMBER</label>
                        <input type="text" className="bg-[#d9d9d9] h-8 w-full px-2 text-black" />
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <label>MESSAGE</label>
                    <textarea className="bg-[#d9d9d9] h-32 w-full p-2 text-black resize-none"></textarea>
                </div>

                <div className="flex justify-end">
                    <button type="submit" className="bg-[#d9d9d9] text-black px-8 py-1 uppercase text-xs font-bold hover:bg-white transition-colors cursor-pointer">
                        SUBMIT
                    </button>
                </div>
            </form>

            {/* Our Studio */}
            <div className="flex flex-col gap-3 md:gap-4 mt-4 md:mt-8">
                <div className="relative inline-block self-start">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-wider uppercase relative z-10">OUR STUDIO</h2>
                    <img 
                        src="/images/contact/ourstudio-underline.png" 
                        alt="Studio Underline" 
                        className="absolute bottom-0 -left-8 md:-left-16 w-[150%] max-w-none h-auto object-contain translate-y-1/2"
                    />
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
                        <img 
                            src="/images/contact/career-border.png" 
                            alt="Career Border" 
                            className="absolute bottom-0 -left-2 md:-left-4 w-[120%] max-w-none h-auto object-contain translate-y-[15%]"
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
  );
}

export default Contact;
