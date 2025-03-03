import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import ComparisonTable from "../components/ComparisonTable";
import MadeInAmerica from "../components/MadeInAmerica";
import ProductsSection from "../components/ProductsSection";
import "../index.css"; 

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
    keyFeatures = [],
    keyBenefits = [],
    productInUseImages = [],
  } = product?.fields || {};

  const imageUrl = productHeroImage?.fields?.file?.url || null;

  return (
    <div className="container mx-auto p-8">
      {/* Main Product Section - Bento Box Style */}
      <motion.div
        className="bg-white p-8 rounded-lg flex flex-col md:flex-row items-stretch gap-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="md:w-1/2 flex flex-col justify-between">
          <div className="flex flex-col justify-between h-full">
            <div>
              <h3 className="text-4xl font-bold text-[#D3242A] mb-4 uppercase tracking-wide text-left" style={{ fontFamily: "Geogrotesque, sans-serif" }}>
                {productTitle}
              </h3>
              <p className="text-lg italic text-gray-600 mb-4 leading-relaxed text-left">
                {shortProductDescription}
              </p>
              <p className="text-2xl font-semibold text-gray-900 mb-6 text-left">
                ${price.toFixed(2)}
              </p>
              {buyNowButtonUrl && (
                <a
                  href={buyNowButtonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#D3242A] text-white font-bold py-3 px-6 rounded-full shadow-md hover:bg-[#B91D23] transition-transform transform hover:scale-105 mb-6"
                >
                  Buy Now
                </a>
              )}
            </div>
            {/* Key Benefits */}
            {keyBenefits.length > 0 && (
              <div className="p-6 mt-8 text-left">
                <h4 className="text-2xl font-bold mb-4 text-left" style={{ fontFamily: "Geogrotesque, sans-serif" }}>WHY YOU'LL LOVE IT</h4>
                <ul className="text-gray-700 list-disc pl-5">
                  {keyBenefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="md:w-1/2 flex flex-col justify-between">
          <div className="flex flex-col justify-between h-full">
            {imageUrl && (
              <img
                src={imageUrl}
                alt={productTitle || "Product Image"}
                className="w-full h-auto max-h-[500px] object-contain rounded-lg drop-shadow-xl mb-8"
              />
            )}
          </div>
        </div>
      </motion.div>

      {/* Key Features */}
      {keyFeatures.length > 0 && (
        <div className="p-6 mt-8 text-left">
          <h4 className="text-2xl font-bold mb-4 text-left" style={{ fontFamily: "Geogrotesque, sans-serif" }}>KEY FEATURES</h4>
          <ul className="text-gray-700 list-disc pl-5 inline-block text-left">
            {keyFeatures.map((feature, index) => (
              <li key={index}>{feature}</li>
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

      {/* Products Section */}
      <div className="mt-8">
        <ProductsSection />
      </div>

      

      {/* Comparison Table */}
     
        <ComparisonTable />

        {/* Made In America */}
      <div className="mt-8">
        <MadeInAmerica />
      </div>  
    </div>

    
  );
};

export default ProductDetail;