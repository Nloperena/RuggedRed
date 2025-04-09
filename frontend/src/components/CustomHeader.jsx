import React from "react";
import { motion } from "framer-motion";

export default function CustomHeader({
  backgroundImg,      // URL for the full-screen background image
  heading = "Our Latest Product Line",
  subheading = "Powerful, Sustainable, Ready for Anything",
  description = "Discover how our products can tackle any challenge—from quick spills to industrial grime.",
  highlightLine = "Experience the next generation of cleaning solutions.",
}) {
  return (
    <section className="relative w-full py-12 px-6 overflow-hidden">
      {/* Blurred Background (Less Intense Blur Now) */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImg})`,
          filter: "blur(2px)", // ✅ Reduced blur significantly
        }}
      />
      {/* Gradient Overlay for subtle contrast */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(
            to bottom,
            rgba(255,255,255,0.7) 50%,
            transparent 100%
          )`,
        }}
      />
      <div className="relative container mx-auto flex flex-col items-center justify-center text-center z-10">
        {/* TEXT SECTION */}
        <motion.div
          className="w-full max-w-3xl bg-white bg-opacity-80 p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#D3242A] uppercase mb-3"
            style={{ fontFamily: "Geogrotesque, sans-serif" }}
          >
            {heading}
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700 mb-3">
            {subheading}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-2">
            {description}
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-800 font-bold">
            {highlightLine}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
