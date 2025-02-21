// Hand.jsx
import React from "react";
import { motion } from "framer-motion";
import HandImage from "../assets/blueragtransparent.png"; // Update path if needed

const Hand = () => {
  return (
    <motion.img
      src={HandImage}
      alt="Decorative Hand"
      className="absolute right-0 bottom-0 max-w-[300px] md:max-w-[400px] z-0 pointer-events-none"
      style={{ transformOrigin: "top left" }}
      animate={{
        // Fewer keyframes, repeated back-and-forth
        x: [-30, 30],    // side-to-side elliptical
        y: [10, -20],    // up-down elliptical
        rotate: [-10, 10], // gentle rotation
      }}
      transition={{
        duration: 3,           // Time to go from start to end
        repeat: Infinity,      // Loop forever
        repeatType: "reverse", // Go forward, then back
        ease: "easeInOut",     // Smooth acceleration
      }}
    />
  );
};

export default Hand;
