// Hand.jsx
import React from "react";
import { motion } from "framer-motion";
import HandImage from "../assets/blueragtransparent.png"; // Update with the correct path

const Hand = () => {
  return (
    <motion.img
      src={HandImage}
      alt="Decorative Hand"
      className="absolute right-0 bottom-0 max-w-[300px] md:max-w-[400px] z-0 pointer-events-none"
      style={{ transformOrigin: "top left" }}
      animate={{
        x: [0, 25, -20, 15, -15, 0],
        y: [0, 10, 20, 40, 20, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: [0.42, 0, 0.58, 1], // Eases in and out
      }}
    />
  );
};

export default Hand;
