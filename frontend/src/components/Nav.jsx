import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import FlagIcon from "../assets/icons/Flag Icon.png";
import MobileNav from "./MobileNav";
import SqueakyCleanButton from "./SqueakyCleanButton";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    // { name: "Tips", path: "/blog" },
    { name: "About", path: "/about" },
  ];

  // Navbar height adjustment for large screens
  const navHeight = "h-20 md:h-24 lg:h-28"; // Thicker for larger displays

  // Navbar background & text color logic
  const navClasses = `sticky top-0 z-50 bg-[#D3242A] text-white shadow-md ${navHeight}`;

  // Desktop link hover effect (rounded and snappy)
  const getDesktopLinkClass = () => "py-2 px-5 rounded-full transition-all duration-200 ease-in-out hover:bg-white hover:text-[#D3242A]";

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
            <img 
              src="/images/RuggedRedTypographyLogo-InterlockDynamic.png" 
              alt="RuggedRed Logo" 
              className="h-16 lg:h-20" 
            />
          </Link>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-lg lg:text-xl font-semibold" style={{ fontFamily: "Geogrotesque, sans-serif" }}>
          {links.map((link) => (
            <li key={link.name}>
              <Link to={link.path} className={getDesktopLinkClass()}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Flag Icon */}
        <div className="hidden md:flex items-center">
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
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
          links={links}
        />
      </div>
    </motion.nav>
  );
}