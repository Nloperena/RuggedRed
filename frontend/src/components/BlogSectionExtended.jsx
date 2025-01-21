// BlogSection.jsx
import React from "react";
import BlogCard from "./BlogCard"; // Import the BlogCard component
import Hand from "./Hand"; // Import the Hand component

const BlogSection = () => {
  // IDs for the blog posts to be displayed
  const blogIds = [1, 2, 3];

  return (
    <section className="relative py-12 bg-gray-100">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-center text-red-600 mb-8">
          Latest Blogs
        </h2>
        {/* Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogIds.map((id) => (
            <BlogCard key={id} id={id} />
          ))}
        </div>
      </div>
      {/* Animated Hand */}
      <Hand />
    </section>
  );
};

export default BlogSectionExtended
