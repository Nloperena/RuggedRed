// We import React and useState so we can control our modal display
import React, { useState } from "react";

// We import motion from framer-motion to add animations
import { motion } from "framer-motion";

// We import FontAwesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

// We import our Rugged Red Logo image
import RuggedRedLogo from "../assets/RuggedRedTypographyLogo.png";

// This function is our Navigation bar component
const Nav = () => {
  // We use state to control showing and hiding our search bar
  const [showSearch, setShowSearch] = useState(false);

  // We also use state to control showing and hiding the new modal
  const [showModal, setShowModal] = useState(false);

  // This function creates two sparkles using motion.div to animate them
  // positionStyles is an array of two style objects for each sparkle's position
  const generateSparkles = (positionStyles) => (
    <>
      {/* First sparkle */}
      <motion.div
        // This is how big or small it starts
        initial={{ scale: 0 }}
        // This is how it changes over time
        animate={{
          scale: [1, 1.2, 1], // Grow, then shrink
          opacity: [0.8, 1, 0.8], // Fade in and out
        }}
        // This is how often it repeats and how long it takes
        transition={{
          repeat: Infinity,
          duration: 1.5,
        }}
        // We use absolute positioning and white color
        className="absolute w-8 h-8 text-white"
        // positionStyles[0] is the top-left or first sparkle
        style={positionStyles[0]}
      >
        {/* Our star shape is an SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-full h-full fill-current"
        >
          <path d="M12 2 L13 8 L18 9 L13 10 L12 16 L11 10 L6 9 L11 8 L12 2 Z" />
        </svg>
      </motion.div>

      {/* Second sparkle */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          delay: 0.5, // Starts half a second later
        }}
        className="absolute w-6 h-6 text-white"
        // positionStyles[1] is the bottom-right or second sparkle
        style={positionStyles[1]}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-full h-full fill-current"
        >
          <path d="M12 2 L13 8 L18 9 L13 10 L12 16 L11 10 L6 9 L11 8 L12 2 Z" />
        </svg>
      </motion.div>
    </>
  );

  return (
    // This is our entire Navigation bar (nav)
    <nav className="bg-gradient-to-b from-red-500 via-red-600 to-red-700 text-white sticky top-0 z-50 p-4 shadow-md">
      {/* Container to keep everything centered */}
      <div className="container mx-auto flex justify-between items-center">
        {/* Left side: Logo with sparkles */}
        <div className="relative">
          {/* Logo image */}
          <img
            src={RuggedRedLogo}
            alt="Rugged Red Logo"
            className="h-20 md:h-24"
          />

          {/* Sparkles around the logo */}
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
            {generateSparkles([
              { top: "-20px", left: "-30px" },
              { bottom: "-20px", right: "-30px" },
            ])}
          </div>
        </div>

        {/* Right side: Navigation Links and Buttons */}
        <div className="flex items-center space-x-6">
          {/* Navigation Links */}
          <ul className="flex space-x-6 text-lg md:text-2xl font-semibold">
            {["Home", "Products", "Tips", "About"].map((link, index) => (
              // For each link in the array, we create a clickable item
              <div key={index} className="relative group cursor-pointer">
                {/* We animate the link growing bigger on hover */}
                <motion.li
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="hover:text-secondary"
                  >
                    {link}
                  </a>
                </motion.li>

                {/* Sparkles that show up when hovering over the link */}
                <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 pointer-events-none">
                  {generateSparkles([
                    { top: "-15px", left: "-15px" },
                    { bottom: "-15px", right: "-15px" },
                  ])}
                </div>
              </div>
            ))}
          </ul>

          {/* Search Icon */}
          <div className="relative">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              size="2x"
              className="cursor-pointer hover:text-secondary"
              onClick={() => setShowSearch(!showSearch)}
            />
            {/* The search "mini modal" appears below the icon when showSearch is true */}
            {showSearch && (
              <motion.div
                // This sets how it first appears
                initial={{ opacity: 0, y: -10 }}
                // How it looks after animating in
                animate={{ opacity: 1, y: 0 }}
                // How it looks when it goes away
                exit={{ opacity: 0, y: -10 }}
                className="absolute right-0 mt-2 bg-white text-dark rounded-lg shadow-lg p-4"
              >
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-64 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </motion.div>
            )}
          </div>

          {/* Button to open our new bouncy modal */}
          <button
            onClick={() => setShowModal(true)}
            className="bg-white text-red-600 font-bold px-4 py-2 rounded-lg hover:bg-red-200"
          >
            Open Modal
          </button>
        </div>
      </div>

      {/* Our New Bouncy Modal with Sparkles */}
      {showModal && (
        <motion.div
          // This is the dark overlay covering the screen
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          // Start invisible
          initial={{ opacity: 0 }}
          // Fade in
          animate={{ opacity: 1 }}
          // Fade out
          exit={{ opacity: 0 }}
        >
          <motion.div
            // This is our modal box
            className="relative bg-white text-black rounded-lg shadow-xl p-6 max-w-md w-full"
            // Start small and bounce up
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.5 }}
            // We use a spring-like bouncy animation
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {/* Sparkles inside the modal */}
            <div className="absolute inset-0 pointer-events-none">
              {generateSparkles([
                { top: "10px", left: "10px" },
                { bottom: "10px", right: "10px" },
              ])}
            </div>

            {/* Modal Content */}
            <h2 className="text-2xl font-bold mb-4">I am a Bouncy Modal</h2>
            <p className="mb-4">
              This is a fun pop-up box. Notice how it bounces when it appears!
              We also added the same sparkles inside the modal for a magical
              effect.
            </p>
            {/* Button to close the modal */}
            <button
              onClick={() => setShowModal(false)}
              className="bg-red-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-500"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </nav>
  );
};

export default Nav;
