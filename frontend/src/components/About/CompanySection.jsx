import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "../Button";
import ProductHeroImg from "../../assets/RR-ProductHeroImg.png";
import FlagIcon from "../../assets/icons/Flag Icon.png";
import PowerfulIcon from "../../assets/icons/Powerful Icon.svg";
import ProvenIcon from "../../assets/icons/Proven Icon.svg";
import EcoFriendlyIcon from "../../assets/icons/Eco Friendly Icon.svg";
import LightBulbIcon from "../../assets/icons/LightBulb Icon.svg";
import AmericanFlagIcon from "../../assets/icons/American Flag Icon.svg";
import CommunityIcon from "../../assets/icons/Community Icon.svg";

const CompanySection = () => {
  const [teamworkImageLoaded, setTeamworkImageLoaded] = useState(false);
  const [factoryImageLoaded, setFactoryImageLoaded] = useState(false);

  const icons = {
    star: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
    check: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    gem: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
    lightbulb: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
    building: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
    handshake: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
      </svg>
    )
  };

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
              Born and built in the USA, RUGGED RED combines American craftsmanship with cutting-edge cleaning technology. 
              Our products are proudly manufactured in American facilities, supporting local jobs and communities.
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
              title: "Visionary Innovation",
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
          ].map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-6 rounded-3xl shadow-lg flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105"
            >
              <div className="bg-[#D3242A] p-4 rounded-full mb-4">
                <img src={value.icon} alt={value.title} className="h-12 w-12 [filter:brightness(0)_invert(1)]" />
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
            <div className="space-y-6">
              <Link to="/products">
                <Button
                  variant="primary"
                  size="large"
                >
                  Explore Our Products
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CompanySection; 