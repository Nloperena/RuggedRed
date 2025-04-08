import React from "react";
import { motion } from "framer-motion";
import ProductHeroImg from "../assets/RR-ProductHeroImg.png";
import PowerfulIcon from "../assets/icons/Powerful Icon.png";
import BiodegradableIcon from "../assets/icons/Biodegradable Icon.png";
import ProvenIcon from "../assets/icons/Proven Icon.png";
import SqueakyIcon from "../assets/icons/Squeaky Clean Icon.png";

const iconData = [
  { src: PowerfulIcon, label: "Powerful" },
  { src: BiodegradableIcon, label: "Biodegradable" },
  { src: ProvenIcon, label: "Proven" },
  { src: SqueakyIcon, label: "Squeaky Clean" },
];

const ProductLine = () => {
  return (
    <>
      {/* MOBILE VIEW */}
      <section className="block md:hidden bg-white pt-16 pb-8 px-6 lg:pt-24 lg:pb-12 lg:px-8 2xl:pt-32 2xl:pb-16 2xl:px-10">
        <div className="container mx-auto flex flex-col items-center">
          {/* HEADLINE */}
          <motion.h2
            className="text-[#D3242A] text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-extrabold mb-4 text-center uppercase"
            style={{ fontFamily: "Geogrotesque, sans-serif" }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.6, 0.05, 0.2, 0.9] }}
          >
            OUR PRODUCT LINE
          </motion.h2>

          {/* PARAGRAPH */}
          <motion.p
            className="text-black text-sm sm:text-base lg:text-lg 2xl:text-xl leading-relaxed mb-5 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.6, 0.05, 0.2, 0.9] }}
          >
            Discover a line of products crafted to tackle every challenge with professional-grade power. Designed with safety and sustainability in mind, RuggedRed delivers the clean you can trust.
          </motion.p>

          {/* ICONS */}
          <div className="grid grid-cols-4 gap-3 w-full mb-6">
            {iconData.map((icon, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <img src={icon.src} alt={icon.label} className="h-14 w-14 lg:h-16 lg:w-16 2xl:h-20 2xl:w-20 mb-2" />
                <p className="text-black text-xs sm:text-sm lg:text-base 2xl:text-lg font-semibold">
                  {icon.label}
                </p>
              </div>
            ))}
          </div>

          {/* IMAGE */}
          <div className="w-full flex justify-center">
            <motion.img
              src={ProductHeroImg}
              alt="RuggedRed Product Line"
              className="rounded-lg drop-shadow-lg w-full max-w-sm lg:max-w-md 2xl:max-w-lg"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.6, 0.05, 0.2, 0.9] }}
            />
          </div>
        </div>
      </section>

      {/* DESKTOP VIEW */}
      <section className="hidden md:block bg-white pt-16 pb-8 px-6 lg:pt-24 lg:pb-12 lg:px-10 2xl:pt-32 2xl:pb-16 2xl:px-12">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-12">
          {/* LEFT: IMAGE */}
          <div className="w-full md:w-2/3 lg:w-1/2 flex justify-center mb-8 md:mb-0">
            <motion.img
              src={ProductHeroImg}
              alt="RuggedRed Product Line"
              className="rounded-lg drop-shadow-lg max-w-md w-full lg:max-w-lg 2xl:max-w-xl"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.6, 0.05, 0.2, 0.9] }}
            />
          </div>

          {/* RIGHT: TEXT + ICONS */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
            <motion.h2
              className="text-[#D3242A] text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-extrabold mb-6 text-center lg:text-left uppercase"
              style={{ fontFamily: "Geogrotesque, sans-serif" }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.6, 0.05, 0.2, 0.9] }}
            >
              OUR PRODUCT LINE
            </motion.h2>

            <motion.p
              className="text-black text-base sm:text-lg lg:text-xl 2xl:text-2xl leading-relaxed mb-5 text-center lg:text-left"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.6, 0.05, 0.2, 0.9] }}
            >
              Discover a line of products crafted to tackle every challenge with professional-grade power. Designed with safety and sustainability in mind, RuggedRed delivers the clean you can trust.
            </motion.p>

            {/* ICONS */}
            <div className="grid grid-cols-4 gap-6 w-full">
              {iconData.map((icon, idx) => (
                <div key={idx} className="flex flex-col items-center text-center">
                  <img src={icon.src} alt={icon.label} className="h-14 w-14 lg:h-16 lg:w-16 2xl:h-20 2xl:w-20 mb-2" />
                  <p className="text-black text-sm lg:text-base 2xl:text-lg font-semibold">
                    {icon.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductLine;