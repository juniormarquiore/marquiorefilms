import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutEditorPage() {
  return (
    <div className="container-custom py-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="title mb-2">Editor da Página Sobre</h1>
            <p className="text-gray-400">
              Personalize as informações da página Sobre
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
        
        {/* História da Empresa */}
        <div className="bg-secondary/70 p-6 rounded-lg border border-primary/20 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">História da Empresa</h2>
            <button className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/80 transition-colors">
              Salvar Alterações
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-300 mb-2">Título da Seção</label>
                <input 
                  type="text" 
                  className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                  defaultValue="Nossa História" 
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-300 mb-2">Descrição</label>
                <textarea 
                  className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary min-h-[150px]"
                  defaultValue="A Marquiore Films foi fundada pelo videomaker Junior Marquiore há 8 anos. Com paixão pela arte de contar histórias e valorizar emoções genuínas, temos ajudado casais a eternizar os momentos mais especiais de suas vidas através de filmes que capturam a essência de cada cerimônia."
                />
              </div>
            </div>
            
            <div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-300 mb-2">Imagem Principal</label>
                <div className="border-2 border-dashed border-gray-700 rounded-lg p-4 text-center">
                  <div className="mb-3 relative h-40 w-full">
                    <Image 
                      src="https://via.placeholder.com/400x300" 
                      alt="Imagem da História"
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                  <button className="bg-gray-800 hover:bg-gray-700 text-gray-300 px-4 py-2 rounded-md text-sm">
                    Trocar Imagem
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Missão e Valores */}
        <div className="bg-secondary/70 p-6 rounded-lg border border-primary/20 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Missão e Valores</h2>
            <button className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/80 transition-colors">
              Salvar Alterações
            </button>
          </div>
          
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-300 mb-2">Título da Seção</label>
            <input 
              type="text" 
              className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
              defaultValue="Nossa Missão" 
            />
          </div>
          
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-300 mb-2">Descrição da Missão</label>
            <textarea 
              className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary min-h-[100px]"
              defaultValue="Transformar momentos em memórias eternas, capturando a autenticidade e emoção de cada casamento através de uma linguagem cinematográfica única e pessoal." 
            />
          </div>
          
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-300 mb-2">Nossos Valores</label>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <input 
                  type="text" 
                  className="flex-1 bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                  defaultValue="Autenticidade" 
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
                  defaultValue="Criatividade" 
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
                  defaultValue="Dedicação" 
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
              Adicionar valor
            </button>
          </div>
        </div>
        
        {/* Equipe */}
        <div className="bg-secondary/70 p-6 rounded-lg border border-primary/20 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Equipe</h2>
            <button className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/80 transition-colors">
              Salvar Alterações
            </button>
          </div>
          
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-300 mb-2">Título da Seção</label>
            <input 
              type="text" 
              className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
              defaultValue="Nossa Equipe" 
            />
          </div>
          
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-300 mb-2">Descrição da Equipe</label>
            <textarea 
              className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary min-h-[100px]"
              defaultValue="Conheça os profissionais apaixonados por arte e cinema que trabalham nos bastidores para transformar seu grande dia em uma obra cinematográfica." 
            />
          </div>
          
          <div className="space-y-6">
            <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-1/4">
                  <div className="relative h-48 w-full">
                    <Image 
                      src="https://via.placeholder.com/300x400" 
                      alt="Foto do membro da equipe"
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                  <button className="w-full mt-2 bg-gray-700 hover:bg-gray-600 text-gray-300 px-4 py-1 rounded-md text-sm">
                    Trocar Foto
                  </button>
                </div>
                
                <div className="w-full md:w-3/4 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Nome</label>
                    <input 
                      type="text" 
                      className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                      defaultValue="Junior Marquiore" 
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Cargo</label>
                    <input 
                      type="text" 
                      className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                      defaultValue="Diretor e Cinegrafista Principal" 
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Descrição</label>
                    <textarea 
                      className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary min-h-[80px]"
                      defaultValue="Fundador da Marquiore Films, apaixonado por contar histórias através de imagens. Com formação em cinema e 8 anos de experiência, transforma cada casamento em uma experiência cinematográfica única." 
                    />
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end mt-4">
                <button className="text-red-400 hover:text-red-300 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                  </svg>
                  Remover
                </button>
              </div>
            </div>
            
            <button className="w-full py-3 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg border border-gray-700 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              Adicionar Membro da Equipe
            </button>
          </div>
        </div>
        
        {/* Trajetória */}
        <div className="bg-secondary/70 p-6 rounded-lg border border-primary/20 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Trajetória</h2>
            <button className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/80 transition-colors">
              Salvar Alterações
            </button>
          </div>
          
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-300 mb-2">Título da Seção</label>
            <input 
              type="text" 
              className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
              defaultValue="Nossa Trajetória" 
            />
          </div>
          
          <div className="space-y-6">
            <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Ano</label>
                  <input 
                    type="text" 
                    className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                    defaultValue="2015" 
                  />
                </div>
                
                <div className="md:col-span-3">
                  <label className="block text-sm font-medium text-gray-300 mb-2">Descrição</label>
                  <textarea 
                    className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary min-h-[80px]"
                    defaultValue="Fundação da Marquiore Films, com foco em filmes de casamentos na região Sul do Brasil." 
                  />
                </div>
              </div>
              
              <div className="flex justify-end mt-4">
                <button className="text-red-400 hover:text-red-300 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                  </svg>
                  Remover
                </button>
              </div>
            </div>
            
            <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Ano</label>
                  <input 
                    type="text" 
                    className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                    defaultValue="2018" 
                  />
                </div>
                
                <div className="md:col-span-3">
                  <label className="block text-sm font-medium text-gray-300 mb-2">Descrição</label>
                  <textarea 
                    className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary min-h-[80px]"
                    defaultValue="Expansão para outros estados e conquista de prêmios regionais de cinematografia." 
                  />
                </div>
              </div>
              
              <div className="flex justify-end mt-4">
                <button className="text-red-400 hover:text-red-300 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                  </svg>
                  Remover
                </button>
              </div>
            </div>
            
            <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Ano</label>
                  <input 
                    type="text" 
                    className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                    defaultValue="2022" 
                  />
                </div>
                
                <div className="md:col-span-3">
                  <label className="block text-sm font-medium text-gray-300 mb-2">Descrição</label>
                  <textarea 
                    className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary min-h-[80px]"
                    defaultValue="Reconhecimento nacional com participação em eventos do setor de casamentos e implementação de novas tecnologias." 
                  />
                </div>
              </div>
              
              <div className="flex justify-end mt-4">
                <button className="text-red-400 hover:text-red-300 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                  </svg>
                  Remover
                </button>
              </div>
            </div>
            
            <button className="w-full py-3 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg border border-gray-700 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              Adicionar Marco
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 