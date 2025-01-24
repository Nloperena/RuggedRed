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
        className={`relative block transform mx-auto float-left`}
        style={{
          marginTop: "-40rem", // Apply the requested top margin
          marginLeft: "18rem", // Apply the requested left margin
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
            w-[230px]        // Slightly larger size for mobile (increased from 180px)
            sm:w-[260px]     // Slightly larger size for small screens
            md:w-[400px]     // Increased size for medium screens
            lg:w-[420px]     // Slightly larger size for large screens
            xl:w-[650px]     // Larger size for extra-large screens
            // Adjust margin-top for breakpoints
            mt-[0rem]        // No margin-top for mobile
            sm:mt-[-10rem]  
            md:mt-[-10rem]  
            lg:mt-[-15rem]
            xl:mt-[-15rem]
            // Add margin-left conditionally for spacing
            ml-[1rem]        // Add margin-left for mobile
            sm:ml-[2rem]     // Increase margin for larger breakpoints
            lg:ml-8          // Consistent margin for large screens
            xl:ml-12         // Larger margin for extra-large screens
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

MascotDivider.propTypes = {
  flip: PropTypes.bool,
};

MascotDivider.defaultProps = {
  flip: false,
};

export default MascotDivider;
