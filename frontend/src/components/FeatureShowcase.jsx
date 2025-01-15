import React, { useEffect } from "react";
// Import framer-motion for the slide-in animation
import { motion } from "framer-motion";

import Hand from "../assets/blueragtransparent.png";
import Flag from "../assets/usaflaggif.webp";

export default function FeaturesShowcase() {
  useEffect(() => {
    console.log("FeaturesShowcase: Checking if Font Awesome is loaded ->", window.FontAwesome);
    if (!window.FontAwesome) {
      console.warn("FeaturesShowcase: Font Awesome is NOT detected. Icons may not be visible.");
    }
  }, []);

  // Top "features" icons
  const features = [
    { icon: "fa-solid fa-bolt", label: "Powerful" },
    { icon: "fa-solid fa-leaf", label: "Non-Toxic" },
    { image: Flag, label: "Proudly Made in USA" },
    { icon: "fa-solid fa-check-circle", label: "Proven" },
    { icon: "fa-solid fa-hand-sparkles", label: "Squeaky Clean" },
  ];

  // Stats for the foreground boxes
  const stats = [
    { value: "+12k", label: "HAPPY CUSTOMERS" },
    { value: "84", label: "BOTTLES RECYCLED" },
    { value: "3,057", label: "MINUTES YOU GET BACK" },
    { value: "24h", label: "TOTAL CLEAN" },
  ];

  return (
    <section className="relative min-h-[600px] py-12 px-4 overflow-hidden">
      {/* ABSOLUTE + MOTION IMAGE aligned to the right, behind content */}
      <div className="absolute inset-y-0 right-0 flex items-center justify-end -z-10">
        <motion.img
          src={Hand}
          alt="Background"
          className="max-w-2xl w-auto h-auto object-contain pr-4"
          // Slide in from bottom-right to top-left
          initial={{ x: 200, y: 200, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
        {/* GRADIENT OVERLAY to gently fade out bottom & bottom-right */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              linear-gradient(to bottom, rgba(255,255,255,0) 90%, #fff 100%),
              radial-gradient(circle at 95% 95%, #fff 5%, rgba(255,255,255,0) 20%)
            `,
            backgroundBlendMode: "overlay",
          }}
        ></div>
      </div>

      {/* FOREGROUND CONTENT */}
      <div className="relative max-w-screen-xl mx-auto">
        {/* ICON ROW with a glass-like container */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/30 backdrop-blur-sm p-6 rounded-xl shadow-xl flex flex-wrap justify-center items-center gap-8">
            {features.map((feature, i) => (
              <div
                key={i}
                className="text-center flex flex-col items-center justify-center"
              >
                {feature.icon ? (
                  <i className={`${feature.icon} text-3xl text-black mb-2`} />
                ) : (
                  <div className="w-16 h-16 flex items-center justify-center overflow-hidden">
                    <img
                      src={feature.image}
                      alt={feature.label}
                      className="object-contain max-w-full max-h-full"
                    />
                  </div>
                )}
                <p className="text-black font-bold mt-2">{feature.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SPLIT SECTION: LEFT BOX + STATS GRID */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* LEFT BOX (semi-transparent for readability) */}
          <div className="md:w-1/2 bg-white/90 backdrop-blur-sm shadow-lg rounded-md p-6 flex items-center justify-center">
            <div>
              <h2 className="text-2xl font-bold text-red-600 mb-4">
                Why Choose Rugged Red?
              </h2>
              <p className="text-gray-700 mb-4">
                We combine industrial strength with everyday safety—so you can
                tackle tough messes without worry.
              </p>
              <p className="text-gray-700">
                From oil spills to kitchen grime, Rugged Red handles it all.
              </p>
            </div>
          </div>

          {/* STATS GRID */}
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="bg-red-600 text-white rounded-lg shadow-md flex flex-col items-center justify-center p-6"
              >
                <p className="text-3xl font-extrabold">{stat.value}</p>
                <p className="text-sm font-semibold uppercase">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
