import React from "react";
import PropTypes from "prop-types";

const Divider = ({ imageSrc, altText, position, flip, size, mobileAdjust }) => {
  const isLeft = position === "left";

  return (
    <div
      className={`relative w-full ${flip ? "rotate-180" : ""}`}
      style={{
        zIndex: 1001,
        marginTop: "-8rem", // Apply margin-top to the entire divider for default
      }}
    >
      <div
        className={`
          relative 
          block 
          transform 
          mx-auto
          ${isLeft ? "float-left" : "float-right"} // Float based on position prop
          sm:mt-8 // Add more margin-top for sm breakpoint (640px+)
          sm:mb-18 // Add more margin-bottom for sm breakpoint (640px+)
        `}
        style={{
          marginBottom: "-15rem", // Default margin-bottom
          ...mobileAdjust, // Apply mobile-specific adjustments
        }}
      >
        <img
          src={imageSrc}
          alt={altText}
          className={`
            block
            ${size === "small" ? "w-[180px]" : size === "medium" ? "w-[240px]" : "w-[615px] mt-[24]"} /* Add mt-[24] (6rem) for large */
            sm:w-[240px] 
            md:w-[385px] 
            lg:w-[400px] 
            xl:w-[615px]
            ${size === "large" ? "mt-[24]" : "mt-[0]"} /* Ensure margin-top applies conditionally */
            ${isLeft ? "ml-[1rem] sm:ml-[2rem] lg:ml-8 xl:ml-12" : "mr-[1rem] sm:mr-[2rem] lg:mr-8 xl:mr-12"}
          `}
          style={{
            maskImage: "linear-gradient(to bottom, black 95%, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, black 95%, transparent)",
          }}
        />
      </div>
    </div>
  );
};

Divider.propTypes = {
  imageSrc: PropTypes.string.isRequired, // Path to the image
  altText: PropTypes.string.isRequired, // Alt text for the image
  position: PropTypes.oneOf(["left", "right"]).isRequired, // Float direction
  flip: PropTypes.bool, // Whether to flip the divider
  size: PropTypes.oneOf(["small", "medium", "large"]), // Control size of the image
  mobileAdjust: PropTypes.object, // Mobile-specific style adjustments
};

Divider.defaultProps = {
  flip: false,
  size: "medium",
  mobileAdjust: {}, // Default to no adjustments
};

export default Divider;
