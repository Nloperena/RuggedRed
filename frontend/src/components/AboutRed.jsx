import React from "react";
import { motion } from "framer-motion";
import RRMascot from "../assets/RRMascot+Type.png";
import FlagIcon from "../assets/icons/Flag Icon.png";

const AboutRed = () => {
  return (
    <section className="relative bg-white py-32 px-6 sm:px-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between">
        {/* Left Column: Text */}
        <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          {/* Headline */}
          <motion.h2
            className="text-6xl font-extrabold text-[#D3242A] flex items-center justify-center md:justify-start gap-4 mb-8"
            style={{ fontFamily: "Geogrotesque, sans-serif" }}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.25, 1, 0.5, 1], // Bezier easing
              delay: 0,
            }}
          >
            WHO IS RED?
            
          </motion.h2>

          {/* Paragraph 1 */}
          <motion.p
            className="text-black text-lg sm:text-xl leading-relaxed mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: [0.25, 1, 0.5, 1],
              delay: 0.5,
            }}
          >
            Rugged Red is more than a cleaning brand—it's a tough, 
            American-built philosophy. We’ve harnessed industrial 
            strength to tackle the worst messes in a safe, powerful way.
          </motion.p>

          {/* Paragraph 2 */}
          <motion.p
            className="text-black text-lg sm:text-xl leading-relaxed"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: [0.25, 1, 0.5, 1],
              delay: 1,
            }}
          >
            Proudly made in the USA, our products keep your home spotless 
            while supporting local communities.
          </motion.p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
            {/* Shop Now Button */}
            <motion.a
              href="/shop"
              className="inline-block bg-[#D3242A] text-white font-bold py-4 px-8 rounded-full hover:bg-[#B91D23] transition text-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.25, 1, 0.5, 1],
                delay: 1.5,
              }}
            >
              Shop Now
            </motion.a>

            {/* Meet Red Button */}
            <motion.a
              href="#"
              className="inline-block bg-black text-white font-bold py-4 px-8 rounded-full hover:bg-gray-800 transition text-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.25, 1, 0.5, 1],
                delay: 1.8,
              }}
            >
              Meet Red
            </motion.a>
          </div>
        </div>

        {/* Right Column: Image */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center md:justify-end relative"
          initial={{ opacity: 0, x: 150 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            ease: [0.25, 1, 0.5, 1],
            delay: 2,
          }}
        >
          <img
            src={RRMascot}
            alt="Rugged Red Mascot"
            className="w-[600px] h-auto transform scale-x-[1] object-cover"
            style={{ objectPosition: "bottom" }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutRed;
