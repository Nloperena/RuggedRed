import React from "react";
import PropTypes from "prop-types";
import Mascot from "../assets/RRMascot.png";

const MascotDivider = ({ flip }) => {
  return (
    <div
      className={`relative w-full ${flip ? "rotate-180" : ""}`}
      style={{
        zIndex: 1001,
      }}
    >
      {/* Wrapper for Mascot */}
      <div
        className={`
          relative 
          block 
          transform 
          mx-auto
          // Position mascot differently for mobile vs. larger screens
          sm:float-left   // Float left for larger screens (square/landscape)
          float-right     // Float right for mobile
        `}
        style={{
          marginTop: "-10rem",    // Default for smaller screens
          marginBottom: "-15rem", // Consistent bottom margin
        }}
      >
        {/* Mascot image */}
        <img
          src={Mascot}
          alt="Rugged Red Mascot"
          className={`
            w-full
            block
            // Responsive sizes
            sm:w-[240px] 
            md:w-[385px] 
            lg:w-[400px] 
            xl:w-[615px]
            // Adjust margin-top for breakpoints
            mt-[-10rem]     // Default margin-top
            sm:mt-[-10rem]  // For min-width: 640px
            md:mt-[-10rem]  // For min-width: 768px
            lg:mt-[-15rem]
            xl:mt-[-25rem]  // For min-width: 1280px
            // Add margin-left conditionally for larger screens
            lg:ml-8         // Add margin-left for min-width: 1024px
            xl:ml-12        // Add larger margin-left for min-width: 1280px
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

MascotDivider.propTypes = {
  flip: PropTypes.bool,
};

MascotDivider.defaultProps = {
  flip: false,
};

export default MascotDivider;
