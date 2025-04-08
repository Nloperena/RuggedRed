import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBolt, 
  faShieldAlt, 
  faLeaf, 
  faLightbulb,
  faIndustry,
  faUsers
} from '@fortawesome/free-solid-svg-icons';

const ValuesSection = () => {
  const values = [
    {
      title: "Powerful Performance",
      description: "Our custom formulations pack a punch, blasting away even the toughest messes while remaining safe for everyday use.",
      icon: faBolt
    },
    {
      title: "Proven Quality",
      description: "Every product is crafted with precision in our American facilities, tested for excellence, and backed by our satisfaction guarantee.",
      icon: faShieldAlt
    },
    {
      title: "Eco-Conscious",
      description: "Made with biodegradable ingredients, our products deliver powerful cleaning while protecting our environment.",
      icon: faLeaf
    },
    {
      title: "Visionary Innovation",
      description: "Leading the industry with groundbreaking cleaning solutions that set new standards for performance and sustainability.",
      icon: faLightbulb
    },
    {
      title: "American Manufacturing",
      description: "Proudly made in the USA, supporting local jobs and communities while ensuring the highest quality standards.",
      icon: faIndustry
    },
    {
      title: "Community Focused",
      description: "Committed to supporting American workers and businesses, strengthening our local economies.",
      icon: faUsers
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-gray-50 px-6 md:px-12 lg:px-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#D3242A] mb-8 text-center uppercase" style={{ fontFamily: "Geogrotesque, sans-serif" }}
      >
        Our American Values
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {values.map((value, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="bg-white p-6 rounded-3xl shadow-lg flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105"
          >
            <div className="bg-[#D3242A] p-3 rounded-full mb-4">
              <FontAwesomeIcon icon={value.icon} className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-[#D3242A] mb-2">{value.title}</h3>
            <p className="text-gray-700 text-base">{value.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ValuesSection; 