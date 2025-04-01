import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Stars from "./Stars";
import kitchen3 from "../assets/kitchen3.png";
import './Hero.css';

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative z-10 flex items-center"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 85%, rgba(255, 255, 255, 1)), url(${kitchen3})`,
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

      {/* Main wrapper */}
      <motion.div
        className="hero-content relative z-10 w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6 h-full">
          <div className="hidden lg:block h-full">
            <div className="w-full h-full bg-gray-100 opacity-0 rounded-lg"></div>
          </div>

          {/* Right column */}
          <div className="flex flex-col justify-center items-start text-left space-y-6">
            <motion.h1
              className="font-extrabold leading-snug text-[#D3242A] mb-2 geogrotesque-heading"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <span className="block">A PROVEN</span>
              <span className="block">POWERFUL CLEAN</span>
            </motion.h1>

            {/* Subheading */}
            <motion.div
              className="inline-block bg-white bg-opacity-70 backdrop-filter backdrop-blur-lg rounded-lg drop-shadow-md p-4 sm:p-6 md:p-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.5 }}
            >
              <p className="text-[#222222] leading-relaxed font-medium mb-1 subheading-font">
                Tough enough for industrial messes, safe enough for your home.
                Get the clean you can trust.
              </p>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              className="w-full flex justify-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.5 }}
            >
              <Link
                to="/products"
                className="inline-block px-6 py-3 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base md:text-lg xl:text-xl font-bold text-white bg-[#D3242A] border-2 border-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white shadow-lg"
              >
                Start Cleaning Today
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;