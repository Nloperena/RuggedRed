import React, { useState } from "react";
import { motion } from "framer-motion";
import Stars from "./Stars";
import kitchen1 from "../assets/kitchen1.png";
import kitchen2 from "../assets/kitchen2.jpg";
import kitchen3 from "../assets/kitchen3.png";
import './Hero.css';

const Hero = () => {
  const images = [kitchen1, kitchen2, kitchen3];
  const [backgroundImage, setBackgroundImage] = useState(kitchen3);
  const [currentIndex, setCurrentIndex] = useState(images.indexOf(kitchen3));

  const handleBackgroundChange = (index) => {
    setBackgroundImage(images[index]);
    setCurrentIndex(index);
  };

  const handleNextImage = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    handleBackgroundChange(nextIndex);
  };

  const handlePreviousImage = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    handleBackgroundChange(prevIndex);
  };

  return (
    <section
      id="hero"
      className="relative z-10 flex items-center"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 85%, rgba(255, 255, 255, 1)), url(${backgroundImage})`,
      }}
    >
      {/* Sparkly Stars in the background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Stars
          count={30}
          sizeRange={[5, 15]}
          durationRange={[3, 6]}
          opacityRange={[0.4, 0.9]}
        />
      </div>

      {/* Main wrapper: .hero-content with negative top margin for effect */}
      <div className="hero-content relative z-10 w-full">
        {/* Grid with left & right columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6 h-full">
          {/* Left column: Empty box for aesthetics */}
          <div className="hidden lg:block h-full">
            <div className="w-full h-full bg-gray-100 opacity-0 rounded-lg"></div>
          </div>

          {/* Right column: Content wrapper */}
          <div className="flex flex-col justify-center items-start text-left space-y-6">
            {/* Headline */}
            <motion.h1
              className="font-extrabold leading-snug text-[#D3242A] mb-2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <span className="block">A PROVEN</span>
              <span className="block">POWERFUL CLEAN</span>
            </motion.h1>

            {/* Subheading with glass container */}
            <motion.div
              className="inline-block bg-white bg-opacity-70 backdrop-filter backdrop-blur-lg rounded-lg drop-shadow-md p-4 sm:p-6 md:p-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <p className="text-[#222222] leading-relaxed font-medium mb-1">
                Tough enough for industrial messes, safe enough for your home.
                Get the clean you can trust.
              </p>
            </motion.div>

            {/* Call to Action Button */}
            <motion.div
              className="w-full flex justify-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.5 }}
            >
              <a
                href="#products"
                className="inline-block px-6 py-3 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base md:text-lg xl:text-xl font-bold text-white bg-[#D3242A] border-2 border-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white shadow-lg"
                onMouseDown={(e) => {
                  e.target.style.transform = "scale(0.95)";
                  e.target.style.boxShadow = "0 0 20px rgba(255, 255, 255, 0.8)";
                }}
                onMouseUp={(e) => {
                  e.target.style.transform = "scale(1)";
                  e.target.style.boxShadow = "0 0 12px rgba(255, 255, 255, 0.6)";
                }}
                onMouseOver={(e) => {
                  e.target.style.boxShadow =
                    "0 0 15px rgba(255, 255, 255, 0.8)";
                }}
                onMouseOut={(e) => {
                  e.target.style.boxShadow =
                    "0 0 12px rgba(255, 255, 255, 0.6)";
                }}
                aria-label="Start Cleaning Products"
              >
                Start Cleaning Today
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Background Image Switcher */}
      <div className="absolute bottom-4 left-4 flex space-x-2">
        <button
          onClick={() => handleBackgroundChange(0)}
          className="w-8 h-8 rounded-full border-2 border-white"
          style={{ backgroundImage: `url(${kitchen1})`, backgroundSize: 'cover' }}
        ></button>
        <button
          onClick={() => handleBackgroundChange(1)}
          className="w-8 h-8 rounded-full border-2 border-white"
          style={{ backgroundImage: `url(${kitchen2})`, backgroundSize: 'cover' }}
        ></button>
        <button
          onClick={() => handleBackgroundChange(2)}
          className="w-8 h-8 rounded-full border-2 border-white"
          style={{ backgroundImage: `url(${kitchen3})`, backgroundSize: 'cover' }}
        ></button>
      </div>

      {/* Left Arrow */}
      <button
        onClick={handlePreviousImage}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white text-black flex items-center justify-center shadow-lg"
      >
        &lt;
      </button>

      {/* Right Arrow */}
      <button
        onClick={handleNextImage}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white text-black flex items-center justify-center shadow-lg"
      >
        &gt;
      </button>
    </section>
  );
};

export default Hero;