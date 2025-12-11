/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    // This will ignore TypeScript errors during builds
    ignoreBuildErrors: true,
  },
  // Server Actions are enabled by default in Next.js 14+
  // Ensure proper handling of static files
  trailingSlash: false,
  // Optimize for production
  compress: true,
  poweredByHeader: false,
};

export default nextConfig;
