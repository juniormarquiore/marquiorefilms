/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
  images: {
    domains: ['i.imgur.com'], // Adiciona suporte a imagens do Imgur
    unoptimized: process.env.NODE_ENV === 'production', // Necessário para exportação estática
  },
  trailingSlash: true, // Importante para exportação estática
};

module.exports = nextConfig;
