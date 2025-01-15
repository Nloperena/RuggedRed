import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { faFlagUsa, faSprayCan, faRecycle, faShieldAlt } from "@fortawesome/free-solid-svg-icons";

const features = [
  {
    icon: faFlagUsa,
    title: "Proudly Made in America",
    description: "Built on over 15 years of expertise, delivering the best results. Loud and clear—Made in the USA.",
  },
  {
    icon: faSprayCan,
    title: "Heavy-Duty Cleaning Power",
    description: "Formulated to tackle the toughest messes with ease. Perfect for grease, grime, and high-traffic areas.",
  },
  {
    icon: faRecycle,
    title: "Eco-Friendly & Safe",
    description: "Non-toxic and biodegradable. Safe for your family, pets, and the environment.",
  },
  {
    icon: faShieldAlt,
    title: "Proven & Reliable",
    description: "Tested and benchmarked against the best. Nothing works harder or cleans better.",
  },
];



const Features = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const controls = useAnimation();

  if (inView) {
    controls.start("visible");
  }

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section
      ref={ref}
      className="relative bg-[#D3242A] py-16 px-6"
      style={{ fontFamily: "Geogrotesque, sans-serif" }}
    >
      <div className="container mx-auto text-center">
        {/* Animated Heading with Geogrotesque Font */}
        <motion.h2
          className="text-white text-5xl font-extrabold mb-16"
          style={{ fontFamily: "Geogrotesque, sans-serif" }}
          initial="hidden"
          animate={controls}
          variants={sectionVariants}
        >
          The Hardcore Clean You Can Trust
        </motion.h2>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center text-center"
              initial="hidden"
              animate={controls}
              custom={index}
              variants={cardVariants}
              style={{
                boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)",
              }}
            >
              {/* Animated Icon */}
              <motion.div
                className="w-16 h-16 flex items-center justify-center rounded-full mb-6"
                style={{ backgroundColor: "#D3242A" }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: index * 0.3 + 0.2,
                  duration: 0.5,
                  ease: "easeOut",
                }}
              >
                <FontAwesomeIcon icon={feature.icon} className="text-white text-4xl" />
              </motion.div>

              {/* Feature Title */}
              <motion.h3
                className="text-xl font-bold text-[#171717] mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.3 + 0.4,
                  duration: 0.5,
                  ease: "easeOut",
                }}
              >
                {feature.title}
              </motion.h3>

              {/* Feature Description */}
              <motion.p
                className="text-gray-600 text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: index * 0.3 + 0.6,
                  duration: 0.5,
                  ease: "easeOut",
                }}
              >
                {feature.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
