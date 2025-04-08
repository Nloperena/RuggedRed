import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useInView } from "react-intersection-observer";
import BackgroundImage from "../assets/CD Cleaning Grease on Table.jpg"; // or remove if no background
import testimonials from "../data/testimonials"; // Ensure this path is correct

// Section fade-in
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

// Card staggered appearance
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

// Five-star helper
function FiveStars() {
  return (
    <div className="flex justify-center mb-3">
      {[...Array(5)].map((_, i) => (
        <FontAwesomeIcon
          key={i}
          icon={faStar}
          className="text-yellow-400 w-5 h-5 mx-0.5"
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  // Intersection observer to trigger animation once in view
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section
      ref={ref}
      className="relative py-16 px-6 bg-cover bg-bottom"
      style={{ backgroundImage: `url(${BackgroundImage})`, backgroundPosition: 'center bottom' }} // Adjusted background position
    >
      <motion.div
        className="relative container mx-auto text-center"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={sectionVariants}
      >
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#D3242A] mb-8 uppercase"
          style={{ fontFamily: "Geogrotesque, sans-serif" }}
        >
          SEE WHY THEY LOVE RUGGEDRED
        </h2>

        {/* 3 → 2 → 1 layout, bigger gap (gap-8) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={index}
              variants={cardVariants}
              // White card, mild shadow, no extra white container behind
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 max-w-xs text-center flex flex-col items-center"
            >
              {/* Photo */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 mb-3">
                <img
                  src={item.photo}
                  alt={item.name}
                  className="w-full h-full object-cover rounded-full border-2 border-white shadow"
                />
              </div>

              {/* Name & role */}
              <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-800 uppercase mb-1">
                {item.name}
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-500 mb-2">
                {item.role}
              </p>

              {/* 5 stars */}
              <FiveStars />

              {/* Testimonial text */}
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}