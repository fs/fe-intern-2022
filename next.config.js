/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  domains: ['assets.example.com'],
  images: {
    domains: ['raw.githubusercontent.com'],
  },
}

module.exports = nextConfig
