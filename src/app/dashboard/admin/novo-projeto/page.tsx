import React from 'react';
import Link from 'next/link';

export default function NovoProjetoPage() {
  return (
    <div className="container-custom py-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-8">
          <Link href="/dashboard/admin" className="flex items-center text-primary hover:underline">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 mr-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Voltar para Dashboard
          </Link>
        </div>
        
        <h1 className="title mb-8">Novo Projeto</h1>
        
        <div className="bg-secondary/70 p-8 rounded-lg border border-primary/20">
          <form>
            <div className="space-y-8">
              {/* Informações do Casal */}
              <div>
                <h2 className="text-xl font-bold mb-6 border-b border-primary/30 pb-2">Informações do Casal</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 mb-2">Nome Completo (Pessoa 1)</label>
                    <input 
                      type="text" 
                      className="w-full bg-secondary border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Ex: Maria Silva"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Nome Completo (Pessoa 2)</label>
                    <input 
                      type="text" 
                      className="w-full bg-secondary border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Ex: João Santos"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Email de Contato</label>
                    <input 
                      type="email" 
                      className="w-full bg-secondary border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="email@exemplo.com"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Telefone de Contato</label>
                    <input 
                      type="tel" 
                      className="w-full bg-secondary border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-gray-300 mb-2">Endereço Completo</label>
                    <input 
                      type="text" 
                      className="w-full bg-secondary border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Rua, número, complemento, bairro, cidade, estado, CEP"
                    />
                  </div>
                </div>
              </div>
              
              {/* Detalhes do Evento */}
              <div>
                <h2 className="text-xl font-bold mb-6 border-b border-primary/30 pb-2">Detalhes do Evento</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 mb-2">Data do Casamento</label>
                    <input 
                      type="date" 
                      className="w-full bg-secondary border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Horário da Cerimônia</label>
                    <input 
                      type="time" 
                      className="w-full bg-secondary border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Local da Cerimônia</label>
                    <input 
                      type="text" 
                      className="w-full bg-secondary border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Nome do local"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Endereço da Cerimônia</label>
                    <input 
                      type="text" 
                      className="w-full bg-secondary border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Endereço completo"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Local da Recepção</label>
                    <input 
                      type="text" 
                      className="w-full bg-secondary border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Nome do local (se diferente da cerimônia)"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Endereço da Recepção</label>
                    <input 
                      type="text" 
                      className="w-full bg-secondary border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Endereço completo (se diferente da cerimônia)"
                    />
                  </div>
                </div>
              </div>
              
              {/* Serviços Contratados */}
              <div>
                <h2 className="text-xl font-bold mb-6 border-b border-primary/30 pb-2">Serviços Contratados</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <input 
                      type="checkbox" 
                      id="filme-completo" 
                      className="mt-1 mr-3"
                    />
                    <div>
                      <label htmlFor="filme-completo" className="font-semibold">Filme Completo</label>
                      <p className="text-gray-400 text-sm">Vídeo completo com duração de 25-30 minutos</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <input 
                      type="checkbox" 
                      id="same-day-edit" 
                      className="mt-1 mr-3"
                    />
                    <div>
                      <label htmlFor="same-day-edit" className="font-semibold">Same Day Edit</label>
                      <p className="text-gray-400 text-sm">Vídeo curto editado no mesmo dia do evento</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <input 
                      type="checkbox" 
                      id="ensaio-pre-wedding" 
                      className="mt-1 mr-3"
                    />
                    <div>
                      <label htmlFor="ensaio-pre-wedding" className="font-semibold">Ensaio Pré-Wedding</label>
                      <p className="text-gray-400 text-sm">Sessão de filmagem em locação especial antes do casamento</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <input 
                      type="checkbox" 
                      id="drone" 
                      className="mt-1 mr-3"
                    />
                    <div>
                      <label htmlFor="drone" className="font-semibold">Filmagem com Drone</label>
                      <p className="text-gray-400 text-sm">Imagens aéreas do local e da cerimônia</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <input 
                      type="checkbox" 
                      id="cena-extra" 
                      className="mt-1 mr-3"
                    />
                    <div>
                      <label htmlFor="cena-extra" className="font-semibold">Cenas Extras</label>
                      <p className="text-gray-400 text-sm">Filmagens adicionais em locações especiais</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Informações do Contrato */}
              <div>
                <h2 className="text-xl font-bold mb-6 border-b border-primary/30 pb-2">Informações do Contrato</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 mb-2">Valor Total</label>
                    <input 
                      type="text" 
                      className="w-full bg-secondary border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="R$ 0,00"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Forma de Pagamento</label>
                    <select className="w-full bg-secondary border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary">
                      <option value="">Selecione</option>
                      <option value="a-vista">À vista</option>
                      <option value="2x">Parcelado em 2x</option>
                      <option value="3x">Parcelado em 3x</option>
                      <option value="4x">Parcelado em 4x</option>
                      <option value="personalizado">Personalizado</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Data de Entrada</label>
                    <input 
                      type="date" 
                      className="w-full bg-secondary border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Valor da Entrada</label>
                    <input 
                      type="text" 
                      className="w-full bg-secondary border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="R$ 0,00"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-gray-300 mb-2">Observações</label>
                    <textarea 
                      className="w-full bg-secondary border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary h-32"
                      placeholder="Informações adicionais, detalhes específicos, etc."
                    ></textarea>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end space-x-4">
                <Link
                  href="/dashboard/admin"
                  className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-md transition-colors"
                >
                  Cancelar
                </Link>
                <button
                  type="submit"
                  className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md transition-colors"
                >
                  Criar Projeto
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 