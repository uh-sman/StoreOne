import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { hostname: "flagsapi.com" },
      { hostname: "unsplash.com" },
      { hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
