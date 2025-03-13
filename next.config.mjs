/** @type {import('next').NextConfig} */
const nextConfig = {
  //   images: {
  //     domains: ["storage.googleapis.com"],
  //   },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    // This will ignore TypeScript errors during builds
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
