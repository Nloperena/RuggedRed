import React from "react";
import { motion } from "framer-motion";
import PowerfulIcon from "../../assets/icons/Powerful Icon.svg";
import ProvenIcon from "../../assets/icons/Proven Icon.svg";
import EcoFriendlyIcon from "../../assets/icons/Eco Friendly Icon.svg";
import LightBulbIcon from "../../assets/icons/LightBulb Icon.svg";
import AmericanFlagIcon from "../../assets/icons/American Flag Icon.svg";
import CommunityIcon from "../../assets/icons/Community Icon.svg";

const ValuesSection = () => {
  const values = [
    {
      title: "Powerful Performance",
      description: "Our custom formulations pack a punch, blasting away even the toughest messes while remaining safe for everyday use.",
      icon: PowerfulIcon
    },
    {
      title: "Proven Quality",
      description: "Every product is crafted with precision in our American facilities, tested for excellence, and backed by our satisfaction guarantee.",
      icon: ProvenIcon
    },
    {
      title: "Eco-Conscious",
      description: "Made with biodegradable ingredients, our products deliver powerful cleaning while protecting our environment.",
      icon: EcoFriendlyIcon
    },
    {
      title: "American Ingenuity",
      description: "Leading the industry with groundbreaking cleaning solutions that set new standards for performance and sustainability.",
      icon: LightBulbIcon
    },
    {
      title: "American Manufacturing",
      description: "Proudly made in the USA, supporting local jobs and communities while ensuring the highest quality standards.",
      icon: AmericanFlagIcon
    },
    {
      title: "Community Focused",
      description: "Committed to supporting American workers and businesses, strengthening our local economies.",
      icon: CommunityIcon
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
            <div className="bg-white p-4 rounded-full mb-4 shadow-lg border-2 border-gray-100">
              <img src={value.icon} alt={value.title} className="h-12 w-12 [filter:invert(20%)_sepia(100%)_saturate(2000%)_hue-rotate(350deg)_brightness(90%)_contrast(100%)]" />
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