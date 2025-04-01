'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const videos = [
  {
    id: 1,
    title: 'Ana & Pedro',
    location: 'Casamento na Praia - Florianópolis',
    thumbnail: '/images/portfolio-1.jpg',
    description: 'Um casamento romântico à beira-mar, capturado com nossa visão cinematográfica única.'
  },
  {
    id: 2,
    title: 'Mariana & Lucas',
    location: 'Casamento no Campo - São Paulo',
    thumbnail: '/images/portfolio-2.jpg',
    description: 'Celebração em meio à natureza, com momentos emocionantes e paisagens deslumbrantes.'
  },
  {
    id: 3,
    title: 'Carolina & Rafael',
    location: 'Casamento Noturno - Rio de Janeiro',
    thumbnail: '/images/portfolio-3.jpg',
    description: 'Uma noite mágica com iluminação especial e momentos inesquecíveis.'
  },
  {
    id: 4,
    title: 'Beatriz & João',
    location: 'Casamento em Fazenda - Minas Gerais',
    thumbnail: '/images/portfolio-4.jpg',
    description: 'Celebração rústica e elegante em um cenário histórico.'
  },
  {
    id: 5,
    title: 'Isabela & Miguel',
    location: 'Casamento na Cidade - São Paulo',
    thumbnail: '/images/portfolio-5.jpg',
    description: 'Uma celebração moderna em um local contemporâneo.'
  },
  {
    id: 6,
    title: 'Laura & Gabriel',
    location: 'Casamento na Serra - Rio de Janeiro',
    thumbnail: '/images/portfolio-6.jpg',
    description: 'Momentos especiais em meio às montanhas e paisagens naturais.'
  }
];

export default function PortfolioPage() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const openModal = (video) => {
    setSelectedVideo(video);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedVideo(null);
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Nosso Portfólio</h1>
        
        <div className="max-w-6xl mx-auto">
          {/* Introdução */}
          <div className="text-center mb-12">
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore nossa coleção de trabalhos e descubra como transformamos momentos especiais 
              em memórias cinematográficas inesquecíveis.
            </p>
          </div>

          {/* Grid de Vídeos */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video) => (
              <div key={video.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover"
                  />
                  <div 
                    className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer"
                    onClick={() => openModal(video)}
                  >
                    <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{video.title}</h3>
                  <p className="text-gray-600 mb-3">{video.location}</p>
                  <p className="text-gray-500 text-sm">{video.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-6">
              Quer transformar seu casamento em uma obra de arte cinematográfica?
            </p>
            <Link
              href="/contato"
              className="inline-block bg-primary text-white px-8 py-3 rounded-md hover:bg-primary-dark transition-colors"
            >
              Entre em Contato
            </Link>
          </div>
        </div>
      </div>

      {/* Modal de Visualização */}
      {showModal && selectedVideo && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity bg-black bg-opacity-75" onClick={closeModal}></div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>

            <div className="inline-block p-6 overflow-hidden text-left align-bottom transition-all transform bg-white shadow-xl rounded-lg sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full">
              <div className="absolute top-0 right-0 pt-4 pr-4">
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:text-gray-500 focus:outline-none"
                  onClick={closeModal}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                      src={`https://www.youtube.com/embed/${selectedVideo.videoUrl}`}
                      title={selectedVideo.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                  <div className="mt-3 sm:mt-5">
                    <h3 className="text-2xl font-medium text-primary">{selectedVideo.title}</h3>
                    <p className="mt-2 text-gray-600">{selectedVideo.location}</p>
                    <p className="mt-2 text-gray-500">{selectedVideo.description}</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-5 sm:mt-6">
                <Link 
                  href="/contato" 
                  className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-primary-dark"
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