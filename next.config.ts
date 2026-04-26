import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Add this
  allowedDevOrigins: ['192.168.100.10'],
};

export default nextConfig;