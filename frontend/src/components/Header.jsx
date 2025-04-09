import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MobileNav from './MobileNav';

export default function Header() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-[#D3242A]">
            RuggedRed
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-800 hover:text-[#D3242A] transition-colors">
              Home
            </Link>
            <Link to="/products" className="text-gray-800 hover:text-[#D3242A] transition-colors">
              Products
            </Link>
            <Link to="/about" className="text-gray-800 hover:text-[#D3242A] transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-gray-800 hover:text-[#D3242A] transition-colors">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileNav}
            className="md:hidden text-gray-800 hover:text-[#D3242A] transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
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
      </div>

      {/* Mobile Navigation */}
      <MobileNav isOpen={isMobileNavOpen} onClose={toggleMobileNav} />
    </header>
  );
} 