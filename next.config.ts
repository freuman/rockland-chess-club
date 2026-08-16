import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  generateEtags: true,
  compress: true,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
