/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [],
  },
  eslint: {
    // ESLint runs separately in CI; don't block Vercel deploys on lint warnings
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
