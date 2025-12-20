import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "docs",
  images: {
    unoptimized: true,
  },
  basePath: "/ShaheenStore",
  assetPrefix: "/ShaheenStore/",
};

export default nextConfig;
