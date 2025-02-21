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
      <section className="block md:hidden bg-white pt-16 pb-8 px-6">
        <div className="container mx-auto flex flex-col items-center">
          {/* HEADLINE - center-aligned, slightly larger */}
          <motion.h2
            className="text-[#D3242A] text-4xl font-extrabold mb-4 text-center uppercase"
            style={{ fontFamily: "Geogrotesque, sans-serif" }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.6, 0.05, 0.2, 0.9] }}
          >
            OUR PRODUCT LINE
          </motion.h2>

          {/* PARAGRAPH - center-aligned, a bit larger */}
          <motion.p
            className="text-black text-base sm:text-lg leading-relaxed mb-5 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.6, 0.05, 0.2, 0.9] }}
          >
            Discover a line of products crafted to tackle every challenge with
            professional-grade power. Designed with safety and sustainability in
            mind, Rugged Red delivers the clean you can trust.
          </motion.p>

          {/* ICONS row, center aligned */}
          <div className="grid grid-cols-4 gap-3 w-full mb-6 justify-items-center">
            {iconData.map((icon, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <img src={icon.src} alt={icon.label} className="h-14 w-14 mb-2" />
                <p className="text-black text-xs sm:text-sm font-semibold">
                  {icon.label}
                </p>
              </div>
            ))}
          </div>

          {/* IMAGE - below icons, center aligned */}
          <div className="w-full flex justify-center">
            <motion.img
              src={ProductHeroImg}
              alt="Rugged Red Product Line"
              className="rounded-lg drop-shadow-lg w-full max-w-sm"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.6, 0.05, 0.2, 0.9] }}
            />
          </div>
        </div>
      </section>

      {/* DESKTOP VIEW */}
      <section className="hidden md:block bg-white pt-16 pb-8 px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* LEFT: IMAGE */}
          <div className="w-full md:w-2/3 lg:w-1/2 flex justify-center md:justify-end mb-8 md:mb-0 md:mr-8 lg:mr-16">
            <motion.img
              src={ProductHeroImg}
              alt="Rugged Red Product Line"
              className="rounded-lg drop-shadow-lg max-w-md w-full"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.6, 0.05, 0.2, 0.9] }}
            />
          </div>

          {/* RIGHT: TEXT + ICONS */}
          <div className="w-full lg:w-1/2">
            <motion.h2
              className="text-[#D3242A] text-4xl sm:text-5xl font-extrabold mb-6 text-left uppercase"
              style={{ fontFamily: "Geogrotesque, sans-serif" }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.6, 0.05, 0.2, 0.9] }}
            >
              OUR PRODUCT LINE
            </motion.h2>

            <motion.p
              className="text-black text-base sm:text-lg leading-relaxed mb-5 text-left"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.6, 0.05, 0.2, 0.9] }}
            >
              Discover a line of products crafted to tackle every challenge with
              professional-grade power. Designed with safety and sustainability in
              mind, Rugged Red delivers the clean you can trust.
            </motion.p>

            {/* ICONS - 4 columns in a single row, same as before */}
            <div className="grid grid-cols-4 gap-6 w-full">
              {iconData.map((icon, idx) => (
                <div key={idx} className="flex flex-col items-center text-center">
                  <img src={icon.src} alt={icon.label} className="h-14 w-14 mb-2" />
                  <p className="text-black text-sm font-semibold">{icon.label}</p>
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
