import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";

const ParallaxImage = ({ src, alt, className = "", isLarger = false }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], isLarger ? [1.4, 1.5, 1.4] : [1.2, 1.3, 1.2]);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setIsLoaded(true);
  }, [src]);

  return (
    <div
      ref={ref}
      className={`relative overflow-visible ${className}`}
      style={{
        width: '100%',
        minWidth: '100%'
      }}
    >
      <motion.div
        className="absolute inset-0"
        style={{ 
          y,
          scale,
          zIndex: isLarger ? 2 : 1,
          width: '100%',
          minWidth: '100%'
        }}
        initial={{ opacity: 0 }}
        animate={{
          opacity: isInView ? 1 : 0,
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
      >
        <div className="relative" style={{ width: '100%', minWidth: '100%' }}>
          <img
            src={src}
            alt={alt}
            className={`transition-all duration-700 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
            style={{ 
              objectPosition: 'center',
              transform: `scale(${isLarger ? 5 : 4.5})`,
              transformOrigin: 'center center',
              width: '100%',
              minWidth: '100%'
            }}
          />
          <div
            className={`absolute inset-0 bg-black transition-opacity duration-300 ${
              isLoaded ? "opacity-0" : "opacity-100"
            }`}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default ParallaxImage; 