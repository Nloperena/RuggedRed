import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import RuggedRedLogo from "../assets/RuggedRedTypographyLogo.png";
import FlagIcon from "../assets/icons/Flag Icon.png";
import MobileNav from "./MobileNav";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Inversion toggle
  const [isInverted, setIsInverted] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Tips", path: "/blog" },
    { name: "About", path: "/about" },
  ];

  // Nav background & text color classes
  const navClasses = isInverted
    ? "sticky top-0 z-50 bg-[#D3242A] text-white shadow-md h-20"
    : "sticky top-0 z-50 bg-white text-red-600 shadow-md h-20";

  // Desktop link styling
  //  - If inverted: default text white, hover => background white, text red
  //  - If not inverted: default text red, hover => background red, text white
  const getDesktopLinkClass = (isInverted) =>
    isInverted
      ? "py-1 px-3 rounded transition-colors hover:bg-white hover:text-[#D3242A]"
      : "py-1 px-3 rounded transition-colors hover:bg-[#D3242A] hover:text-white";

  // Switch toggler
  const handleSwitchToggle = () => {
    setIsInverted(!isInverted);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className={navClasses}
    >
      <div className="container mx-auto flex justify-between items-center h-full px-6">
        {/* Logo */}
        <div>
          <Link to="/">
            {/* Optionally invert the logo's colors with style={ isInverted ? { filter: "invert(1)" } : {} } */}
            <img src={RuggedRedLogo} alt="Rugged Red Logo" className="h-16" />
          </Link>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-lg font-semibold" style={{ fontFamily: "Geogrotesque, sans-serif" }}>
          {links.map((link) => (
            <li key={link.name}>
              <Link to={link.path} className={getDesktopLinkClass(isInverted)}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Flag + Switch for Desktop */}
        <div className="hidden md:flex items-center space-x-6">
          <img
            src={FlagIcon}
            alt="Made in America"
            className="h-16"
            // style={ isInverted ? { filter: "invert(1)" } : {} }
          />
          {/* Toggle Switch */}
          <div className="flex items-center">
            <span className="mr-2 text-sm font-semibold select-none">
              {isInverted ? "Invert On" : "Invert Off"}
            </span>
            <div
              className="relative inline-block w-10 h-6 select-none transition duration-200 ease-in"
              onClick={handleSwitchToggle}
            >
              {/* Track */}
              <div
                className={`absolute inset-0 rounded-full cursor-pointer transition-colors ${
                  isInverted ? "bg-white" : "bg-red-200"
                }`}
              />
              {/* Knob */}
              <motion.div
                className="absolute left-0 top-0 bottom-0 w-6 h-6 bg-red-600 rounded-full shadow transform cursor-pointer"
                layout
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                style={{ left: isInverted ? "1.25rem" : "0.25rem" }}
              />
            </div>
          </div>
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
          isInverted={isInverted} // pass the state down
        />
      </div>
    </motion.nav>
  );
}
