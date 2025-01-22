import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const StickyImages = () => {
  // We track this entire section so we can do scroll-based animations
  const sectionRef = useRef(null);

  // scrollYProgress goes from 0.0 (top of section) to 1.0 (bottom of section)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // ------------------
  // LEFT IMAGE (moves in from left, parallax down, slides out right)
  // ------------------
  // X: -600 → 0 (enter), stays 0 in parallax, then 0 → +600 (exit)
  const leftImageX = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [-600, 0, 0, 600]);
  // Y: 0 → 0 (enter), 0 → +200 (parallax), stays +200 in exit
  const leftImageY = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 0, 200, 200]);
  // OPACITY: 0 → 1 (enter), 1 → 1 (parallax), 1 → 0 (exit)
  const leftImageOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  // ------------------
  // RIGHT IMAGE (moves in from right, parallax up, slides out left)
  // ------------------
  // X: +600 → 0 (enter), stays 0, then 0 → -600 (exit)
  const rightImageX = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [600, 0, 0, -600]);
  // Y: 0 → 0 (enter), 0 → -200 (parallax), stays -200 in exit
  const rightImageY = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 0, -200, -200]);
  // OPACITY: 0 → 1 (enter), 1 → 1, 1 → 0 (exit)
  const rightImageOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  // ------------------
  // LEFT TEXT (slides in from below, parallax down, fade out)
  // ------------------
  // Y: +600 → 0, then 0 → +200, stays +200
  const leftTextY = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [600, 0, 200, 200]);
  // OPACITY: 0 → 1, then 1 → 1, then 1 → 0
  const leftTextOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  // ------------------
  // RIGHT TEXT (slides in from below, parallax up, fade out)
  // ------------------
  // Y: +600 → 0, then 0 → -200, stays -200
  const rightTextY = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [600, 0, -200, -200]);
  // OPACITY
  const rightTextOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  // New images as requested
  const images = [
    "https://images.ctfassets.net/hdznx4p7ef81/7iA5UBx6HnqzASrlpsYanj/b0316a9e6795a9aacf2893150beae9ba/Home_Cleaning_Tips_Blog-edit1.png",
    "https://images.ctfassets.net/hdznx4p7ef81/6YIz7DoFu6vD2njwLTB6vs/1b74a042bf21b293fc6e467959a8bef6/Home_Cleaning_Tips_Blog-edit2.png",
  ];

  return (
    <section ref={sectionRef} className="relative">
      {/* Make the section extra tall so we have a longer scroll range */}
      <div className="h-[300vh]">
        {/* Sticky container so these images remain pinned while scrolling */}
        <div className="sticky top-0 h-screen flex">

          {/* LEFT HALF */}
          <div className="relative w-1/2 h-full overflow-hidden">
            <motion.img
              src={images[0]}
              alt="Home Cleaning Tips - Left"
              // Combine X, Y, and opacity transforms
              style={{ x: leftImageX, y: leftImageY, opacity: leftImageOpacity }}
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
            {/* Subtle fade at the top */}
            <div
              className="absolute top-0 left-0 w-full h-16 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 100%)",
              }}
            />
            {/* Subtle fade at the bottom */}
            <div
              className="absolute bottom-0 left-0 w-full h-16 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to top, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 100%)",
              }}
            />

            {/* Text: also slides in, parallax, and fades out */}
            <motion.div
              style={{ y: leftTextY, opacity: leftTextOpacity }}
              className="absolute inset-0 flex items-center justify-center px-4"
            >
              <div
                className="px-4 py-2 text-center text-white"
                style={{
                  backgroundColor: "rgba(0,0,0,0.5)",
                  maxWidth: "80%",
                }}
              >
                <h2
                  className="text-3xl sm:text-4xl font-bold mb-2"
                  style={{
                    fontFamily: "Geogrotesque, sans-serif",
                    textShadow: "2px 2px 5px rgba(0,0,0,0.8)",
                  }}
                >
                  Keep Your Home Spotless
                </h2>
                <p
                  className="text-lg sm:text-xl leading-relaxed font-medium"
                  style={{
                    fontFamily: "inherit",
                    textShadow: "1px 1px 3px rgba(0,0,0,0.7)",
                  }}
                >
                  Explore the best tips for a clean and fresh living space.
                </p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT HALF */}
          <div className="relative w-1/2 h-full overflow-hidden">
            <motion.img
              src={images[1]}
              alt="Home Cleaning Tips - Right"
              style={{ x: rightImageX, y: rightImageY, opacity: rightImageOpacity }}
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
            {/* Subtle fade at the top */}
            <div
              className="absolute top-0 left-0 w-full h-16 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 100%)",
              }}
            />
            {/* Subtle fade at the bottom */}
            <div
              className="absolute bottom-0 left-0 w-full h-16 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to top, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 100%)",
              }}
            />

            <motion.div
              style={{ y: rightTextY, opacity: rightTextOpacity }}
              className="absolute inset-0 flex items-center justify-center px-4"
            >
              <div
                className="px-4 py-2 text-center text-white"
                style={{
                  backgroundColor: "rgba(0,0,0,0.5)",
                  maxWidth: "80%",
                }}
              >
                <h2
                  className="text-3xl sm:text-4xl font-bold mb-2"
                  style={{
                    fontFamily: "Geogrotesque, sans-serif",
                    textShadow: "2px 2px 5px rgba(0,0,0,0.8)",
                  }}
                >
                  Built for Tough Jobs
                </h2>
                <p
                  className="text-lg sm:text-xl leading-relaxed font-medium"
                  style={{
                    fontFamily: "inherit",
                    textShadow: "1px 1px 3px rgba(0,0,0,0.7)",
                  }}
                >
                  Discover high-performance solutions for every messy challenge.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StickyImages;
