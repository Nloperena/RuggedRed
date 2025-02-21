import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import FlagImage from "../assets/icons/Flag Icon.png";

// The mobile nav also changes color scheme if isInverted is true
const MobileNav = ({ isMenuOpen, onClose, links, isInverted }) => {
  // container class: if inverted => red background, white text
  // else => white background, red text
  const containerClass = isInverted ? "bg-[#D3242A] text-white" : "bg-white text-red-600";

  // link styling: invert text/hover background
  // if inverted => default white, hover => bg-white, text-red
  // if not => default red, hover => bg-red, text-white
  const getLinkClass = (isInverted) =>
    isInverted
      ? "block font-semibold text-4xl transition-colors hover:bg-white hover:text-[#D3242A] px-2 py-1 rounded"
      : "block font-semibold text-4xl transition-colors hover:bg-[#D3242A] hover:text-white px-2 py-1 rounded";

  return (
    <motion.div
      animate={{ x: isMenuOpen ? 0 : "100%" }}
      transition={{ duration: 1.3, ease: [0.25, 0.1, 0.25, 1] }}
      className={`fixed top-0 right-0 w-3/4 sm:w-1/2 h-full shadow-2xl z-50 p-8 ${containerClass}`}
    >
      {/* Close Button */}
      <button onClick={onClose} className="absolute top-8 right-8 text-4xl sm:text-6xl">
        <FontAwesomeIcon icon={faTimes} />
      </button>

      {/* Navigation Links for mobile */}
      <ul className="flex flex-col space-y-8 items-end mt-24">
        {links.map((link, index) => (
          <li key={index}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: index * 0.2, ease: "easeOut" }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to={link.path}
                onClick={(e) => {
                  e.preventDefault();
                  setTimeout(() => {
                    onClose();
                    window.location.href = link.path;
                  }, 500);
                }}
                className={getLinkClass(isInverted)}
              >
                {link.name}
              </Link>
            </motion.div>
          </li>
        ))}
      </ul>

      {/* Decorative Flag Image */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="mt-16 w-full"
      >
        <img
          src={FlagImage}
          alt="Decorative Flag"
          className="w-full h-auto object-contain"
          // Optionally invert flag in mobile nav:
          // style={ isInverted ? { filter: "invert(1)" } : {} }
        />
      </motion.div>
    </motion.div>
  );
};

export default MobileNav;
