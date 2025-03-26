/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: false, // Change to false for Vercel optimization
    domains: ['vercel.com'], // Add any external domains you might use
  },
}

module.exports = nextConfig 