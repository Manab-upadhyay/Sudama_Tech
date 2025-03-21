/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "aceternity.com",
      },
    ],
    minimumCacheTTL: 60, // Cache for 1 minute
  },
};

export default nextConfig;
