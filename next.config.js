/** @type {import('next').NextConfig} */

const nextConfig = {
  assetPrefix: process.env.NODE_ENV === "production" ? "https://chat-gpt-next-web-three-nu-19.vercel.app/" : "",
  experimental: {
    appDir: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  output: "standalone",
};

module.exports = nextConfig;
