import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "./Button";
import NewsletterModal from "./NewsletterModal";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setIsNewsletterOpen(true);
    }
  };

  // Define animation variants for content with increased duration
  const contentVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1.5, delay: 0.1 }
    },
  };

  // Define hover animations for input with subtle scaling
  const inputHover = {
    hover: { 
      scale: 1.05, 
      transition: { duration: 0.3 } 
    },
  };

  return (
    <>
      <footer className="bg-gradient-to-b from-[#D3242A] to-[#9B1218] text-white py-12 px-6 relative z-10">
        <motion.div
          className="container mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={contentVariants}
        >
          {/* Top Section: Subscription Updates */}
          <h2
            className="text-2xl md:text-3xl font-bold mb-4"
            style={{ fontFamily: "Geogrotesque, sans-serif" }}
          >
            Get Updates from RUGGEDRED
          </h2>
          <p
            className="text-base md:text-lg mb-8"
            style={{ fontFamily: "Geogrotesque, sans-serif" }}
          >
            New products, tips, and much more!
          </p>

          {/* Subscription Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center items-center mb-12 space-y-4 sm:space-y-0 sm:space-x-4">
            <motion.input
              type="email"
              placeholder="Enter Email"
              className="px-6 py-3 w-full sm:w-72 text-gray-700 bg-white rounded-full shadow-lg outline-none focus:ring-2 focus:ring-red-400"
              whileHover="hover"
              variants={inputHover}
              required
              aria-label="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button
              type="submit"
              variant="secondary"
              size="medium"
              onClick={handleSubmit}
            >
              Subscribe
            </Button>
          </form>

          {/* Bottom Section: Branding */}
          <motion.div variants={contentVariants}>
            <div className="flex flex-col sm:flex-row justify-center items-center text-center space-y-2 sm:space-y-0 sm:space-x-6">
              <p
                className="text-sm"
                style={{ fontFamily: "Geogrotesque, sans-serif" }}
              >
                Powered by{" "}
                <a
                  href="https://formoclean.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold hover:text-gray-300 transition-colors duration-200"
                  style={{ fontFamily: "Geogrotesque, sans-serif" }}
                >
                  FormoClean
                </a>
              </p>
              <p
                className="text-sm"
                style={{ fontFamily: "Geogrotesque, sans-serif" }}
              >
                &bull; © {new Date().getFullYear()} RUGGEDRED. All Rights Reserved.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </footer>
      <NewsletterModal 
        isOpen={isNewsletterOpen} 
        onClose={() => setIsNewsletterOpen(false)}
        initialEmail={email}
      />
    </>
  );
};

export default Footer;
