'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTestimonialsStore, Testimonial } from '@/store/testimonials';

export default function TestimonialsEditorPage() {
  const { 
    testimonials, 
    isLoading, 
    error, 
    fetchTestimonials, 
    addTestimonial, 
    updateTestimonial, 
    deleteTestimonial,
    toggleDisplay
  } = useTestimonialsStore();
  
  // Estado para novo depoimento
  const [newTestimonial, setNewTestimonial] = useState({
    coupleName: '',
    eventDate: '',
    content: '',
    location: '',
    rating: 5,
    photoUrl: '',
    isDisplayed: true,
  });
  
  // Estado para o modal de adição
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  
  useEffect(() => {
    // Carrega os depoimentos quando o componente é montado
    fetchTestimonials();
  }, [fetchTestimonials]);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewTestimonial(prev => ({ ...prev, [name]: value }));
  };
  
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setNewTestimonial(prev => ({ ...prev, [name]: checked }));
  };
  
  const handleAddTestimonial = async () => {
    // Validação simples
    if (!newTestimonial.coupleName || !newTestimonial.eventDate || !newTestimonial.content) {
      alert('Por favor, preencha todos os campos obrigatórios');
      return;
    }
    
    await addTestimonial({
      coupleName: newTestimonial.coupleName,
      eventDate: newTestimonial.eventDate,
      content: newTestimonial.content,
      location: newTestimonial.location || null,
      rating: Number(newTestimonial.rating),
      photoUrl: newTestimonial.photoUrl || null,
      isDisplayed: newTestimonial.isDisplayed
    });
    
    // Limpa o formulário e fecha o modal
    setNewTestimonial({
      coupleName: '',
      eventDate: '',
      content: '',
      location: '',
      rating: 5,
      photoUrl: '',
      isDisplayed: true,
    });
    setIsAddModalOpen(false);
  };
  
  const handleUpdateTestimonial = async (id: number, field: string, value: string | number | boolean) => {
    await updateTestimonial(id, { [field]: value });
  };
  
  const handleDeleteTestimonial = async (id: number) => {
    if (window.confirm('Tem certeza que deseja excluir este depoimento?')) {
      await deleteTestimonial(id);
    }
  };
  
  return (
    <div className="container-custom py-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="title mb-2">Editor de Depoimentos</h1>
            <p className="text-gray-400">
              Gerencie avaliações e depoimentos de clientes
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
        
        {error && (
          <div className="bg-red-500/20 border border-red-600 text-red-200 px-4 py-3 rounded mb-6">
            {error}
          </div>
        )}
        
        {/* Configurações de Depoimentos */}
        <div className="bg-secondary/70 p-6 rounded-lg border border-primary/20 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Configurações de Depoimentos</h2>
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
                defaultValue="O Que Nossos Clientes Dizem" 
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Subtítulo</label>
              <input 
                type="text" 
                className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                defaultValue="Depoimentos de casais que confiaram em nosso trabalho" 
              />
            </div>
          </div>
          
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-300 mb-2">Descrição</label>
            <textarea 
              className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary min-h-[100px]"
              defaultValue="Veja o que dizem os casais que escolheram a Marquiore Films para registrar os momentos mais especiais de suas vidas. Trabalhamos incansavelmente para superar expectativas e criar memórias inesquecíveis." 
            />
          </div>
        </div>
        
        {/* Gerenciamento de Depoimentos */}
        <div className="bg-secondary/70 p-6 rounded-lg border border-primary/20 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Depoimentos de Clientes</h2>
            <button 
              onClick={() => setIsAddModalOpen(true)}
              className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/80 transition-colors"
            >
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                Adicionar Depoimento
              </div>
            </button>
          </div>
          
          {isLoading && (
            <div className="text-center py-8">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
              <p className="mt-2 text-gray-400">Carregando depoimentos...</p>
            </div>
          )}
          
          {!isLoading && testimonials.length === 0 && (
            <div className="text-center py-8">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 mx-auto text-gray-500 mb-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
              </svg>
              <p className="text-gray-400">Nenhum depoimento encontrado</p>
            </div>
          )}
          
          {!isLoading && testimonials.length > 0 && (
            <div className="space-y-8">
              {testimonials.map(testimonial => (
                <div key={testimonial.id} className="bg-gray-800/50 p-5 rounded-lg border border-gray-700">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-full md:w-1/4">
                      <div className="relative h-48 w-full">
                        {testimonial.photoUrl ? (
                          <Image 
                            src={testimonial.photoUrl} 
                            alt={`Foto do casal ${testimonial.coupleName}`}
                            fill
                            className="object-cover rounded-lg"
                          />
                        ) : (
                          <div className="h-full w-full bg-gray-700 rounded-lg flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-gray-500">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </svg>
                          </div>
                        )}
                      </div>
                      
                      <button className="w-full mt-3 bg-gray-700 hover:bg-gray-600 text-gray-300 px-4 py-1 rounded-md text-sm">
                        Trocar Foto
                      </button>
                    </div>
                    
                    <div className="w-full md:w-3/4 space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">Nome do Casal</label>
                          <input 
                            type="text" 
                            className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                            value={testimonial.coupleName}
                            onChange={(e) => handleUpdateTestimonial(testimonial.id, 'coupleName', e.target.value)}
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">Data do Evento</label>
                          <input 
                            type="date" 
                            className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                            value={testimonial.eventDate}
                            onChange={(e) => handleUpdateTestimonial(testimonial.id, 'eventDate', e.target.value)}
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Depoimento</label>
                        <textarea 
                          className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary min-h-[120px]"
                          value={testimonial.content}
                          onChange={(e) => handleUpdateTestimonial(testimonial.id, 'content', e.target.value)}
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">Avaliação (1-5 estrelas)</label>
                          <select 
                            className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                            value={testimonial.rating}
                            onChange={(e) => handleUpdateTestimonial(testimonial.id, 'rating', Number(e.target.value))}
                          >
                            <option value="5">5 estrelas</option>
                            <option value="4">4 estrelas</option>
                            <option value="3">3 estrelas</option>
                            <option value="2">2 estrelas</option>
                            <option value="1">1 estrela</option>
                          </select>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">Localização</label>
                          <input 
                            type="text" 
                            className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                            value={testimonial.location || ''}
                            onChange={(e) => handleUpdateTestimonial(testimonial.id, 'location', e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between mt-6">
                    <label className="inline-flex items-center">
                      <input 
                        type="checkbox" 
                        className="form-checkbox h-5 w-5 text-primary" 
                        checked={testimonial.isDisplayed}
                        onChange={() => toggleDisplay(testimonial.id)}
                      />
                      <span className="ml-2 text-gray-300">Exibir no site</span>
                    </label>
                    
                    <button 
                      className="text-red-400 hover:text-red-300 flex items-center"
                      onClick={() => handleDeleteTestimonial(testimonial.id)}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                      </svg>
                      Remover
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      
      {/* Modal para adicionar novo depoimento */}
      {isAddModalOpen && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-gray-800 rounded-lg max-w-2xl w-full p-6 border border-gray-700 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Adicionar Depoimento</h2>
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="text-gray-400 hover:text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Nome do Casal *</label>
                  <input 
                    type="text" 
                    name="coupleName"
                    className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                    value={newTestimonial.coupleName}
                    onChange={handleInputChange}
                    placeholder="Ex: Maria & João"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Data do Evento *</label>
                  <input 
                    type="date" 
                    name="eventDate"
                    className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                    value={newTestimonial.eventDate}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Depoimento *</label>
                <textarea 
                  name="content"
                  className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary min-h-[120px]"
                  value={newTestimonial.content}
                  onChange={handleInputChange}
                  placeholder="Digite o depoimento do casal..."
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Avaliação (1-5 estrelas)</label>
                  <select 
                    name="rating"
                    className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                    value={newTestimonial.rating}
                    onChange={handleInputChange}
                  >
                    <option value="5">5 estrelas</option>
                    <option value="4">4 estrelas</option>
                    <option value="3">3 estrelas</option>
                    <option value="2">2 estrelas</option>
                    <option value="1">1 estrela</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Localização</label>
                  <input 
                    type="text" 
                    name="location"
                    className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                    value={newTestimonial.location}
                    onChange={handleInputChange}
                    placeholder="Ex: Florianópolis, SC"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">URL da Foto (opcional)</label>
                <input 
                  type="text" 
                  name="photoUrl"
                  className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                  value={newTestimonial.photoUrl}
                  onChange={handleInputChange}
                  placeholder="https://example.com/foto-casal.jpg"
                />
                <p className="mt-1 text-xs text-gray-400">Link para uma foto do casal (recomendado: formato quadrado)</p>
              </div>
              
              <div className="flex items-center mt-2">
                <input 
                  type="checkbox" 
                  name="isDisplayed"
                  id="is-displayed" 
                  className="form-checkbox h-5 w-5 text-primary" 
                  checked={newTestimonial.isDisplayed}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="is-displayed" className="ml-2 text-gray-300">Exibir no site</label>
              </div>
            </div>
            
            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={handleAddTestimonial}
                className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/80 transition-colors"
                disabled={isLoading}
              >
                {isLoading ? 'Adicionando...' : 'Adicionar Depoimento'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 