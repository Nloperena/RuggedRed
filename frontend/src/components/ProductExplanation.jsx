import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import client from "../contentful"; // Contentful client for fetching data

const ProductExplanation = ({ productId, flip }) => {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch the product data using Contentful
    client
      .getEntry(productId)
      .then((response) => {
        setProduct(response.fields);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
        setIsLoading(false);
      });
  }, [productId]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <p>Loading...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex items-center justify-center h-64">
        <p>No product data available.</p>
      </div>
    );
  }

  const { name, description, images, amazonUrl, productPageUrl } = product;
  const imageUrl =
    Array.isArray(images) && images.length > 0 ? images[0].fields.file.url : null;

  return (
    <section
      className={`flex flex-col ${
        flip ? "md:flex-row-reverse" : "md:flex-row"
      } items-center justify-between px-6 py-16 bg-white`}
    >
      {/* Image Section */}
      <motion.div
        className="w-full md:w-1/2"
        initial={{ opacity: 0, x: flip ? 100 : -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {imageUrl && (
          <img
            src={`https:${imageUrl}`}
            alt={name || "Product Image"}
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        )}
      </motion.div>

      {/* Text Section */}
      <motion.div
        className="w-full md:w-1/2 text-center md:text-left mt-8 md:mt-0"
        initial={{ opacity: 0, x: flip ? -100 : 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <h3
          className="text-3xl font-bold text-[#D3242A] mb-6"
          style={{ fontFamily: "Geogrotesque, sans-serif" }}
        >
          {name}
        </h3>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          {description}
        </p>
        {amazonUrl && (
          <a
            href={amazonUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#D3242A] text-white font-bold py-3 px-8 rounded-full hover:bg-[#B91D23] transition duration-300 mr-4"
          >
            Buy on Amazon
          </a>
        )}
        {productPageUrl && (
          <a
            href={productPageUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black text-white font-bold py-3 px-8 rounded-full hover:bg-gray-800 transition duration-300"
          >
            View Product
          </a>
        )}
      </motion.div>
    </section>
  );
};

export default ProductExplanation;


// JSON Preview
// {
//   "name": "Cleaning product",
//   "description": "I have cleaning products that I need to call from contentful. each product will be need a url to go to the product page with on amazon. We need a description, title/name, slogan/selling point, price, and anything else that may be needed. I need multiple product pictures as well.",
//   "displayField": "name",
//   "fields": [
//     {
//       "id": "name",
//       "name": "Name",
//       "type": "Symbol",
//       "localized": false,
//       "required": false,
//       "validations": [],
//       "disabled": false,
//       "omitted": false
//     },
//     {
//       "id": "description",
//       "name": "Description",
//       "type": "RichText",
//       "localized": false,
//       "required": false,
//       "validations": [
//         {
//           "enabledNodeTypes": [
//             "heading-1",
//             "heading-2",
//             "heading-3",
//             "heading-4",
//             "heading-5",
//             "heading-6",
//             "ordered-list",
//             "unordered-list",
//             "hr",
//             "blockquote",
//             "embedded-entry-block",
//             "embedded-asset-block",
//             "hyperlink",
//             "entry-hyperlink",
//             "asset-hyperlink",
//             "embedded-entry-inline"
//           ],
//           "message": "Only heading 1, heading 2, heading 3, heading 4, heading 5, heading 6, ordered list, unordered list, horizontal rule, quote, block entry, asset, link to Url, link to entry, link to asset, and inline entry nodes are allowed"
//         },
//         {
//           "enabledMarks": [
//             "bold",
//             "italic",
//             "underline",
//             "code"
//           ],
//           "message": "Only bold, italic, underline, and code marks are allowed"
//         }
//       ],
//       "disabled": false,
//       "omitted": false
//     },
//     {
//       "id": "slogan",
//       "name": "Slogan",
//       "type": "Text",
//       "localized": false,
//       "required": false,
//       "validations": [],
//       "disabled": false,
//       "omitted": false
//     },
//     {
//       "id": "price",
//       "name": "Price",
//       "type": "Number",
//       "localized": false,
//       "required": false,
//       "validations": [],
//       "disabled": false,
//       "omitted": false
//     },
//     {
//       "id": "amazonUrl",
//       "name": "Amazon URL",
//       "type": "Symbol",
//       "localized": false,
//       "required": false,
//       "validations": [],
//       "disabled": false,
//       "omitted": false
//     },
//     {
//       "id": "images",
//       "name": "Images",
//       "type": "Array",
//       "localized": false,
//       "required": false,
//       "validations": [],
//       "disabled": false,
//       "omitted": false,
//       "items": {
//         "type": "Link",
//         "validations": [],
//         "linkType": "Asset"
//       }
//     }
//   ],
//   "sys": {
//     "space": {
//       "sys": {
//         "type": "Link",
//         "linkType": "Space",
//         "id": "hdznx4p7ef81"
//       }
//     },
//     "id": "cleaningProduct",
//     "type": "ContentType",
//     "createdAt": "2025-01-07T22:35:30.067Z",
//     "updatedAt": "2025-01-07T22:35:30.442Z",
//     "environment": {
//       "sys": {
//         "id": "master",
//         "type": "Link",
//         "linkType": "Environment"
//       }
//     },
//     "publishedVersion": 1,
//     "publishedAt": "2025-01-07T22:35:30.442Z",
//     "firstPublishedAt": "2025-01-07T22:35:30.442Z",
//     "createdBy": {
//       "sys": {
//         "type": "Link",
//         "linkType": "User",
//         "id": "49dZ8taXh6oGNkQmRCtgYS"
//       }
//     },
//     "updatedBy": {
//       "sys": {
//         "type": "Link",
//         "linkType": "User",
//         "id": "49dZ8taXh6oGNkQmRCtgYS"
//       }
//     },
//     "publishedCounter": 1,
//     "version": 2,
//     "publishedBy": {
//       "sys": {
//         "type": "Link",
//         "linkType": "User",
//         "id": "49dZ8taXh6oGNkQmRCtgYS"
//       }
//     },
//     "urn": "crn:contentful:::content:spaces/hdznx4p7ef81/environments/master/content_types/cleaningProduct"
//   }
// }