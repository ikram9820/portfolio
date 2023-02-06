/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "https://ikram9820.github.io/portfolio/",
  },
  assetPrefix: "/portfolio/",
  basePath: "/portfolio",
};

module.exports = nextConfig;
