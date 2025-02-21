import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ParallaxSection = () => {
  const containerRef = useRef(null);

  // Determine orientation: portrait (stacked vertically) vs. landscape (side by side)
  const [isPortrait, setIsPortrait] = useState(true);
  useEffect(() => {
    const updateOrientation = () => {
      setIsPortrait(window.matchMedia("(orientation: portrait)").matches);
    };
    updateOrientation();
    window.addEventListener("resize", updateOrientation);
    return () => window.removeEventListener("resize", updateOrientation);
  }, []);

  // Track the scroll progress for this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Increase the vertical translation range for a more pronounced effect.
  // The container is moved upward from 0 to -400px as you scroll.
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -400]);

  return (
    <section ref={containerRef} className="relative h-[600px] overflow-hidden">
      <motion.div style={{ y: parallaxY }}>
        {isPortrait ? (
          // Portrait: images stacked vertically.
          <div className="flex flex-col h-full">
            <div className="relative flex-1">
              <img
                src="https://images.ctfassets.net/hdznx4p7ef81/7iA5UBx6HnqzASrlpsYanj/b0316a9e6795a9aacf2893150beae9ba/Home_Cleaning_Tips_Blog-edit1.png"
                alt="Top Image"
                className="w-full object-cover object-bottom"
                style={{ height: "800px" }}
              />
            </div>
            <div className="relative flex-1">
              <img
                src="https://images.ctfassets.net/hdznx4p7ef81/6YIz7DoFu6vD2njwLTB6vs/1b74a042bf21b293fc6e467959a8bef6/Home_Cleaning_Tips_Blog-edit2.png"
                alt="Bottom Image"
                className="w-full object-cover object-bottom"
                style={{ height: "800px" }}
              />
            </div>
          </div>
        ) : (
          // Landscape: images arranged side by side.
          <div className="flex h-full">
            <div className="relative w-1/2 h-full">
              <img
                src="https://images.ctfassets.net/hdznx4p7ef81/7iA5UBx6HnqzASrlpsYanj/b0316a9e6795a9aacf2893150beae9ba/Home_Cleaning_Tips_Blog-edit1.png"
                alt="Left Image"
                className="w-full object-cover object-bottom"
                style={{ height: "800px" }}
              />
            </div>
            <div className="relative w-1/2 h-full">
              <img
                src="https://images.ctfassets.net/hdznx4p7ef81/6YIz7DoFu6vD2njwLTB6vs/1b74a042bf21b293fc6e467959a8bef6/Home_Cleaning_Tips_Blog-edit2.png"
                alt="Right Image"
                className="w-full object-cover object-bottom"
                style={{ height: "800px" }}
              />
            </div>
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default ParallaxSection;
