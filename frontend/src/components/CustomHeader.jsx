import React from "react";
import { motion } from "framer-motion";

export default function CustomHeader({
  backgroundImg,      // URL for the full-screen background image
  layeredImage,       // URL for the overlaid image (e.g. product preview)
  heading = "Our Latest Product Line",
  subheading = "Powerful, Sustainable, Ready for Anything",
  description = "Discover how our products can tackle any challenge—from quick spills to industrial grime.",
  highlightLine = "Experience the next generation of cleaning solutions.",
  buttonLabel = "Learn More",
  onButtonClick = () => {},
  reverse = false,    // If true, image appears on the left and text on the right
}) {
  return (
    <section className="relative w-full py-12 px-6 overflow-hidden">
      {/* Blurred Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImg})`,
          filter: "blur(6px)",
        }}
      />
      {/* Gradient Overlay for better contrast */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
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
        {/* TEXT SECTION */}
        <motion.div
          className={`w-full md:w-1/2 flex flex-col mb-8 md:mb-0 ${reverse ? "order-2 md:order-2" : "order-1 md:order-1"}`}
          initial={{ x: reverse ? 100 : -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="bg-white bg-opacity-75 p-6 rounded">
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
            <p className="text-base sm:text-lg md:text-xl text-gray-800 font-bold mb-6">
              {highlightLine}
            </p>
            {buttonLabel && (
              <button
                onClick={onButtonClick}
                className="inline-block bg-[#D3242A] text-white py-3 px-6 rounded-full font-semibold hover:bg-[#B91D23] transition-colors duration-300 max-w-xs"
              >
                {buttonLabel}
              </button>
            )}
          </div>
        </motion.div>

        {/* IMAGE SECTION */}
        <motion.div
          className={`w-full md:w-1/2 flex justify-center ${reverse ? "order-1 md:order-1" : "order-2 md:order-2"}`}
          initial={{ x: reverse ? -100 : 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src={layeredImage}
            alt="Layered Preview"
            className="rounded-lg drop-shadow-xl w-full max-w-sm md:max-w-md object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}

