import React from "react";
import Hero from "../components/Hero";
import MascotDivider from "../components/MascotDivider";
import ProductDivider from "../components/ProductDivider";
import WaveDivider from "../components/WaveDivider";
import ProductLine from "../components/ProductLine";
import StickyImage from "../components/StickyImage";
import RichTextProductsSection from "../components/RichTextProductsSection";
import Testimonials from "../components/Testimonials";
import ImageCarousel from "../components/ImageCarousel";
import AboutRed from "../components/AboutRed";
import BlogSection from "../components/BlogSection";

const Home = () => {
  return (
    <>
      {/* Hero, Dividers, etc. */}
      <Hero />
      <MascotDivider />
      <ProductDivider />
      {/* <WaveDivider
        color="white"
        path="M0,256L60,224C120,192,240,128,360,112C480,96,600,128,720,144C840,160,960,160,1080,144C1200,128,1320,96,1380,80L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
      /> */}
      <ProductLine />
      <StickyImage />
      <RichTextProductsSection />
      <Testimonials />
      <ImageCarousel />
      <AboutRed />
      <BlogSection />
    </>
  );
};

export default Home;
