import '../../index.css';
import FullScreenImageSection from '../FullScreenImageSection';

function ProjectFounders() {
  return (
    <div className="bg-white text-black pb-6 md:pb-6">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left Side - Image */}
        <div className="w-full h-full px-2 md:px-0 md:pl-2 lg:pl-3 py-2 md:py-0">
            <img 
              src="/images/project-page2/founders.png" 
              alt="Project Founders" 
              className="w-full h-full object-cover"
            />
        </div>

        {/* Right Side - Content */}
        <div className="w-full h-full flex flex-col p-6 md:p-12 md:pl-12 md:pr-3 md:py-0 justify-between">
            {/* Top Text */}
            <div className="flex justify-between w-full font-mono text-xs md:text-base uppercase tracking-wide mb-6 md:mb-0">
                <span>STAND BY TEXT</span>
                <span>STAND BY TEXT</span>
            </div>

            {/* Bottom Content Group */}
            <div>
                {/* Title with Border */}
                <div className="mb-6 relative inline-block self-start">
                   <div className="relative px-6 md:px-12 py-4 md:py-6">
                      <img 
                        src="/images/about/whatwedoborder.png" 
                        alt="What We Do Border" 
                        className="absolute inset-0 w-[120%] max-w-none object-contain -mt-6 md:-mt-10 -ml-6 md:-ml-10"
                      />
                      <h2 className="text-xl md:text-2xl tracking-widest relative z-10 uppercase -ml-6 md:-ml-10">FOUNDERS</h2>
                   </div>
                </div>

                {/* Description Text */}
                <div className="font-mono text-xs md:text-sm space-y-6 leading-relaxed max-w-sm">
                    <p>
                    VILLA TERRA IS A SIX-BEDROOM, NINE-BATHROOM LUXURY RESIDENCE FEATURING A PRIVATE GYM, TREATMENT ROOMS, A DEDICATED OFFICE, AN ART STUDIO, AND A POOL. DESIGNED TO ACCOMMODATE THE DAILY ROUTINES OF ITS RESIDENTS, THE HOME OFFERS PRIVACY FOR EACH INDIVIDUAL WHILE FOSTERING SPACES THAT ENCOURAGE CONNECTION AND TOGETHERNESS.
                    </p>
                    <p>
                    WE DELIVERED THE COMPLETE DESIGN-AND-BUILD PACKAGE — FROM CONCEPT AND PLANNING TO CONSTRUCTION AND FINAL HANDOVER — ENSURING EVERY DETAIL WAS BROUGHT TO LIFE AS ENVISIONED.
                    </p>
                </div>
            </div>
        </div>
      </div>
      
      {/* Full Screen Image with Typewriting Effect */}
      <FullScreenImageSection 
        imageSrc="/images/project-page2/founders2.png"
        text="Design & Build"
        subText="Complete Package • Concept to Handover"
        imageAlt="Design and Build"
      />
    </div>
  );
}

export default ProjectFounders;
