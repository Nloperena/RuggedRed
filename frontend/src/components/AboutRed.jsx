// Import React so we can create our component
import React from "react";
// Import motion from framer-motion so we can animate elements
import { motion } from "framer-motion";

// Import the mascot and the American flag badge images
import RRMascot from "../assets/RRMascot.png";
import FlagIcon from "../assets/icons/Flag Icon.png";

// Create and export the AboutRed component
const AboutRed = () => {
  return (
    // A section that wraps everything in a white background with padding
    <section 
      className="relative bg-white py-20 px-6 sm:px-10"
    >
      {/* 
        We use a container to center our content.
        On medium screens (md) and above, we display items in a row.
        We add "md:space-x-8" to give a little space between the text and the image,
        keeping them closer than if we used "justify-between".
      */}
      <div 
        className="container mx-auto flex flex-col md:flex-row items-center justify-center md:justify-start md:space-x-8"
      >
        {/* 
          LEFT SIDE: Text block for our heading and paragraphs.
          "mb-6 md:mb-0" means margin-bottom is 6 on small screens, 
          and 0 on medium+ screens.
        */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left mb-6 md:mb-0"
          // The text fades in from the left
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* 
            Heading with a bigger flag badge (80px x 80px).
            We display the heading, then the badge next to it.
          */}
          <h2 
            className="text-4xl font-extrabold text-[#D3242A] flex items-center justify-center md:justify-start gap-2 mb-6"
            style={{ fontFamily: "Geogrotesque, sans-serif" }}
          >
            About Rugged Red
            {/* Badge made bigger than before (80px). */}
            <img
              src={FlagIcon}
              alt="Made in America"
              className="w-[80px] h-[80px]"
            />
          </h2>

          {/* A short paragraph about Rugged Red */}
          <p className="text-black text-base sm:text-lg leading-relaxed mb-4">
            Rugged Red is more than a cleaning brand—it's a tough, 
            American-built philosophy. We’ve harnessed industrial 
            strength to tackle the worst messes in a safe, powerful way.
          </p>

          {/* Another short paragraph highlighting "Made in the USA" */}
          <p className="text-black text-base sm:text-lg leading-relaxed">
            Proudly made in the USA, our products keep your home spotless 
            while supporting local communities.
          </p>

          {/* CTA buttons for "Shop Now" and "Meet Red" */}
          <div 
            className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start"
          >
            {/* Shop Now button */}
            <a
              href="/shop"
              className="inline-block bg-[#D3242A] text-white font-bold py-3 px-6 rounded-full hover:bg-[#B91D23] transition text-center"
            >
              Shop Now
            </a>
            {/* Meet Red button */}
            <a
              href="#"
              className="inline-block bg-black text-white font-bold py-3 px-6 rounded-full hover:bg-gray-800 transition text-center"
            >
              Meet Red
            </a>
          </div>
        </motion.div>

        {/* 
          RIGHT SIDE: Mascot image, flipped horizontally and made bigger (w-80).
          "justify-center md:justify-end" helps position it in the row on larger screens.
        */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center md:justify-end"
          // The image fades in from the right
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <img
            src={RRMascot}
            alt="Rugged Red Mascot"
            // We flip (mirror) the image horizontally using scale-x-[-1]
            // and increase its width to 80 (320px) for a bigger display.
            className="w-80 h-auto transform scale-x-[-1]"
          />
        </motion.div>
      </div>
    </section>
  );
};

// Export the component so we can use it in other parts of our app
export default AboutRed;

/*
EXPLANATION (5th Grade Level):

1. We have one "section" that holds everything together.
2. On the left side, we have the words (heading and paragraphs).
3. We made the flag badge bigger, so it's easy to see we’re "Made in America."
4. On the right side, we have the mascot image, flipped (mirrored) and made bigger.
5. We use "motion" so the text slides in from the left, 
   and the image slides in from the right.
6. We brought the image closer to the text by reducing margin and 
   adding some space that we control (md:space-x-8).
7. We have two main buttons: "Shop Now" and "Meet Red."
*/
