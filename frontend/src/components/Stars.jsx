import React, { useMemo } from "react";
import { motion } from "framer-motion";

const Stars = ({ count, sizeRange = [50, 100], durationRange, opacityRange }) => {
  /**
   * Generates sparkly star animations in the background.
   * Memoized to prevent unnecessary recalculations on rerenders.
   */
  const stars = useMemo(() => {
    return [...Array(count)].map((_, index) => {
      const size = Math.random() * (sizeRange[1] - sizeRange[0]) + sizeRange[0];
      const rotationDirection = Math.random() < 0.5 ? 1 : -1;
      const duration =
        Math.random() * (durationRange[1] - durationRange[0]) +
        durationRange[0];
      const delay = Math.random() * 2;

      return (
        <motion.div
          key={index}
          initial={{ opacity: 0, rotate: 0 }}
          animate={{
            opacity: [opacityRange[0], opacityRange[1], opacityRange[0]],
            rotate: [0, 360 * rotationDirection],
          }}
          transition={{
            repeat: Infinity,
            duration,
            delay,
          }}
          className="absolute text-white"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${size}px`,
            height: `${size}px`,
            filter: "drop-shadow(0 0 20px rgba(255, 255, 255, 0.9))",
          }}
        >
          {/* Use a reusable SVG for better performance */}
          <StarSVG />
        </motion.div>
      );
    });
  }, [count, sizeRange, durationRange, opacityRange]);

  return <>{stars}</>;
};

/**
 * Reusable Star SVG Component
 */
const StarSVG = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="w-full h-full fill-current"
  >
    <path d="M12 2 L13 8 L18 9 L13 10 L12 16 L11 10 L6 9 L11 8 L12 2 Z" />
  </svg>
);

export default Stars;
