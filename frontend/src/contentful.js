// contentful.js

import { createClient } from "contentful";

console.log("Space ID:", process.env.REACT_APP_CONTENTFUL_SPACE_ID);
console.log("Environment:", process.env.REACT_APP_CONTENTFUL_ENVIRONMENT);


const client = createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
  environment: process.env.REACT_APP_CONTENTFUL_ENVIRONMENT,
  accessToken: process.env.REACT_APP_CONTENTFUL_DELIVERY_ACCESS_TOKEN,
});

export default client;
