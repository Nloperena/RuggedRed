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
      {/* Wrapper for Mascot */}
      <motion.div
        className="relative block transform mx-auto float-left"
        style={{
          marginTop: "-40rem",
          marginLeft: "18rem",
        }}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ 
          duration: 1,
          ease: [0.6, 0.05, 0.2, 0.9],
          delay: 0.5
        }}
      >
        {/* Mascot Image */}
        <motion.img
          src={Mascot}
          alt="RuggedRed Mascot"
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ 
            duration: 1.5,
            ease: [0.6, 0.05, 0.2, 0.9],
            delay: 0.5
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
