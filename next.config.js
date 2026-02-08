// Example: next.config.js
const nextConfig = {
    reactStrictMode: true,
    turbopack: {},
    env: {
      RESEND_API_KEY: process.env.RESEND_API_KEY,
    },
  };
  
  module.exports = nextConfig;
  