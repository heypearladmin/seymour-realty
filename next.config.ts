import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // All imagery is served from /public/images. If you later need
  // remote sources, add them under images.remotePatterns.
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
