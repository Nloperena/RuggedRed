import React from "react";
import PropTypes from "prop-types";

const WaveDivider = ({ color, path, flip }) => {
  return (
    <div
      className={`absolute w-full ${flip ? "rotate-180" : ""}`}
      style={{
        bottom: 0,
        left: 0,
        zIndex: 1000, // Debugging z-index
        backgroundColor: "rgba(0, 0, 255, 0.2)", // Debugging background
        border: "2px solid blue", // Debugging border
      }}
      ref={(el) => {
        if (el) {
          const styles = window.getComputedStyle(el);
          const boundingBox = el.getBoundingClientRect();
          console.log("WaveDivider Debugging Info:", {
            position: styles.position,
            zIndex: styles.zIndex,
            boundingBox,
          });
        }
      }}
    >
      <svg
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full"
      >
        <path fill={color} d={path}></path>
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
