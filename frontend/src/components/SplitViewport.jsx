import React, { useState, useRef, useEffect } from "react";
import { cn } from "../utils/cn";
import { motion } from "framer-motion";
import HeroOverlay from "./HeroOverlay";

const SplitViewport = ({
  leftImage,
  rightImage,
  leftAlt = "Left image",
  rightAlt = "Right image",
  className,
}) => {
  const [hoveredSide, setHoveredSide] = useState("none");
  const [isDividerHovered, setIsDividerHovered] = useState(false);
  const [activeView, setActiveView] = useState("none");
  const forwardVideoRef = useRef(null);
  const reverseVideoRef = useRef(null);
  const [showForward, setShowForward] = useState(true);

  useEffect(() => {
    const forwardVideo = forwardVideoRef.current;
    const reverseVideo = reverseVideoRef.current;
    if (!forwardVideo || !reverseVideo) return;

    const handleForwardEnd = () => {
      setShowForward(false);
      reverseVideo.currentTime = reverseVideo.duration;
      reverseVideo.play();
    };

    const handleReverseEnd = () => {
      setShowForward(true);
      forwardVideo.currentTime = 0;
      forwardVideo.play();
    };

    forwardVideo.addEventListener('ended', handleForwardEnd);
    reverseVideo.addEventListener('ended', handleReverseEnd);

    forwardVideo.muted = true;
    reverseVideo.muted = true;
    forwardVideo.play();

    return () => {
      forwardVideo.removeEventListener('ended', handleForwardEnd);
      reverseVideo.removeEventListener('ended', handleReverseEnd);
    };
  }, []);

  const handleProfessionalClick = () => {
    setActiveView("professional");
    setHoveredSide("left");
  };

  const handleHouseholdClick = () => {
    setActiveView("household");
    setHoveredSide("right");
  };

  const handleProfessionalHover = () => {
    setHoveredSide("left");
  };

  const handleHouseholdHover = () => {
    setHoveredSide("right");
  };

  const handleButtonLeave = () => {
    setHoveredSide("none");
  };

  const getLeftWidth = () => {
    if (activeView === "professional") return "w-[90%]";
    if (activeView === "household") return "w-[10%]";
    if (hoveredSide === "left") return "w-[90%]";
    if (hoveredSide === "right") return "w-[10%]";
    return "w-1/2";
  };

  const getRightWidth = () => {
    if (activeView === "professional") return "w-[10%]";
    if (activeView === "household") return "w-[90%]";
    if (hoveredSide === "left") return "w-[10%]";
    if (hoveredSide === "right") return "w-[90%]";
    return "w-1/2";
  };

  return (
    <div className={cn("h-screen w-screen flex overflow-hidden relative", className)}>
      {/* Left side */}
      <div
        className={cn(
          "relative h-full overflow-hidden transition-all duration-500 ease-in-out",
          getLeftWidth()
        )}
      >
        <div className={cn(
          "absolute inset-0 transition-transform duration-500 ease-out",
          hoveredSide === "right" ? "scale-105" : "scale-100"
        )}>
          <video
            ref={forwardVideoRef}
            src={leftImage}
            className={cn(
              "w-full h-full object-cover absolute inset-0",
              showForward ? "opacity-100" : "opacity-0"
            )}
            loop={false}
            muted
            playsInline
          />
          <video
            ref={reverseVideoRef}
            src={leftImage}
            className={cn(
              "w-full h-full object-cover absolute inset-0",
              !showForward ? "opacity-100" : "opacity-0"
            )}
            loop={false}
            muted
            playsInline
          />
        </div>
        
        {/* Left side gradient overlay */}
        <div className="absolute top-0 right-0 h-full w-[40px] 
          bg-gradient-to-l from-black/20 to-transparent pointer-events-none" />
      </div>

      {/* SVG Mask Divider */}
      <motion.div 
        className={cn(
          "absolute top-0 left-1/2 h-full z-10 pointer-events-none",
          "flex items-center justify-center"
        )}
        style={{
          left: activeView === "professional" ? "calc(90% - 2px)" : 
                activeView === "household" ? "calc(10% - 2px)" :
                hoveredSide === "left" ? "calc(90% - 2px)" : 
                hoveredSide === "right" ? "calc(10% - 2px)" : "50%"
        }}
        onMouseEnter={() => setIsDividerHovered(true)}
        onMouseLeave={() => setIsDividerHovered(false)}
      >
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <linearGradient id="dividerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="white" stopOpacity="0.08" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
            <filter id="dividerBlur">
              <feGaussianBlur in="SourceGraphic" stdDeviation="4" />
            </filter>
          </defs>
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="url(#dividerGradient)"
            filter="url(#dividerBlur)"
          />
        </svg>

        {/* Glass divider */}
        <motion.div
          className="h-full w-[4px] rounded-full bg-white/8 backdrop-blur-[8px]"
          initial={{ width: 4, opacity: 0.5 }}
          animate={{ 
            width: isDividerHovered ? 8 : 4,
            opacity: isDividerHovered ? 0.9 : 0.5,
            boxShadow: isDividerHovered 
              ? "0 0 20px rgba(255,255,255,0.3)" 
              : "0 0 15px rgba(255,255,255,0.15)"
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {/* Right side */}
      <div
        className={cn(
          "relative h-full overflow-hidden transition-all duration-500 ease-in-out",
          getRightWidth()
        )}
      >
        <div className={cn(
          "absolute inset-0 transition-transform duration-500 ease-out",
          hoveredSide === "left" ? "scale-105" : "scale-100"
        )}>
          <img
            src={rightImage}
            alt={rightAlt}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Right side gradient overlay */}
        <div className="absolute top-0 left-0 h-full w-[40px] 
          bg-gradient-to-r from-black/20 to-transparent pointer-events-none" />
      </div>

      {/* Hero Overlay */}
      <HeroOverlay 
        onProfessionalClick={handleProfessionalClick}
        onHouseholdClick={handleHouseholdClick}
        onProfessionalHover={handleProfessionalHover}
        onHouseholdHover={handleHouseholdHover}
        onButtonLeave={handleButtonLeave}
      />
    </div>
  );
};

export default SplitViewport; 