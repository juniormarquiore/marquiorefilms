import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function PortfolioEditorPage() {
  return (
    <div className="container-custom py-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="title mb-2">Editor de Portfólio</h1>
            <p className="text-gray-400">
              Gerencie os vídeos e trabalhos exibidos no site
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
        
        {/* Configurações de Portfólio */}
        <div className="bg-secondary/70 p-6 rounded-lg border border-primary/20 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Configurações do Portfólio</h2>
            <button className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/80 transition-colors">
              Salvar Alterações
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Título da Seção</label>
              <input 
                type="text" 
                className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                defaultValue="Nosso Portfólio" 
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Subtítulo</label>
              <input 
                type="text" 
                className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                defaultValue="Confira alguns de nossos trabalhos" 
              />
            </div>
          </div>
          
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-300 mb-2">Descrição</label>
            <textarea 
              className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary min-h-[100px]"
              defaultValue="Cada vídeo conta uma história única e especial. Veja como transformamos momentos em memórias eternas com nossa abordagem cinematográfica." 
            />
          </div>
        </div>
        
        {/* Categorias */}
        <div className="bg-secondary/70 p-6 rounded-lg border border-primary/20 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Categorias</h2>
            <button className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/80 transition-colors">
              Salvar Alterações
            </button>
          </div>
          
          <div className="space-y-4 mb-6">
            <div className="flex items-center space-x-4">
              <input 
                type="text" 
                className="flex-1 bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                defaultValue="Casamentos" 
              />
              <button className="text-gray-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="flex items-center space-x-4">
              <input 
                type="text" 
                className="flex-1 bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                defaultValue="Pré-Wedding" 
              />
              <button className="text-gray-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="flex items-center space-x-4">
              <input 
                type="text" 
                className="flex-1 bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                defaultValue="Same Day Edit" 
              />
              <button className="text-gray-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="flex items-center space-x-4">
              <input 
                type="text" 
                className="flex-1 bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                defaultValue="Making Of" 
              />
              <button className="text-gray-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          
          <button className="mt-2 text-primary hover:text-primary/80 text-sm flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            Adicionar Categoria
          </button>
        </div>
        
        {/* Vídeos do Portfólio */}
        <div className="bg-secondary/70 p-6 rounded-lg border border-primary/20 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Vídeos do Portfólio</h2>
            <div className="flex items-center space-x-2">
              <Link 
                href="/dashboard/admin/site-editor/upload"
                className="bg-gray-800 text-gray-300 px-4 py-2 rounded hover:bg-gray-700 transition-colors border border-gray-700"
              >
                Gerenciar Arquivos
              </Link>
              <button className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/80 transition-colors">
                Salvar Alterações
              </button>
            </div>
          </div>
          
          <div className="space-y-6">
            {/* Vídeo 1 */}
            <div className="bg-gray-800/50 p-5 rounded-lg border border-gray-700">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-1/3">
                  <div className="relative aspect-video w-full overflow-hidden rounded">
                    <Image 
                      src="https://via.placeholder.com/640x360" 
                      alt="Thumbnail do vídeo"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-16 w-16 rounded-full bg-primary/80 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-3 flex justify-between">
                    <button className="text-gray-300 hover:text-white text-sm">
                      Alterar Thumbnail
                    </button>
                    <label className="inline-flex items-center">
                      <input type="checkbox" className="form-checkbox h-4 w-4 text-primary" defaultChecked />
                      <span className="ml-2 text-sm text-gray-300">Destacar</span>
                    </label>
                  </div>
                </div>
                
                <div className="w-full md:w-2/3 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Título do Vídeo</label>
                    <input 
                      type="text" 
                      className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                      defaultValue="Casamento Maria & João - Filme Completo" 
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">URL do Vídeo (YouTube/Vimeo)</label>
                    <input 
                      type="text" 
                      className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                      defaultValue="https://www.youtube.com/watch?v=exampleid" 
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Descrição</label>
                    <textarea 
                      className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary min-h-[80px]"
                      defaultValue="Casamento realizado no Espaço Villa Jardim em Junho de 2023. Uma celebração emocionante com decoração clássica e toques de modernidade." 
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Categoria</label>
                    <select className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary">
                      <option value="casamentos">Casamentos</option>
                      <option value="pre-wedding">Pré-Wedding</option>
                      <option value="same-day-edit">Same Day Edit</option>
                      <option value="making-of">Making Of</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Tags (separadas por vírgula)</label>
                    <input 
                      type="text" 
                      className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                      defaultValue="casamento, luxo, emoção, tradicional, igreja" 
                    />
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end mt-6">
                <button className="text-red-400 hover:text-red-300 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                  </svg>
                  Remover Vídeo
                </button>
              </div>
            </div>
            
            {/* Vídeo 2 */}
            <div className="bg-gray-800/50 p-5 rounded-lg border border-gray-700">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-1/3">
                  <div className="relative aspect-video w-full overflow-hidden rounded">
                    <Image 
                      src="https://via.placeholder.com/640x360" 
                      alt="Thumbnail do vídeo"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-16 w-16 rounded-full bg-primary/80 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-3 flex justify-between">
                    <button className="text-gray-300 hover:text-white text-sm">
                      Alterar Thumbnail
                    </button>
                    <label className="inline-flex items-center">
                      <input type="checkbox" className="form-checkbox h-4 w-4 text-primary" />
                      <span className="ml-2 text-sm text-gray-300">Destacar</span>
                    </label>
                  </div>
                </div>
                
                <div className="w-full md:w-2/3 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Título do Vídeo</label>
                    <input 
                      type="text" 
                      className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                      defaultValue="Ensaio Pré-Wedding Ana & Pedro - Praia do Rosa" 
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">URL do Vídeo (YouTube/Vimeo)</label>
                    <input 
                      type="text" 
                      className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                      defaultValue="https://www.youtube.com/watch?v=exampleid2" 
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Descrição</label>
                    <textarea 
                      className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary min-h-[80px]"
                      defaultValue="Ensaio realizado no pôr do sol na Praia do Rosa, SC. Uma sessão cheia de romantismo e conexão que antecipou os momentos do grande dia." 
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Categoria</label>
                    <select className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary">
                      <option value="casamentos">Casamentos</option>
                      <option value="pre-wedding" selected>Pré-Wedding</option>
                      <option value="same-day-edit">Same Day Edit</option>
                      <option value="making-of">Making Of</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Tags (separadas por vírgula)</label>
                    <input 
                      type="text" 
                      className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                      defaultValue="praia, pôr do sol, ensaio, casal, praia do rosa, romântico" 
                    />
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end mt-6">
                <button className="text-red-400 hover:text-red-300 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                  </svg>
                  Remover Vídeo
                </button>
              </div>
            </div>
            
            <button className="w-full py-3 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg border border-gray-700 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              Adicionar Novo Vídeo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 