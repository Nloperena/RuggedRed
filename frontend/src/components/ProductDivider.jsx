import React from "react";
import PropTypes from "prop-types";
import ProductHeroImg from "../assets/RR-ProductHeroImg.png";

const ProductDivider = ({ flip }) => {
  return (
    <div
      className={`relative w-full ${flip ? "rotate-180" : ""}`}
      style={{
        zIndex: 1001,
      }}
    >
      {/* Wrapper for Product Image */}
      <div
        className={`
          relative 
          block 
          transform 
          mx-auto
          // Position product image differently for mobile vs. larger screens
          sm:float-right   // Float right for larger screens (square/landscape)
          float-left       // Float left for mobile
        `}
        style={{
          marginTop: "-10rem",    // Default for smaller screens
          marginBottom: "-5rem", // Consistent bottom margin
        }}
      >
        {/* Product image */}
        <img
          src={ProductHeroImg}
          alt="Rugged Red Product Hero"
          className={`
            w-full
            block
            // Responsive sizes
            sm:w-[240px] 
            md:w-[385px] 
            lg:w-[400px] 
            xl:w-[615px]
            // Adjust margin-top for breakpoints
            mt-[rem]     // Default margin-top
            sm:mt-[-10rem]  // For min-width: 640px
            md:mt-[-10rem]  // For min-width: 768px
            lg:mt-[-10rem]
            xl:mt-[-25rem]  // For min-width: 1280px
            // Add margin-right conditionally for larger screens
            lg:mr-8         // Add margin-right for min-width: 1024px
            xl:mr-12        // Add larger margin-right for min-width: 1280px
          `}
          style={{
            marginBottom: "-15rem", // Bottom margin consistent across sizes
            maskImage: "linear-gradient(to bottom, black 70%, transparent)", 
            WebkitMaskImage: "linear-gradient(to bottom, black 70%, transparent)", 
          }}
        />
      </div>
    </div>
  );
};

ProductDivider.propTypes = {
  flip: PropTypes.bool,
};

ProductDivider.defaultProps = {
  flip: false,
};

export default ProductDivider;
