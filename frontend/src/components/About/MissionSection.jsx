import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "../Button";
import AmericanFlag from "../../assets/American-Flag.png";

const MissionSection = () => {
  return (
    <section className="py-12 md:py-16 px-6 md:px-12 lg:px-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src={AmericanFlag}
            alt="American Flag"
            className="w-full max-w-md rounded-2xl [filter:drop-shadow(0_20px_13px_rgb(0_0_0_/_0.3))]"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#D3242A] uppercase" style={{ fontFamily: "Geogrotesque, sans-serif" }}>
            Made in America
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
  );
};

export default MissionSection; 