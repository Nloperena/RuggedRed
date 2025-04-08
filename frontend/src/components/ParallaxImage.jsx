import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";

const ParallaxImage = ({ src, alt, className = "", isLarger = false }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

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
      className={`fixed inset-0 overflow-visible ${className}`}
      style={{
        width: '100%',
        height: '100vh',
        minHeight: '100vh'
      }}
    >
      <motion.div
        className="absolute inset-0"
        style={{ 
          zIndex: isLarger ? 2 : 1,
          width: '100%',
          height: '100vh',
          minHeight: '100vh'
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
        <div className="relative w-full h-full">
          <img
            src={src}
            alt={alt}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
            style={{ 
              objectPosition: 'center'
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