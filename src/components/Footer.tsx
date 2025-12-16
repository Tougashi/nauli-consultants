import { useEffect, useRef, useState } from 'react';

function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (!footerRef.current) return;

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setHeight(entry.contentRect.height);
      }
    });

    observer.observe(footerRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div style={{ height }} className="relative w-full">
      <div ref={footerRef} className="fixed bottom-0 left-0 w-full bg-white" style={{ zIndex: -20 }}>
        <footer className="grid grid-cols-1 md:grid-cols-3 items-end text-xs uppercase tracking-wider shrink-0 p-6 md:p-12 gap-6 md:gap-0">
          {/* Left: Footer Icon Image */}
          <div className="flex justify-center md:justify-start">
            <img 
              src="/images/footer-icon-secondary.png" 
              alt="Nauli Consultants" 
              className="h-16 md:h-24 w-auto object-contain"
            />
          </div>

          {/* Center: Let's Work Together */}
          <div className="flex justify-center pb-0 md:pb-4">
            <span className="text-2xl md:text-4xl tracking-widest text-center text-black">LET'S WORK <br />TOGETHER</span>
          </div>

          {/* Right: Social & Contact */}
          <div className="flex flex-col items-center md:items-end gap-4 pb-0 md:pb-4">
            <div className="flex gap-8 md:gap-14">
              <a href="https://www.instagram.com/nauliconsultants/" className="w-5 h-6 md:w-6 md:h-8 flex items-center justify-center">
                 <img src="/images/icon/secondary_instagram.png" alt="Instagram" className="w-full h-full object-contain" />
              </a>
              <a href="https://www.instagram.com/nauliconsultants/" className="w-5 h-6 md:w-6 md:h-8 flex items-center justify-center">
                 <img src="/images/icon/secondary_instagram.png" alt="Instagram" className="w-full h-full object-contain" />
              </a>
              <a href="https://www.instagram.com/nauliconsultants/" className="w-5 h-6 md:w-6 md:h-8 flex items-center justify-center">
                 <img src="/images/icon/secondary_instagram.png" alt="Instagram" className="w-full h-full object-contain" />
              </a>
            </div>
            <div className="text-center md:text-left font-mono text-xs leading-tight text-black">
              <p>HELLO@NAULICONSULTANTS.COM</p>
              <p>@NAULICONSULTANTS</p>
              <p>+62 - 822 - 3084 - 6505</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
