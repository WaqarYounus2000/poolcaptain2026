import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "poolcaptain2026.s3.ap-south-1.amazonaws.com",
        pathname: "/projectsfolder/**",
      },
    ],
  },
};

export default nextConfig;