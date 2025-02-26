import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ParallaxSection = () => {
  const containerRef = useRef(null);

  // Determine layout: vertical for small screens, horizontal otherwise.
  const [isVertical, setIsVertical] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const updateLayout = () => setIsVertical(window.innerWidth <= 768);
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  // Track scroll progress for parallax effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // **Parallax Y-Axis Movement** (Moves Up as You Scroll)
  const parallaxYBackground = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const parallaxYForeground = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const parallaxYRight = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen flex flex-col items-center overflow-hidden"
      style={{ marginBottom: "-300px" }} // Further increased negative margin to tuck more under the next component
    >
      <motion.div className="absolute top-0 left-0 w-full h-full">
        {isVertical ? (
          // Vertical layout: only show the left image
          <div className="w-full h-full flex flex-col items-center">
            <motion.div
              style={{ y: parallaxYBackground }}
              className="absolute top-0 left-0 w-full h-full"
            >
              <motion.img
                src="https://images.ctfassets.net/hdznx4p7ef81/7iA5UBx6HnqzASrlpsYanj/b0316a9e6795a9aacf2893150beae9ba/Home_Cleaning_Tips_Blog-edit1.png"
                alt="Top Image"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        ) : (
          // Horizontal layout: side by side images
          <div className="w-full h-full flex justify-center items-center">
            <motion.div
              style={{ y: parallaxYBackground }}
              className="absolute top-0 left-0 w-1/2 h-full"
            >
              <motion.img
                src="https://images.ctfassets.net/hdznx4p7ef81/7iA5UBx6HnqzASrlpsYanj/b0316a9e6795a9aacf2893150beae9ba/Home_Cleaning_Tips_Blog-edit1.png"
                alt="Left Image"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              style={{ y: parallaxYRight }}
              className="absolute top-0 right-0 w-1/2 h-full"
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
        {/* Add any content you want to overlay on the parallax background here */}
      </div>
    </section>
  );
};

export default ParallaxSection;