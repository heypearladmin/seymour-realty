import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    // Cache optimized images for 30 days — reduces re-processing on Vercel
    minimumCacheTTL: 60 * 60 * 24 * 30,
    // Match real device breakpoints to avoid over-generating sizes
    deviceSizes: [640, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 64, 96, 128, 256, 384],
    // Reduce quality slightly — imperceptible at 85, meaningful file-size savings
    qualities: [85],
  },
  // Enable gzip/brotli compression
  compress: true,
};

export default nextConfig;
