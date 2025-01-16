import React from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import FlagIcon from "../assets/icons/Flag Icon.png"; // Import the "Made in America" image

const MobileNav = ({ isMenuOpen, onClose, links }) => {
  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          className="fixed top-0 right-0 bottom-0 w-64 bg-red-800 bg-opacity-95 z-50 shadow-xl flex flex-col p-6"
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "100%", opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {/* Header with Close Button */}
          <div className="flex justify-end mb-6">
            <button onClick={onClose} className="focus:outline-none" aria-label="Close Menu">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <ul className="flex flex-col space-y-4 text-lg font-semibold text-white">
            {links.map((link, index) => (
              <li
                key={index}
                className="cursor-pointer hover:text-gray-100"
                onClick={onClose} // Close the menu on link click
              >
                <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
                  <a href={`#${link.toLowerCase()}`} className="hover:text-gray-100">
                    {link}
                  </a>
                </motion.div>
              </li>
            ))}
          </ul>

          {/* Made in America Image */}
          <div className="mt-8 flex justify-center">
            <img src={FlagIcon} alt="Made in America" className="h-55 w-auto" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

MobileNav.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  links: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MobileNav;
