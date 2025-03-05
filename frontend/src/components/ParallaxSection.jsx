import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const ParallaxSection = () => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);

  // Determine layout: use single image for viewports below 900px.
  const [isVertical, setIsVertical] = useState(window.innerWidth < 900);
  useEffect(() => {
    const updateLayout = () => setIsVertical(window.innerWidth < 900);
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  // Listener to keep images visible until the section is entirely offscreen.
  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        // Images remain visible as long as the bottom of the section is greater than 0.
        setIsVisible(rect.bottom > 0);
      }
    };
    window.addEventListener("scroll", handleScroll);
    // Initial check.
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen flex flex-col items-center overflow-hidden"
      // Removed negative marginBottom to prevent accidental overfill.
    >
      <motion.div 
        className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${!isVisible ? 'opacity-0' : 'opacity-100'}`}
      >
        {isVertical ? (
          // For viewports below 900px: use a single image that never expands beyond the viewport.
          <div className="w-full h-full flex flex-col items-center">
            <motion.div
              style={{ position: "fixed" }}
              className="top-0 left-0 w-full h-full"
            >
              <motion.img
                src="https://images.ctfassets.net/hdznx4p7ef81/7iA5UBx6HnqzASrlpsYanj/b0316a9e6795a9aacf2893150beae9ba/Home_Cleaning_Tips_Blog-edit1.png"
                alt="Left Image"
                className="w-full h-full object-cover"
                style={{ 
                  objectPosition: "30% center", 
                  maxWidth: "100vw", 
                  maxHeight: "100vh" 
                }}
              />
            </motion.div>
          </div>
        ) : (
          // For viewports 900px and above: display two images side by side without exceeding the viewport.
          <div className="w-full h-full flex justify-center items-center">
            <motion.div
              style={{ position: "fixed" }}
              className="top-0 left-0 w-1/2 h-full"
            >
              <motion.img
                src="https://images.ctfassets.net/hdznx4p7ef81/7iA5UBx6HnqzASrlpsYanj/b0316a9e6795a9aacf2893150beae9ba/Home_Cleaning_Tips_Blog-edit1.png"
                alt="Left Image"
                className="w-full h-full object-cover"
                style={{ maxWidth: "100vw", maxHeight: "100vh" }}
              />
            </motion.div>
            <motion.div
              style={{ position: "fixed" }}
              className="top-0 right-0 w-1/2 h-full"
            >
              <motion.img
                src="https://images.ctfassets.net/hdznx4p7ef81/4qZzk5uIy0wOYMAQFsuUKc/261d1fbaa8c110973c50185e1f2a909e/RR_Cleaning_Mess_Zoomed_Out.jpg"
                alt="Right Image"
                className="w-full h-full object-cover"
                style={{ maxWidth: "100vw", maxHeight: "100vh" }}
              />
            </motion.div>
          </div>
        )}
      </motion.div>
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
        {/* Overlay container for content */}
      </div>
    </section>
  );
};

export default ParallaxSection;