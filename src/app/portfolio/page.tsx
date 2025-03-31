'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const portfolioItems = [
  {
    id: 1,
    title: 'Ana & Pedro',
    description: 'Casamento na Praia - Florianópolis',
    imageUrl: '/images/portfolio/casamento1.jpg', // Substitua pelo caminho da sua imagem real
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // Substitua pelo link real do vídeo
  },
  {
    id: 2,
    title: 'Mariana & Lucas',
    description: 'Casamento no Campo - São Paulo',
    imageUrl: '/images/portfolio/casamento2.jpg', // Substitua pelo caminho da sua imagem real
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // Substitua pelo link real do vídeo
  },
  {
    id: 3,
    title: 'Carolina & Rafael',
    description: 'Casamento Noturno - Rio de Janeiro',
    imageUrl: '/images/portfolio/casamento3.jpg', // Substitua pelo caminho da sua imagem real
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // Substitua pelo link real do vídeo
  },
  // Adicione mais itens conforme necessário
];

export default function Portfolio() {
  const [selectedItem, setSelectedItem] = useState<typeof portfolioItems[0] | null>(null);
  const [showModal, setShowModal] = useState(false);

  const openModal = (item: typeof portfolioItems[0]) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-secondary pt-24 pb-16">
      {/* Header com estilo artístico */}
      <div className="container-custom mb-12 relative">
        <div className="relative text-center z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-serif">Nosso Portfólio</h1>
          <div className="h-px w-40 bg-primary/50 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Explore nossa coleção de obras cinematográficas e deixe-se inspirar pela magia que podemos criar no seu grande dia. Cada filme é uma obra de arte única, contando histórias de amor de forma emocionante e atemporal.
          </p>
        </div>
        
        <div className="absolute -top-10 right-10 w-32 h-32 opacity-10 bg-contain bg-no-repeat hidden md:block"
          style={{ backgroundImage: "url('https://static.vecteezy.com/system/resources/previews/024/043/840/non_2x/the-creation-of-adam-michelangelo-hand-illustration-ai-generated-free-png.png')" }}>
        </div>
      </div>
      
      {/* Seção de PDF e Informações */}
      <div className="container-custom mb-16">
        <div className="bg-black/50 p-8 rounded-lg backdrop-blur-sm border border-primary/10">
          <h2 className="text-2xl font-bold text-primary mb-6 font-serif">Informações Detalhadas</h2>
          <p className="text-gray-300 mb-6">
            Baixe nosso catálogo completo com todas as informações sobre nossos pacotes, processos e trabalhos anteriores.
          </p>
          
          <div className="flex flex-col md:flex-row gap-6">
            <div className="bg-gray-900/80 p-6 rounded-lg flex-1">
              <h3 className="text-xl font-medium text-primary mb-4">Nosso Catálogo</h3>
              <p className="text-gray-400 mb-4">
                PDF com detalhes completos sobre nossos serviços, preços e informações importantes para o seu grande dia.
              </p>
              <a 
                href="/docs/catalogo-marquiore.pdf" 
                target="_blank"
                className="inline-flex items-center text-primary hover:text-primary/80"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Baixar PDF do Catálogo
              </a>
            </div>
            
            <div className="bg-gray-900/80 p-6 rounded-lg flex-1">
              <h3 className="text-xl font-medium text-primary mb-4">Informações para Contratação</h3>
              <p className="text-gray-400 mb-4">
                Documento com informações essenciais para o processo de contratação e preparação para o seu evento.
              </p>
              <a 
                href="/docs/informacoes-contratacao.pdf" 
                target="_blank"
                className="inline-flex items-center text-primary hover:text-primary/80"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Baixar PDF de Informações
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Galeria de Portfólio */}
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <div key={item.id} className="group cursor-pointer" onClick={() => openModal(item)}>
              <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden relative mb-4">
                {/* Coloque aqui sua imagem real */}
                <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>
              <h3 className="text-xl font-medium text-primary group-hover:text-primary/80 transition-colors">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
        
        {/* Seção para adicionar mais imagens/vídeos */}
        <div className="mt-16 text-center">
          <Link 
            href="/contrato" 
            className="bg-primary text-secondary px-6 py-3 rounded-md hover:bg-primary/90 transition-all inline-flex items-center"
          >
            <span>Quero um Filme Assim</span>
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Modal de Visualização */}
      {showModal && selectedItem && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity bg-black bg-opacity-75" onClick={closeModal}></div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>

            <div className="inline-block p-6 overflow-hidden text-left align-bottom transition-all transform bg-secondary shadow-xl rounded-lg sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full">
              <div className="absolute top-0 right-0 pt-4 pr-4">
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:text-white focus:outline-none"
                  onClick={closeModal}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>

              <div className="sm:flex sm:items-start">
                <div className="w-full">
                  <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden mb-4">
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${selectedItem.videoUrl.split('v=')[1]}`}
                      title={selectedItem.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                  <div className="mt-3 sm:mt-5">
                    <h3 className="text-2xl font-medium text-primary">{selectedItem.title}</h3>
                    <p className="mt-2 text-gray-400">{selectedItem.description}</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-5 sm:mt-6">
                <Link 
                  href="/contato" 
                  className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-secondary bg-primary rounded-md hover:bg-primary/90"
                >
                  Quero um filme como este para meu casamento
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 