import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  output: "standalone",
  outputFileTracingIncludes: {
    '/*': ['./dev.db'],
  },
};

export default nextConfig;
