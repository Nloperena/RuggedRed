import React, { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import Hero from "../components/Hero";
import Divider from "../components/Divider";
import ProductLine from "../components/ProductLine";
import StickyImage from "../components/StickyImage";
import RichTextProductsSection from "../components/RichTextProductsSection";
import Testimonials from "../components/Testimonials";
import AutoScrollingImages from "../components/AutoScrollingImages";
import RedSection from "../components/About/RedSection";
import ProductDivider from "../components/ProductDivider";
// import BlogSection from "../components/BlogSection";
import ComparisonTable from "../components/ComparisonTable";
import ParallaxSection from "../components/ParallaxSection";
import OurProductsSection from "../components/OurProductSection";
import './Home.css';

const Home = () => {
  // InView hooks for key markers.
  const { ref: productLineEndInViewRef, inView: productLineEndInView } = useInView({
    threshold: 0,
  });
  const { ref: richTextInViewRef, inView: richTextInView } = useInView({
    threshold: 0,
  });
  const { ref: footerSentinelRef, inView: footerSentinelInView } = useInView({
    threshold: 0.1,
  });

  // Create refs.
  const productLineEndElement = useRef(null);
  const richTextElement = useRef(null);
  const setProductLineEndRef = (node) => {
    productLineEndInViewRef(node);
    productLineEndElement.current = node;
  };
  const setRichTextRef = (node) => {
    richTextInViewRef(node);
    richTextElement.current = node;
  };

  const { scrollY } = useViewportScroll();

  // Compute fade zone for the sticky image.
  const [fadeBounds, setFadeBounds] = useState({ fadeStart: 0, fadeEnd: 1 });
  useEffect(() => {
    const updateFadeBounds = () => {
      if (productLineEndElement.current && richTextElement.current) {
        const productLineEndY =
          productLineEndElement.current.getBoundingClientRect().top + window.scrollY;
        const richTextTopY =
          richTextElement.current.getBoundingClientRect().top + window.scrollY;
        const fadeStart = productLineEndY + (richTextTopY - productLineEndY) * 0.95;
        setFadeBounds({ fadeStart, fadeEnd: fadeStart });
      }
    };
    updateFadeBounds();
    window.addEventListener("resize", updateFadeBounds);
    return () => window.removeEventListener("resize", updateFadeBounds);
  }, []);

  const fadeOpacity = useTransform(
    scrollY,
    [fadeBounds.fadeStart, fadeBounds.fadeEnd],
    [1, 0]
  );

  // Scroll-driven animation for the Rich Text section.
  // Adjusted the range to be slightly more noticeable.
  const sectionOpacity = useTransform(scrollY, [200, 300], [0, 1]);
  // For a more noticeable parallax effect, we map scrollY from 200px to 300px onto a translation of 40px downward to 0.
  const sectionY = useTransform(scrollY, [200, 300], [40, 0]);

  const stickyActive = productLineEndInView && !footerSentinelInView;

  // Responsive margin-top for the overlay Our Products section.
  const getMarginTop = (width) => {
    if (width >= 2560) return "-100px";    // 4K displays
    else if (width >= 1536) return "-150px"; // Large desktops
    else if (width >= 1280) return "-190px"; // Standard desktops
    else if (width >= 1024) return "-250px"; // Smaller desktops / large tablets
    else if (width >= 768) return "-300px";   // Tablets
    else return "-350px";                     // Mobile devices
  };

  const [sectionMarginTop, setSectionMarginTop] = useState(getMarginTop(window.innerWidth));
  useEffect(() => {
    const handleResize = () => {
      setSectionMarginTop(getMarginTop(window.innerWidth));
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Sticky Image Section */}
      <motion.section
        className="relative"
        style={{ 
          opacity: stickyActive ? fadeOpacity : 0,
          pointerEvents: stickyActive ? 'auto' : 'none',
          width: stickyActive ? '100%' : '1px',
          overflow: 'hidden'
        }}
      >
        <StickyImage />
      </motion.section>

      <div className="relative w-full max-w-[100vw] overflow-x-hidden">
        <Hero />

        {/* Product Divider Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <ProductDivider />
        </motion.div>

        {/* Mascot Divider Section */}
        <motion.div
          className="relative w-full"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2, duration: 1 }}
          style={{ zIndex: 1001, position: "relative", marginTop: "-8rem" }}
        >
          <div
            className="block transform mx-auto float-left w-[240px] sm:w-[385px] md:w-[400px] lg:w-[615px]"
            style={{ marginBottom: "5rem" }}
          >
            <img
              src={require("../assets/RRMascot-smaller.png")}
              alt="Mascot Divider"
              className="block object-contain mascot-divider"
              style={{
                maskImage: "linear-gradient(to bottom, black 95%, transparent)",
                WebkitMaskImage: "linear-gradient(to bottom, black 95%, transparent)",
                maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
              }}
            />
          </div>
        </motion.div>

        {/* Product Line Section (layered above ParallaxSection) */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            boxShadow: "0px 20px 30px rgba(0,0,0,0.3)",
            padding: "0 0rem",
          }}
        >
          <ProductLine />
        </div>
        
        <div ref={setProductLineEndRef} />

        {/* Parallax Section (background layer) with OurProductsSection inside */}
        <div style={{ position: "relative", width: "100%", maxWidth: "100vw", marginTop: "0rem", paddingBottom: "" }}>
          <ParallaxSection />
          
          <OurProductsSection />
        </div>

        {/* Comparison Table Section */}
        <div style={{ position: 'relative', width: "100%", maxWidth: "100vw" }}>
          <ComparisonTable />
        </div>

        {/* Testimonials Section */}
        <section className="relative w-full max-w-[100vw] text-white py-20 px-6 overflow-hidden">
          <div
            className="absolute inset-0 -z-10 bg-cover bg-center filter blur-sm"
            style={{
              backgroundImage: `url('https://images.ctfassets.net/hdznx4p7ef81/4bmH8LUErm4lVMKisci0EQ/afe5be750a53f06d5c46903aafd010e5/CD_Cleaning_Grease_on_Table.jpg')`,
              backgroundPosition: "center 75%",
              transform: "scaleX(-1)",
              backgroundSize: "120%",
              opacity: 0.7,
            }}
          ></div>
          <div className="absolute inset-0 -z-10 bg-white opacity-40"></div>
          <Testimonials />
        </section>

        {/* Additional Content Sections */}
        <AutoScrollingImages />
        <RedSection />
        {/* <BlogSection /> */}
      </div>

      {/* Footer Sentinel */}
      <div ref={footerSentinelRef} style={{ height: "1px" }}></div>
    </>
  );
};

export default Home;