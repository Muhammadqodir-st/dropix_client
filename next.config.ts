import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images:{
    remotePatterns:[
      new URL("https://i.pinimg.com/1200x/a9/4c/a1/a94ca116ae70171d6bfa66f8e79fd3ad.jpg"),
    ]
  }
};

export default nextConfig;
