import React from "react";
import { motion } from "framer-motion";
import ProductHeroImg from "../assets/RR Bottles Reflection 2.png";
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

const OurProductLine = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile View */}
        <div className="block md:hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            {/* Content */}
            <div className="w-full text-center mb-8">
              <motion.h2
                className="text-[#D3242A] text-4xl font-extrabold mb-6 uppercase"
                style={{ fontFamily: "Geogrotesque, sans-serif" }}
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                OUR PRODUCT LINE
              </motion.h2>

              <motion.p
                className="text-black text-lg leading-relaxed mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Discover a line of products crafted to tackle every challenge with professional-grade power. Designed with safety and sustainability in mind, RuggedRed delivers the clean you can trust.
              </motion.p>

              {/* Icons Row */}
              <div className="flex justify-center gap-4 mb-8">
                {iconData.map((icon, idx) => (
                  <motion.div
                    key={idx}
                    className="flex flex-col items-center text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 + idx * 0.1 }}
                  >
                    <img
                      src={icon.src}
                      alt={icon.label}
                      className="h-10 w-10 mb-1"
                    />
                    <p className="text-black text-xs font-semibold">
                      {icon.label}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Image */}
              <div className="w-full">
                <img
                  src={ProductHeroImg}
                  alt="RuggedRed Product Line"
                  className="rounded-lg drop-shadow-lg w-full"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Desktop View */}
        <div className="hidden md:block">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-row items-center gap-12"
          >
            {/* Left: Image */}
            <div className="w-1/2">
              <img
                src={ProductHeroImg}
                alt="RuggedRed Product Line"
                className="rounded-lg drop-shadow-lg w-full"
              />
            </div>

            {/* Right: Content */}
            <div className="w-1/2">
              <motion.h2
                className="text-[#D3242A] text-5xl font-extrabold mb-6 uppercase"
                style={{ fontFamily: "Geogrotesque, sans-serif" }}
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                OUR PRODUCT LINE
              </motion.h2>

              <motion.p
                className="text-black text-xl leading-relaxed mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Discover a line of products crafted to tackle every challenge with professional-grade power. Designed with safety and sustainability in mind, RuggedRed delivers the clean you can trust.
              </motion.p>

              {/* Icons Grid */}
              <div className="grid grid-cols-4 gap-6">
                {iconData.map((icon, idx) => (
                  <motion.div
                    key={idx}
                    className="flex flex-col items-center text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 + idx * 0.1 }}
                  >
                    <img
                      src={icon.src}
                      alt={icon.label}
                      className="h-16 w-16 mb-2"
                    />
                    <p className="text-black text-base font-semibold">
                      {icon.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurProductLine; 