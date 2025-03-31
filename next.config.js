/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Necessário para gerar arquivos estáticos
  basePath: '/marquiorefilms', // Nome do repositório GitHub
  images: {
    domains: ['i.imgur.com'], // Adiciona suporte a imagens do Imgur
    unoptimized: true, // Necessário para exportação estática
  },
};

module.exports = nextConfig;
