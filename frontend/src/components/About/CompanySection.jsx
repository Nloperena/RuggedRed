import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "../Button";
import ProductHeroImg from "../../assets/RR-ProductHeroImg.png";
import FlagIcon from "../../assets/icons/Flag Icon.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBolt, 
  faShieldAlt, 
  faLeaf, 
  faLightbulb,
  faIndustry,
  faUsers
} from '@fortawesome/free-solid-svg-icons';

const CompanySection = () => {
  const [teamworkImageLoaded, setTeamworkImageLoaded] = useState(false);
  const [factoryImageLoaded, setFactoryImageLoaded] = useState(false);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-12 md:py-16 px-6 md:px-12 lg:px-24 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
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
              className="w-full max-w-lg rounded-2xl [filter:drop-shadow(0_20px_13px_rgb(0_0_0_/_0.3))]"
            />
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
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
          {[
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
          ].map((value, index) => (
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

      {/* Mission Section */}
      <section className="py-12 md:py-16 px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <img
              src={ProductHeroImg}
              alt="RuggedRed Products"
              className="w-full max-w-lg rounded-2xl [filter:drop-shadow(0_20px_13px_rgb(0_0_0_/_0.3))]"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#D3242A] uppercase" style={{ fontFamily: "Geogrotesque, sans-serif" }}>
              American Innovation
            </h2>
            <p className="text-lg text-gray-700">
              We're revolutionizing cleaning with powerful, sustainable solutions made right here in the USA. Our American-made products deliver exceptional results while supporting local jobs and communities. No tariffs, no compromises - just pure American cleaning power.
            </p>
            <Link to="/products">
              <Button
                variant="primary"
                size="large"
              >
                Explore Our Products
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CompanySection; 