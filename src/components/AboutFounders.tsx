import '../index.css';

function AboutServiceSecond() {
  return (
    <div id="founders" className="bg-white text-black pb-6 md:pb-6">
      <div className="grid grid-cols-1 md:grid-cols-2">
        
        {/* Left Side - Content (Swapped) */}
        <div className="w-full h-full flex flex-col p-6 md:p-12 md:pl-0 md:pr-12 md:py-0 justify-between order-2 md:order-1 items-start md:items-end text-left md:!pl-3">
            {/* Top Text */}
            <div className="flex justify-between w-full font-mono text-xs md:text-base uppercase tracking-wide mb-6 md:mb-0">
                <span>STAND BY TEXT</span>
                <span>STAND BY TEXT</span>
            </div>

            {/* Bottom Content Group */}
            <div className="flex flex-col items-start md:items-end w-full">
                {/* Title with Border */}
                <div className="mb-6 relative inline-block self-start md:self-end mr-0 md:mr-[12rem]">
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
                <div className="font-mono text-xs md:text-sm space-y-6 leading-relaxed max-w-sm text-left">
                    <p>
                      AT NAULI CONSULTANTS, WE ARE A DESIGN AND BUILD COMPANY FOUNDED AND RUN BY US  GONAN AND SRI, A BROTHER-AND-SISTER TEAM WITH ROOTS IN BALI AND PERSPECTIVES SHAPED BY TWO VERY DIFFERENT YET COMPLEMENTARY PATHS.
                      GONAN COMES FROM A BACKGROUND IN MANAGEMENT AND COMMUNICATIONS, BRINGING STRUCTURE, CLARITY, AND STRATEGIC DIRECTION TO EVERYTHING WE DO. SRI, ON THE OTHER HAND, IS TRAINED IN ART AND DESIGN, WITH A HANDS-ON UNDERSTANDING OF MATERIALS, SPATIAL EXPERIENCES, AND THE CREATIVE PROCESS.
                    </p>
                    <p>
                      OUR DIFFERENT STRENGTHS ALLOW US TO APPROACH EACH PROJECT HOLISTICALLY BALANCING CREATIVE VISION WITH GROUNDED EXECUTION. WHAT TIES US TOGETHER IS A SHARED PURPOSE: TO CONTRIBUTE MEANINGFULLY TO THE DEVELOPMENT OF OUR COMMUNITY WHILE HONORING THE SPIRIT AND IDENTITY OF EACH PLACE WE WORK IN.
                      FROM ARCHITECTURE AND INTERIORS TO CONSTRUCTION AND DELIVERY, WE OFFER AN INTEGRATED APPROACH ROOTED IN COLLABORATION, CRAFTSMANSHIP, AND CARE.
                    </p>
                </div>
            </div>
        </div>

        {/* Right Side - Image (Swapped) */}
        <div className="w-full h-full px-2 md:px-0 md:pr-2 lg:pr-3 py-2 md:py-0 order-1 md:order-2">
            <img 
              src="/images/about/founders.png" 
              alt="Founders" 
              className="w-full h-full object-cover"
            />
        </div>

      </div>
      {/* Full width image below section */}
      <div className="w-[calc(100vw-24px)] md:w-[calc(100vw-36px)] relative left-1/2 -translate-x-1/2 mt-6 md:mt-6">
            <img 
              src="/images/about/contentthird.png" 
              alt="Content Third" 
              className="w-full h-auto object-cover"
            />
            {/* Bottom 3-column text */}
            <div className="grid grid-cols-3 w-full mt-6 md:mt-6 font-mono text-xs uppercase tracking-wide px-2 md:px-0">
                <div className="text-left">ARCHITECTURE</div>
                <div className="text-center">INTERIOR</div>
                <div className="text-right">CONSTRUCTION</div>
            </div>
        </div>
    </div>
  );
}

export default AboutServiceSecond;
