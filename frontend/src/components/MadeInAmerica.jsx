import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "./Button";
import FlagIcon from "../assets/icons/Flag Icon.png";

const MadeInAmerica = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="bg-gradient-to-br from-[#D3242A] to-[#9B1218] rounded-3xl p-12 md:p-16 shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="w-full md:w-1/2 text-center md:text-left">
              <motion.h2
                className="text-4xl md:text-5xl font-bold text-white mb-6"
                style={{ fontFamily: "Geogrotesque, sans-serif" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Proudly Made in America
              </motion.h2>
              <motion.p
                className="text-xl text-white/90 mb-8"
                style={{ fontFamily: "Geogrotesque, sans-serif" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Our commitment to American manufacturing means you get the highest quality products, 
                supporting local jobs and communities while reducing environmental impact.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <Link to="/about">
                  <Button
                    variant="secondary"
                    size="large"
                  >
                    Learn More About Our Story
                  </Button>
                </Link>
              </motion.div>
            </div>
            <motion.div
              className="w-full md:w-1/2 flex justify-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <img
                src={FlagIcon}
                alt="Made in America"
                className="w-64 h-auto md:w-96 lg:w-[500px] object-contain"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MadeInAmerica;