/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "images",
  },
  assetPrefix: "/portfolio/",
  basePath: "/portfolio",
};

module.exports = nextConfig;
