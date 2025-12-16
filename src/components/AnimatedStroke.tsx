import { motion } from 'framer-motion';

interface AnimatedStrokeProps {
  className?: string;
  delay?: number;
  duration?: number;
  path?: string;
  strokeWidth?: number;
  strokeColor?: string;
  viewBox?: string;
  type?: 'underline' | 'border' | 'circle';
}

function AnimatedStroke({
  className = "",
  delay = 0,
  duration = 1.5,
  path,
  strokeWidth = 4,
  strokeColor = "white",
  viewBox,
  type = 'underline',
}: AnimatedStrokeProps) {
  // Natural brush-like paths
  const defaultPaths = {
    // Natural wavy underline with texture
    underline: "M 5 25 Q 25 20, 45 25 T 85 25 Q 105 20, 125 25 T 165 25 Q 185 20, 205 25",
    // Scribble underline with more variation
    scribble: "M 0 30 Q 20 15, 40 30 T 80 30 Q 100 20, 120 30 T 160 30 Q 180 25, 200 30",
    // Rough organic underline
    rough: "M 0 28 Q 30 18, 60 28 T 120 28 Q 150 23, 180 28 T 240 28",
    // Organic circle/border
    circle: "M 50 20 Q 20 20, 20 50 Q 20 80, 50 80 Q 80 80, 80 50 Q 80 20, 50 20",
    // Border around text
    border: "M 15 15 Q 10 10, 15 5 L 185 5 Q 190 10, 185 15 L 185 45 Q 190 50, 185 55 L 15 55 Q 10 50, 15 45 Z",
  };

  const strokePath = path || defaultPaths[type];
  const finalViewBox = viewBox || (type === 'circle' ? "0 0 100 100" : type === 'border' ? "0 0 200 60" : "0 0 250 50");

  // Brush texture filter with unique ID
  const filterId = `brush-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <motion.svg
      className={className}
      viewBox={finalViewBox}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <defs>
        {/* Glow effect filter for circle - stronger glow */}
        <filter id={`${filterId}-glow`} x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
          <feGaussianBlur stdDeviation="2" result="coloredBlur2"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="coloredBlur2"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        
        {/* Brush texture filter - creates rough, organic edge like hand-drawn */}
        <filter id={filterId} x="-30%" y="-30%" width="160%" height="160%">
          {/* Create noise for brush texture */}
          <feTurbulence
            baseFrequency="0.5 0.7"
            numOctaves="4"
            result="turbulence"
            seed="2"
            type="fractalNoise"
          />
          {/* Displace the stroke to create rough, organic edges */}
          <feDisplacementMap
            in="SourceGraphic"
            in2="turbulence"
            scale="3"
            xChannelSelector="R"
            yChannelSelector="G"
            result="displaced"
          />
          {/* Minimal blur for texture only, not too blurry */}
          <feGaussianBlur in="displaced" stdDeviation="0.3" result="blurred" />
          {/* Enhance contrast for brush texture */}
          <feColorMatrix
            in="blurred"
            type="matrix"
            values="1 0 0 0 0
                    0 1 0 0 0
                    0 0 1 0 0
                    0 0 0 1.1 0"
            result="enhanced"
          />
        </filter>
        
        {/* Rough brush texture for secondary layer - less blur */}
        <filter id={`${filterId}-rough`} x="-40%" y="-40%" width="180%" height="180%">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="5" result="noise" seed="3" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="4" />
          <feGaussianBlur stdDeviation="0.4" />
        </filter>
      </defs>
      
      {/* Main stroke with brush texture - base layer */}
      <motion.path
        d={strokePath}
        fill="none"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
        filter={type === 'circle' ? `url(#${filterId}-glow)` : `url(#${filterId})`}
        strokeDasharray="2000 2000"
        initial={{ strokeDashoffset: 2000 }}
        animate={{ strokeDashoffset: [2000, 0] }}
        transition={{
          strokeDashoffset: {
            duration: duration * 3,
            delay: delay,
            ease: "easeOut",
          },
        }}
      />
      
      {/* Secondary layer for brush texture depth - with glow for circle */}
      <motion.path
        d={strokePath}
        fill="none"
        stroke={strokeColor}
        strokeWidth={strokeWidth * 0.75}
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
        filter={type === 'circle' ? `url(#${filterId}-glow)` : `url(#${filterId}-rough)`}
        strokeDasharray="2000 2000"
        initial={{ strokeDashoffset: 2000 }}
        animate={{ strokeDashoffset: [2000, 0] }}
        transition={{
          strokeDashoffset: {
            duration: duration * 2,
            delay: delay + 0.1,
            ease: "easeOut",
          },
        }}
        style={{ opacity: type === 'circle' ? 0.8 : 0.6 }}
      />
      
    </motion.svg>
  );
}

export default AnimatedStroke;

