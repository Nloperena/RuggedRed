import React from "react";
import RedSection from "../components/About/RedSection";
import CompanySection from "../components/About/CompanySection";
import CustomHeader from "../components/CustomHeader";
import kitchen2 from "../assets/kitchen2.jpg";

const About = () => {
  return (
    <>
      <CustomHeader
        backgroundImg={kitchen2}
        layeredImage={kitchen2}
        heading="Our Story"
        subheading="Built on Innovation"
        description="A journey of quality and sustainability, blending craftsmanship with modern solutions."
        highlightLine="Discover what drives us."
        buttonLabel="Learn More"
      />
      <RedSection />
      <CompanySection />
    </>
  );
};

export default About;
