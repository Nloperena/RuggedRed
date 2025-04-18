// contentful.js

import { createClient } from "contentful";

// Log environment variables for debugging
console.log("Contentful Configuration:");
console.log("Space ID:", process.env.REACT_APP_CONTENTFUL_SPACE_ID);
console.log("Environment:", process.env.REACT_APP_CONTENTFUL_ENVIRONMENT);
console.log("Access Token:", process.env.REACT_APP_CONTENTFUL_DELIVERY_ACCESS_TOKEN ? "Set" : "Not Set");

// Validate required environment variables
const spaceId = process.env.REACT_APP_CONTENTFUL_SPACE_ID;
const accessToken = process.env.REACT_APP_CONTENTFUL_DELIVERY_ACCESS_TOKEN;

if (!spaceId || !accessToken) {
  console.error("Missing required Contentful credentials. Please check your .env file.");
  throw new Error("Missing required Contentful credentials. Please check your .env file.");
}

const client = createClient({
  space: spaceId,
  environment: process.env.REACT_APP_CONTENTFUL_ENVIRONMENT || "master",
  accessToken: accessToken,
});

export const fetchProducts = async () => {
  try {
    console.log("Fetching products from Contentful...");
    const response = await client.getEntries({ content_type: "cleaningProductData" });
    console.log("Successfully fetched products:", response.items.length);
    return response.items;
  } catch (error) {
    console.error("Error fetching products:", error);
    if (error.status === 404) {
      console.error("Contentful space not found. Please verify your Space ID and Access Token.");
    } else if (error.status === 401) {
      console.error("Unauthorized. Please verify your Access Token.");
    }
    throw error;
  }
};

export default client;
