import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import RuggedRedLogo from "../assets/RuggedRedTypographyLogo.png";
import FlagIcon from "../assets/icons/Flag Icon.png";
import MobileNav from "./MobileNav";

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  // Declare isMenuOpen and setIsMenuOpen
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > window.innerHeight / 2) {
        // Scrolling down
        setIsScrolled(true);
        setIsScrollingUp(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsScrollingUp(true);
        setIsScrolled(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const links = ["Home", "Products", "Tips", "About"];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className={`fixed top-0 w-full z-50 p-4 shadow-md transition-all duration-500 ${
        isScrolled
          ? "bg-gradient-to-b from-red-500 via-red-600 to-red-700 text-white"
          : isScrollingUp
          ? "bg-transparent text-red-600"
          : "bg-transparent text-red-600"
      }`}
      style={{ height: "80px" }}
    >
      <div className="container mx-auto flex justify-between items-center h-full">
        {/* Logo */}
        <div className="relative">
          <img src={RuggedRedLogo} alt="Rugged Red Logo" className="h-20 md:h-24" />
        </div>

        {/* Centered Navigation Links */}
        <div className="flex-grow">
          <ul
            className="flex justify-center space-x-8 text-lg md:text-xl font-semibold transition-colors duration-500"
            style={{ fontFamily: "Geogrotesque, sans-serif" }}
          >
            {links.map((link, index) => (
              <li key={index} className="cursor-pointer hover:text-secondary">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a href={`#${link.toLowerCase()}`}>{link}</a>
                </motion.div>
              </li>
            ))}
          </ul>
        </div>

        {/* Made in America Flag */}
        <div className="hidden md:block">
          <img src={FlagIcon} alt="Made in America" className="h-20 w-auto" />
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <MobileNav isMenuOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} links={links} />
    </motion.nav>
  );
};

export default Nav;
