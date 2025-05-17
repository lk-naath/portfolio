import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  poweredByHeader: false,
  reactStrictMode: true,
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
