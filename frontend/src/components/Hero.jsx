import React from "react";
import { motion } from "framer-motion";
import Countertop from "../assets/countertop.webp";

const Hero = () => {
  // Same star generator as before
  const generateStars = (count, sizeRange, durationRange, opacityRange) => {
    return [...Array(count)].map((_, index) => {
      const size = Math.random() * (sizeRange[1] - sizeRange[0]) + sizeRange[0];
      return (
        <motion.div
          key={index}
          initial={{ opacity: 0, rotate: 0 }}
          animate={{
            opacity: [opacityRange[0], opacityRange[1], opacityRange[0]],
            rotate: [0, 360],
            scale: [1, 1.2, 1],
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
      /*
        Increase min-height across breakpoints:
        - 600px on mobile
        - 700px on sm
        - 800px on md
        - 900px on lg
        - 1000px on xl
      */
      className="
        relative z-10 bg-white
        min-h-[600px]
        sm:min-h-[700px]
        md:min-h-[800px]
        lg:min-h-[900px]
        xl:min-h-[1000px]
        flex
        items-end
      "
      style={{
        backgroundImage: `url(${Countertop})`,
        backgroundSize: "cover",
        // Move the background image higher
        backgroundPosition: "top",
      }}
    >
      {/* Sparkly Stars in the background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {generateStars(30, [5, 15], [3, 6], [0.4, 0.9])}
      </div>

      {/* 
        We add top margin (mt-16) so on mobile 
        there's enough space under the navbar.
      */}
      <div className="container max-w-screen-2xl mx-auto px-4 pb-10 relative mt-16">
        <div className="flex flex-col md:flex-row items-center">
          {/* LEFT SIDE: The text box */}
          <div
            className="
              w-full md:w-1/2
              text-center md:text-left
              mb-8 md:mb-0
              relative z-20
            "
          >
            <div
              className="p-6 sm:p-8 md:p-12 rounded-3xl shadow-lg"
              style={{
                backdropFilter: "blur(10px)",
                backgroundColor: "rgba(255, 255, 255, 0.6)",
              }}
            >
              {/* Bigger heading sizes */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-4 text-[#D3242A]">
                A Proven Powerful Clean
              </h1>
              {/* Bigger paragraph text */}
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700 mb-8 leading-relaxed">
                Rugged Red is a powerful, non-toxic cleaning solution
                that works hard, so you don’t have to.
              </p>
              <a
                href="#products"
                className="px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg md:text-xl font-bold text-white bg-black"
              >
                Start Cleaning
              </a>
            </div>
          </div>

          {/* RIGHT SIDE: The hero image */}
          <div
            className="
              w-full md:w-1/2
              flex justify-center
              mt-6 md:mt-12
              relative z-10
            "
          >
            <img
              src="https://images.ctfassets.net/hdznx4p7ef81/6wqdD2LcrXiHoKHFzExEtz/abcb41e3f9d66cbe030c4810e68f480a/RRBottleHeroAnimation_1.gif"
              alt="Hero Bottle"
              /*
                Increase image size further:
                - max-w-md on mobile
                - max-w-lg on sm
                - max-w-2xl on md
                - max-w-3xl on lg
                - max-w-4xl on xl
              */
              className="
                max-w-md
                sm:max-w-lg
                md:max-w-2xl
                lg:max-w-3xl
                xl:max-w-4xl
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
