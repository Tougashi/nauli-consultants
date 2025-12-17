import '../../index.css';
import FullScreenImageSection from '../FullScreenImageSection';

function ProjectFounders2() {
  return (
    <div className="bg-white text-black pb-6 md:pb-6">
      <div className="grid grid-cols-1 md:grid-cols-2">
        
        {/* Left Side - Content (Swapped) */}
        <div className="w-full h-full flex flex-col p-6 md:p-12 md:pl-0 md:pr-12 md:py-0 justify-between order-2 md:order-1 items-start md:items-end text-left md:!pl-3">
            {/* Top Text */}
            <div className="flex justify-between w-full font-mono text-xs md:text-base uppercase tracking-wide mb-6 md:mb-0">
                <span>STAND BY TEXT</span>
                <span>STAND BY TEXT</span>
            </div>

            {/* Bottom Content Group */}
            <div className="flex flex-col items-start w-full">
                {/* Title with Border */}
                <div className="mb-6 relative inline-block self-start ml-0 md:ml-[4rem]">
                   <div className="relative px-6 md:px-12 py-4 md:py-6">
                      <img 
                        src="/images/about/whatwedoborder.png" 
                        alt="Founders Border" 
                        className="absolute inset-0 w-[120%] max-w-none object-contain -mt-6 md:-mt-10 -ml-6 md:-ml-10 scale-x-[-1]"
                      />
                      <h2 className="text-xl md:text-2xl tracking-widest relative z-10 uppercase -ml-6 md:-ml-10">FOUNDERS</h2>
                   </div>
                </div>

                {/* Description Text */}
                <div className="font-mono text-xs md:text-sm space-y-6 leading-relaxed max-w-sm text-start ml-0 md:ml-[4rem]">
                    <p>
                    VILLA TERRA IS A SIX-BEDROOM, NINE-BATHROOM LUXURY RESIDENCE FEATURING A PRIVATE GYM, TREATMENT ROOMS, A DEDICATED OFFICE, AN ART STUDIO, AND A POOL. DESIGNED TO ACCOMMODATE THE DAILY ROUTINES OF ITS RESIDENTS, THE HOME OFFERS PRIVACY FOR EACH INDIVIDUAL WHILE FOSTERING SPACES THAT ENCOURAGE CONNECTION AND TOGETHERNESS.
                    </p>
                    <p>
                    WE DELIVERED THE COMPLETE DESIGN-AND-BUILD PACKAGE — FROM CONCEPT AND PLANNING TO CONSTRUCTION AND FINAL HANDOVER — ENSURING EVERY DETAIL WAS BROUGHT TO LIFE AS ENVISIONED.
                    </p>
                </div>
            </div>
        </div>

        {/* Right Side - Image (Swapped) */}
        <div className="w-full h-full px-2 md:px-0 md:pr-2 lg:pr-3 py-2 md:py-0 order-1 md:order-2">
            <img 
               src="/images/project-page2/founders3.png" 
              alt="Founders" 
              className="w-full h-full object-cover"
            />
        </div>

      </div>
      
      {/* Full Screen Image with Typewriting Effect */}
      <FullScreenImageSection 
        imageSrc="/images/project-page2/founders4.png"
        text="Luxury Living"
        subText="Six Bedrooms • Nine Bathrooms"
        imageAlt="Luxury Living"
            />

      {/* Two column images with border - full width */}
      <div className="grid grid-cols-1 md:grid-cols-2 w-[calc(100vw-24px)] md:w-[calc(100vw-36px)] relative left-1/2 -translate-x-1/2 border-[6px] border-white min-h-screen md:h-screen mt-6 md:mt-6">
          {/* Left Image */}
          <div className="relative h-[50vh] md:h-full group border-b-[3px] md:border-b-0 md:border-r-[3px] border-white overflow-hidden">
              <img 
                src="/images/project-page2/founders5.png" 
                  alt="What We Do" 
                  className="w-full h-full object-cover"
              />
          </div>

          {/* Right Image */}
          <div className="relative h-[50vh] md:h-full group border-t-[3px] md:border-t-0 md:border-l-[3px] border-white overflow-hidden">
              <img 
                  src="/images/project-page2/founders6.png" 
                  alt="Who We Are" 
                  className="w-full h-full object-cover"
              />   
          </div>
      </div>

      {/* Bottom text */}
      <div className="w-[calc(100vw-24px)] md:w-[calc(100vw-36px)] relative left-1/2 -translate-x-1/2 mt-6 md:mt-6">
          <div className="grid grid-cols-2 md:grid-cols-4 w-full font-mono text-[10px] md:text-sm uppercase tracking-wide gap-6 px-2 md:px-0">
              <div className="text-left">VILLA TERRA</div>
              <div className="text-right md:text-center">VILLA TERRA</div>
              <div className="text-left md:text-center">VILLA TERRA</div>
              <div className="text-right">VILLA TERRA</div>
          </div>
      </div>
    </div>
  );
}

export default ProjectFounders2;
