import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf, faSprayCan, faRecycle, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const features = [
  {
    icon: faLeaf,
    title: "Eco-Friendly",
    description: "Safe for your family and the environment.",
  },
  {
    icon: faSprayCan,
    title: "Pro-Grade Cleaning",
    description: "Tough on grease, grime, and stains.",
  },
  {
    icon: faRecycle,
    title: "Versatile Application",
    description: "Perfect for kitchens, bathrooms, and more.",
  },
  {
    icon: faCheckCircle,
    title: "Long-Lasting Formula",
    description: "A little goes a long way.",
  },
];

const Features = () => {
  return (
    <section className="bg-[#D3242A] py-16 px-6">
      <div className="container mx-auto text-center">
        {/* Section Title */}
        <motion.h2
          className="text-white text-5xl font-extrabold mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Why Choose Rugged Red?
        </motion.h2>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.3, // Sequential delay
                duration: 0.6,
                ease: "easeOut",
              }}
              style={{
                boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)",
              }}
            >
              {/* Icon */}
              <motion.div
                className="w-16 h-16 flex items-center justify-center rounded-full mb-6"
                style={{ backgroundColor: "#D3242A" }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: index * 0.3 + 0.2, // Slightly offset for the icon
                  duration: 0.5,
                  ease: "easeOut",
                }}
              >
                <FontAwesomeIcon icon={feature.icon} className="text-white text-4xl" />
              </motion.div>

              {/* Title */}
              <motion.h3
                className="text-xl font-bold text-[#171717] mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.3 + 0.4, // Offset for title
                  duration: 0.5,
                  ease: "easeOut",
                }}
              >
                {feature.title}
              </motion.h3>

              {/* Description */}
              <motion.p
                className="text-gray-600 text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: index * 0.3 + 0.6, // Offset for description
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
