/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/marquiorefilms',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
