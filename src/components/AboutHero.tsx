function AboutHero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full border-[8px] md:border-[12px] border-white box-border min-h-screen md:h-screen">
        {/* Left Hero */}
        <div className="relative h-[50vh] md:h-full group border-b-[4px] md:border-b-0 md:border-r-[6px] border-white overflow-hidden cursor-pointer" onClick={() => scrollToSection('what-we-do')}>
            <img 
                src="/images/about/heroleft.png" 
                alt="What We Do" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-end justify-center pb-12 md:pb-20">
                <div className="bg-white/20 backdrop-blur-sm px-6 md:px-8 py-2 text-xs uppercase tracking-widest border border-white/30 transition-all duration-300 group-hover:bg-white/30">
                    What We Do
                </div>
            </div>
        </div>

        {/* Right Hero */}
        <div className="relative h-[50vh] md:h-full group border-t-[4px] md:border-t-0 md:border-l-[6px] border-white overflow-hidden cursor-pointer" onClick={() => scrollToSection('founders')}>
            <img 
                src="/images/about/heroright.png" 
                alt="Who We Are" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-end justify-center pb-12 md:pb-20">
                <div className="bg-white/20 backdrop-blur-sm px-6 md:px-8 py-2 text-xs uppercase tracking-widest border border-white/30 transition-all duration-300 group-hover:bg-white/30">
                    Who We Are
                </div>
            </div>
        </div>
    </div>
  );
}

export default AboutHero;
