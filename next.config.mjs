/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "admin.standardoil.com.kz",
        port: "",
        pathname: "/storage/**",
      },
      {
        protocol: "https",
        hostname: "admin.standardoil.com.kz",
        port: "",
        pathname: "/storage/**",
      },
    ],
  },
  webpack(config) {
    config.resolve.modules.push("src");
    config.cache = false;
    return config;
  },
};

export default nextConfig;
