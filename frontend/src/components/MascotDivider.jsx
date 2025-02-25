import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import Mascot from "../assets/RRMascot.png";

const MascotDivider = ({ flip }) => {
  return (
    <div
      className={`relative w-full ${flip ? "rotate-180" : ""}`}
      style={{ zIndex: 1001 }}
    >
      {/* Wrapper for Mascot with Animated Entrance */}
      <motion.div
        initial={{ x: -150, opacity: 0 }} // Start position: Left & Invisible
        animate={{ x: 0, opacity: 1 }} // End position: Normal
        transition={{
          duration: 1.2,
          ease: [0.25, 1, 0.5, 1], // Bezier Curve for smooth feel
        }}
        className="relative block transform mx-auto float-left"
        style={{
          marginTop: "-40rem",
          marginLeft: "18rem",
        }}
      >
        {/* Mascot Image */}
        <img
          src={Mascot}
          alt="Rugged Red Mascot"
          className={`
            w-full block
            w-[230px] sm:w-[260px] md:w-[400px] lg:w-[420px] xl:w-[650px]
            mt-[0rem] sm:mt-[-10rem] md:mt-[-10rem] lg:mt-[-15rem] xl:mt-[-15rem]
            ml-[1rem] sm:ml-[2rem] lg:ml-8 xl:ml-12
          `}
          style={{
            maskImage: "linear-gradient(to bottom, black 95%, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, black 95%, transparent)",
          }}
        />
      </motion.div>
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
