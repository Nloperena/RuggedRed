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
    <footer className="bg-gradient-to-b from-[#D3242A] to-[#9B1218] text-white py-8">
      <motion.div
        className="container mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={contentVariants}
      >
        {/* Top Section: Subscription Updates */}
        <h2 className="text-lg md:text-2xl font-bold mb-2">
          GET UPDATES FROM THE CREATORS OF RUGGED RED
        </h2>
        <p className="text-sm md:text-base mb-6">
          NEW DISCOUNTS, LAUNCH, AND MUCH MORE
        </p>

        {/* Subscription Form */}
        <form className="flex justify-center mb-8">
          <motion.input
            type="email"
            placeholder="Enter Email"
            className="px-4 py-2 w-64 text-gray-700 bg-white rounded-l-full shadow-lg outline-none"
            whileHover="hover"
            variants={inputHover}
          />
          <motion.button
            type="submit"
            className="bg-black text-white px-6 py-2 rounded-r-full shadow-lg hover:bg-gray-800"
            whileHover="hover"
            variants={buttonHover}
          >
            SUBSCRIBE
          </motion.button>
        </form>

        {/* Icon Row */}
        <div className="flex justify-center space-x-6 mb-8">
          {[
            { icon: "fa-solid fa-envelope", label: "Email" },
            { icon: "fa-brands fa-instagram", label: "Instagram" },
            { icon: "fa-brands fa-facebook", label: "Facebook" },
            { icon: "fa-brands fa-twitter", label: "Twitter" },
            { icon: "fa-solid fa-image", label: "Image License Info" },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Apply hover interaction to only the icon */}
              <motion.i
                className={`${item.icon} text-2xl mb-1`}
                whileHover="hover"
                variants={iconHover}
              />
              {/* Icon Label (static, no hover effects) */}
              <span className="text-xs md:text-sm uppercase tracking-wide">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom Section: Branding */}
        <motion.div variants={contentVariants}>
          <div className="flex justify-center items-center space-x-2">
            <p className="text-sm">
              Powered by{" "}
              <a
                href="https://ForzaBuilt.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold hover:text-gray-300"
              >
                ForzaBuilt
              </a>
            </p>
            <p className="text-sm">&bull; © 2025 Rugged Red. All Rights Reserved.</p>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
