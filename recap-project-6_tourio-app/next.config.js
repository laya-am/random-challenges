/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  images: {
    // domains: ["hurtigruten.de", "images.unsplash.com"]
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
      },
      // {
      //   protocol: "https",
      //   hostname: 'hurtigruten.de',
      //   port: "",
      // },
    ],
  },
};

module.exports = nextConfig;
