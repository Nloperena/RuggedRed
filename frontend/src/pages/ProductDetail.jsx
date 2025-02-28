import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

const ProductDetail = ({ products }) => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const foundProduct = products.find((p) => p.sys.id === productId);
    if (foundProduct) {
      setProduct(foundProduct);
      setNotFound(false);
    } else {
      setProduct(null);
      setNotFound(true);
    }
  }, [productId, products]);

  if (!product && !notFound) {
    return <div>Loading...</div>;
  }

  if (notFound) {
    return <div>Product not found for ID: {productId}</div>;
  }

  const {
    productTitle,
    productHeroImage,
    price,
    buyNowButtonUrl,
    shortProductDescription,
    detailedProductDescription,
    keyFeatures = [],
    keyBenefits = [],
    productInUseImages = [],
  } = product?.fields || {};

  const imageUrl = productHeroImage?.fields?.file?.url || null;

  return (
    <div className="container mx-auto p-8">
      {/* Main Product Section - Bento Box Style */}
      <motion.div
        className="bg-white p-8 rounded-lg flex flex-col md:flex-row items-center md:items-start gap-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="md:w-1/2 text-left">
          <h3 className="text-4xl font-bold text-[#D3242A] mb-4 uppercase tracking-wide">
            {productTitle}
          </h3>
          <p className="text-lg italic text-gray-600 mb-4 leading-relaxed">
            {shortProductDescription}
          </p>
          <p className="text-2xl font-semibold text-gray-900 mb-6">
            ${price.toFixed(2)}
          </p>
          {buyNowButtonUrl && (
            <a
              href={buyNowButtonUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#D3242A] text-white font-bold py-3 px-6 rounded-full shadow-md hover:bg-[#B91D23] transition-transform transform hover:scale-105"
            >
              Buy Now
            </a>
          )}
        </div>

        {imageUrl && (
          <img
            src={imageUrl}
            alt={productTitle || "Product Image"}
            className="md:w-1/2 w-full h-[500px] object-cover rounded-lg drop-shadow-xl"
          />
        )}
      </motion.div>

      {/* Key Benefits */}
      {keyBenefits.length > 0 && (
        <div className="bg-gray-100 p-6 rounded-lg shadow-md mt-8 text-center">
          <h4 className="text-2xl font-bold mb-4">Why You'll Love It</h4>
          <ul className="text-gray-700 list-disc pl-5 inline-block text-left">
            {keyBenefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Use Case Images */}
      {productInUseImages.length > 0 && (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {productInUseImages.slice(0, 3).map((image, index) => (
            <img
              key={index}
              src={image?.fields?.file?.url || ""}
              alt={`Use Case ${index + 1}`}
              className="w-full h-80 object-cover rounded-lg drop-shadow-lg"
            />
          ))}
        </div>
      )}

      {/* Key Features */}
      {keyFeatures.length > 0 && (
        <div className="bg-gray-100 p-6 rounded-lg shadow-md mt-8 text-center">
          <h4 className="text-2xl font-bold mb-4">Key Features</h4>
          <ul className="text-gray-700 list-disc pl-5 inline-block text-left">
            {keyFeatures.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Detailed Description */}
      {detailedProductDescription && (
        <div className="text-gray-700 mt-8 leading-relaxed bg-white p-6 rounded-lg shadow-md text-left">
          {detailedProductDescription.split("###").map((section, index) => (
            <p key={index} className={index > 0 ? "font-bold mt-4" : ""}>
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
