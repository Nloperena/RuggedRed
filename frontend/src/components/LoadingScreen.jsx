// LoadingScreen.jsx
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import usaflaggif from "../assets/usaflaggif.webp"; // WebP image
import usaflaggifFallback from "../assets/icons/Flag Icon.png"; // PNG fallback

const LoadingScreen = ({ isFading }) => {
  const loadingVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0, transition: { duration: 0.5 } }, // Fade out over 0.5 seconds
  };

  useEffect(() => {
    // Disable scrolling when loading
    document.body.style.overflow = "hidden";
    return () => {
      // Re-enable scrolling when loading screen is removed
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <motion.div
      className={`fixed inset-0 bg-[#D3242A] flex flex-col items-center justify-center z-50 transition-opacity duration-500 ${
        isFading ? "opacity-0" : "opacity-100"
      }`}
      initial="visible"
      animate={isFading ? "hidden" : "visible"}
      variants={loadingVariants}
    >
      {/* Logo with Fallback */}
      <picture className="mb-4">
        <source srcSet={usaflaggif} type="image/webp" />
        <img
          src={usaflaggifFallback}
          alt="USA Flag"
          className="w-32 h-auto object-contain" // Adjusted classes to prevent squishing
        />
      </picture>
      {/* FontAwesome Spinner Icon */}
      <i className="fas fa-spinner fa-spin text-white text-4xl"></i>
      {/* Optional Text */}
      <p className="text-white mt-4 text-lg">Welcome to Rugged Red!</p>
    </motion.div>
  );
};

export default LoadingScreen;
