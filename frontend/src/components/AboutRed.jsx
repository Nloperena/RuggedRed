// Import React so we can build a component
import React from "react";
// Import the motion object from framer-motion for animations
import { motion } from "framer-motion";
// Import our mascot image from the assets folder
import RRMascot from "../assets/RRMascot.png";

// Create and export a functional component called "AboutRed"
const AboutRed = () => {
  return (
    // A section with a red background, padding, and relative positioning
    <section className="relative bg-[#D3242A] py-20 px-10">
      {/* 
        Container to center our content and lay items out in a row on larger screens.
        On smaller screens, items stack vertically.
      */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* 
          LEFT SIDE: Image container. 
          On md+ screens, place it on the left side (md:w-1/2).
        */}
        <div className="md:w-1/2 relative mb-16 md:mb-0 md:mr-20">
          {/* 
            The mascot image is now animated to "slide in" from the left (x: -100).
          */}
          <div className="relative overflow-hidden">
            <motion.img
              src={RRMascot}
              alt="Rugged Red Mascot"
              className="w-full h-auto transform scale-x-[-1]" // Flips horizontally
              // Slide in from left + fade in
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                ease: [0.6, 0.05, 0.2, 0.9],
              }}
            />
            {/* 
              A red-to-transparent gradient overlay at the bottom 
              to help blend into background.
            */}
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#D3242A] to-transparent"></div>
          </div>
        </div>

        {/* 
          RIGHT SIDE: Text container (md:w-1/2).
        */}
        <div className="md:w-1/2">
          {/* 
            Section Title (fade in from above).
          */}
          <motion.h2
            className="text-white text-5xl font-extrabold mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.6, 0.05, 0.2, 0.9],
            }}
          >
            About Rugged Red
          </motion.h2>

          {/* 
            Paragraph 1 (fade in).
          */}
          <motion.p
            className="text-white text-xl leading-relaxed mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.6, 0.05, 0.2, 0.9],
            }}
          >
            Rugged Red is more than just a cleaning brand; it's a philosophy.
            Born from the grit and determination of industrial settings, we've
            crafted a line of powerful, yet safe, cleaning solutions that
            confront the toughest messes with unwavering strength.
          </motion.p>

          {/* 
            Paragraph 2 (fade in with slight delay).
          */}
          <motion.p
            className="text-white text-xl leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.6, 0.05, 0.2, 0.9],
            }}
          >
            Our ultra-concentrated formulas cut through grease, grime, and
            everyday spills, leaving your home sparkling clean and your
            conscience clear. Experience the Rugged Red difference—where power
            meets purpose.
          </motion.p>

          {/* 
            CTA Buttons: fade in from below, slightly staggered.
          */}
          <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <motion.a
              href="#"
              className="inline-block bg-white text-[#D3242A] font-bold py-2 px-6 rounded-lg hover:bg-gray-200 transition text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.4,
                ease: [0.6, 0.05, 0.2, 0.9],
              }}
            >
              Learn More
            </motion.a>

            <motion.a
              href="#"
              className="inline-block bg-white text-[#D3242A] font-bold py-2 px-6 rounded-lg hover:bg-gray-200 transition text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0.6, 0.05, 0.2, 0.9],
              }}
            >
              Shop Now
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

// Export the component so we can import it wherever we need it
export default AboutRed;

