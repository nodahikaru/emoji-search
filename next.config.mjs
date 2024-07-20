/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.nekosapi.com',
      },
      {
        protocol: 'https',
        hostname: 'miro.medium.com'
      }
    ],
  },
};

export default nextConfig;
