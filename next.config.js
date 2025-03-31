/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
  basePath: process.env.NODE_ENV === 'production' ? '/marquiorefilms' : '',
  images: {
    domains: ['i.imgur.com'], // Adiciona suporte a imagens do Imgur
    unoptimized: process.env.NODE_ENV === 'production', // Necessário para exportação estática
  },
};

module.exports = nextConfig;
