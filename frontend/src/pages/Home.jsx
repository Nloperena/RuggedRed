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
import ComparisonTable from "../components/ComparisonTable";
import ParallaxSection from "../components/ParallaxSection";
import OurProductsSection from "../components/OurProductsSection";
import './Home.css';

const Home = () => {
  // InView hooks for key markers
  const { ref: productLineEndInViewRef, inView: productLineEndInView } = useInView({
    threshold: 0,
  });
  const { ref: footerSentinelRef, inView: footerSentinelInView } = useInView({
    threshold: 0.1,
  });

  // Create refs
  const productLineEndElement = useRef(null);
  const setProductLineEndRef = (node) => {
    productLineEndInViewRef(node);
    productLineEndElement.current = node;
  };

  // Responsive margin-top for the overlay Our Products section
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
      <div className="relative w-full max-w-[100vw] overflow-x-hidden">
        <Hero />

        {/* Product Line Section */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            boxShadow: "0px 20px 30px rgba(0,0,0,0.3)",
            padding: "0 0rem",
            marginTop: "-6rem"
          }}
        >
          <ProductLine />
        </div>
        
        <div ref={setProductLineEndRef} />

        {/* Parallax Section with OurProductsSection inside */}
        <div style={{ position: "relative", width: "100%", maxWidth: "100vw", marginTop: "0rem", paddingBottom: "" }}>
          <ParallaxSection />
          <div style={{ marginTop: sectionMarginTop }}>
            <OurProductsSection />
          </div>
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
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              opacity: 0.7,
            }}
          ></div>
          <div className="absolute inset-0 -z-10 bg-white opacity-40"></div>
          <Testimonials />
        </section>

        {/* Additional Content Sections */}
        <AutoScrollingImages />
        <RedSection />
      </div>

      {/* Footer Sentinel */}
      <div ref={footerSentinelRef} style={{ height: "1px" }}></div>
    </>
  );
};

export default Home;