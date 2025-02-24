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
        heading="Our Blog"
        subheading="Insights and Inspiration"
        description="Dive into articles, tips, and trends in professional cleaning solutions."
        highlightLine="Stay updated with the latest in cleaning innovation."
        buttonLabel="Read More"
      />
      <BlogSectionExtended />
    </>
  );
};

export default Blog;
