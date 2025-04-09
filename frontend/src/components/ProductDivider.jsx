import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import ProductHeroImg from "../assets/RR Bottles Reflection 2.png";
import "./ProductDivider.css";

const ProductDivider = ({ flip }) => {
  const scrollToProducts = () => {
    // Check if we're on the home page
    if (window.location.pathname === '/') {
      const productsSection = document.getElementById('our-products');
      if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If we're not on the home page, navigate to the products page
      window.location.href = '/products';
    }
  };

  return (
    <motion.div
      className={`relative w-full max-w-[100vw] ${flip ? "rotate-180" : ""}`}
      style={{
        zIndex: 1001,
        cursor: 'pointer'
      }}
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ 
        delay: 1.5, 
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] // Custom easing for smooth animation
      }}
      onClick={scrollToProducts}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          scrollToProducts();
        }
      }}
    >
      {/* Wrapper for Product Image */}
      <div
        className="block transform mx-auto float-right w-[240px] sm:w-[385px] md:w-[500px] lg:w-[615px]"
        style={{
          marginBottom: "0",
          marginRight: "0",
          marginTop: "0",
        }}
      >
        {/* Product image */}
        <img
          src={ProductHeroImg}
          alt="RuggedRed Product Hero"
          className="block object-contain product-divider"
          style={{
            maskImage: "linear-gradient(to bottom, black 95%, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, black 95%, transparent)",
          }}
        />
      </div>
    </motion.div>
  );
};

ProductDivider.propTypes = {
  flip: PropTypes.bool,
};

ProductDivider.defaultProps = {
  flip: false,
};

export default ProductDivider;
