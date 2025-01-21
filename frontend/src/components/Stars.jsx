// Stars.jsx
import React from "react";
import { motion } from "framer-motion";

const Stars = ({ count, sizeRange, durationRange, opacityRange }) => {
  /**
   * Generates sparkly star animations in the background.
   * @returns {Array} - Array of motion.div elements representing stars.
   */
  const generateStars = () => {
    return [...Array(count)].map((_, index) => {
      const size =
        Math.random() * (sizeRange[1] - sizeRange[0]) + sizeRange[0];
      const rotationDirection = Math.random() < 0.5 ? 1 : -1;
      const scaleFactor = Math.random() * (1.5 - 10) + 1;
      return (
        <motion.div
          key={index}
          initial={{ opacity: 0, rotate: 0 }}
          animate={{
            opacity: [opacityRange[0], opacityRange[1], opacityRange[0]],
            rotate: [0, 360 * rotationDirection],
            scale: [1, scaleFactor, 1],
          }}
          transition={{
            repeat: Infinity,
            duration:
              Math.random() * (durationRange[1] - durationRange[0]) +
              durationRange[0],
            delay: Math.random() * 2,
          }}
          className="absolute text-white"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${size}px`,
            height: `${size}px`,
            filter: "drop-shadow(0 0 15px rgba(255, 255, 255, 0.9))",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-full h-full fill-current"
          >
            <path d="M12 2 L13 8 L18 9 L13 10 L12 16 L11 10 L6 9 L11 8 L12 2 Z" />
          </svg>
        </motion.div>
      );
    });
  };

  return <>{generateStars()}</>;
};

export default Stars;
