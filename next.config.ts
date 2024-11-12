import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_SERVERIP: process.env.NEXT_PUBLIC_SERVERIP,
  },
  images: {
    domains: ['assets.aceternity.com'],
  },
  /* config options here */
};

export default nextConfig;
