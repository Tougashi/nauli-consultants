function ProjectAbout() {
  return (
    <div className="bg-white text-black pb-4 md:pb-6">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left Side - Content */}
        <div className="w-full h-full flex flex-col justify-center p-6 md:p-12 lg:p-20 items-center gap-0">
            {/* Top: Project Info Box */}
            <div className="border-2 border-black max-w-xs w-full border-b-0">
                <div className="border-b-2 border-black p-3 md:p-4">
                    <h2 className="font-mono uppercase text-sm md:text-base">VILLA TERRA</h2>
                </div>
                <div className="p-3 md:p-4 font-mono text-xs space-y-1">
                    <p>2021-2023</p>
                    <p>BALI INDONESIA</p>
                    <p>NAULI CONSULTANTS : ARCHITECTURE & CONSTRUCTION</p>
                    <p>BUILT</p>
                </div>
            </div>

            {/* Bottom: Description Text */}
            <div className="font-mono text-xs leading-relaxed max-w-xs w-full">
                <div className="border-2 border-black p-4 md:p-6 space-y-4 md:space-y-6">
                    <p>
                        VILLA TERRA IS A SIX-BEDROOM, NINE-BATHROOM LUXURY RESIDENCE FEATURING A PRIVATE GYM, TREATMENT ROOMS, A DEDICATED OFFICE, AN ART STUDIO, AND A POOL. DESIGNED TO ACCOMMODATE THE DAILY ROUTINES OF ITS RESIDENTS, THE HOME OFFERS PRIVACY FOR EACH INDIVIDUAL WHILE FOSTERING SPACES THAT ENCOURAGE CONNECTION AND TOGETHERNESS.
                    </p>
                    <p>
                        WE DELIVERED THE COMPLETE DESIGN-AND-BUILD PACKAGE – FROM CONCEPT AND PLANNING TO CONSTRUCTION AND FINAL HANDOVER – ENSURING EVERY DETAIL WAS BROUGHT TO LIFE AS ENVISIONED.
                    </p>
                </div>
            </div>
        </div>

        {/* Right Side - Image */}
        <div className="w-full h-full px-2 md:px-0 py-2 md:py-0">
            <img 
              src="/images/project-page2/about.png" 
              alt="Villa Terra Interior" 
              className="w-full h-full object-cover md:pr-1 lg:pr-2 md:mt-2 lg:mt-4"
            />
        </div>
      </div>

        {/* Full width image below table */}
        <div className="w-[calc(100vw-24px)] md:w-[calc(100vw-36px)] relative left-1/2 -translate-x-1/2 mt-6 md:mt-8">
            <img 
              src="/images/project-page2/about2.png" 
              alt="Project About" 
              className="w-full h-auto object-cover"
            />
        </div>
    </div>
  );
}

export default ProjectAbout;
