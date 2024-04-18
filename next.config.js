/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "export", // <=== enables static exports
  images: {
    unoptimized: true,
  },
  basePath: "/portfolio",
};

module.exports = nextConfig;
