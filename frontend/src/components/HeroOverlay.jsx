import React from 'react';
import { cn } from '../utils/cn';
import Button from './Button';
import RRMascot from '../assets/RRMascot.png';

const HeroOverlay = ({ 
  className, 
  onProfessionalClick, 
  onHouseholdClick,
  onProfessionalHover,
  onHouseholdHover,
  onButtonLeave
}) => {
  return (
    <div className={cn(
      "absolute inset-0 flex items-center justify-center z-20",
      "pointer-events-none",
      className
    )}>
      <div className="flex flex-col items-center justify-center space-y-10 sm:space-y-12 
        w-[400px] sm:w-[500px] md:w-[600px] lg:w-[700px] h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] bg-transparent">
        {/* RR Mascot */}
        <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 bg-white/10 rounded-full flex items-center justify-center">
          <img 
            src={RRMascot} 
            alt="Rugged Red Mascot" 
            className="w-full h-full object-contain"
          />
        </div>

        {/* Headline */}
        <h1 className="font-extrabold leading-tight text-[#D3242A] text-center" 
          style={{ fontFamily: "TwCenMTCondensedExtraBold, sans-serif", fontStyle: "normal" }}>
          <span className="block mb-[-0.5rem] text-5xl sm:text-6xl md:text-7xl lg:text-8xl">A PROVEN</span>
          <span className="block whitespace-nowrap text-5xl sm:text-6xl md:text-7xl lg:text-8xl">POWERFUL CLEAN</span>
        </h1>

        {/* Subheading */}
        <div className="inline-block bg-white bg-opacity-70 backdrop-filter backdrop-blur-lg rounded-lg drop-shadow-md p-6 sm:p-8">
          <p className="text-[#222222] leading-tight font-medium mb-0 text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl" 
            style={{ fontFamily: "TwCenMTCondensedExtraBold, sans-serif", fontStyle: "normal" }}>
            Professional-grade cleaning solutions for every need
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-8 mt-10 pointer-events-auto">
          <Button
            variant="primary"
            size="large"
            onClick={onProfessionalClick}
            onMouseEnter={onProfessionalHover}
            onMouseLeave={onButtonLeave}
          >
            Professional
          </Button>
          <Button
            variant="secondary"
            size="large"
            onClick={onHouseholdClick}
            onMouseEnter={onHouseholdHover}
            onMouseLeave={onButtonLeave}
          >
            Household
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroOverlay; 