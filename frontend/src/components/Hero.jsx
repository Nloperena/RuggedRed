// Import React so we can build a component
import React from "react";
// Import the motion object from framer-motion for animations
import { motion } from "framer-motion";
import heroBackground from "../assets/kitchen1.png"; // Adjust the path as needed

const Hero = () => {
  /**
   * Generates sparkly star animations in the background.
   * @param {number} count - Number of stars to generate.
   * @param {Array} sizeRange - Min and max size for the stars.
   * @param {Array} durationRange - Min and max duration for the animation cycles.
   * @param {Array} opacityRange - Min and max opacity for the stars.
   * @returns {Array} - Array of motion.div elements representing stars.
   */
  const generateStars = (count, sizeRange, durationRange, opacityRange) => {
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

  return (
    <section
      id="hero"
      className="relative z-10 min-h-[600px] sm:min-h-[700px] md:min-h-[800px] lg:min-h-[900px] xl:min-h-[1000px] flex items-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Sparkly Stars in the background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {generateStars(30, [5, 15], [3, 6], [0.4, 0.9])}
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 py-10 relative z-10">
        {/* Hero content */}
        <div className="text-center max-w-4xl mx-auto p-6 sm:p-8 md:p-12 bg-transparent">
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
              drop-shadow-2xl
              mt-32
              whitespace-nowrap 
              sm:whitespace-normal
            "
            style={{
              marginLeft: "1rem",
              marginRight: "1rem",
            }}
          >
            A PROVEN POWERFUL CLEAN
          </h1>

          {/* Paragraph Container */}
          <div
            className="
              inline-block
              p-4
              sm:p-6
              md:p-8
              bg-white
              bg-opacity-60
              backdrop-filter
              backdrop-blur-lg
              rounded-md
              mb-8
              drop-shadow-lg
            "
          >
            <p
              className="
                text-lg 
                sm:text-xl 
                md:text-2xl 
                lg:text-3xl 
                text-[#333333] 
                leading-relaxed
                font-semibold
                drop-shadow-lg
              "
            >
              Tough enough for industrial messes, safe enough for your home. Get the clean you can trust.
            </p>
          </div>

          {/* Button */}
          <a
            href="#products"
            className="
              inline-block
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
              hover:bg-gray-800
              transition duration-300
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
            "
            aria-label="Start Cleaning Products"
          >
            Start Cleaning Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
