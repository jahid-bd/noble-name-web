/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'localhost:8000',
      'https://api.brainsstation.com',
      'api.brainsstation.com',
    ],
  },
};

export default nextConfig;
