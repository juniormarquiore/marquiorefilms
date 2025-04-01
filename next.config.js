/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.NODE_ENV === 'production' ? '/marquiorefilms' : '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  distDir: 'out',
};

module.exports = nextConfig;
