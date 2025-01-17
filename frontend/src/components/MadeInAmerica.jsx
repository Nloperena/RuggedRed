// src/components/MadeInAmerica.jsx

import React from "react";
import { motion } from "framer-motion";
import FlagIcon from "../assets/icons/Flag Icon.png"; // Replace with your flag icon path
import Hand from "../assets/blueragtransparent.png"; // Import the hand image

const MadeInAmerica = () => {
  return (
    <section className="relative bg-[#F9F9F9] py-16 px-6 md:px-12 overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between relative z-10">
        {/* Text Section */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <h2
            className="text-4xl font-bold text-[#D3242A] mb-6"
            style={{ fontFamily: "Geogrotesque, sans-serif" }}
          >
            Made in America
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Our products are proudly crafted in America, ensuring the highest
            quality and standards. Supporting local industries and communities
            is at the heart of what we do.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            By choosing our products, you're not only getting exceptional
            performance but also contributing to the growth of American
            manufacturing.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            {/* Shop Now Button */}
            <a
              href="/shop"
              className="w-full sm:w-auto bg-[#D3242A] text-white px-6 py-3 rounded-full text-center font-semibold hover:bg-[#a21f20] transition duration-300"
            >
              Shop Now
            </a>

            {/* Learn More Button */}
            <a
              href="/learn-more"
              className="w-full sm:w-auto bg-transparent border border-[#D3242A] text-[#D3242A] px-6 py-3 rounded-full text-center font-semibold hover:bg-[#D3242A] hover:text-white transition duration-300"
            >
              Learn More
            </a>

            {/* Contact Us Button */}
            <a
              href="/contact"
              className="w-full sm:w-auto bg-transparent border border-[#6B7280] text-[#6B7280] px-6 py-3 rounded-full text-center font-semibold hover:bg-[#6B7280] hover:text-white transition duration-300"
            >
              Contact Us
            </a>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center relative"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <img
            src={FlagIcon}
            alt="Made in America"
            className="w-64 h-auto md:w-96 lg:w-[500px] xl:w-[600px] object-contain"
          />
        </motion.div>
      </div>

      {/* Animated Hand Image at the Bottom with Fade-Out */}
      
    </section>
  );
};

export default MadeInAmerica;
