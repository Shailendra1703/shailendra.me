/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["geist"],
  images: {
    domains: ["i.imgur.com", "github.com"],
  },
};

module.exports = nextConfig;
