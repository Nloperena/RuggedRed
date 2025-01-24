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
          sm:float-right   // Float right for larger screens
        `}
        style={{
          marginTop: "6rem", // Ensure consistent margin-top
          marginBottom: "-5rem", // Consistent bottom margin
        }}
      >
        {/* Product image */}
        <img
          src={ProductHeroImg}
          alt="Rugged Red Product Hero"
          className={`
            block
            w-full
            // Responsive sizes
            w-[180px]        // Smaller size for mobile
            sm:w-[240px] 
            md:w-[385px] 
            lg:w-[400px] 
            xl:w-[700px]
            float-right      // Align to the right for mobile and above
            mr-[1rem]        // Add margin-right for spacing on smaller screens
            sm:mr-[2rem]     // Increase margin-right for sm breakpoint
            lg:mr-8          // Consistent margin for large screens
            xl:mr-12         // Larger margin for extra-large screens
          `}
          style={{
            position: "relative",
            maxWidth: "30%", // Keep the image width to 30%
            transform: "translateX(15px)", // Move slightly to the right for smaller displays
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
