import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ParallaxSection = () => {
  const containerRef = useRef(null);
  // Images are visible as long as the section hasn’t completely scrolled off the top.
  const [isVisible, setIsVisible] = useState(true);

  // Determine layout: vertical for small screens, horizontal otherwise.
  const [isVertical, setIsVertical] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const updateLayout = () => setIsVertical(window.innerWidth <= 768);
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  // Track scroll progress for parallax effect using Framer Motion.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const parallaxYBackground = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const parallaxYRight = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);

  // Use a scroll event listener to control the visibility:
  // Images remain visible as long as the bottom of the section is below the viewport's top.
  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        // As long as the section's bottom is greater than 0, keep images visible.
        setIsVisible(rect.bottom > 0);
      }
    };
    window.addEventListener("scroll", handleScroll);
    // Initial check.
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen flex flex-col items-center overflow-hidden"
      style={{ marginBottom: "-300px" }} // Negative margin tucks extra space under the section.
    >
      <motion.div 
        className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${!isVisible ? 'opacity-0' : 'opacity-100'}`}
      >
        {isVertical ? (
          // Vertical layout: show only one (background) image.
          <div className="w-full h-full flex flex-col items-center">
            <motion.div
              style={{ y: parallaxYBackground, position: "fixed" }}
              className="top-0 left-0 w-full h-full"
            >
              <motion.img
                src="https://images.ctfassets.net/hdznx4p7ef81/7iA5UBx6HnqzASrlpsYanj/b0316a9e6795a9aacf2893150beae9ba/Home_Cleaning_Tips_Blog-edit1.png"
                alt="Top Image"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        ) : (
          // Horizontal layout: side-by-side images.
          <div className="w-full h-full flex justify-center items-center">
            <motion.div
              style={{ y: parallaxYBackground, position: "fixed" }}
              className="top-0 left-0 w-1/2 h-full"
            >
              <motion.img
                src="https://images.ctfassets.net/hdznx4p7ef81/7iA5UBx6HnqzASrlpsYanj/b0316a9e6795a9aacf2893150beae9ba/Home_Cleaning_Tips_Blog-edit1.png"
                alt="Left Image"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              style={{ y: parallaxYRight, position: "fixed" }}
              className="top-0 right-0 w-1/2 h-full"
            >
              <motion.img
                src="https://images.ctfassets.net/hdznx4p7ef81/6YIz7DoFu6vD2njwLTB6vs/1b74a042bf21b293fc6e467959a8bef6/Home_Cleaning_Tips_Blog-edit2.png"
                alt="Right Image"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        )}
      </motion.div>
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
        {/* This overlay container is for any components you want to display over the images. */}
      </div>
    </section>
  );
};

export default ParallaxSection;