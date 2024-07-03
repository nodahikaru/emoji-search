/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.nekosapi.com',
      },
    ],
  },
};

export default nextConfig;
