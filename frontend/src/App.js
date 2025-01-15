import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import WaveDivider from "./components/WaveDivider";
import Footer from "./components/Footer";
import Features from "./components/Features";
import ProductsSection from "./components/ProductsSection";
import FeaturesShowcase from "./components/FeatureShowcase";
import ProductCard from "./components/ProductCard";
import AboutRed from "./components/AboutRed";
import BenefitsSection from "./components/Benefits";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <div className="relative z-10">
        <Hero />
        <WaveDivider
          color="#D3242A"
          path="M0,256L60,224C120,192,240,128,360,112C480,96,600,128,720,144C840,160,960,160,1080,144C1200,128,1320,96,1380,80L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        />
      </div>
      <div className="relative z-0">
        <AboutRed />
        <BenefitsSection />
        <Features />
      </div>
      <ProductsSection />
      <Testimonials />
      <FeaturesShowcase />
      <Footer />
    </div>
  );
};

export default App;
