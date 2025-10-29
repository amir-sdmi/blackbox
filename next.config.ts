import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'doob-laravel.pixcelsthemes.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
