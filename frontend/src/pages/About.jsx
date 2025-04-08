import React from "react";
import CustomHeader from "../components/CustomHeader";
import kitchen3 from "../assets/kitchen3.png";
import CompanySection from "../components/About/CompanySection";
import MissionSection from "../components/About/MissionSection";
import ValuesSection from "../components/About/ValuesSection";
import RedSection from "../components/About/RedSection";

const About = () => {
  return (
    <>
      <CustomHeader
        backgroundImg={kitchen3}
        layeredImage={kitchen3}
        heading="Our Story"
        subheading="Built on Innovation"
        description="Discover the journey behind RuggedRed's commitment to powerful, sustainable cleaning solutions."
      />
  
      <MissionSection />
      <ValuesSection />
      <RedSection />
    
    </>
  );
};

export default About;
