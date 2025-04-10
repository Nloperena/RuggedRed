import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Stars from "./Stars";
import kitchen3 from "../assets/Kitchen5.png";
import './Hero.css';
import Button from "./Button";
import Mascot from "./Mascot";
import ProductDivider from "./ProductDivider";

const Hero = () => {
  // Add scroll behavior control
  useEffect(() => {
    const preventScrollUp = (e) => {
      if (window.scrollY === 0 && e.deltaY < 0) {
        e.preventDefault();
      }
    };

    // Add event listener for mouse wheel
    window.addEventListener('wheel', preventScrollUp, { passive: false });
    
    // Add event listener for touch devices
    let touchStart = 0;
    window.addEventListener('touchstart', (e) => {
      touchStart = e.touches[0].clientY;
    }, { passive: false });

    window.addEventListener('touchmove', (e) => {
      const touchEnd = e.touches[0].clientY;
      if (window.scrollY === 0 && touchEnd > touchStart) {
        e.preventDefault();
      }
    }, { passive: false });

    // Cleanup
    return () => {
      window.removeEventListener('wheel', preventScrollUp);
      window.removeEventListener('touchstart', (e) => {
        touchStart = e.touches[0].clientY;
      });
      window.removeEventListener('touchmove', (e) => {
        const touchEnd = e.touches[0].clientY;
        if (window.scrollY === 0 && touchEnd > touchStart) {
          e.preventDefault();
        }
      });
    };
  }, []);

  const scrollToProducts = () => {
    // Check if we're on the home page
    if (window.location.pathname === '/') {
      const productsSection = document.getElementById('our-products');
      if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If we're not on the home page, navigate to the products page
      window.location.href = '/products';
    }
  };

  return (
    <section
      id="hero"
      className="relative z-10 flex items-center min-h-screen"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 85%, rgba(255, 255, 255, 1)), url(${kitchen3})`,
        marginTop: 0,
        paddingTop: 0,
        position: 'relative',
      }}
    >
      {/* Sparkly Stars in the background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Stars
          count={30}
          sizeRange={[5, 15]}
          durationRange={[3, 6]}
          opacityRange={[0.4, 0.9]}
        />
      </div>

      {/* Main wrapper */}
      <motion.div
        className="hero-content relative z-10 w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6 h-full">
          <div className="hidden lg:block h-full">
            <div className="w-full h-full bg-gray-100 opacity-0 rounded-lg"></div>
          </div>

          {/* Right column */}
          <div className="flex flex-col justify-center items-start text-left space-y-4 md:space-y-6">
            <motion.h1
              className="font-extrabold leading-tight text-[#D3242A] mb-1"
              style={{ fontFamily: "TwCenMTCondensedExtraBold, sans-serif", fontStyle: "normal" }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <span className="block mb-[-0.5rem]">A PROVEN</span>
              <span className="block whitespace-nowrap">POWERFUL CLEAN</span>
            </motion.h1>

            {/* Subheading */}
            <motion.div
              className="inline-block bg-white bg-opacity-70 backdrop-filter backdrop-blur-lg rounded-lg drop-shadow-md p-4 sm:p-6 md:p-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.5 }}
            >
              <p className="text-[#222222] leading-tight font-medium mb-0" style={{ fontFamily: "TwCenMTCondensedExtraBold, sans-serif", fontStyle: "normal" }}>
                Tough enough for industrial messes, safe enough for your home.
                Get the clean you can&nbsp;trust.
              </p>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              className="w-full flex justify-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.5 }}
            >
              <Button
                variant="primary"
                size="large"
                onClick={scrollToProducts}
              >
                Start Cleaning
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Mascot positioned absolutely within the hero section */}
      <Mascot />

      {/* Product Divider positioned absolutely within the hero section */}
      <ProductDivider flip={false} />
    </section>
  );
};

export default Hero;