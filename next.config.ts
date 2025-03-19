import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env:{
    
  },
  images:{
    remotePatterns:[
      {
        protocol:"https",
        hostname:"avatars.githubusercontent.com",
        pathname:"**"
      }
    ]
  }
};

export default nextConfig;
