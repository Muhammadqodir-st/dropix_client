import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images:{
    remotePatterns:[
      new URL("https://i.pinimg.com/1200x/db/c1/0a/dbc10a88b920f2bec343812331bc2cd2.jpg"),
      new URL("https://i.pinimg.com/736x/da/b7/a1/dab7a173873c6a1321cc220ebd1cf1f0.jpg"),
      new URL("https://i.pinimg.com/736x/74/2a/d2/742ad25da6715075083f8efdec4008b5.jpg")
    ]
  }
};

export default nextConfig;
