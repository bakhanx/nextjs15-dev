/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {},
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        pathname: "**"
      }
    ]
  }
};

export default nextConfig; 