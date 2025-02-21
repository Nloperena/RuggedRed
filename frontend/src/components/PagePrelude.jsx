import React from "react";
import { motion } from "framer-motion";
import backgroundImg from "../assets/countertop-landscape-inverse.png"; // Adjust path
import ProductHeroImg from "../assets/RR-ProductHeroImg.png";

export default function PagePrelude({
  heading = "Our Latest Product Line",
  subheading = "Powerful, Sustainable, Ready for Anything",
  description = "Discover how Rugged Red products can tackle any challenge—from quick spills to industrial grime.",
  highlightLine = "Experience the next generation of cleaning solutions.",
  buttonLabel = "Learn More",
  onButtonClick = () => {},
  reverse = false,
}) {
  return (
    <section className="relative w-full py-12 px-6 overflow-hidden">
      {/* Blurred background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImg})`,
          // More intense blur on entire background
          filter: "blur(6px)",
        }}
      />
      {/* Left-to-right gradient overlay for text contrast + bottom fade */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          // Fade from a semi-opaque white on the left to transparent on the right,
          // plus fade out at bottom using a vertical gradient
          background: `
            linear-gradient(
              to bottom,
              rgba(255,255,255,0.8) 70%,
              transparent 100%
            ),
            linear-gradient(
              to right,
              rgba(255,255,255,0.8) 25%,
              transparent 75%
            )
          `,
        }}
      />

      <div className="relative container mx-auto flex flex-col md:flex-row items-center justify-between z-10">
        {/* TEXT SECTION: On desktop, left side by default */}
        <motion.div
          className={`w-full md:w-1/2 flex flex-col mb-8 md:mb-0 ${
            reverse ? "order-2 md:order-2" : "order-1 md:order-1"
          }`}
          initial={{ x: reverse ? 100 : -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2
            className="text-[#D3242A] text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 uppercase"
            style={{ fontFamily: "Geogrotesque, sans-serif" }}
          >
            {heading}
          </h2>
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 mb-3">
            {subheading}
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-2">
            {description}
          </p>
          <p className="text-sm sm:text-base md:text-lg text-gray-800 font-bold mb-6">
            {highlightLine}
          </p>

          <button
            onClick={onButtonClick}
            className="inline-block bg-[#D3242A] text-white py-3 px-6 rounded-full font-semibold hover:bg-[#B91D23] transition-colors duration-300 max-w-xs"
          >
            {buttonLabel}
          </button>
        </motion.div>

        {/* IMAGE SECTION: On desktop, right side by default */}
        <motion.div
          className={`w-full md:w-1/2 flex justify-center ${
            reverse ? "order-1 md:order-1" : "order-2 md:order-2"
          }`}
          initial={{ x: reverse ? -100 : 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src={ProductHeroImg}
            alt="Product preview"
            // Removed box shadow, replaced w/ drop-shadow
            className="rounded-lg drop-shadow-xl w-full max-w-sm md:max-w-md object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
