/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    // Указываем, что код находится в папке src
    webpack(config) {
      config.resolve.modules.push('src');
      return config;
    },
  };
  
  export default nextConfig;
  