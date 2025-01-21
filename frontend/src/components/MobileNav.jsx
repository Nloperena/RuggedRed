// MobileNav.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const MobileNav = ({ isMenuOpen, onClose, links }) => {
  // Basic fade-in side drawer approach
  return (
    <motion.div
      // We only show if "isMenuOpen" is true
      animate={{
        x: isMenuOpen ? 0 : "100%",
      }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 right-0 w-3/4 sm:w-1/2 h-full bg-white shadow-lg z-50 p-4"
    >
      {/* Close Button */}
      <button onClick={onClose} className="mb-6">
        X
      </button>

      {/* Navigation Links for mobile */}
      <ul className="flex flex-col space-y-4">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              to={link.path}
              onClick={onClose} // Close menu on link click
              className="text-red-600 font-semibold text-lg hover:underline"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default MobileNav;
