import { createClient } from 'contentful';

export const fetchProducts = async () => {
  console.log("Initializing Contentful client...");
  const client = createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE_ID || "hdznx4p7ef81",
    accessToken: process.env.REACT_APP_CONTENTFUL_DELIVERY_ACCESS_TOKEN || "your_access_token",
    environment: process.env.REACT_APP_CONTENTFUL_ENVIRONMENT || "master",
  });

  const query = {
    content_type: "cleaningProductData"
  };

  console.log("Query parameters:", query);

  try {
    console.log("Attempting client.getEntries(query)...");
    const entries = await client.getEntries(query);
    console.log("Contentful response:", entries);
    return entries.items;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};