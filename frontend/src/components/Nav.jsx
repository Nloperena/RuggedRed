import React, { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import RuggedRedLogo from "../assets/RuggedRedTypographyLogo.png";

const Nav = () => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <nav className="bg-gradient-to-b from-red-500 via-red-600 to-red-700 text-white sticky top-0 z-50 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo with Stars */}
        <div className="relative">
          {/* Logo */}
          <img
            src={RuggedRedLogo}
            alt="Rugged Red Logo"
            className="h-20 md:h-24"
          />

          {/* Bolder Twinkling Stars */}
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
            <motion.div
              initial={{ scale: 0 }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
              }}
              className="absolute w-12 h-12 text-white"
              style={{ top: "-20px", left: "-30px" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-full h-full fill-current"
              >
                <path d="M12 2 L13 8 L18 9 L13 10 L12 16 L11 10 L6 9 L11 8 L12 2 Z" />
              </svg>
            </motion.div>

            <motion.div
              initial={{ scale: 0 }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                delay: 0.5,
              }}
              className="absolute w-10 h-10 text-white"
              style={{ bottom: "-20px", right: "-30px" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-full h-full fill-current"
              >
                <path d="M12 2 L13 8 L18 9 L13 10 L12 16 L11 10 L6 9 L11 8 L12 2 Z" />
              </svg>
            </motion.div>
          </div>
        </div>

        {/* Navigation Links and Search */}
        <div className="flex items-center space-x-6">
          {/* Navigation Links */}
          <ul className="flex space-x-6 text-lg md:text-2xl font-semibold">
            {["Home", "Products", "Tips", "About"].map((link, index) => (
              <div key={index} className="relative group cursor-pointer">
                {/* Link */}
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

                {/* Twinkling Stars for Links */}
                <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 pointer-events-none">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.8, 1, 0.8],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.5,
                    }}
                    className="absolute w-8 h-8 text-white"
                    style={{ top: "-15px", left: "-15px" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="w-full h-full fill-current"
                    >
                      <path d="M12 2 L13 8 L18 9 L13 10 L12 16 L11 10 L6 9 L11 8 L12 2 Z" />
                    </svg>
                  </motion.div>

                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.8, 1, 0.8],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.5,
                      delay: 0.5,
                    }}
                    className="absolute w-6 h-6 text-white"
                    style={{ bottom: "-15px", right: "-15px" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="w-full h-full fill-current"
                    >
                      <path d="M12 2 L13 8 L18 9 L13 10 L12 16 L11 10 L6 9 L11 8 L12 2 Z" />
                    </svg>
                  </motion.div>
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
            {showSearch && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
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
        </div>
      </div>
    </nav>
  );
};

export default Nav;
