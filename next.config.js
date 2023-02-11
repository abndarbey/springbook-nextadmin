/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    SERVER_API: process.env.SERVER_API,
  },
}

module.exports = nextConfig
