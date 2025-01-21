// Nav.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
// We import "Link" from react-router-dom to navigate without reloading.
import { Link } from "react-router-dom";

import RuggedRedLogo from "../assets/RuggedRedTypographyLogo.png";
import FlagIcon from "../assets/icons/Flag Icon.png";
import MobileNav from "./MobileNav";

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  // We declare isMenuOpen and setIsMenuOpen for the mobile menu
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
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Here we define each nav link with a name and a path for React Router
  const links = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Tips", path: "/tips" },
    { name: "About", path: "/about" },
  ];

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
        {/* Logo on the left */}
        <div className="relative">
          {/* Wrap your logo in a <Link> if you want it to go back to Home */}
          <Link to="/">
            <img
              src={RuggedRedLogo}
              alt="Rugged Red Logo"
              className="h-20 md:h-24"
            />
          </Link>
        </div>

        {/* Centered Navigation Links (for desktop) */}
        <div className="flex-grow">
          <ul
            className="hidden md:flex justify-center space-x-8 text-lg md:text-xl font-semibold transition-colors duration-500"
            style={{ fontFamily: "Geogrotesque, sans-serif" }}
          >
            {links.map((link, index) => (
              <li key={index} className="cursor-pointer hover:text-secondary">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Use <Link to="..."> instead of <a href="..."> */}
                  <Link to={link.path}>{link.name}</Link>
                </motion.div>
              </li>
            ))}
          </ul>
        </div>

        {/* Made in America Flag (desktop only) */}
        <div className="hidden md:block">
          <img src={FlagIcon} alt="Made in America" className="h-20 w-auto" />
        </div>

        {/* Mobile Menu Toggle (Hamburger Icon) */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(true)}>
            {/* Example hamburger icon with FontAwesome or your own icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-current"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <MobileNav
        isMenuOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        links={links}
      />
    </motion.nav>
  );
};

export default Nav;
