/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Sempre exportar como estático
  distDir: 'out',
  images: {
    domains: ['i.imgur.com'], // Apenas suporte a imagens do Imgur
    unoptimized: true, // Necessário para exportação estática
  },
  // Configuração para o GitHub Pages
  basePath: '', // Sem basePath para funcionar na raiz
  assetPrefix: '',
};

module.exports = nextConfig;
