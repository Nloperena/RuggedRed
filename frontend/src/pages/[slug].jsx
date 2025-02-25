import React from "react";
import { useRouter } from "next/router";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import client from "../../data/contentful";

export async function getStaticPaths() {
  const res = await client.getEntries({ content_type: "blogPost" });

  console.log("✅ Generated paths:");
  res.items.forEach((post) => console.log(`- /blog/${post.fields.slug}`));

  const paths = res.items.map((post) => ({
    params: { slug: post.fields.slug },
  }));

  return { paths, fallback: "blocking" }; // Ensures pages are generated dynamically
}

export async function getStaticProps({ params }) {
  console.log("🔎 Fetching blog post for slug:", params.slug);

  const { items } = await client.getEntries({
    content_type: "blogPost",
    "fields.slug": params.slug,
  });

  console.log("🔍 API Response:", items);

  if (!items.length) {
    console.log("❌ No post found, returning 404");
    return { notFound: true };
  }

  console.log("✅ Blog post found:", items[0].fields);

  return {
    props: { post: items[0].fields },
    revalidate: 60, // Refresh every 60 seconds
  };
}

export default function BlogPost({ post }) {
  const router = useRouter();

  if (router.isFallback) {
    return <p className="text-center mt-20 text-xl">Loading...</p>;
  }

  return (
    <article className="max-w-4xl mx-auto py-10 px-6">
      <h1 className="text-4xl font-extrabold mb-4 text-gray-900">{post.title}</h1>

      <p className="text-gray-500 text-sm mb-6">
        {new Date(post.publishDate).toLocaleDateString()} by {post.author || "Rugged Red"}
      </p>

      {post.featuredImage && (
        <img
          src={post.featuredImage.fields.file.url}
          alt={post.title}
          className="w-full rounded-lg mb-6"
        />
      )}

      <div className="prose prose-lg text-gray-800">
        {documentToReactComponents(post.body)}
      </div>

      <div className="mt-8">
        {post.tags && (
          <p className="text-gray-600 text-sm">
            <strong>Tags:</strong> {post.tags.join(", ")}
          </p>
        )}
      </div>
    </article>
  );
}
