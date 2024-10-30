import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_SERVERIP: process.env.NEXT_PUBLIC_SERVERIP,
  },
  /* config options here */
};

export default nextConfig;
