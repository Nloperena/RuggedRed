import React from "react";
import BlogSectionExtended from "../components/BlogSectionExtended";
import CustomHeader from "../components/CustomHeader";
import kitchen3 from "../assets/kitchen3.png";

const Blog = () => {
  return (
    <>
      <CustomHeader
        backgroundImg={kitchen3}
        layeredImage={kitchen3}
        heading="Insights"
        subheading="Cleaning Innovation"
        description="Expert tips and industry trends for professional cleaning."
        highlightLine="Stay ahead with the latest."
        buttonLabel="Explore"
      />
      <BlogSectionExtended />
    </>
  );
};

export default Blog;
