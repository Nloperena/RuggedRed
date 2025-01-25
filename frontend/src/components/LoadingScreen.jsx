import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import usaflaggif from "../assets/usaflaggif.webp";
import usaflaggifFallback from "../assets/icons/Flag Icon.png";

const LoadingScreen = ({ isLoading }) => {
  // Prevent scrolling while loading
  useEffect(() => {
    document.body.style.overflow = isLoading ? "hidden" : "auto";
  }, [isLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loading-screen"
          className="fixed inset-0 bg-[#D3242A] flex flex-col items-center justify-center z-[9999]"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Flag */}
          <picture className="mb-4">
            <source srcSet={usaflaggif} type="image/webp" />
            <img
              src={usaflaggifFallback}
              alt="USA Flag"
              className="w-32 h-auto object-contain"
            />
          </picture>

          {/* Spinner */}
          <i className="fas fa-spinner fa-spin text-white text-4xl"></i>

          {/* Text */}
          <p className="text-white mt-4 text-lg">Welcome to Rugged Red!</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
