import React from 'react';
import Link from 'next/link';

export default function ServicesEditorPage() {
  return (
    <div className="container-custom py-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="title mb-2">Editor de Serviços</h1>
            <p className="text-gray-400">
              Personalize os pacotes e serviços oferecidos
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
        
        {/* Descrição dos Pacotes */}
        <div className="bg-secondary/70 p-6 rounded-lg border border-primary/20 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Descrição dos Pacotes</h2>
            <button className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/80 transition-colors">
              Salvar Alterações
            </button>
          </div>
          
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-300 mb-2">Título da Seção</label>
            <input 
              type="text" 
              className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
              defaultValue="Nossos Pacotes" 
            />
          </div>
          
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-300 mb-2">Descrição Introdutória</label>
            <textarea 
              className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary min-h-[100px]"
              defaultValue="Oferecemos opções personalizadas para eternizar o seu grande dia. Escolha o pacote que melhor atende às suas necessidades e transforme seu casamento em uma obra cinematográfica única." 
            />
          </div>
          
          {/* Pacote Basic */}
          <div className="bg-gray-800/50 p-5 rounded-lg border border-gray-700 mb-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Pacote Basic</h3>
              <div className="flex items-center space-x-2">
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox h-5 w-5 text-primary" />
                  <span className="ml-2 text-sm text-gray-300">Destacar</span>
                </label>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Nome do Pacote</label>
                <input 
                  type="text" 
                  className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                  defaultValue="Plano Basic" 
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Preço (R$)</label>
                <input 
                  type="text" 
                  className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                  defaultValue="3.900" 
                />
              </div>
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-300 mb-2">Descrição do Pacote</label>
              <textarea 
                className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary min-h-[80px]"
                defaultValue="Perfeito para casais que buscam registrar os momentos mais importantes da cerimônia com qualidade cinematográfica." 
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Características (uma por linha)</label>
              <textarea 
                className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary min-h-[150px]"
                defaultValue={`Filme do Casamento (5-8 minutos)
Cinegrafista Principal + Assistente
Entrega em até 60 dias
Arquivo Digital em Alta Resolução
Trilha Sonora Licenciada`} 
              />
            </div>
          </div>
          
          {/* Pacote Excellence */}
          <div className="bg-gray-800/50 p-5 rounded-lg border border-gray-700 mb-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Pacote Excellence</h3>
              <div className="flex items-center space-x-2">
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox h-5 w-5 text-primary" defaultChecked />
                  <span className="ml-2 text-sm text-gray-300">Destacar</span>
                </label>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Nome do Pacote</label>
                <input 
                  type="text" 
                  className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                  defaultValue="Plano Excellence" 
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Preço (R$)</label>
                <input 
                  type="text" 
                  className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                  defaultValue="4.900" 
                />
              </div>
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-300 mb-2">Descrição do Pacote</label>
              <textarea 
                className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary min-h-[80px]"
                defaultValue="Nossa opção mais popular, balanceando custo-benefício com cobertura completa do seu dia especial." 
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Características (uma por linha)</label>
              <textarea 
                className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary min-h-[150px]"
                defaultValue={`Filme do Casamento (8-12 minutos)
Same Day Edit (3-4 minutos)
Cinegrafista Principal + 2 Assistentes
Entrega em até 45 dias
Arquivo Digital em 4K
Trilha Sonora Personalizada
Drone (conforme local)`} 
              />
            </div>
          </div>
          
          {/* Pacote Deluxe */}
          <div className="bg-gray-800/50 p-5 rounded-lg border border-gray-700 mb-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Pacote Deluxe</h3>
              <div className="flex items-center space-x-2">
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox h-5 w-5 text-primary" />
                  <span className="ml-2 text-sm text-gray-300">Destacar</span>
                </label>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Nome do Pacote</label>
                <input 
                  type="text" 
                  className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                  defaultValue="Plano Deluxe" 
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Preço (R$)</label>
                <input 
                  type="text" 
                  className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                  defaultValue="6.300" 
                />
              </div>
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-300 mb-2">Descrição do Pacote</label>
              <textarea 
                className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary min-h-[80px]"
                defaultValue="A experiência cinematográfica completa, com todos os recursos para transformar seu casamento em uma obra de arte inesquecível." 
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Características (uma por linha)</label>
              <textarea 
                className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary min-h-[150px]"
                defaultValue={`Filme do Casamento (15-20 minutos)
Same Day Edit (4-5 minutos)
Ensaio Pré-Wedding com Filme (3-5 minutos)
Cinegrafista Principal + 3 Assistentes
Entrega em até 30 dias
Arquivo Digital em 4K + Pendrive Personalizado
Trilha Sonora Exclusiva Licenciada
Drone Durante Todo o Evento
Vídeos para Redes Sociais`} 
              />
            </div>
          </div>
          
          <button className="w-full py-3 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg border border-gray-700 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            Adicionar Novo Pacote
          </button>
        </div>
        
        {/* Serviços Adicionais */}
        <div className="bg-secondary/70 p-6 rounded-lg border border-primary/20 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Serviços Adicionais</h2>
            <button className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/80 transition-colors">
              Salvar Alterações
            </button>
          </div>
          
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-300 mb-2">Título da Seção</label>
            <input 
              type="text" 
              className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
              defaultValue="Serviços Extras" 
            />
          </div>
          
          <div className="space-y-4 mb-6">
            <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-300 mb-2">Nome do Serviço</label>
                  <input 
                    type="text" 
                    className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                    defaultValue="Ensaio Pré-Wedding" 
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Preço (R$)</label>
                  <input 
                    type="text" 
                    className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                    defaultValue="1.500" 
                  />
                </div>
              </div>
              
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-300 mb-2">Descrição</label>
                <textarea 
                  className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary min-h-[80px]"
                  defaultValue="Sessão de fotos e vídeos antes do casamento em locação à escolha do casal com duração de 2-3 horas, resultando em um filme de 3-5 minutos." 
                />
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
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-300 mb-2">Nome do Serviço</label>
                  <input 
                    type="text" 
                    className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                    defaultValue="Filmagem com Drone" 
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Preço (R$)</label>
                  <input 
                    type="text" 
                    className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                    defaultValue="800" 
                  />
                </div>
              </div>
              
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-300 mb-2">Descrição</label>
                <textarea 
                  className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary min-h-[80px]"
                  defaultValue="Adição de filmagens aéreas com drone durante o evento, para capturar paisagens e momentos de uma perspectiva única (sujeito a condições climáticas e permissões do local)." 
                />
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
          </div>
          
          <button className="w-full py-3 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg border border-gray-700 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            Adicionar Serviço Extra
          </button>
        </div>
        
        {/* FAQs */}
        <div className="bg-secondary/70 p-6 rounded-lg border border-primary/20 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Perguntas Frequentes (FAQs)</h2>
            <button className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/80 transition-colors">
              Salvar Alterações
            </button>
          </div>
          
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-300 mb-2">Título da Seção</label>
            <input 
              type="text" 
              className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
              defaultValue="Perguntas Frequentes" 
            />
          </div>
          
          <div className="space-y-6 mb-6">
            <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Pergunta</label>
                <input 
                  type="text" 
                  className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                  defaultValue="Quanto tempo antes preciso reservar a data?" 
                />
              </div>
              
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-300 mb-2">Resposta</label>
                <textarea 
                  className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary min-h-[80px]"
                  defaultValue="Recomendamos que você reserve a data com pelo menos 6-12 meses de antecedência, especialmente se o casamento for em temporada alta (setembro a março). Para garantir a disponibilidade, quanto antes entrar em contato, melhor." 
                />
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
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Pergunta</label>
                <input 
                  type="text" 
                  className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                  defaultValue="Como é feito o pagamento?" 
                />
              </div>
              
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-300 mb-2">Resposta</label>
                <textarea 
                  className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary min-h-[80px]"
                  defaultValue="Para confirmar a reserva da data, solicitamos um sinal de 30% do valor total. O restante pode ser dividido em até 10x no cartão ou pago até 15 dias antes do evento." 
                />
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
          </div>
          
          <button className="w-full py-3 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg border border-gray-700 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            Adicionar Nova Pergunta
          </button>
        </div>
      </div>
    </div>
  );
} 