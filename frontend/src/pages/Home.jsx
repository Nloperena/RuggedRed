import React from "react";
import Hero from "../components/Hero";
import MascotDivider from "../components/MascotDivider";
import ProductDivider from "../components/ProductDivider";
import ProductLine from "../components/ProductLine";
import StickyImage from "../components/StickyImage";
import RichTextProductsSection from "../components/RichTextProductsSection";
import ComparisonTable from "../components/ComparisonTable";
import Testimonials from "../components/Testimonials";
import ImageCarousel from "../components/ImageCarousel";
import AboutRed from "../components/AboutRed";
import BlogSection from "../components/BlogSection";

const Home = () => {
  return (
    <>
      <Hero />
      <MascotDivider />
      <ProductDivider />
      <ProductLine />

      {/*
        BIG WRAPPER: We give it a very tall height (600vh), 
        so there's plenty of scrolling room for the parallax to happen.
        We removed overflow-hidden so the page can actually scroll.
      */}
      <div className="relative" style={{ height: "350vh" }}>
        {/*
          1) StickyImage is in normal flow here.
             Inside StickyImage, you likely have your own 300vh
             or 600vh area plus the "sticky" logic.
        */}
        <StickyImage />

     
        <div className="relative z-10" style={{ marginTop: "50vh" }}>
          <RichTextProductsSection />
          <ComparisonTable />
          <Testimonials />
        </div>
      </div>

      <ImageCarousel />
      <AboutRed />
      <BlogSection />
    </>
  );
};

export default Home;
