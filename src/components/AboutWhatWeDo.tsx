import '../index.css';
import FullScreenImageSection from './FullScreenImageSection';

function AboutWhatWeDo() {
  return (
    <div id="what-we-do" className="bg-white text-black pb-6 md:pb-6">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left Side - Image */}
        <div className="w-full h-full px-2 md:px-0 md:pl-2 lg:pl-3 py-2 md:py-0">
            <img 
              src="/images/about/whatwedo.png" 
              alt="What We Do" 
              className="w-full h-full object-cover"
            />
        </div>

        {/* Right Side - Content */}
        <div className="w-full h-full flex flex-col p-6 md:p-12 md:pl-12 md:pr-3 md:py-0 justify-between">
            {/* Top Text */}
            <div className="flex justify-between w-full font-mono text-xs md:text-base uppercase tracking-wide mb-6 md:mb-0">
                <span>NAULI CONSULTANTS</span>
                <span>OFFICE</span>
            </div>

            {/* Bottom Content Group */}
            <div>
                {/* Title with Border */}
                <div className="mb-6 relative inline-block self-start">
                   <div className="relative px-6 md:px-12 py-4 md:py-6">
                      <img 
                        src="/images/about/whatwedoborder.png" 
                        alt="What We Do Border" 
                        className="absolute inset-0 w-[120%] max-w-none object-contain  md:-mt-14 -ml-6 md:-ml-10"
                      />
                      <h2 className="text-xl md:text-2xl tracking-widest relative z-10 uppercase -ml-6 md:-ml-10">WHAT WE DO</h2>
                   </div>
                </div>

                {/* Description Text */}
                <div className="font-mono text-xs md:text-sm space-y-6 leading-relaxed max-w-sm">
                    <p>
                    NAULI CONSULTANTS IS A MULTIDISCIPLINARY DESIGN AND BUILD FIRM OFFERING ARCHITECTURE, INTERIOR DESIGN, AND CONSTRUCTION SERVICES. WE WORK FLEXIBLY PROVIDING DESIGN-ONLY, CONSTRUCTION-ONLY, OR FULL DESIGN-AND-BUILD SOLUTIONS. ROOTED IN LOCAL KNOWLEDGE AND CRAFTSMANSHIP, WE APPROACH EACH PROJECT WITH A COMMITMENT TO QUALITY AND AUTHENTICITY, DELIVERING THOUGHTFUL SOLUTIONS FOR RESIDENTIAL, COMMERCIAL, AND HOSPITALITY DEVELOPMENTS ACROSS BALI AND BEYOND.
                    </p>
                </div>
            </div>
        </div>
      </div>
      
      {/* Full Screen Image with Typewriting Effect */}
      <FullScreenImageSection 
        imageSrc="/images/about/contentsecond.png"
        text="What We Do"
        subText="Multidisciplinary Design and Build Firm"
        imageAlt="What We Do"
      />
    </div>
  );
}

export default AboutWhatWeDo;
