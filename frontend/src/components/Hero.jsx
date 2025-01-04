import React from "react";
import { motion } from "framer-motion";
import HeroBottle1 from "../assets/HeroBottle1.png";
import HeroBottle2 from "../assets/HeroBottle2.png";
import Countertop from "../assets/countertop.webp";

const Hero = () => {
  // Function to generate stars dynamically
  const generateStars = (count, sizeRange, durationRange, opacityRange) => {
    return [...Array(count)].map((_, index) => (
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
          width: `${Math.random() * (sizeRange[1] - sizeRange[0]) +
            sizeRange[0]}px`,
          height: `${Math.random() * (sizeRange[1] - sizeRange[0]) +
            sizeRange[0]}px`,
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
    ));
  };

  return (
    <div className="relative z-20">
      {/* Background Stars Layer */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {generateStars(100, [5, 15], [2, 5], [0.3, 0.8])}
        {generateStars(50, [15, 30], [4, 8], [0.5, 1])}
        {generateStars(20, [30, 50], [6, 10], [0.7, 1])}
      </div>

      <section
        id="hero"
        className="bg-white min-h-screen flex items-center overflow-hidden"
        style={{
          backgroundImage: `url(${Countertop})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto flex flex-col md:flex-row items-center relative">
          {/* Text Section with Glassmorphic Container */}
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0 relative">
            <div
              className="p-10 rounded-3xl shadow-lg relative"
              style={{
                backdropFilter: "blur(10px)",
                backgroundColor: "rgba(255, 255, 255, 0.6)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
              }}
            >
              <h1
                className="text-5xl md:text-8xl font-extrabold leading-tight"
                style={{ color: "#D3242A" }}
              >
                A Proven Powerful Clean
              </h1>
              <p className="text-2xl md:text-4xl text-gray-600 mb-12 leading-relaxed">
                Experience Rugged Red: a powerful, non-toxic cleaning solution
                that works hard, so you don’t have to.
              </p>
              <a
                href="#products"
                className="px-16 py-6 rounded-full text-3xl font-bold text-white transition"
                style={{
                  backgroundColor: "#000000", // Black button
                }}
              >
                Start Cleaning
              </a>
            </div>

            {/* Stars Inside the Glassmorphic Container */}
            <div className="absolute inset-0 pointer-events-none">
              {generateStars(50, [5, 10], [2, 4], [0.4, 0.8])}
              {generateStars(20, [10, 20], [3, 6], [0.5, 0.9])}
              {generateStars(10, [20, 40], [4, 8], [0.7, 1])}
            </div>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 flex justify-center items-center relative">
            {/* Red Bottle */}
            <img
              src={HeroBottle2}
              alt="Hero Bottle 2"
              className="w-[85rem] md:w-[105rem] z-20 absolute"
              style={{
                left: "-10rem", // Slightly overlaps green bottle
              }}
            />
            {/* Green Bottle */}
            <img
              src={HeroBottle1}
              alt="Hero Bottle 1"
              className="w-[80rem] md:w-[100rem] z-10 absolute"
              style={{
                left: "5rem", // Slightly shifted under red bottle
              }}
            />
          </div>
        </div>

        {/* Wave at the Bottom */}
        <div className="absolute bottom-0 w-full z-10">
          <svg
            viewBox="0 0 1440 320"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
          >
            <path
              fill="#D3242A"
              fillOpacity="1"
              d="M0,256L60,224C120,192,240,128,360,112C480,96,600,128,720,144C840,160,960,160,1080,144C1200,128,1320,96,1380,80L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>
    </div>
  );
};

export default Hero;
