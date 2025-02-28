import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import RuggedRedLogo from "../assets/RuggedRedTypographyLogo.png";
import FlagIcon from "../assets/icons/Flag Icon.png";
import MobileNav from "./MobileNav";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isInverted, setIsInverted] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Tips", path: "/blog" },
    { name: "About", path: "/about" },
  ];

  // Navbar height adjustment for large screens
  const navHeight = "h-20 md:h-24 lg:h-28"; // Thicker for larger displays

  // Navbar background & text color logic
  const navClasses = isInverted
    ? `sticky top-0 z-50 bg-white text-red-600 shadow-md ${navHeight}`
    : `sticky top-0 z-50 bg-[#D3242A] text-white shadow-md ${navHeight}`;

  // Desktop link hover effect (rounded and snappy)
  const getDesktopLinkClass = (isInverted) =>
    isInverted
      ? "py-2 px-5 rounded-full transition-all duration-200 ease-in-out hover:bg-[#D3242A] hover:text-white"
      : "py-2 px-5 rounded-full transition-all duration-200 ease-in-out hover:bg-white hover:text-[#D3242A]";

  // Toggle Inversion Mode
  const handleSwitchToggle = () => {
    setIsInverted(!isInverted);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={navClasses}
    >
      <div className="container mx-auto flex justify-between items-center h-full px-6">
        {/* Logo */}
        <div>
          <Link to="/">
            <img src={RuggedRedLogo} alt="Rugged Red Logo" className="h-16 lg:h-20" />
          </Link>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-lg lg:text-xl font-semibold" style={{ fontFamily: "Geogrotesque, sans-serif" }}>
          {links.map((link) => (
            <li key={link.name}>
              <Link to={link.path} className={getDesktopLinkClass(isInverted)}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Flag + Switch (Now Flag is fully to the Right) */}
        <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
          {/* Toggle Switch */}
          <div className="flex items-center">
            <div
              className="relative inline-block w-14 h-8 select-none transition duration-200 ease-in cursor-pointer"
              onClick={handleSwitchToggle}
            >
              {/* Track */}
              <motion.div
                className={`absolute inset-0 rounded-full transition-colors duration-300 ${
                  isInverted ? "bg-[#D3242A]" : "bg-white"
                }`}
                layout
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
              {/* Knob */}
              <motion.div
                className={`absolute top-1 w-6 h-6 rounded-full shadow transform cursor-pointer transition-transform duration-300 ${
                  isInverted ? "bg-white" : "bg-[#D3242A]"
                }`}
                layout
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                style={{ left: isInverted ? "calc(100% - 1.5rem)" : "0.25rem" }}
              />
            </div>
          </div>

          {/* Flag Icon (Fully Right-Aligned) */}
          <img
            src={FlagIcon}
            alt="Made in America"
            className="h-16 lg:h-20 ml-4"
          />
        </div>

        {/* Mobile Menu (Hamburger) */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-current"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <MobileNav
          isMenuOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
          links={links}
          isInverted={isInverted}
        />
      </div>
    </motion.nav>
  );
}