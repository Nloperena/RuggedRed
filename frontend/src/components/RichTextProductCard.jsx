import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const shimmerStyle = {
  animation: "shimmer 2s infinite linear",
  background: "linear-gradient(to right, #e0e0e0 8%, #f0f0f0 18%, #e0e0e0 33%)",
  backgroundSize: "1000px 100%",
};

function SkeletonBlock({ className, style }) {
  return (
    <div
      className={`${className} relative overflow-hidden bg-[#A9AAAC]`}
      style={{ ...shimmerStyle, ...style }}
    />
  );
}

const RichTextProductCard = ({ product, flip = false, delay = 0 }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isTextLoaded, setIsTextLoaded] = useState(false);

  const hasProduct = !!product?.fields;

  useEffect(() => {
    if (hasProduct) {
      setIsTextLoaded(true);
    }
  }, [hasProduct]);

  const { name, slogan, price, amazonUrl, productPageUrl, images, description } =
    product?.fields || {};

  const imageUrl =
    Array.isArray(images) && images.length > 0
      ? images[0].fields.file.url
      : null;

  return (
    <div className="relative w-full bg-gradient-to-r from-[#fefefe] to-[#f7f7f7] rounded-lg p-8 shadow-lg hover:shadow-xl transition duration-300">
      <AnimatePresence>
        {(!isImageLoaded || !isTextLoaded) && (
          <motion.div
            key="skeleton"
            className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-[#F9FAFB]"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
            style={{ zIndex: 10 }}
          >
            {!isImageLoaded && (
              <SkeletonBlock className="w-full h-[500px] rounded-md mb-4" />
            )}
            {!isTextLoaded && (
              <>
                <SkeletonBlock className="w-1/2 h-5 rounded-md mb-2" />
                <SkeletonBlock className="w-3/4 h-4 rounded-md mb-2" />
                <SkeletonBlock className="w-24 h-4 rounded-md mb-4" />
                <SkeletonBlock className="w-32 h-8 rounded-full" />
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className={`flex flex-col md:flex-row items-center md:items-start gap-8 ${
          flip ? "md:flex-row-reverse" : ""
        }`}
        initial={{ opacity: 0, x: flip ? 50 : -50 }}
        animate={{ opacity: isImageLoaded && isTextLoaded ? 1 : 0, x: 0 }}
        transition={{ duration: 0.6, delay }}
      >
        {/* IMAGE SECTION */}
        <div className="md:w-1/2 flex justify-center items-center">
          {imageUrl && (
            <img
              src={imageUrl}
              alt={name || "Product Image"}
              className="w-full max-w-lg h-[500px] object-cover rounded-lg shadow-md"
              onLoad={() => setIsImageLoaded(true)}
            />
          )}
        </div>

        {/* TEXT SECTION */}
        <div className="md:w-1/2 text-left">
          {isTextLoaded && name && (
            <h3
              className="text-3xl font-bold text-[#D3242A] mb-4"
              style={{ fontFamily: "Geogrotesque, sans-serif" }}
            >
              {name}
            </h3>
          )}

          {isTextLoaded && slogan && (
            <p className="text-lg italic text-gray-600 mb-3">{slogan}</p>
          )}

          {isTextLoaded && typeof price === "number" && (
            <p className="text-2xl font-semibold text-gray-900 mb-5">
              ${price.toFixed(2)}
            </p>
          )}

          {isTextLoaded && description && (
            <div className="text-gray-700 mb-6 leading-relaxed">
              {typeof description === "object"
                ? documentToReactComponents(description)
                : description}
            </div>
          )}

          <div className="flex flex-wrap gap-4">
            {isTextLoaded && amazonUrl && (
              <a
                href={amazonUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#D3242A] text-white font-bold py-3 px-6 rounded-full hover:bg-[#B91D23] transition-transform transform hover:scale-105"
              >
                Buy on Amazon
              </a>
            )}
            {isTextLoaded && productPageUrl && (
              <a
                href={productPageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white font-bold py-3 px-6 rounded-full hover:bg-gray-800 transition-transform transform hover:scale-105"
              >
                View Product
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default RichTextProductCard;
