// We bring React into our file so we can make a component.
import React, { useRef } from "react";

// We bring in motion and useInView so we can animate as things come into view.
import { motion, useInView } from "framer-motion";

// We name our main component StickyScrollExample.
const StickyScrollExample = () => {
  // We set up references that point to our text sections.
  const keepHomeRef = useRef(null);
  const toughJobsRef = useRef(null);

  // We check if these sections are in view using useInView.
  const keepHomeInView = useInView(keepHomeRef, { once: true });
  const toughJobsInView = useInView(toughJobsRef, { once: true });

  // We define how our text should appear when it slides in.
  // 'hidden' means it's invisible and lower on the page,
  // 'visible' means it slides to the center and becomes opaque.
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  // We return the sections that make up our page layout.
  return (
    // This <div> is our main wrapper for all sections.
    <div className="w-full">

      {/* SECTION 1: This is where you show your carousel or images. */}
      <section className="h-screen w-full flex items-center justify-center bg-gray-200">
        {/* 
          Put your existing carousel code here.
          It's just a placeholder so you know where to insert your own code.
        */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-bold mb-4">Your Image Carousel</h2>
          {/* <ResponsiveCarousel /> can go right here */}
        </div>
      </section>

      {/* SECTION 2: KEEP YOUR HOME SPOTLESS */}
      <section className="relative h-screen w-full bg-white">
        {/* 
          'sticky top-0' means this box will remain stuck at the top 
          while we scroll through the entire 'section' area. 
        */}
        <div className="sticky top-0 h-screen flex items-center justify-center">
          <motion.div
            // This ref tells us if the element is in view
            ref={keepHomeRef}
            // We tell motion which variants to use
            variants={textVariants}
            // Start hidden
            initial="hidden"
            // If keepHomeInView is true, show it
            animate={keepHomeInView ? "visible" : "hidden"}
            // We set the speed of the animation
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Our main heading text */}
            <h1 className="text-4xl font-bold text-[#D3242A] mb-2">
              Keep Your Home Spotless
            </h1>
            {/* Our smaller subheading */}
            <p className="text-lg text-gray-600">
              Tackle every corner with ease.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: BUILT FOR TOUGH JOBS */}
      <section className="relative h-screen w-full bg-gray-100">
        {/* 
          Again, 'sticky top-0' so this text also stays in place 
          while you scroll through this section.
        */}
        <div className="sticky top-0 h-screen flex items-center justify-center">
          <motion.div
            ref={toughJobsRef}
            variants={textVariants}
            initial="hidden"
            // Show it if toughJobsInView is true
            animate={toughJobsInView ? "visible" : "hidden"}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold text-[#D3242A] mb-2">
              Built for Tough Jobs
            </h1>
            <p className="text-lg text-gray-600">
              Power through grease and grime!
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: This is the next part of your page */}
      <section className="h-screen w-full flex items-center justify-center bg-white">
        <h2 className="text-2xl font-bold">Next Component Goes Here</h2>
      </section>
    </div>
  );
};

export default StickyScrollExample;
