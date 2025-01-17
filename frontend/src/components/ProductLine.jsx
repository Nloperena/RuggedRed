import React from "react";
import { motion } from "framer-motion";
import ProductHeroImg from "../assets/RR-ProductHeroImg.png";
import PowerfulIcon from "../assets/icons/Powerful Icon.png";
import BiodegradableIcon from "../assets/icons/Biodegradable Icon.png";
import ProvenIcon from "../assets/icons/Proven Icon.png";

const ProductLine = () => {
  return (
    <section className="relative bg-[#D3242A] py-20 px-6 sm:px-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* LEFT SIDE: Image Container */}
        <div className="w-full md:w-2/3 lg:w-1/2 relative mb-12 md:mb-0 md:mr-8 lg:mr-20">
          <div className="relative overflow-hidden">
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
            <div className="absolute bottom-0 left-0 w-full h-40 "></div>
          </div>
        </div>

        {/* RIGHT SIDE: Text Container */}
        <div className="w-full md:w-full lg:w-1/2">
          <motion.h2
            className="text-white text-4xl sm:text-5xl font-extrabold mb-8"
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

          <motion.p
            className="text-white text-base sm:text-xl leading-relaxed mb-6"
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

          <motion.p
            className="text-white text-base sm:text-xl leading-relaxed mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.6, 0.05, 0.2, 0.9],
            }}
          >
            Experience cleaning that’s powerful, biodegradable, and proven.
          </motion.p>

          {/* ICONS SECTION */}
          <div className="grid grid-cols-3 gap-8">
            {/* Icon 1: Powerful */}
            <div className="flex flex-col items-center text-center">
              <img
                src={PowerfulIcon}
                alt="Powerful"
                className="h-16 w-16 mb-4 filter invert"
              />
              <p className="text-white font-bold text-lg">Powerful</p>
            </div>

            {/* Icon 2: Biodegradable */}
            <div className="flex flex-col items-center text-center">
              <img
                src={BiodegradableIcon}
                alt="Biodegradable"
                className="h-16 w-16 mb-4 filter invert"
              />
              <p className="text-white font-bold text-lg">Biodegradable</p>
            </div>

            {/* Icon 3: Proven */}
            <div className="flex flex-col items-center text-center">
              <img
                src={ProvenIcon}
                alt="Proven"
                className="h-16 w-16 mb-4 filter invert"
              />
              <p className="text-white font-bold text-lg">Proven</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductLine;
