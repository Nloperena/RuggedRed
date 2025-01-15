import React from "react";
import PropTypes from "prop-types";

const WaveDivider = ({ color, path, flip }) => {
  return (
    <div
      /* 
        1) bottom-[-20px] on small screens
        2) md:bottom-[-40px] on tablets
        3) lg:bottom-[-60px] on large desktops
        4) xl:bottom-[-80px] on extra-large displays
      */
      className={`absolute w-full bottom-[-20px] md:bottom-[-40px] lg:bottom-[-60px] xl:bottom-[-80px] ${
        flip ? "rotate-180" : ""
      }`}
      style={{
        left: 0,
        zIndex: 1000,
      }}
    >
      <svg
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full"
      >
        <path fill={color} d={path} />
      </svg>
    </div>
  );
};

WaveDivider.propTypes = {
  color: PropTypes.string,
  path: PropTypes.string,
  flip: PropTypes.bool,
};

export default WaveDivider;
