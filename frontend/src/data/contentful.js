import { createClient } from "contentful";

const client = createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
  accessToken: process.env.REACT_APP_CONTENTFUL_DELIVERY_ACCESS_TOKEN, 
  environment: process.env.REACT_APP_CONTENTFUL_ENVIRONMENT || "master",
});

export default client;
