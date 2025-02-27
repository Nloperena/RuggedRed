import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function ProductTextSection({ product }) {
  const { name, slogan, price, amazonUrl, description } = product.fields;
  const safePrice = typeof price === "number" ? price : 0;

  return (
    <div className="md:w-1/2 text-left">
      <h3
        className="text-4xl font-bold text-[#D3242A] mb-3 uppercase"
        style={{ fontFamily: "Geogrotesque, sans-serif" }}
      >
        {name}
      </h3>
      <p className="text-lg italic text-gray-600 mb-2">{slogan}</p>
      <p className="text-2xl font-semibold text-gray-900 mb-4">
        ${safePrice.toFixed(2)}
      </p>
      <div className="text-gray-700 mb-5 leading-relaxed">
        {typeof description === "object"
          ? documentToReactComponents(description)
          : description}
      </div>
      {amazonUrl && (
        <a
          href={amazonUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#D3242A] text-white font-bold py-3 px-6 rounded-full hover:bg-[#B91D23] transition-transform transform hover:scale-105"
        >
          Buy on Amazon
        </a>
      )}
    </div>
  );
}