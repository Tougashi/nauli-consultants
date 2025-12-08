import { Link } from 'react-router-dom';

interface HoverRevealTextProps {
  text: string;
  to?: string;
  className?: string;
}

const HoverRevealText = ({ text, to, className = "" }: HoverRevealTextProps) => {
  const inner = (
    <div className={`relative overflow-hidden flex ${className}`}>
      {text.split("").map((char, i) => (
        <span 
          key={i} 
          className="relative overflow-hidden"
        >
          <span 
            className="block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full"
            style={{ transitionDelay: `${i * 0.025}s` }}
          >
            <span className="block">{char === " " ? "\u00A0" : char}</span>
            <span className="block absolute top-full left-0">{char === " " ? "\u00A0" : char}</span>
          </span>
        </span>
      ))}
    </div>
  );

  if (to) {
    return (
      <Link to={to} className="group inline-block">
        {inner}
      </Link>
    );
  }

  return (
    <div className="group cursor-pointer inline-block">
      {inner}
    </div>
  );
};

export default HoverRevealText;

