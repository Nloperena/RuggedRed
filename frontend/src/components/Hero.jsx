import React from "react";
import { motion } from "framer-motion";
import Countertop from "../assets/countertop.webp";

const Hero = () => {
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
      className="relative z-10 bg-white min-h-screen flex items-center"
      style={{
        backgroundImage: `url(${Countertop})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 pointer-events-none z-0">
        {generateStars(30, [5, 15], [3, 6], [0.4, 0.9])}
      </div>
      <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <div
            className="relative p-8 md:p-12 rounded-3xl shadow-lg"
            style={{
              backdropFilter: "blur(10px)",
              backgroundColor: "rgba(255, 255, 255, 0.6)",
            }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 text-[#D3242A]">
              A Proven Powerful Clean
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-700 mb-8 leading-relaxed">
              Rugged Red is a powerful, non-toxic cleaning solution
              that works hard, so you don’t have to.
            </p>
            <a
              href="#products"
              className="px-6 py-3 md:px-8 md:py-4 rounded-full text-lg md:text-xl font-bold text-white bg-black"
            >
              Start Cleaning
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
          <img
            src="https://images.ctfassets.net/hdznx4p7ef81/6wqdD2LcrXiHoKHFzExEtz/abcb41e3f9d66cbe030c4810e68f480a/RRBottleHeroAnimation_1.gif"
            alt="Hero Bottle"
            className="max-w-sm md:max-w-lg lg:max-w-2xl xl:max-w-3xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
