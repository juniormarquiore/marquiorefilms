/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Sempre exportar como estático
  distDir: 'out',
  images: {
    domains: ['i.imgur.com'], // Adiciona suporte a imagens do Imgur
    unoptimized: true, // Necessário para exportação estática
  },
  // Configurações para garantir que o GitHub Pages funcione corretamente
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
};

module.exports = nextConfig;
