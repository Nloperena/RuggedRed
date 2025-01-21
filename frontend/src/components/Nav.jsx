import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import RuggedRedLogo from "../assets/RuggedRedTypographyLogo.png";
import FlagIcon from "../assets/icons/Flag Icon.png";
import MobileNav from "./MobileNav";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Tips", path: "/blog" }, // Tips now links to the Blog page
    { name: "About", path: "/about" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="sticky top-0 z-50 bg-white shadow-md h-20"
    >
      <div className="container mx-auto flex justify-between items-center h-full px-6">
        {/* Logo */}
        <div className="relative">
          <Link to="/">
            <img src={RuggedRedLogo} alt="Rugged Red Logo" className="h-16" />
          </Link>
        </div>

        {/* Centered Links */}
        <ul
          className="hidden md:flex space-x-8 text-lg font-semibold"
          style={{
            fontFamily: "Geogrotesque, sans-serif",
           
            color: "red", // Red text
            
          }}
        >
          {links.map((link, index) => (
            <li key={index} className="hover:text-secondary">
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>

        {/* Flag (Desktop Only) */}
        <div className="hidden md:block">
          <img src={FlagIcon} alt="Made in America" className="h-16" />
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <MobileNav isMenuOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} links={links} />
      </div>
    </motion.nav>
  );
};

export default Nav;
