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
      On smaller screens, it stacks items vertically.
      */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* 
        LEFT SIDE: Image container - we want the image on the left side in medium screens and above.
        We add spacing on the right (mr-10) on medium screens and above.
        */}
        <div className="md:w-1/2 relative mb-16 md:mb-0 md:mr-20">
          {/* 
          We wrap our image in a 'relative' container to allow positioning of the gradient overlay.
          */}
          <div className="relative overflow-hidden">
            {/* 
            The image itself, animated to fade in from below (y:30 to y:0). 
            We use transform scale-x-[-1] to flip it horizontally.
            */}
            <motion.img
              // The actual image file
              src={RRMascot}
              // Alternate text for accessibility
              alt="Rugged Red Mascot"
              // Make it full width, auto height, and flipped horizontally
              className="w-full h-auto transform scale-x-[-1]"
              // Start the image hidden and below
              initial={{ opacity: 0, y: 30 }}
              // Animate it to be fully visible and in its normal position
              animate={{ opacity: 1, y: 0 }}
              // Use a valid cubic-bezier for a smooth custom easing
              transition={{
                duration: 0.8,
                ease: [0.6, 0.05, 0.2, 0.9],
              }}
            />
            {/* 
            A red-to-transparent gradient overlay. 
            Positioned at the bottom of the image to fade it smoothly into the background.
            */}
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#D3242A] to-transparent"></div>
          </div>
        </div>

        {/* 
        RIGHT SIDE: Text container.
        On medium screens and above, this text takes up half of the width.
        */}
        <div className="md:w-1/2">
          {/* 
          Title text that fades in from above (y:-20 to y:0).
          We use the same custom cubic-bezier easing.
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
          Paragraph text that fades in after a brief delay, using the same easing.
          */}
          <motion.p
            className="text-white text-xl leading-relaxed" 
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
            confront the toughest messes with unwavering strength. Our 
            ultra-concentrated formulas cut through grease, grime, and 
            everyday spills, leaving your home sparkling clean and 
            your conscience clear. Experience the Rugged Red difference 
            – where power meets purpose.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

// Export the component so we can import it wherever we need it
export default AboutRed;
