import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ContactEditorPage() {
  return (
    <div className="container-custom py-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="title mb-2">Editor de Contato</h1>
            <p className="text-gray-400">
              Edite as informações de contato e canais de comunicação
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
        
        {/* Configurações da Seção de Contato */}
        <div className="bg-secondary/70 p-6 rounded-lg border border-primary/20 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Configurações da Seção</h2>
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
                defaultValue="Entre em Contato" 
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Subtítulo</label>
              <input 
                type="text" 
                className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                defaultValue="Estamos prontos para atender você" 
              />
            </div>
          </div>
          
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-300 mb-2">Descrição</label>
            <textarea 
              className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary min-h-[100px]"
              defaultValue="Entre em contato para tirar suas dúvidas, verificar disponibilidade de datas ou agendar uma reunião para conhecer melhor nosso trabalho. Respondemos em até 24 horas (dias úteis)." 
            />
          </div>
        </div>
        
        {/* Informações de Contato */}
        <div className="bg-secondary/70 p-6 rounded-lg border border-primary/20 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Informações de Contato</h2>
            <button className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/80 transition-colors">
              Salvar Alterações
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">E-mail Principal</label>
              <input 
                type="email" 
                className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                defaultValue="juniormarquiore@gmail.com" 
              />
              <p className="mt-1 text-xs text-gray-400">Este e-mail será exibido no site e receberá mensagens do formulário de contato</p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">E-mail Alternativo (opcional)</label>
              <input 
                type="email" 
                className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="contato@marquiorefilms.com.br" 
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">WhatsApp</label>
              <input 
                type="tel" 
                className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                defaultValue="5548999999999" 
              />
              <p className="mt-1 text-xs text-gray-400">Formato: 5548999999999 (com código do país e DDD)</p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Telefone Alternativo (opcional)</label>
              <input 
                type="tel" 
                className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="(48) 3333-3333" 
              />
            </div>
          </div>
          
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-300 mb-2">Tempo de Resposta</label>
            <textarea 
              className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
              defaultValue="Respondemos e-mails em até 24 horas e mensagens no WhatsApp em até 12 horas em dias úteis." 
            />
          </div>
        </div>
        
        {/* Endereço */}
        <div className="bg-secondary/70 p-6 rounded-lg border border-primary/20 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Endereço</h2>
            <button className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/80 transition-colors">
              Salvar Alterações
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Endereço Completo</label>
              <textarea 
                className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary min-h-[100px]"
                defaultValue="Rua das Flores, 123, Sala 45
Centro Empresarial
Florianópolis, SC
CEP: 88000-000" 
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Link do Google Maps (opcional)</label>
              <input 
                type="url" 
                className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="https://goo.gl/maps/exemplo" 
              />
              <p className="mt-1 text-xs text-gray-400">Cole o link compartilhável do Google Maps</p>
              
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-300 mb-2">Iframe do Google Maps (opcional)</label>
                <textarea 
                  className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary min-h-[100px]"
                  placeholder='<iframe src="https://www.google.com/maps/embed?..." width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>' 
                />
                <p className="mt-1 text-xs text-gray-400">Cole o código de incorporação do mapa</p>
              </div>
            </div>
          </div>
          
          <div className="mt-4">
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox h-5 w-5 text-primary" defaultChecked />
              <span className="ml-2 text-gray-300">Exibir endereço no site</span>
            </label>
          </div>
        </div>
        
        {/* Redes Sociais */}
        <div className="bg-secondary/70 p-6 rounded-lg border border-primary/20 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Redes Sociais</h2>
            <button className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/80 transition-colors">
              Salvar Alterações
            </button>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-lg mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-500">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </div>
              <input 
                type="text" 
                className="flex-1 bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                defaultValue="https://instagram.com/marquiore.films" 
                placeholder="URL do Instagram"
              />
            </div>
            
            <div className="flex items-center">
              <div className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-lg mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </div>
              <input 
                type="text" 
                className="flex-1 bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="URL do Facebook"
              />
            </div>
            
            <div className="flex items-center">
              <div className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-lg mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </div>
              <input 
                type="text" 
                className="flex-1 bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="URL do Canal no YouTube"
              />
            </div>
            
            <div className="flex items-center">
              <div className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-lg mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </div>
              <input 
                type="text" 
                className="flex-1 bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="URL do LinkedIn"
              />
            </div>
          </div>
          
          <button className="mt-4 text-primary hover:text-primary/80 text-sm flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            Adicionar outra rede social
          </button>
        </div>
        
        {/* Formulário de Contato */}
        <div className="bg-secondary/70 p-6 rounded-lg border border-primary/20 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Formulário de Contato</h2>
            <button className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/80 transition-colors">
              Salvar Alterações
            </button>
          </div>
          
          <div className="mb-4">
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox h-5 w-5 text-primary" defaultChecked />
              <span className="ml-2 text-gray-300">Exibir formulário de contato no site</span>
            </label>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Título do Formulário</label>
              <input 
                type="text" 
                className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                defaultValue="Envie uma Mensagem" 
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">E-mail para receber mensagens</label>
              <input 
                type="email" 
                className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                defaultValue="juniormarquiore@gmail.com" 
              />
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-lg font-semibold border-b border-gray-700 pb-2">Campos do Formulário</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Campo: Nome</label>
              <div className="flex space-x-4">
                <div className="flex-1">
                  <input 
                    type="text" 
                    className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                    defaultValue="Nome completo" 
                    placeholder="Rótulo do campo"
                  />
                </div>
                <div className="w-32">
                  <select className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary">
                    <option value="required" selected>Obrigatório</option>
                    <option value="optional">Opcional</option>
                    <option value="hidden">Oculto</option>
                  </select>
                </div>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Campo: E-mail</label>
              <div className="flex space-x-4">
                <div className="flex-1">
                  <input 
                    type="text" 
                    className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                    defaultValue="Seu melhor e-mail" 
                    placeholder="Rótulo do campo"
                  />
                </div>
                <div className="w-32">
                  <select className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary">
                    <option value="required" selected>Obrigatório</option>
                    <option value="optional">Opcional</option>
                    <option value="hidden">Oculto</option>
                  </select>
                </div>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Campo: Telefone/WhatsApp</label>
              <div className="flex space-x-4">
                <div className="flex-1">
                  <input 
                    type="text" 
                    className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                    defaultValue="Telefone para contato" 
                    placeholder="Rótulo do campo"
                  />
                </div>
                <div className="w-32">
                  <select className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary">
                    <option value="required">Obrigatório</option>
                    <option value="optional" selected>Opcional</option>
                    <option value="hidden">Oculto</option>
                  </select>
                </div>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Campo: Data do Evento</label>
              <div className="flex space-x-4">
                <div className="flex-1">
                  <input 
                    type="text" 
                    className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                    defaultValue="Data prevista para o casamento" 
                    placeholder="Rótulo do campo"
                  />
                </div>
                <div className="w-32">
                  <select className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary">
                    <option value="required">Obrigatório</option>
                    <option value="optional" selected>Opcional</option>
                    <option value="hidden">Oculto</option>
                  </select>
                </div>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Campo: Mensagem</label>
              <div className="flex space-x-4">
                <div className="flex-1">
                  <input 
                    type="text" 
                    className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                    defaultValue="Sua mensagem" 
                    placeholder="Rótulo do campo"
                  />
                </div>
                <div className="w-32">
                  <select className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary">
                    <option value="required" selected>Obrigatório</option>
                    <option value="optional">Opcional</option>
                    <option value="hidden">Oculto</option>
                  </select>
                </div>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Texto do Botão</label>
              <input 
                type="text" 
                className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                defaultValue="Enviar Mensagem" 
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Mensagem de Agradecimento</label>
              <textarea 
                className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary min-h-[100px]"
                defaultValue="Obrigado por entrar em contato! Sua mensagem foi enviada com sucesso. Responderemos em breve."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 