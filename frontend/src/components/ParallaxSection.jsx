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

  // **Reverse Scaling Effect** (Starts Large → Shrinks as You Scroll)
  const scaleImage = useTransform(scrollYProgress, [0, 1], [1.4, 1]);

  // **Parallax Y-Axis Movement** (Moves Up as You Scroll)
  const parallaxYBackground = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const parallaxYForeground = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const parallaxYRight = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);

  return (
    <section
      ref={containerRef}
      className="relative w-full flex flex-col items-center overflow-visible"
    >
      <motion.div className="relative w-full flex flex-col items-center">
        {isVertical ? (
          // Vertical layout: stacked images
          <div className="w-full flex flex-col items-center">
            <motion.div
              style={{ y: parallaxYBackground }}
              className="relative w-full flex justify-center"
            >
              <motion.img
                src="https://images.ctfassets.net/hdznx4p7ef81/7iA5UBx6HnqzASrlpsYanj/b0316a9e6795a9aacf2893150beae9ba/Home_Cleaning_Tips_Blog-edit1.png"
                alt="Top Image"
                className="relative w-auto max-w-full object-cover"
                style={{ scale: scaleImage }} // ✅ Shrinking Effect
              />
            </motion.div>
            <motion.div
              style={{ y: parallaxYForeground }}
              className="relative w-full flex justify-center"
            >
              <motion.img
                src="https://images.ctfassets.net/hdznx4p7ef81/6YIz7DoFu6vD2njwLTB6vs/1b74a042bf21b293fc6e467959a8bef6/Home_Cleaning_Tips_Blog-edit2.png"
                alt="Bottom Image"
                className="relative w-auto max-w-full object-cover"
                style={{ scale: scaleImage }} // ✅ Shrinking Effect
              />
            </motion.div>
          </div>
        ) : (
          // Horizontal layout: side by side images
          <div className="w-full flex justify-center items-center">
            <motion.div
              style={{ y: parallaxYBackground }}
              className="relative w-1/2 flex justify-center"
            >
              <motion.img
                src="https://images.ctfassets.net/hdznx4p7ef81/7iA5UBx6HnqzASrlpsYanj/b0316a9e6795a9aacf2893150beae9ba/Home_Cleaning_Tips_Blog-edit1.png"
                alt="Left Image"
                className="relative w-auto max-w-full object-cover"
                style={{ scale: scaleImage }} // ✅ Shrinking Effect
              />
            </motion.div>
            <motion.div
              style={{ y: parallaxYRight }}
              className="relative w-1/2 flex justify-center"
            >
              <motion.img
                src="https://images.ctfassets.net/hdznx4p7ef81/6YIz7DoFu6vD2njwLTB6vs/1b74a042bf21b293fc6e467959a8bef6/Home_Cleaning_Tips_Blog-edit2.png"
                alt="Right Image"
                className="relative w-auto max-w-full object-cover"
                style={{ scale: scaleImage }} // ✅ Shrinking Effect
              />
            </motion.div>
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default ParallaxSection;
