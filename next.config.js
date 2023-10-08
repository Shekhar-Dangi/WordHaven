/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["https://lh3.googleusercontent.com"],
  },
};

const removeImports = require("next-remove-imports")();
module.exports = removeImports({});
module.exports = nextConfig;
