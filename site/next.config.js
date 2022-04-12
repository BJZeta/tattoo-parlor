/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "scontent-lax3-1.cdninstagram.com",
      "scontent-lax3-2.cdninstagram.com",
    ],
  },
};

module.exports = nextConfig;
