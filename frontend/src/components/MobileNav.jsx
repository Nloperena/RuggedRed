import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import FlagImage from "../assets/icons/Flag Icon.png";

const MobileNav = ({ isMenuOpen, onClose, links }) => {
  return (
    <motion.div
      animate={{
        x: isMenuOpen ? 0 : "100%",
      }}
      transition={{ duration: 1.3, ease: [0.25, 0.1, 0.25, 1] }}
      className="fixed top-0 right-0 w-3/4 sm:w-1/2 h-full bg-white shadow-2xl z-50 p-8"
    >
      {/* Close Button */}
      <button onClick={onClose} className="absolute top-8 right-8 text-6xl">
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
              whileHover={{ scale: 1.1, color: "#DB5461" }}
              whileTap={{ scale: 0.9 }}
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
                className="text-red-600 font-semibold text-4xl hover:underline"
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
        className="mt-16"
      >
        <img
          src={FlagImage}
          alt="Decorative Flag"
          className="w-full h-auto object-contain"
        />
      </motion.div>
    </motion.div>
  );
};

export default MobileNav;