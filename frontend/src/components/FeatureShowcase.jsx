// We import React and useEffect so we can build our component
import React, { useEffect } from "react";
// We import motion from framer-motion to create cool animations
import { motion } from "framer-motion";
// We import our images
import Hand from "../assets/blueragtransparent.png";
import GlassTexture from "../assets/textures/glassTexture.png";

/*
  Helper: EdgeStars
  (Unchanged) - places sparkly stars on the container edges.
*/
function EdgeStars() {
  // ... your star code as is ...
  return <> {/* your stars here */} </>;
}

// Main Component: FeaturesShowcase
export default function FeaturesShowcase() {
  // Check if Font Awesome is loaded
  useEffect(() => {
    if (!window.FontAwesome) {
      console.warn("Font Awesome is NOT detected. Icons may not be visible.");
    }
  }, []);

  // Only 4 features now
  const features = [
    { icon: "fa-solid fa-bolt", label: "Powerful" },
    { icon: "fa-solid fa-leaf", label: "Non-Toxic" },
    { icon: "fa-solid fa-spray-can", label: "Advanced Cleaning" },
    { icon: "fa-solid fa-check-circle", label: "Proven" },
  ];

  // 4 stats to show in red boxes
  const stats = [
    { value: "+12k", label: "HAPPY CUSTOMERS" },
    { value: "84", label: "BOTTLES RECYCLED" },
    { value: "3,057", label: "MINUTES YOU GET BACK" },
    { value: "24h", label: "TOTAL CLEAN" },
  ];

  return (
    // This section is our big container
    <section
      className="relative min-h-[700px] py-16 px-6 overflow-hidden"
      style={{
        /* 
          1) We set a white background color.
          2) We place our glass texture behind it.
          3) background-blend-mode: "overlay" merges the texture & color.
        */
        backgroundColor: "#ffffff",
        backgroundImage: `url(${GlassTexture})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        
      }}
    >
      {/* 
        Hand image floats on top. 
        We add a custom keyframe sequence for a smoother, "curvy" movement.
      */}
      <motion.img
        src={Hand}
        alt="Wiping Hand"
        className="absolute right-0 bottom-0 max-w-[500px] md:max-w-[600px] z-0"
        style={{ pointerEvents: "none", transformOrigin: "top left" }}
        animate={{
          x: [0, 25, -20, 15, -15, 0],
          y: [0, 10, 20, 40, 20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: [0.42, 0, 0.58, 1], // "easeInOut" cubic-bezier
        }}
      />

      {/* 
        Main content container, relative so edges stars can appear inside
      */}
      <div className="relative max-w-screen-xl mx-auto z-10">
        {/* Random star sparkles along the edges */}
        <EdgeStars />

        {/* 
          Our 4 icons in a responsive grid:
          2 columns on small, 4 columns on bigger screens
        */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-xl z-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {features.map((feature, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <i className={`${feature.icon} text-4xl text-red-600 mb-2`} />
              <p className="text-gray-800 font-semibold">{feature.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Main content area: heading & stats */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 z-10">
          {/* LEFT SECTION: Title & paragraphs */}
          <motion.div
            className="bg-white/90 backdrop-blur-md shadow-lg rounded-3xl p-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h2
              className="text-5xl font-bold text-red-600 mb-6"
              style={{ fontFamily: "Geogrotesque, sans-serif" }}
            >
              Why Choose Rugged Red?
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              We combine industrial strength with everyday safety—so you can
              tackle tough messes without worry.
            </p>
            <p className="text-gray-700 text-lg">
              From oil spills to kitchen grime, Rugged Red handles it all with
              ease and confidence.
            </p>
          </motion.div>

          {/* RIGHT SECTION: Stats in red boxes */}
          <motion.div
            className="grid grid-cols-2 gap-6 z-10"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                className="bg-red-600 text-white rounded-3xl shadow-xl flex flex-col items-center justify-center p-8"
              >
                <p
                  className="text-4xl font-extrabold mb-2"
                  style={{ fontFamily: "Geogrotesque, sans-serif" }}
                >
                  {stat.value}
                </p>
                <p className="text-sm font-semibold uppercase">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
