import React from 'react';
import Link from 'next/link';

export default function SiteEditorPage() {
  return (
    <div className="container-custom py-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="title mb-2">Editor do Site</h1>
            <p className="text-gray-400">
              Gerencie o conteúdo do seu site
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <Link
              href="/dashboard/admin"
              className="bg-secondary text-white px-4 py-2 rounded hover:bg-secondary/80 transition-colors border border-primary/20 flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 mr-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Voltar para Dashboard
            </Link>
          </div>
        </div>

        {/* Seções editáveis */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-secondary/70 p-6 rounded-lg border border-primary/20">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Página Inicial</h2>
              <Link href="/dashboard/admin/site-editor/home" className="text-primary hover:underline">
                Editar
              </Link>
            </div>
            <ul className="space-y-2 text-gray-300">
              <li>• Banner Principal</li>
              <li>• Seção Sobre</li>
              <li>• Seção Serviços</li>
              <li>• Portfólio Destacado</li>
              <li>• Depoimentos</li>
              <li>• Informações de Contato</li>
            </ul>
          </div>
          
          <div className="bg-secondary/70 p-6 rounded-lg border border-primary/20">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Página Sobre</h2>
              <Link href="/dashboard/admin/site-editor/about" className="text-primary hover:underline">
                Editar
              </Link>
            </div>
            <ul className="space-y-2 text-gray-300">
              <li>• História da Empresa</li>
              <li>• Missão e Valores</li>
              <li>• Equipe</li>
              <li>• Trajetória</li>
            </ul>
          </div>
          
          <div className="bg-secondary/70 p-6 rounded-lg border border-primary/20">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Página de Serviços</h2>
              <Link href="/dashboard/admin/site-editor/services" className="text-primary hover:underline">
                Editar
              </Link>
            </div>
            <ul className="space-y-2 text-gray-300">
              <li>• Descrição dos Pacotes</li>
              <li>• Preços e Ofertas</li>
              <li>• Serviços Adicionais</li>
              <li>• FAQs</li>
            </ul>
          </div>
          
          <div className="bg-secondary/70 p-6 rounded-lg border border-primary/20">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Portfólio</h2>
              <Link href="/dashboard/admin/site-editor/portfolio" className="text-primary hover:underline">
                Editar
              </Link>
            </div>
            <ul className="space-y-2 text-gray-300">
              <li>• Vídeos Destacados</li>
              <li>• Categorias</li>
              <li>• Descrições e Tags</li>
            </ul>
          </div>
          
          <div className="bg-secondary/70 p-6 rounded-lg border border-primary/20">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Depoimentos</h2>
              <Link href="/dashboard/admin/site-editor/testimonials" className="text-primary hover:underline">
                Editar
              </Link>
            </div>
            <ul className="space-y-2 text-gray-300">
              <li>• Avaliações de Clientes</li>
              <li>• Fotos e Nomes</li>
              <li>• Datas dos Eventos</li>
            </ul>
          </div>
          
          <div className="bg-secondary/70 p-6 rounded-lg border border-primary/20">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Contato</h2>
              <Link href="/dashboard/admin/site-editor/contact" className="text-primary hover:underline">
                Editar
              </Link>
            </div>
            <ul className="space-y-2 text-gray-300">
              <li>• Informações de Contato</li>
              <li>• Endereço</li>
              <li>• Redes Sociais</li>
              <li>• Formulário de Contato</li>
            </ul>
          </div>
        </div>
        
        {/* Configurações e SEO */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-secondary/70 p-6 rounded-lg border border-primary/20">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">SEO e Metadata</h2>
              <Link href="/dashboard/admin/site-editor/seo" className="text-primary hover:underline">
                Configurar
              </Link>
            </div>
            <ul className="space-y-2 text-gray-300">
              <li>• Títulos das Páginas</li>
              <li>• Descrições Meta</li>
              <li>• Tags de Palavras-chave</li>
              <li>• Configurações de Compartilhamento</li>
            </ul>
          </div>
          
          <div className="bg-secondary/70 p-6 rounded-lg border border-primary/20">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Configurações Gerais</h2>
              <Link href="/dashboard/admin/site-editor/settings" className="text-primary hover:underline">
                Configurar
              </Link>
            </div>
            <ul className="space-y-2 text-gray-300">
              <li>• Logo e Favicon</li>
              <li>• Cores do Site</li>
              <li>• Rodapé e Informações Legais</li>
              <li>• Scripts de Analytics</li>
            </ul>
          </div>
        </div>
        
        {/* Links rápidos */}
        <div className="bg-secondary/70 p-6 rounded-lg border border-primary/20 mb-8">
          <h2 className="text-xl font-bold mb-4">Links Rápidos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <Link 
              href="/dashboard/admin/site-editor/upload"
              className="bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-primary/40 hover:bg-gray-800/80 transition-colors text-center"
            >
              <div className="flex flex-col items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mb-2 text-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                </svg>
                <span className="font-medium">Upload de Arquivos</span>
              </div>
            </Link>
            
            <Link 
              href="/dashboard/admin/site-editor/blog"
              className="bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-primary/40 hover:bg-gray-800/80 transition-colors text-center"
            >
              <div className="flex flex-col items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mb-2 text-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                </svg>
                <span className="font-medium">Blog e Artigos</span>
              </div>
            </Link>
            
            <Link 
              href="/dashboard/admin/site-editor/menu"
              className="bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-primary/40 hover:bg-gray-800/80 transition-colors text-center"
            >
              <div className="flex flex-col items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mb-2 text-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                <span className="font-medium">Menus de Navegação</span>
              </div>
            </Link>
            
            <Link 
              href="/dashboard/admin/site-editor/preview"
              className="bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-primary/40 hover:bg-gray-800/80 transition-colors text-center"
            >
              <div className="flex flex-col items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mb-2 text-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="font-medium">Visualizar Site</span>
              </div>
            </Link>
          </div>
        </div>
        
        {/* Logs de atividades recentes */}
        <div className="bg-secondary/70 p-6 rounded-lg border border-primary/20">
          <h2 className="text-xl font-bold mb-4">Atividades Recentes</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-700">
              <thead className="bg-secondary">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Data
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Usuário
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Ação
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Página
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                <tr className="hover:bg-gray-800/50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">31/03/2023 - 15:42</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">Admin</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">Atualização de conteúdo</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">Página Inicial</td>
                </tr>
                <tr className="hover:bg-gray-800/50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">31/03/2023 - 14:30</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">Admin</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">Upload de imagem</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">Portfólio</td>
                </tr>
                <tr className="hover:bg-gray-800/50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">30/03/2023 - 10:15</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">Admin</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">Atualização de preços</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">Serviços</td>
                </tr>
                <tr className="hover:bg-gray-800/50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">29/03/2023 - 16:50</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">Admin</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">Adição de depoimento</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">Depoimentos</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
} 