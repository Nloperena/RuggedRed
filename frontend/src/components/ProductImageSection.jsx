//// filepath: /c:/Users/nimro/Downloads/BusinessProjects/Forza/RuggedRed/RuggedRed/frontend/src/pages/ProductImageSection.jsx
import React from "react";

const ProductImageSection = ({ product }) => {
  const { name, images } = product.fields || {};
  const imageUrl =
    Array.isArray(images) && images.length > 0
      ? images[0].fields.file.url
      : null;

  return (
    <div className="md:w-1/2 flex justify-center items-center">
      {imageUrl && (
        <img
          src={imageUrl}
          alt={name || "Product Image"}
          className="w-full max-w-lg h-[500px] object-cover rounded-lg drop-shadow-2xl"
        />
      )}
    </div>
  );
};

export default ProductImageSection;