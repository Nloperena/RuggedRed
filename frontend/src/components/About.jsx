import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "./Button";
import RRMascot from "../assets/RRMascot+Type-smaller.png";
import FlagIcon from "../assets/icons/Flag Icon.png";
import ProductHeroImg from "../assets/RR-ProductHeroImg.png";

const About = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#D3242A] mb-6 uppercase" style={{ fontFamily: "Geogrotesque, sans-serif" }}>
                Our Story
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8">
                Born from a passion for innovation and sustainability, RuggedRed combines American craftsmanship with cutting-edge cleaning technology.
              </p>
              <div className="flex items-center space-x-4">
                <img src={FlagIcon} alt="Made in America" className="h-16" />
                <span className="text-lg font-semibold">Proudly Made in USA</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src={RRMascot}
                alt="RuggedRed Mascot"
                className="w-full max-w-lg mx-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[#D3242A] mb-12 text-center uppercase" style={{ fontFamily: "Geogrotesque, sans-serif" }}
          >
            Our Values
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description: "Pushing boundaries in cleaning technology while maintaining environmental responsibility."
              },
              {
                title: "Quality",
                description: "Every product is crafted with precision and tested for excellence."
              },
              {
                title: "Sustainability",
                description: "Committed to eco-friendly solutions that protect our planet."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <h3 className="text-xl font-bold text-[#D3242A] mb-4">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src={ProductHeroImg}
                alt="RuggedRed Products"
                className="w-full rounded-2xl shadow-xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#D3242A] mb-6 uppercase" style={{ fontFamily: "Geogrotesque, sans-serif" }}>
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                To revolutionize cleaning with powerful, sustainable solutions that deliver exceptional results while protecting our environment.
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
        </div>
      </section>
    </div>
  );
};

export default About; 