import React from "react";
import AboutRed from "../components/AboutRed";
import AboutRedCo from "../components/AboutRuggedRedCo";
import CustomHeader from "../components/CustomHeader";
import kitchen2 from "../assets/kitchen2.jpg";

const About = () => {
  return (
    <>
      <CustomHeader
        backgroundImg={kitchen2}
        layeredImage={kitchen2}
        heading="About Us"
        subheading="Built on Rugged Values & Innovation"
        description="At Rugged Red, our journey is fueled by a passion for quality, sustainability, and the drive to exceed expectations. We blend timeless craftsmanship with modern innovation."
        highlightLine="Learn more about our story and mission."
        buttonLabel="Discover Our Story"
      />
      <AboutRed />
      <AboutRedCo />
    </>
  );
};

export default About;
