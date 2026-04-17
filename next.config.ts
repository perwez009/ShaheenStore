import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "docs",
  basePath: "/ShaheenStore",
  assetPrefix: "/ShaheenStore/",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
