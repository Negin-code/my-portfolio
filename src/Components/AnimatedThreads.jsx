import React, { useState, useEffect } from 'react';

const AnimatedThreads = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      // Calculate relative position from center (-1 to 1)
      const x = (clientX - centerX) / centerX;
      const y = (clientY - centerY) / centerY;
      
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="col-span-full relative mt-10 w-full h-32 md:h-40 lg:h-48 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Thread Container */}
        <div className="relative w-full max-w-7xl h-full">
          {/* Main flowing thread */}
          <svg
            className="absolute inset-0 w-full h-full"
            preserveAspectRatio="none"
            viewBox="0 0 1200 200"
            style={{
              transform: `translateY(${mousePosition.y * 10}px)`,
              transition: 'transform 0.3s ease-out'
            }}
          >
            <defs>
              <linearGradient id="threadGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#493B32" stopOpacity="0.1" />
                <stop offset="50%" stopColor="#F75590" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#493B32" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            
            {/* Multiple flowing paths for depth */}
            <path
              d="M0,100 Q300,50 600,100 T1200,100"
              stroke="url(#threadGradient)"
              strokeWidth="0.5"
              fill="none"
              className="animate-pulse"
              style={{
                transform: `translateY(${mousePosition.y * 15}px)`,
                transformOrigin: 'center'
              }}
            />
            <path
              d="M0,90 Q300,140 600,90 T1200,90"
              stroke="#493B32"
              strokeWidth="0.3"
              fill="none"
              opacity="0.2"
              className="animate-pulse animation-delay-200"
              style={{
                transform: `translateY(${mousePosition.y * -10}px)`,
                transformOrigin: 'center'
              }}
            />
            <path
              d="M0,110 Q300,60 600,110 T1200,110"
              stroke="#F75590"
              strokeWidth="0.3"
              fill="none"
              opacity="0.2"
              className="animate-pulse animation-delay-400"
              style={{
                transform: `translateY(${mousePosition.y * 20}px)`,
                transformOrigin: 'center'
              }}
            />
            
            {/* Main flowing thread with animation */}
            <path
              d="M0,100 C200,60 400,140 600,100 C800,60 1000,140 1200,100"
              stroke="#493B32"
              strokeWidth="1"
              fill="none"
              opacity="0.4"
              style={{
                transform: `translateY(${mousePosition.y * 5}px) translateX(${mousePosition.x * 10}px)`,
                transformOrigin: 'center'
              }}
            >
              <animate
                attributeName="d"
                values="M0,100 C200,60 400,140 600,100 C800,60 1000,140 1200,100;
                        M0,100 C200,140 400,60 600,100 C800,140 1000,60 1200,100;
                        M0,100 C200,60 400,140 600,100 C800,60 1000,140 1200,100"
                dur="8s"
                repeatCount="indefinite"
              />
            </path>
          </svg>
          
          {/* Decorative dots along the thread */}
          {[
            { top: '33%', left: '10%', size: 'w-1.5 h-1.5', color: 'bg-[#493B32]', opacity: 0.3, x: 20, y: 15 },
            { top: '66%', left: '15%', size: 'w-2.5 h-2.5', color: 'bg-[#F75590]', opacity: 0.25, x: -15, y: 10, delay: '300' },
            { top: '50%', left: '20%', size: 'w-2 h-2', color: 'bg-[#493B32]', opacity: 0.4, x: 25, y: -20, delay: '100' },
            { top: '25%', left: '25%', size: 'w-3 h-3', color: 'bg-[#F75590]', opacity: 0.35, x: -30, y: 25 },
            { top: '75%', left: '30%', size: 'w-1.5 h-1.5', color: 'bg-[#493B32]', opacity: 0.45, x: 18, y: -15, delay: '200' },
            { top: '33%', left: '35%', size: 'w-2 h-2', color: 'bg-[#F75590]', opacity: 0.3, x: -22, y: 18, delay: '400' },
            { top: '66%', left: '40%', size: 'w-1 h-1', color: 'bg-[#493B32]', opacity: 0.5, x: 15, y: -12 },
            { top: '50%', left: '45%', size: 'w-2.5 h-2.5', color: 'bg-[#F75590]', opacity: 0.25, x: -28, y: 22, delay: '300' },
            { top: '50%', left: '50%', size: 'w-4 h-4', color: 'bg-[#493B32]', opacity: 0.3, x: 35, y: -30, delay: '200' },
            { top: '25%', left: '55%', size: 'w-1.5 h-1.5', color: 'bg-[#F75590]', opacity: 0.4, x: -20, y: 16, delay: '100' },
            { top: '75%', left: '60%', size: 'w-2 h-2', color: 'bg-[#493B32]', opacity: 0.35, x: 24, y: -18 },
            { top: '33%', left: '65%', size: 'w-1 h-1', color: 'bg-[#F75590]', opacity: 0.45, x: -16, y: 14, delay: '500' },
            { top: '66%', left: '70%', size: 'w-2.5 h-2.5', color: 'bg-[#493B32]', opacity: 0.3, x: 26, y: -22, delay: '200' },
            { top: '50%', left: '75%', size: 'w-3 h-3', color: 'bg-[#F75590]', opacity: 0.4, x: -32, y: 28, delay: '400' },
            { top: '25%', left: '80%', size: 'w-1.5 h-1.5', color: 'bg-[#493B32]', opacity: 0.35, x: 19, y: -16, delay: '100' },
            { top: '75%', left: '85%', size: 'w-2 h-2', color: 'bg-[#F75590]', opacity: 0.25, x: -24, y: 20, delay: '300' },
            { top: '50%', left: '90%', size: 'w-1 h-1', color: 'bg-[#493B32]', opacity: 0.5, x: 21, y: -17 },
            { top: '40%', left: '12%', size: 'w-1 h-1', color: 'bg-[#F75590]', opacity: 0.2, x: -18, y: 15, delay: '600' },
            { top: '60%', left: '28%', size: 'w-1.5 h-1.5', color: 'bg-[#493B32]', opacity: 0.25, x: 23, y: -19, delay: '700' },
            { top: '35%', left: '42%', size: 'w-1 h-1', color: 'bg-[#F75590]', opacity: 0.3, x: -27, y: 21, delay: '800' },
            { top: '65%', left: '58%', size: 'w-1.5 h-1.5', color: 'bg-[#493B32]', opacity: 0.2, x: 17, y: -14, delay: '900' },
            { top: '45%', left: '72%', size: 'w-1 h-1', color: 'bg-[#F75590]', opacity: 0.25, x: -25, y: 19, delay: '1000' },
            { top: '55%', left: '88%', size: 'w-1.5 h-1.5', color: 'bg-[#493B32]', opacity: 0.3, x: 22, y: -16, delay: '1100' }
          ].map((dot, index) => (
            <div
              key={index}
              className={`absolute ${dot.size} ${dot.color} rounded-full animate-pulse ${dot.delay ? `animation-delay-${dot.delay}` : ''}`}
              style={{
                transform: `translate(${mousePosition.x * dot.x}px, ${mousePosition.y * dot.y}px) translateY(-50%)`,
                transition: 'transform 0.3s ease-out',
                top: dot.top,
                left: dot.left,
                opacity: dot.opacity
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimatedThreads; 