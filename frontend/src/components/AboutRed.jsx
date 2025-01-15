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
    <section className="relative bg-[#D3242A] py-20 px-6 sm:px-10">
      {/* 
        Container to center our content and lay items out in a row on medium+ screens.
        On smaller screens, items stack vertically.
      */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* 
          LEFT SIDE: Image container. 
          
          - On md (tablet) screens: it takes 2/3 width
          - On lg (desktop) screens: it takes 1/2 width
          - Adjusted the margin so it's smaller on tablets, bigger on desktop
        */}
        <div className="w-full md:w-2/3 lg:w-1/2 relative mb-12 md:mb-0 md:mr-8 lg:mr-20">
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
          RIGHT SIDE: Text container 
          
          - On md (tablet) screens: it goes full width or whatever remains
          - On lg (desktop) screens: half width
        */}
        <div className="w-full md:w-full lg:w-1/2">
          {/* 
            Section Title (fade in from above) with Geogrotesque font applied.
          */}
          <motion.h2
            className="text-white text-4xl sm:text-5xl font-extrabold mb-8"
            style={{ fontFamily: "Geogrotesque, sans-serif" }}
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
            className="text-white text-base sm:text-xl leading-relaxed mb-6"
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
            className="text-white text-base sm:text-xl leading-relaxed"
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
            - Stacked on small devices, side-by-side on bigger screens 
          */}
          <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <motion.a
              href="#"
              className="inline-block bg-black text-white font-bold py-3 px-6 rounded-full hover:bg-gray-800 transition text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.4,
                ease: [0.6, 0.05, 0.2, 0.9],
              }}
            >
              Meet Red
            </motion.a>

            <motion.a
              href="#"
              className="inline-block bg-black text-white font-bold py-3 px-6 rounded-full hover:bg-gray-800 transition text-center"
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
