import React from "react";
import { motion } from "framer-motion";
import ProductHeroImg from "../../assets/RR-ProductHeroImg.png";
import FlagIcon from "../../assets/icons/Flag Icon.png";

const HeroSection = () => {
  return (
    <section className="relative py-12 md:py-16 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#D3242A] uppercase" style={{ fontFamily: "Geogrotesque, sans-serif" }}>
            American-Made Excellence
          </h1>
          <p className="text-lg md:text-xl text-gray-700">
            Born and built in the USA, RuggedRed Co combines American craftsmanship with cutting-edge cleaning technology. Our products are proudly manufactured in American facilities, supporting local jobs and communities.
          </p>
          <div className="flex items-center space-x-4">
            <img src={FlagIcon} alt="Made in America" className="h-12" />
            <span className="text-lg font-semibold">Proudly Made in USA - No Tariffs</span>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <img
            src={ProductHeroImg}
            alt="RuggedRed Products"
            className="w-full rounded-2xl [filter:drop-shadow(0_20px_13px_rgb(0_0_0_/_0.3))]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection; 