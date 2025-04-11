import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import ProductHeroImg from "../assets/thumbnail_Rugged Red- All Purpose Cleaner- Amazon Launch- Interlock.png";
import "./ProductDivider.css";

const ProductDivider = ({ flip = false }) => {
  const scrollToProducts = () => {
    const productsSection = document.getElementById('our-products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      className={`product-divider ${flip ? 'flip' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.8 }}
      onClick={scrollToProducts}
    >
      <img
        src={ProductHeroImg}
        alt="Product Divider"
        className="product-divider-image"
      />
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
