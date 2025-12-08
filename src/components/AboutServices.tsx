function AboutServices() {
  return (
    <div className="min-h-screen bg-white text-black p-4 md:p-6">
        <div className="mb-12 md:mb-20 relative inline-block">
           <div className="relative px-4 md:px-8 py-2 md:py-3">
              <img 
                src="/images/about/serviceborder.png" 
                alt="Service Border" 
                className="absolute inset-0 w-[120%] max-w-none object-contain -mt-9 md:-mt-12 -ml-2 md:-ml-4"
              />
              <h2 className="text-lg md:text-xl tracking-widest relative z-10">SERVICES</h2>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 font-mono text-xs max-w-6xl mx-auto">
          {/* Design Column */}
          <div className="border-2 border-black h-full flex flex-col">
             <div className="border-b-2 border-black p-3 md:p-4">
               <h3 className="uppercase tracking-wide">DESIGN</h3>
             </div>
             <div className="border-b-2 border-black p-3 md:p-4 min-h-[100px] md:min-h-[120px]">
               <ul className="space-y-1">
                 <li>1. ARCHITECTURE</li>
                 <li>2. INTERIOR</li>
                 <li>3. FURNITURE</li>
                 <li>4. LANDSCAPING</li>
               </ul>
             </div>
             <div className="p-3 md:p-4 space-y-3 md:space-y-4 leading-relaxed flex-1">
               <p>
                 DESIGN IS AT THE CORE OF WHAT WE DO. AT NAULI CONSULTANTS, WE OFFER COMPREHENSIVE DESIGN PACKAGES THAT COVER ARCHITECTURE, INTERIOR DESIGN, AND LANDSCAPE DESIGN AS A FULLY INTEGRATED SERVICE.
               </p>
               <p>
                 OUR DESIGN PROCESS IS GROUNDED IN CONTEXT, FUNCTION, AND AESTHETICS – ENSURING THAT EVERY ELEMENT, FROM BUILDING FORM TO MATERIAL PALETTE TO OUTDOOR SPACE, WORKS IN HARMONY.
               </p>
               <p>
                 WHETHER YOU'RE BUILDING A HOME, A HOSPITALITY PROJECT, OR A PUBLIC SPACE, OUR DESIGN TEAM WORKS CLOSELY WITH YOU TO CRAFT ENVIRONMENTS THAT ARE MEANINGFUL, FUNCTIONAL, AND DISTINCTLY YOUR OWN.
               </p>
             </div>
          </div>

          {/* Post-Production Column */}
          <div className="border-2 border-black h-full flex flex-col">
             <div className="border-b-2 border-black p-3 md:p-4">
               <h3 className="uppercase tracking-wide">POST - PRODUCTION</h3>
             </div>
             <div className="border-b-2 border-black p-3 md:p-4 min-h-[100px] md:min-h-[120px]">
               <ul className="space-y-1">
                 <li>1. ARCHITECTURAL DRAWINGS</li>
                 <li>2. MECHANICAL, ELECTRICAL & PLUMBING</li>
                 <li>3. STRUCTURAL DRAWINGS</li>
                 <li>4. STILL & VIDEO RENDERINGS</li>
               </ul>
             </div>
             <div className="p-3 md:p-4 space-y-3 md:space-y-4 leading-relaxed flex-1">
               <p>
                 POST-PRODUCTION IS A CRUCIAL STEP IN BRINGING DESIGN CONCEPTS TO LIFE. AT NAULI CONSULTANTS, WE UNDERSTAND THE IMPORTANCE OF TRANSLATING IDEAS INTO REALITY THROUGH DETAILED DRAWINGS. FROM MAIN CONSTRUCTION DRAWINGS TO MEP, STRUCTURAL PLANS, AND RENDERS, WE METICULOUSLY CREATE AND REFINE EVERY DOCUMENT TO ENSURE SEAMLESS EXECUTION.
               </p>
             </div>
          </div>

          {/* Construction Column */}
          <div className="h-full flex flex-col border-2 border-black">
             <div className="border-b-2 border-black p-3 md:p-4">
               <h3 className="uppercase tracking-wide">CONSTRUCTION</h3>
             </div>
             <div className="border-b-2 border-black p-3 md:p-4 min-h-[100px] md:min-h-[120px]">
               <ul className="space-y-1">
                 <li>1. ARCHITECTURE, INTERIOR & LANDSCAPING</li>
                 <li>2. CONSTRUCTION MANAGAMENT</li>
                 <li>3. INSTALLATION</li>
               </ul>
             </div>
             <div className="p-3 md:p-4 space-y-3 md:space-y-4 leading-relaxed flex-1">
               <p>
                 HERE AT NAULI CONSULTANTS, WE BRING IDEAS TO LIFE. WE OFFER BUILD SERVICES THAT ENSURE EVERY PROJECT IS EXECUTED WITH PRECISION, QUALITY, AND EXPERTISE. FROM STRUCTURAL WORK TO DETAILED FINISHING, OUR TEAM DELIVERS SEAMLESS CONSTRUCTION SOLUTIONS TAILORED TO EACH DESIGN.
               </p>
             </div>
          </div>
        </div>

        {/* Full width image below table */}
        <div className="w-[calc(100vw-24px)] md:w-[calc(100vw-36px)] relative left-1/2 -translate-x-1/2 mt-12 md:mt-20">
            <img 
              src="/images/about/contentfirst.png" 
              alt="Content First" 
              className="w-full h-auto object-cover"
            />
        </div>
      </div>
  );
}

export default AboutServices;
