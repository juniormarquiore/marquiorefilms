import React from 'react';
import Link from 'next/link';

export default function SeoEditorPage() {
  return (
    <div className="container-custom py-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="title mb-2">Configurações de SEO</h1>
            <p className="text-gray-400">
              Otimize seu site para mecanismos de busca
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <Link
              href="/dashboard/admin/site-editor"
              className="bg-secondary text-white px-4 py-2 rounded hover:bg-secondary/80 transition-colors border border-primary/20 flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 mr-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Voltar
            </Link>
          </div>
        </div>
        
        {/* SEO Global */}
        <div className="bg-secondary/70 p-6 rounded-lg border border-primary/20 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">SEO Global</h2>
            <button className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/80 transition-colors">
              Salvar Alterações
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Título do Site</label>
              <input 
                type="text" 
                className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                defaultValue="Marquiore Films | Filmagem de Casamentos" 
              />
              <p className="mt-1 text-xs text-gray-400">Recomendado: até 60 caracteres</p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Nome da Empresa</label>
              <input 
                type="text" 
                className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                defaultValue="Marquiore Films" 
              />
            </div>
          </div>
          
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-300 mb-2">Descrição do Site</label>
            <textarea 
              className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary min-h-[100px]"
              defaultValue="Marquiore Films é uma produtora especializada em filmagem de casamentos, criando filmes emocionantes e autênticos que capturam a essência deste momento especial. Nosso estilo cinematográfico transforma memórias em verdadeiras obras de arte."
            />
            <p className="mt-1 text-xs text-gray-400">Recomendado: 150-160 caracteres</p>
          </div>
          
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-300 mb-2">Palavras-chave</label>
            <textarea 
              className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
              defaultValue="filmagem de casamento, vídeo de casamento, filme de casamento, videomaker, wedding film, filmagem cinematográfica, casamento, ensaio pré-wedding" 
            />
            <p className="mt-1 text-xs text-gray-400">Separe as palavras-chave com vírgulas</p>
          </div>
          
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-300 mb-2">URL Canônica</label>
            <input 
              type="url" 
              className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
              defaultValue="https://marquiorefilms.com.br" 
            />
          </div>
        </div>
        
        {/* SEO por Página */}
        <div className="bg-secondary/70 p-6 rounded-lg border border-primary/20 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">SEO por Página</h2>
            <button className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/80 transition-colors">
              Salvar Alterações
            </button>
          </div>
          
          <div className="space-y-8">
            {/* Página Inicial */}
            <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
              <h3 className="text-lg font-semibold mb-4">Página Inicial</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Título da Página</label>
                  <input 
                    type="text" 
                    className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                    defaultValue="Marquiore Films | Cinematografia de Casamentos" 
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Slug</label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-600 bg-gray-700 text-gray-400 text-sm">
                      marquiorefilms.com.br/
                    </span>
                    <input 
                      type="text" 
                      className="flex-1 bg-gray-700 border border-gray-600 rounded-r-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                      readOnly
                      defaultValue="" 
                    />
                  </div>
                </div>
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-300 mb-2">Descrição Meta</label>
                <textarea 
                  className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                  defaultValue="Transformamos casamentos em filmes cinematográficos cheios de emoção e autenticidade. Conheça nosso trabalho de filmagem para casamentos em todo Brasil."
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Palavras-chave Específicas</label>
                <input 
                  type="text" 
                  className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                  defaultValue="filmagem casamento, filme casamento, vídeo casamento, videomaker, cinegrafista" 
                />
              </div>
            </div>
            
            {/* Página Sobre */}
            <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
              <h3 className="text-lg font-semibold mb-4">Página Sobre</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Título da Página</label>
                  <input 
                    type="text" 
                    className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                    defaultValue="Sobre Nós | Marquiore Films" 
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Slug</label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-600 bg-gray-700 text-gray-400 text-sm">
                      marquiorefilms.com.br/
                    </span>
                    <input 
                      type="text" 
                      className="flex-1 bg-gray-700 border border-gray-600 rounded-r-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                      defaultValue="sobre" 
                    />
                  </div>
                </div>
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-300 mb-2">Descrição Meta</label>
                <textarea 
                  className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                  defaultValue="Conheça a Marquiore Films: 8 anos de experiência na produção de filmes de casamento. Nossa equipe, trajetória e paixão por contar histórias através das lentes."
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Palavras-chave Específicas</label>
                <input 
                  type="text" 
                  className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                  defaultValue="sobre marquiore films, quem somos, equipe de filmagem, história da empresa, trajetória" 
                />
              </div>
            </div>
            
            {/* Portfólio */}
            <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
              <h3 className="text-lg font-semibold mb-4">Portfólio</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Título da Página</label>
                  <input 
                    type="text" 
                    className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                    defaultValue="Portfólio | Marquiore Films" 
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Slug</label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-600 bg-gray-700 text-gray-400 text-sm">
                      marquiorefilms.com.br/
                    </span>
                    <input 
                      type="text" 
                      className="flex-1 bg-gray-700 border border-gray-600 rounded-r-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                      defaultValue="portfolio" 
                    />
                  </div>
                </div>
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-300 mb-2">Descrição Meta</label>
                <textarea 
                  className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                  defaultValue="Confira os melhores filmes de casamento da Marquiore Films. Vídeos cinematográficos que capturam a emoção e essência de cada casal em seu dia especial."
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Palavras-chave Específicas</label>
                <input 
                  type="text" 
                  className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                  defaultValue="portfólio filmagem casamento, vídeos de casamento, filmes de casamento, galeria, trabalhos" 
                />
              </div>
            </div>
            
            <button className="w-full py-3 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg border border-gray-700 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              Adicionar Nova Página
            </button>
          </div>
        </div>
        
        {/* Configurações de Compartilhamento Social */}
        <div className="bg-secondary/70 p-6 rounded-lg border border-primary/20 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Compartilhamento Social</h2>
            <button className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/80 transition-colors">
              Salvar Alterações
            </button>
          </div>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4">Open Graph (Facebook, LinkedIn)</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Título OG</label>
                <input 
                  type="text" 
                  className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                  defaultValue="Marquiore Films | Filmagem Cinematográfica de Casamentos" 
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Tipo OG</label>
                <select className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary">
                  <option value="website" selected>website</option>
                  <option value="article">article</option>
                  <option value="profile">profile</option>
                  <option value="business.business">business</option>
                </select>
              </div>
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-300 mb-2">Descrição OG</label>
              <textarea 
                className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                defaultValue="Eternize seu casamento com filmes cinematográficos que capturam a verdadeira emoção deste dia tão especial. Filmagens profissionais de alta qualidade." 
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-300 mb-2">Imagem OG (1200 x 630px recomendado)</label>
              <div className="border-2 border-dashed border-gray-700 rounded-lg p-4 text-center">
                <div className="mb-3 aspect-[1200/630] relative w-full">
                  <div className="absolute inset-0 bg-gray-700 flex items-center justify-center">
                    <p className="text-gray-400">Prévia da imagem</p>
                  </div>
                </div>
                <button className="bg-gray-800 hover:bg-gray-700 text-gray-300 px-4 py-2 rounded-md text-sm">
                  Selecionar Imagem
                </button>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Twitter Card</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Título do Card</label>
                <input 
                  type="text" 
                  className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                  defaultValue="Marquiore Films | Transformando casamentos em arte" 
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Tipo de Card</label>
                <select className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary">
                  <option value="summary_large_image" selected>summary_large_image</option>
                  <option value="summary">summary</option>
                  <option value="app">app</option>
                  <option value="player">player</option>
                </select>
              </div>
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-300 mb-2">Descrição do Card</label>
              <textarea 
                className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                defaultValue="Filmagens de casamento com estilo cinematográfico único. Veja como transformamos momentos em memórias inesquecíveis através das nossas lentes." 
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Imagem do Card (1200 x 628px recomendado)</label>
              <div className="border-2 border-dashed border-gray-700 rounded-lg p-4 text-center">
                <div className="mb-3 aspect-[1200/628] relative w-full">
                  <div className="absolute inset-0 bg-gray-700 flex items-center justify-center">
                    <p className="text-gray-400">Prévia da imagem</p>
                  </div>
                </div>
                <button className="bg-gray-800 hover:bg-gray-700 text-gray-300 px-4 py-2 rounded-md text-sm">
                  Selecionar Imagem
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Configurações Avançadas */}
        <div className="bg-secondary/70 p-6 rounded-lg border border-primary/20 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Configurações Avançadas</h2>
            <button className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/80 transition-colors">
              Salvar Alterações
            </button>
          </div>
          
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-300 mb-2">Verificação Google</label>
            <input 
              type="text" 
              className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="google-site-verification=código" 
            />
            <p className="mt-1 text-xs text-gray-400">Código de verificação do Google Search Console</p>
          </div>
          
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-300 mb-2">Verificação Bing</label>
            <input 
              type="text" 
              className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="msvalidate.01=código" 
            />
            <p className="mt-1 text-xs text-gray-400">Código de verificação do Bing Webmaster Tools</p>
          </div>
          
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-300 mb-2">Robots.txt</label>
            <textarea 
              className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary font-mono text-sm min-h-[150px]"
              defaultValue={`User-agent: *
Allow: /
Disallow: /dashboard/
Disallow: /auth/

Sitemap: https://marquiorefilms.com.br/sitemap.xml`}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Scripts Adicionais (Head)</label>
            <textarea 
              className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary font-mono text-sm min-h-[150px]"
              placeholder="<!-- Cole aqui scripts adicionais para incluir no head -->"
            />
            <p className="mt-1 text-xs text-gray-400">Scripts adicionais que serão inseridos na tag &lt;head&gt; de todas as páginas</p>
          </div>
        </div>
      </div>
    </div>
  );
} 