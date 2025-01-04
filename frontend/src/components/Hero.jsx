import React from "react";
import HeroBottle1 from "../assets/HeroBottle1.png";
import HeroBottle2 from "../assets/HeroBottle2.png";

const Hero = () => {
  return (
    <section id="hero" className="bg-white min-h-[75vh] flex items-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-8xl font-extrabold leading-tight" style={{ color: "#D3242A" }}>
            A Proven Powerful Clean
          </h1>
          <p className="text-4xl text-gray-600 mb-12 leading-relaxed">
            Experience Rugged Red: a powerful, non-toxic cleaning solution that works hard, so you don’t have to.
          </p>
          <a
            href="#products"
            className="px-16 py-6 rounded-full text-3xl font-bold text-white transition"
            style={{
              backgroundColor: "#000000", // Black button
            }}
          >
            Start Cleaning
          </a>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center items-center relative">
          {/* Red Bottle */}
          <img
            src={HeroBottle2}
            alt="Hero Bottle 2"
            className="w-[85rem] md:w-[105rem] z-20 absolute"
            style={{
              left: "-10rem", // Slightly overlaps green bottle
            }}
          />
          {/* Green Bottle */}
          <img
            src={HeroBottle1}
            alt="Hero Bottle 1"
            className="w-[80rem] md:w-[100rem] z-10 absolute"
            style={{
              left: "5rem", // Slightly shifted under red bottle
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
