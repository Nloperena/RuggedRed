import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function ProductTextSection({ product }) {
  const { name, slogan, price, amazonUrl, productDetailDescription } = product.fields;
  const safePrice = typeof price === "number" ? price : 0;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6 text-center">
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
          {amazonUrl && (
            <a
              href={amazonUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#D3242A] text-white font-bold py-3 px-6 rounded-full hover:bg-[#B91D23] transition-transform transform hover:scale-105 mb-6 inline-block"
            >
              Buy on Amazon
            </a>
          )}
        </div>
        <div className="p-6 text-left text-gray-700 leading-relaxed">
          {typeof productDetailDescription === "object"
            ? documentToReactComponents(productDetailDescription)
            : productDetailDescription}
        </div>
      </div>
    </div>
  );
}