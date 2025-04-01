/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/marquiorefilms' : '',
  trailingSlash: true,
};

module.exports = nextConfig;
