import React from "react";
import { motion } from "framer-motion";
import ProductHeroImg from "../assets/RR-ProductHeroImg.png";
import PowerfulIcon from "../assets/icons/Powerful Icon.png";
import BiodegradableIcon from "../assets/icons/Biodegradable Icon.png";
import ProvenIcon from "../assets/icons/Proven Icon.png";
import SqueakyIcon from "../assets/icons/Squeaky Clean Icon.png";

const ProductLine = () => {
  return (
    <>
      {/* Mobile-Optimized Version */}
      <section
        className="block md:hidden relative bg-white pt-32 pb-8 px-6 sm:px-10 mt-32" // Separated pt and pb
      >
        <div className="container mx-auto flex flex-col items-center">
          {/* Headline */}
          <motion.h2
            className="text-[#D3242A] text-3xl sm:text-4xl font-extrabold mb-4 sm:mb-6 text-center"
            style={{ fontFamily: "Geogrotesque, sans-serif" }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.6, 0.05, 0.2, 0.9],
            }}
          >
            Our Product Line
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            className="text-black text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.6, 0.05, 0.2, 0.9],
            }}
          >
            Discover a line of products crafted to tackle every challenge with
            professional-grade power. Designed with safety and sustainability in
            mind, Rugged Red delivers the clean you can trust.
          </motion.p>

          {/* Image */}
          <div className="w-full relative mb-8">
            <motion.img
              src={ProductHeroImg}
              alt="Rugged Red Product Line"
              className="w-full h-auto drop-shadow-lg"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                ease: [0.6, 0.05, 0.2, 0.9],
              }}
            />
          </div>

          {/* Mobile-Specific Icons */}
          <div className="grid grid-cols-4 gap-4 mt-8 block md:hidden">
            <div className="flex flex-col items-center text-center">
              <img src={PowerfulIcon} alt="Powerful" className="h-16 w-16 mb-4" />
              <p className="text-black font-bold text-sm sm:text-lg">Powerful</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img src={BiodegradableIcon} alt="Biodegradable" className="h-16 w-16 mb-4" />
              <p className="text-black font-bold text-sm sm:text-lg">Biodegradable</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img src={ProvenIcon} alt="Proven" className="h-16 w-16 mb-4" />
              <p className="text-black font-bold text-sm sm:text-lg">Proven</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img src={SqueakyIcon} alt="Squeaky Clean" className="h-16 w-16 mb-4" />
              <p className="text-black font-bold text-sm sm:text-lg">Squeaky Clean</p>
            </div>
          </div>
        </div>
      </section>

      {/* Landscape and Square Displays: Original Layout */}
      <section
        className="hidden md:block relative bg-white pt-20 pb-10 px-6 sm:px-10" // Separated pt and pb
      >
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* LEFT SIDE: Image */}
          <div className="w-full md:w-2/3 lg:w-1/2 relative mb-12 md:mb-0 md:mr-8 lg:mr-20">
            <motion.img
              src={ProductHeroImg}
              alt="Rugged Red Product Line"
              className="w-full h-auto"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                ease: [0.6, 0.05, 0.2, 0.9],
              }}
            />
          </div>

          {/* RIGHT SIDE: Text + Desktop-Specific Icons */}
          <div className="w-full md:w-full lg:w-1/2">
            <motion.h2
              className="text-[#D3242A] text-4xl sm:text-5xl font-extrabold mb-8"
              style={{ fontFamily: "Geogrotesque, sans-serif" }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.6, 0.05, 0.2, 0.9],
              }}
            >
              OUR PRODUCT LINE
            </motion.h2>

            <motion.p
              className="text-black text-base sm:text-xl leading-relaxed mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.6, 0.05, 0.2, 0.9],
              }}
            >
              Discover a line of products crafted to tackle every challenge with
              professional-grade power. Designed with safety and sustainability in
              mind, Rugged Red delivers the clean you can trust.
            </motion.p>

            {/* Desktop-Specific Icons */}
            <div className="grid grid-cols-3 gap-8 hidden md:grid">
              <div className="flex flex-col items-center text-center">
                <img src={PowerfulIcon} alt="Powerful" className="h-16 w-16 mb-4" />
                <p className="text-black font-bold text-sm sm:text-lg">Powerful</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <img src={BiodegradableIcon} alt="Biodegradable" className="h-16 w-16 mb-4" />
                <p className="text-black font-bold text-sm sm:text-lg">Biodegradable</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <img src={ProvenIcon} alt="Proven" className="h-16 w-16 mb-4" />
                <p className="text-black font-bold text-sm sm:text-lg">Proven</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductLine;
