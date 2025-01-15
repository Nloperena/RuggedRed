import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const contentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.1 } },
  };

  const iconHover = {
    hover: { scale: 1.2, rotate: 10, transition: { type: "spring", stiffness: 300 } },
  };

  const inputHover = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  const buttonHover = {
    hover: { scale: 1.1, transition: { duration: 0.3 } },
  };

  return (
    <footer className="bg-gradient-to-b from-[#D3242A] to-[#9B1218] text-white py-8 px-4">
      <motion.div
        className="container mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={contentVariants}
      >
        {/* Top Section: Subscription Updates */}
        <h2
          className="text-lg md:text-2xl font-bold mb-2"
          style={{ fontFamily: "Geogrotesque, sans-serif" }}
        >
          Get Updates from the Creators of Rugged Red
        </h2>
        <p
          className="text-sm md:text-base mb-6"
          style={{ fontFamily: "Geogrotesque, sans-serif" }}
        >
          New discounts, launches, and much more
        </p>

        {/* Subscription Form */}
        <form className="flex flex-col sm:flex-row justify-center items-center mb-8 space-y-4 sm:space-y-0 sm:space-x-2">
          <motion.input
            type="email"
            placeholder="Enter Email"
            className="px-4 py-2 w-full sm:w-64 text-gray-700 bg-white rounded-full shadow-lg outline-none focus:ring-2 focus:ring-red-400"
            whileHover="hover"
            variants={inputHover}
          />
          <motion.button
            type="submit"
            className="bg-black text-white px-6 py-2 rounded-full shadow-lg hover:bg-gray-800 transition"
            whileHover="hover"
            variants={buttonHover}
            style={{ fontFamily: "Geogrotesque, sans-serif" }}
          >
            Subscribe
          </motion.button>
        </form>

        {/* Icon Row */}
        <div className="flex justify-center space-x-6 mb-8 flex-wrap">
          {[
            { icon: "fa-solid fa-envelope", label: "Email" },
            { icon: "fa-brands fa-instagram", label: "Instagram" },
            { icon: "fa-brands fa-facebook", label: "Facebook" },
            { icon: "fa-brands fa-twitter", label: "Twitter" },
            { icon: "fa-solid fa-image", label: "Image License Info" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center w-20 sm:w-auto"
            >
              <motion.i
                className={`${item.icon} text-2xl mb-1`}
                whileHover="hover"
                variants={iconHover}
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
          <div className="flex flex-col sm:flex-row justify-center items-center text-center space-y-2 sm:space-y-0 sm:space-x-4">
            <p
              className="text-sm"
              style={{ fontFamily: "Geogrotesque, sans-serif" }}
            >
              Powered by{" "}
              <a
                href="https://ForzaBuilt.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold hover:text-gray-300"
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
