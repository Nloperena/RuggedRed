import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ParallaxSection = () => {
  const containerRef = useRef(null);

  // Determine layout: vertical for screens <=768px, horizontal otherwise.
  const [isVertical, setIsVertical] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const updateLayout = () => {
      setIsVertical(window.innerWidth <= 768);
    };
    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  // Compute image scale based on window width.
  const getImageScale = (width) => {
    if (width <= 768) return 1.8;      // Phones: scale up images more.
    else if (width < 1024) return 1.5;  // Tablets / smaller laptops.
    else return 1.15;                 // Larger desktops.
  };
  const [imageScale, setImageScale] = useState(getImageScale(window.innerWidth));
  useEffect(() => {
    const updateImageScale = () => {
      setImageScale(getImageScale(window.innerWidth));
    };
    updateImageScale();
    window.addEventListener("resize", updateImageScale);
    return () => window.removeEventListener("resize", updateImageScale);
  }, []);

  // Compute dynamic container height based on window width.
  const getContainerHeight = (width) => {
    if (width >= 2560) return 1000;
    else if (width >= 1536) return 950;
    else if (width >= 1280) return 900;
    else if (width >= 1024) return 800;
    else if (width >= 768) return 700;
    else return 600;
  };
  const [containerHeight, setContainerHeight] = useState(getContainerHeight(window.innerWidth));
  useEffect(() => {
    const updateHeight = () => {
      setContainerHeight(getContainerHeight(window.innerWidth));
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  // Track scroll progress for this section.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Adjust parallax translations (increased for a more noticeable effect):
  const parallaxYBackground = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const parallaxYForeground = useTransform(scrollYProgress, [0, 1], [0, -200]);
  // For horizontal layout, a slightly smaller translation for the right image.
  const parallaxYRight = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const blurBackground = useTransform(scrollYProgress, [0, 1], ["0px", "16px"]);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden"
      style={{ height: `${containerHeight}px`, perspective: "500px" }}
    >
      <motion.div>
        {isVertical ? (
          // Vertical layout: images stacked.
          <div className="flex flex-col h-full">
            <motion.div
              style={{ y: parallaxYBackground, filter: blurBackground }}
              className="relative flex-1 overflow-hidden"
            >
              <img
                src="https://images.ctfassets.net/hdznx4p7ef81/7iA5UBx6HnqzASrlpsYanj/b0316a9e6795a9aacf2893150beae9ba/Home_Cleaning_Tips_Blog-edit1.png"
                alt="Top Image"
                className="w-full h-full object-cover object-center"
                style={{ transform: `scale(${imageScale})` }}
              />
            </motion.div>
            <motion.div
              style={{ y: parallaxYForeground }}
              className="relative flex-1 overflow-hidden"
            >
              <img
                src="https://images.ctfassets.net/hdznx4p7ef81/6YIz7DoFu6vD2njwLTB6vs/1b74a042bf21b293fc6e467959a8bef6/Home_Cleaning_Tips_Blog-edit2.png"
                alt="Bottom Image"
                className="w-full h-full object-cover object-center"
                style={{ transform: `scale(${imageScale})` }}
              />
            </motion.div>
          </div>
        ) : (
          // Horizontal layout: images side by side.
          <div className="flex h-full">
            <motion.div
              style={{ y: parallaxYBackground, filter: blurBackground }}
              className="relative w-1/2 h-full overflow-hidden"
            >
              <img
                src="https://images.ctfassets.net/hdznx4p7ef81/7iA5UBx6HnqzASrlpsYanj/b0316a9e6795a9aacf2893150beae9ba/Home_Cleaning_Tips_Blog-edit1.png"
                alt="Left Image"
                className="w-full h-full object-cover object-center"
                style={{ transform: `scale(${imageScale})` }}
              />
            </motion.div>
            <motion.div
              style={{ y: parallaxYRight }}
              className="relative w-1/2 h-full overflow-hidden"
            >
              <img
                src="https://images.ctfassets.net/hdznx4p7ef81/6YIz7DoFu6vD2njwLTB6vs/1b74a042bf21b293fc6e467959a8bef6/Home_Cleaning_Tips_Blog-edit2.png"
                alt="Right Image"
                className="w-full h-full object-cover object-center"
                style={{ transform: `scale(${imageScale})` }}
              />
            </motion.div>
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default ParallaxSection;
