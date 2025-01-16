import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const generateStars = (count, sizeRange, durationRange, opacityRange) => {
    return [...Array(count)].map((_, index) => {
      const size = Math.random() * (sizeRange[1] - sizeRange[0]) + sizeRange[0];
      const rotationDirection = Math.random() < 0.5 ? 1 : -1; 
      const scaleFactor = Math.random() * (1.5 - 10) + 1; 
      return (
        <motion.div
          key={index}
          initial={{ opacity: 0, rotate: 0 }}
          animate={{
            opacity: [opacityRange[0], opacityRange[1], opacityRange[0]],
            rotate: [0, 360 * rotationDirection], // Apply random direction
            scale: [1, scaleFactor, 1], // Apply random scale
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

  return (
    <section
      id="hero"
      className="
        relative
        z-10
        min-h-[600px]
        sm:min-h-[700px]
        md:min-h-[800px]
        lg:min-h-[900px]
        xl:min-h-[1000px]
        flex
        items-center
      "
      style={{
        background: "linear-gradient(to bottom, #ffffff, #d3d3d3)", // Pastel greyish gradient
      }}
    >
      {/* Sparkly Stars in the background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {generateStars(30, [5, 15], [3, 6], [0.4, 0.9])}
      </div>

      {/* Main container */}
      <div className="container mx-auto px-4 py-10 relative"> 
        {/* Hero content */}
        <div
          className="
            text-center 
            max-w-4xl 
            mx-auto 
            p-6 
            sm:p-8 
            md:p-12 
            rounded-3xl 
            shadow-lg
          "
          style={{
            backdropFilter: "blur(10px)",
            backgroundColor: "rgba(255, 255, 255, 0.6)",
            marginBottom: "15rem", // Added marginTop
            paddingTop: "2.5rem", // Added paddingTop
            paddingBottom: "2.5rem", // Added paddingBottom
          }}
        >
          {/* Headline */}
          <h1
            className="
              text-4xl 
              sm:text-5xl 
              md:text-6xl 
              lg:text-7xl 
              font-black 
              leading-tight 
              text-[#D3242A]
              mb-6
            "
            style={{
              marginLeft: "1rem",
              marginRight: "1rem",
            }}
          >
            A PROVEN POWERFUL CLEAN
          </h1>

          {/* Updated paragraph */}
          <p
            className="
              text-lg 
              sm:text-xl 
              md:text-2xl 
              lg:text-3xl 
              text-gray-700 
              mb-8
              leading-relaxed
            "
          >
            New Rugged Red Product Line. Rugged Red is a powerful, non-toxic
            cleaning solution that works hard, so you don’t have to.
          </p>

          {/* Button */}
          <a
            href="#products"
            className="
              px-6 
              py-3 
              sm:px-8 
              sm:py-4 
              rounded-full 
              text-base 
              sm:text-lg 
              md:text-xl 
              font-bold 
              text-white 
              bg-black
            "
          >
            Start Cleaning
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;