// BlogCard.jsx
import React, { useEffect, useState } from "react";

const BlogCard = ({ id }) => {
  const [post, setPost] = useState(null);

  // Fetch the data for the blog post based on its ID
  useEffect(() => {
    const fetchPost = async () => {
      // Mocked fetch request
      const blogPosts = [
        {
          id: 1,
          image: "https://images.ctfassets.net/hdznx4p7ef81/6TYPOeZ6Jv4bw3aXrR6TVt/bf6db00620cc5dbb9f12adc4b20fe5c2/5._APC_Industrial_Strength_for_Tough_Jobs.png",
          title: "5 Essential Cleaning Tips",
          excerpt:
            "Discover top cleaning tips to transform your space into a spotless sanctuary.",
          link: "#",
        },
        {
          id: 2,
          image: "https://images.ctfassets.net/hdznx4p7ef81/6TYPOeZ6Jv4bw3aXrR6TVt/bf6db00620cc5dbb9f12adc4b20fe5c2/5._APC_Industrial_Strength_for_Tough_Jobs.png",
          title: "Non-Toxic Cleaners: Benefits",
          excerpt:
            "Learn why non-toxic cleaners are better for your health and the environment.",
          link: "#",
        },
        {
          id: 3,
          image: "https://images.ctfassets.net/hdznx4p7ef81/6TYPOeZ6Jv4bw3aXrR6TVt/bf6db00620cc5dbb9f12adc4b20fe5c2/5._APC_Industrial_Strength_for_Tough_Jobs.png",
          title: "Tackling Tough Stains",
          excerpt:
            "Struggling with stubborn stains? Here’s how to remove them effortlessly.",
          link: "#",
        },
      ];

      // Simulate fetching data
      const post = blogPosts.find((p) => p.id === id);
      setPost(post);
    };

    fetchPost();
  }, [id]);

  if (!post) return null; // Don't render until data is available

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      {/* Blog Image */}
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-48 object-cover"
      />
      {/* Blog Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-red-600 mb-2">{post.title}</h3>
        <p className="text-gray-700 text-sm mb-4">{post.excerpt}</p>
        <a
          href={post.link}
          className="text-red-600 font-semibold hover:underline"
          aria-label={`Read more about ${post.title}`}
        >
          Read More →
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
