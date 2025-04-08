import React from "react";
import { motion } from "framer-motion";
import ProductHeroImg from "../assets/RR-ProductHeroImg.png";
import PowerfulIcon from "../assets/icons/Powerful Icon.png";
import ProvenIcon from "../assets/icons/Proven Icon.png";

const OurStory = () => {
  return (
    <div className="bg-gray-100 py-16 px-4 lg:px-12">
      {/* Section 1: Image Left, Text Right */}
      <section className="container mx-auto mb-16">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2">
            <motion.img
              src={ProductHeroImg}
              alt="Humble Beginnings"
              className="rounded-lg drop-shadow-lg w-full"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            />
          </div>
          <div className="lg:w-1/2 lg:pl-12 mt-8 lg:mt-0">
            <motion.h2
              className="text-4xl font-extrabold text-[#D3242A] uppercase"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Humble Beginnings
            </motion.h2>
            <motion.p
              className="mt-4 text-lg text-gray-700"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              RuggedRed was born in a modest garage where a small team of passionate innovators experimented with nature's cleaning power. They dreamed of a product that was both robust and kind to our planet—a dream that would one day redefine cleaning.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Section 2: Text Left, Image Right */}
      <section className="container mx-auto mb-16">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12">
            <motion.h2
              className="text-4xl font-extrabold text-[#D3242A] uppercase"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Igniting Innovation
            </motion.h2>
            <motion.p
              className="mt-4 text-lg text-gray-700"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              The breakthrough came when our team discovered that harnessing raw, natural ingredients could produce cleaning power that rivaled even the toughest chemicals. Bold experiments, sleepless nights, and a relentless drive led to the creation of our signature blend.
            </motion.p>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <motion.img
              src={PowerfulIcon}
              alt="Igniting Innovation"
              className="rounded-lg drop-shadow-lg w-full"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            />
          </div>
        </div>
      </section>

      {/* Section 3: Text Left, Image Right */}
      <section className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12">
            <motion.h2
              className="text-4xl font-extrabold text-[#D3242A] uppercase"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Building a Legacy
            </motion.h2>
            <motion.p
              className="mt-4 text-lg text-gray-700"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Today, RuggedRed stands as a testament to innovation, quality, and sustainability. Our products continue to empower households and businesses alike, while our commitment to the environment inspires future generations. This is more than a brand—it's a legacy of clean, green progress.
            </motion.p>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <motion.img
              src={ProvenIcon}
              alt="Building a Legacy"
              className="rounded-lg drop-shadow-lg w-full"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurStory;
