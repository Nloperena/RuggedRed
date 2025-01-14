// We import React and useState so we can control our states
import React, { useState } from "react";

// We import motion and AnimatePresence from framer-motion
import { motion, AnimatePresence } from "framer-motion";

// We import FontAwesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

// We import our Rugged Red Logo image
import RuggedRedLogo from "../assets/RuggedRedTypographyLogo.png";

// This function is our Navigation bar component
const Nav = () => {
  // We use state to control showing and hiding our search mini-modal
  const [showSearch, setShowSearch] = useState(false);

  // We use state to control showing and hiding the mobile menu (drawer)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // This function creates two sparkles using motion.div to animate them
  // positionStyles is an array of two style objects for each sparkle's position
  const generateSparkles = (positionStyles) => (
    <>
      {/* First sparkle */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{
          scale: [1, 1.2, 1], // Grow, then shrink
          opacity: [0.8, 1, 0.8], // Fade in/out
        }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
        }}
        className="absolute w-8 h-8 text-white"
        style={positionStyles[0]}
      >
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
          delay: 0.5, // Half-second offset
        }}
        className="absolute w-6 h-6 text-white"
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

  // Example navigation links
  const links = ["Home", "Products", "Tips", "About"];

  return (
    <nav className="bg-gradient-to-b from-red-500 via-red-600 to-red-700 text-white sticky top-0 z-50 p-4 shadow-md">
      {/* Main container */}
      <div className="container mx-auto flex justify-between items-center">
        {/* Left side: Logo with sparkles */}
        <div className="relative">
          <img
            src={RuggedRedLogo}
            alt="Rugged Red Logo"
            className="h-20 md:h-24"
          />
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
            {generateSparkles([
              { top: "-20px", left: "-30px" },
              { bottom: "-20px", right: "-30px" },
            ])}
          </div>
        </div>

        {/* Hamburger (mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              // Close (X) icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop Navigation (hidden on mobile) */}
        <div className="hidden md:flex items-center space-x-6">
          {/* Navigation Links */}
          <ul className="flex space-x-6 text-lg md:text-2xl font-semibold">
            {links.map((link, index) => (
              <div key={index} className="relative group cursor-pointer">
                <motion.li
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a href={`#${link.toLowerCase()}`} className="hover:text-secondary">
                    {link}
                  </a>
                </motion.li>

                {/* Sparkles on hover */}
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
            {/* Mini search modal (desktop) */}
            <AnimatePresence>
              {showSearch && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute right-0 mt-2 bg-white text-dark rounded-lg shadow-lg p-4 z-20"
                >
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-64 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* MOBILE MENU AS A SLIDE-IN DRAWER (left to right) */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed top-0 left-0 bottom-0 w-64 bg-red-800 bg-opacity-95 z-50 shadow-xl flex flex-col p-6"
            // Slide in
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Close button inside drawer */}
            <div className="flex justify-end mb-6">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="focus:outline-none"
                aria-label="Close Menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Mobile Nav Links */}
            <ul className="flex flex-col space-y-4 text-lg font-semibold text-white">
              {links.map((link, index) => (
                <li
                  key={index}
                  className="relative group cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <a href={`#${link.toLowerCase()}`} className="hover:text-gray-100">
                      {link}
                    </a>
                  </motion.div>

                  {/* Sparkles on hover */}
                  <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 pointer-events-none">
                    {generateSparkles([
                      { top: "-15px", left: "-15px" },
                      { bottom: "-15px", right: "-15px" },
                    ])}
                  </div>
                </li>
              ))}
            </ul>

            {/* Mobile search icon & mini-modal */}
            <div className="relative mt-8">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                size="lg"
                className="cursor-pointer hover:text-secondary"
                onClick={() => setShowSearch(!showSearch)}
              />
              <AnimatePresence>
                {showSearch && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute left-0 mt-2 bg-white text-dark rounded-lg shadow-lg p-4 z-20"
                  >
                    <input
                      type="text"
                      placeholder="Search..."
                      className="w-48 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Nav;
