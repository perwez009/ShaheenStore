import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/ShaheenStore",
  assetPrefix: "/ShaheenStore/",
};

export default nextConfig;
