import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "poolcaptain2026.s3.ap-southeast-2.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "poolproducts.s3.ap-southeast-2.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "poolservicesimages.s3.ap-southeast-2.amazonaws.com",
        
      },
      {
        protocol: "https",
        hostname: "blockimages.s3.ap-southeast-2.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;