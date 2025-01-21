import React, { useState } from "react";
import { motion } from "framer-motion";

// Import images
import TeamworkImage from "../assets/HeroBottle1.png";
import FactoryImage from "../assets/icons/Flag Icon.png";

const AboutRedCo = () => {
  const [teamworkImageLoaded, setTeamworkImageLoaded] = useState(false);
  const [factoryImageLoaded, setFactoryImageLoaded] = useState(false);

  return (
    <section className="relative bg-[#F5F5F5] py-32 px-6 sm:px-16">
      <div className="container mx-auto">
        {/* Title */}
        <motion.h2
          className="text-6xl font-extrabold text-center text-[#D3242A] mb-16 uppercase"
          style={{ fontFamily: "Geogrotesque, sans-serif" }}
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.25, 1, 0.5, 1], // Bezier easing
            delay: 0,
          }}
          viewport={{ once: true }}
        >
          About Rugged Red Co
        </motion.h2>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column: Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -150 }}
            animate={teamworkImageLoaded ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 1,
              ease: [0.25, 1, 0.5, 1],
              delay: 0.5,
            }}
          >
            {!teamworkImageLoaded && (
              <div className="bg-gray-200 w-full h-auto rounded-lg animate-pulse"></div>
            )}
            <img
              src={TeamworkImage}
              alt="Teamwork at RedCo"
              className="w-full h-auto rounded-lg object-cover"
              style={{ display: teamworkImageLoaded ? "block" : "none" }}
              onLoad={() => setTeamworkImageLoaded(true)}
            />
            {/* Caption */}
            <motion.p
              className="absolute bottom-4 left-4 bg-[#D3242A] text-white text-lg font-bold py-1 px-4 rounded"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.25, 1, 0.5, 1],
                delay: 1,
              }}
              viewport={{ once: true }}
            >
              Built on Teamwork
            </motion.p>
          </motion.div>

          {/* Right Column: Content */}
          <div className="flex flex-col justify-center">
            <motion.h3
              className="text-4xl font-extrabold text-[#333] mb-6"
              style={{ fontFamily: "Geogrotesque, sans-serif" }}
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.25, 1, 0.5, 1],
                delay: 0.8,
              }}
              viewport={{ once: true }}
            >
              A Vision of Excellence
            </motion.h3>
            <motion.p
              className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-4"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.25, 1, 0.5, 1],
                delay: 1,
              }}
              viewport={{ once: true }}
            >
              Rugged Red Co blends tradition with innovation, delivering
              high-performance cleaning solutions built to last.
            </motion.p>
            <motion.p
              className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-4"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.25, 1, 0.5, 1],
                delay: 1.2,
              }}
              viewport={{ once: true }}
            >
              Proudly made in the USA, we are committed to supporting local
              communities and creating premium products.
            </motion.p>
          </div>
        </div>

        {/* Full-Width Callout Section */}
        <motion.div
          className="mt-16 bg-[#D3242A] text-white py-20 px-6 sm:px-16 rounded-lg shadow-inner"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.25, 1, 0.5, 1],
            delay: 0.4,
          }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.25, 1, 0.5, 1],
                delay: 0.6,
              }}
              viewport={{ once: true }}
            >
              <h3
                className="text-6xl font-extrabold mb-6"
                style={{ fontFamily: "Geogrotesque, sans-serif" }}
              >
                Proudly American-Made
              </h3>
              <p className="text-lg sm:text-xl leading-relaxed">
                Every product is crafted and assembled in the USA. We take pride
                in supporting American jobs and delivering products you can
                trust.
              </p>
            </motion.div>

            {/* Right Column: Image */}
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, x: 150 }}
              animate={factoryImageLoaded ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.8,
                ease: [0.25, 1, 0.5, 1],
                delay: 1,
              }}
            >
              {!factoryImageLoaded && (
                <div className="bg-gray-200 w-[400px] h-[300px] rounded-lg animate-pulse"></div>
              )}
              <img
                src={FactoryImage}
                alt="RedCo Factory"
                className="w-[400px] h-auto rounded-lg object-cover"
                style={{ display: factoryImageLoaded ? "block" : "none" }}
                onLoad={() => setFactoryImageLoaded(true)}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutRedCo;
