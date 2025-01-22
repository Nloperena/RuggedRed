import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  // 1) Define animation variants for content with increased duration
  const contentVariants = {
    hidden: { opacity: 0, y: -50 }, // Start above and invisible
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1.5, delay: 0.1 } // Slower animation (1.5s)
    },
  };

  // 2) Define hover animations for icons with rotation adjusted
  const iconHover = {
    hover: { 
      scale: 1.2, 
      rotate: -10, // Rotate counter-clockwise for a unique effect
      transition: { type: "spring", stiffness: 300 } 
    },
  };

  // 3) Define hover animations for input with subtle scaling
  const inputHover = {
    hover: { 
      scale: 1.05, 
      transition: { duration: 0.3 } 
    },
  };

  // 4) Define hover animations for button with subtle scaling
  const buttonHover = {
    hover: { 
      scale: 1.1, 
      transition: { duration: 0.3 } 
    },
  };

  return (
    <footer className="bg-gradient-to-b from-[#D3242A] to-[#9B1218] text-white py-12 px-6">
      <motion.div
        className="container mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // Trigger at 20% visibility
        variants={contentVariants}
      >
        {/* Top Section: Subscription Updates */}
        <h2
          className="text-2xl md:text-3xl font-bold mb-4"
          style={{ fontFamily: "Geogrotesque, sans-serif" }}
        >
          Get Updates from the Creators of Rugged Red
        </h2>
        <p
          className="text-base md:text-lg mb-8"
          style={{ fontFamily: "Geogrotesque, sans-serif" }}
        >
          New discounts, launches, and much more
        </p>

        {/* Subscription Form */}
        <form className="flex flex-col sm:flex-row justify-center items-center mb-12 space-y-4 sm:space-y-0 sm:space-x-4">
          <motion.input
            type="email"
            placeholder="Enter Email"
            className="px-6 py-3 w-full sm:w-72 text-gray-700 bg-white rounded-full shadow-lg outline-none focus:ring-2 focus:ring-red-400"
            whileHover="hover"
            variants={inputHover}
            required
            aria-label="Email Address"
          />
          <motion.button
            type="submit"
            className="bg-black text-white px-8 py-3 rounded-full shadow-lg hover:bg-gray-800 transition"
            whileHover="hover"
            variants={buttonHover}
            style={{ fontFamily: "Geogrotesque, sans-serif" }}
          >
            Subscribe
          </motion.button>
        </form>

        {/* Icon Row */}
        <div className="flex justify-center space-x-6 mb-12 flex-wrap">
          {[
            { icon: "fa-solid fa-envelope", label: "Email" },
            { icon: "fa-brands fa-instagram", label: "Instagram" },
            { icon: "fa-brands fa-facebook", label: "Facebook" },
            { icon: "fa-brands fa-twitter", label: "Twitter" },
            { icon: "fa-solid fa-image", label: "Image License Info" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center w-20 sm:w-auto mb-4 sm:mb-0"
            >
              <motion.i
                className={`${item.icon} text-3xl mb-2 cursor-pointer`}
                whileHover="hover"
                variants={iconHover}
                aria-hidden="true"
              />
              <span
                className="text-xs md:text-sm uppercase tracking-wide"
                style={{ fontFamily: "Geogrotesque, sans-serif" }}
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom Section: Branding */}
        <motion.div variants={contentVariants}>
          <div className="flex flex-col sm:flex-row justify-center items-center text-center space-y-2 sm:space-y-0 sm:space-x-6">
            <p
              className="text-sm"
              style={{ fontFamily: "Geogrotesque, sans-serif" }}
            >
              Powered by{" "}
              <a
                href="https://ForzaBuilt.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold hover:text-gray-300 transition-colors duration-200"
                style={{ fontFamily: "Geogrotesque, sans-serif" }}
              >
                ForzaBuilt
              </a>
            </p>
            <p
              className="text-sm"
              style={{ fontFamily: "Geogrotesque, sans-serif" }}
            >
              &bull; © 2025 Rugged Red. All Rights Reserved.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
