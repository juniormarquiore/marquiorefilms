'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Interfaces para os componentes
interface TextEditorProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  multiline?: boolean;
  height?: string;
}

interface ImageUploaderProps {
  label: string;
  previewUrl: string;
  onChange: (url: string) => void;
}

// Componente para edição de texto
const TextEditor: React.FC<TextEditorProps> = ({ label, value, onChange, multiline = false, height = 'h-32' }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-300 mb-1">
        {label}
      </label>
      {multiline ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${height}`}
        />
      ) : (
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        />
      )}
    </div>
  );
};

// Componente para upload de imagens
const ImageUploader: React.FC<ImageUploaderProps> = ({ label, previewUrl, onChange }) => {
  return (
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-300 mb-1">
        {label}
      </label>
      <div className="flex items-start space-x-4">
        <div className="relative w-32 h-32 bg-gray-800 border border-gray-700 rounded-md overflow-hidden">
          {previewUrl ? (
            <div className="relative w-full h-full">
              <Image
                src={previewUrl}
                alt="Preview"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          ) : (
            <div className="flex items-center justify-center h-full text-gray-400">
              Sem imagem
            </div>
          )}
        </div>
        <div className="flex-1">
          <button
            type="button"
            className="bg-secondary text-white px-4 py-2 rounded hover:bg-secondary/80 transition-colors border border-primary/20 mb-2"
            onClick={() => {
              // Em uma implementação real, isso abriria um selector de arquivos
              const mockUrl = 'https://via.placeholder.com/150';
              onChange(mockUrl);
            }}
          >
            Selecionar Imagem
          </button>
          {previewUrl && (
            <button
              type="button"
              className="text-red-400 hover:text-red-300 text-sm block"
              onClick={() => onChange('')}
            >
              Remover imagem
            </button>
          )}
          <p className="text-xs text-gray-400 mt-2">
            Tamanho recomendado: 1920x1080px, máximo 2MB
          </p>
        </div>
      </div>
    </div>
  );
};

export default function HomeEditorPage() {
  // Estado para cada seção da página
  const [heroSection, setHeroSection] = useState({
    title: 'Marquiore Films',
    subtitle: 'Filmagem de Casamentos',
    description: 'Capturamos emoções, transformamos momentos em lembranças eternas.',
    backgroundImage: 'https://via.placeholder.com/1920x1080',
  });

  const [aboutSection, setAboutSection] = useState({
    title: 'Sobre a Marquiore Films',
    description: 'Fundada por Junior Marquiore, a Marquiore Films conta com 8 anos de experiência na filmagem de casamentos. Nossa equipe se destaca pela capacidade de capturar emoções e criar filmes autênticos que contam a história do casal.',
    imageUrl: 'https://via.placeholder.com/600x400',
  });

  const [servicesSection, setServicesSection] = useState({
    title: 'Nossos Serviços',
    description: 'Oferecemos pacotes personalizados para eternizar o seu dia especial.',
    services: [
      {
        id: 1,
        title: 'Filme do Casamento',
        description: 'Filmagem completa da cerimônia e festa com edição cinematográfica.',
        iconUrl: 'https://via.placeholder.com/64',
      },
      {
        id: 2,
        title: 'Same Day Edit',
        description: 'Edição realizada no mesmo dia para exibição durante a festa.',
        iconUrl: 'https://via.placeholder.com/64',
      },
      {
        id: 3,
        title: 'Ensaio Pré-Wedding',
        description: 'Filmagem em locação especial antes do grande dia.',
        iconUrl: 'https://via.placeholder.com/64',
      },
    ]
  });

  const [testimonialsSection, setTestimonialsSection] = useState({
    title: 'Depoimentos',
    description: 'Veja o que nossos clientes dizem sobre nós.',
    testimonials: [
      {
        id: 1,
        name: 'Ana e Pedro',
        date: 'Maio 2022',
        content: 'O trabalho da Marquiore Films superou todas as nossas expectativas. O filme ficou incrível e conseguiu capturar perfeitamente a essência do nosso dia.',
        imageUrl: 'https://via.placeholder.com/100',
      },
      {
        id: 2,
        name: 'Carolina e Rafael',
        date: 'Outubro 2022',
        content: 'Não poderíamos estar mais felizes com o resultado. Cada vez que assistimos, revivemos cada emoção daquele dia tão especial. Obrigado por eternizar nossos momentos.',
        imageUrl: 'https://via.placeholder.com/100',
      },
    ]
  });

  // Função para salvar as alterações
  const handleSave = () => {
    // Em uma implementação real, enviaria os dados para a API
    console.log('Salvando alterações:', { heroSection, aboutSection, servicesSection, testimonialsSection });
    alert('Alterações salvas com sucesso!');
  };

  return (
    <div className="container-custom py-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <Link href="/dashboard/admin/site-editor" className="flex items-center text-primary hover:underline">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 mr-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Voltar para Editor do Site
          </Link>
          <button
            onClick={handleSave}
            className="bg-primary hover:bg-primary/90 text-secondary px-4 py-2 rounded-md transition-colors"
          >
            Salvar Alterações
          </button>
        </div>
        
        <h1 className="title mb-8">Editar Página Inicial</h1>
        
        {/* Navegação entre seções */}
        <div className="flex overflow-x-auto space-x-4 pb-4 mb-6">
          <a href="#hero" className="text-primary flex-shrink-0 px-4 py-2 bg-primary/10 rounded-md hover:bg-primary/20 transition-colors">
            Banner Principal
          </a>
          <a href="#about" className="text-primary flex-shrink-0 px-4 py-2 bg-primary/10 rounded-md hover:bg-primary/20 transition-colors">
            Seção Sobre
          </a>
          <a href="#services" className="text-primary flex-shrink-0 px-4 py-2 bg-primary/10 rounded-md hover:bg-primary/20 transition-colors">
            Serviços
          </a>
          <a href="#testimonials" className="text-primary flex-shrink-0 px-4 py-2 bg-primary/10 rounded-md hover:bg-primary/20 transition-colors">
            Depoimentos
          </a>
        </div>
        
        {/* Seção de Banner Principal */}
        <section id="hero" className="bg-secondary/70 p-6 rounded-lg border border-primary/20 mb-8">
          <h2 className="text-xl font-bold mb-6 border-b border-primary/30 pb-2">Banner Principal</h2>
          
          <TextEditor 
            label="Título" 
            value={heroSection.title} 
            onChange={(value) => setHeroSection({...heroSection, title: value})} 
          />
          
          <TextEditor 
            label="Subtítulo" 
            value={heroSection.subtitle} 
            onChange={(value) => setHeroSection({...heroSection, subtitle: value})} 
          />
          
          <TextEditor 
            label="Descrição" 
            value={heroSection.description} 
            onChange={(value) => setHeroSection({...heroSection, description: value})} 
            multiline 
            height="h-20"
          />
          
          <ImageUploader 
            label="Imagem de Fundo" 
            previewUrl={heroSection.backgroundImage} 
            onChange={(url) => setHeroSection({...heroSection, backgroundImage: url})} 
          />
          
          <div className="mt-4 p-4 bg-gray-800 rounded-md">
            <h3 className="text-sm font-medium text-gray-300 mb-2">Pré-visualização</h3>
            <div className="relative h-40 rounded-md overflow-hidden">
              {heroSection.backgroundImage && (
                <div className="absolute inset-0">
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
                  <Image
                    src={heroSection.backgroundImage}
                    alt="Banner Background"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              )}
              <div className="relative z-10 h-full flex flex-col justify-center p-4">
                <h2 className="text-2xl font-bold text-white">{heroSection.title}</h2>
                <p className="text-lg text-gray-200">{heroSection.subtitle}</p>
                <p className="text-sm text-gray-300 mt-2">{heroSection.description}</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Seção Sobre */}
        <section id="about" className="bg-secondary/70 p-6 rounded-lg border border-primary/20 mb-8">
          <h2 className="text-xl font-bold mb-6 border-b border-primary/30 pb-2">Seção Sobre</h2>
          
          <TextEditor 
            label="Título" 
            value={aboutSection.title} 
            onChange={(value) => setAboutSection({...aboutSection, title: value})} 
          />
          
          <TextEditor 
            label="Descrição" 
            value={aboutSection.description} 
            onChange={(value) => setAboutSection({...aboutSection, description: value})} 
            multiline 
          />
          
          <ImageUploader 
            label="Imagem" 
            previewUrl={aboutSection.imageUrl} 
            onChange={(url) => setAboutSection({...aboutSection, imageUrl: url})} 
          />
        </section>
        
        {/* Seção Serviços */}
        <section id="services" className="bg-secondary/70 p-6 rounded-lg border border-primary/20 mb-8">
          <h2 className="text-xl font-bold mb-6 border-b border-primary/30 pb-2">Seção Serviços</h2>
          
          <TextEditor 
            label="Título" 
            value={servicesSection.title} 
            onChange={(value) => setServicesSection({...servicesSection, title: value})} 
          />
          
          <TextEditor 
            label="Descrição" 
            value={servicesSection.description} 
            onChange={(value) => setServicesSection({...servicesSection, description: value})} 
            multiline 
            height="h-20"
          />
          
          <h3 className="text-lg font-medium text-gray-200 mt-6 mb-4">Serviços</h3>
          
          {servicesSection.services.map((service, index) => (
            <div key={service.id} className="border border-gray-700 rounded-md p-4 mb-4">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-medium text-gray-200">Serviço {index + 1}</h4>
                <button 
                  className="text-red-400 hover:text-red-300 text-sm"
                  onClick={() => {
                    const newServices = [...servicesSection.services];
                    newServices.splice(index, 1);
                    setServicesSection({...servicesSection, services: newServices});
                  }}
                >
                  Remover
                </button>
              </div>
              
              <TextEditor 
                label="Título" 
                value={service.title} 
                onChange={(value) => {
                  const newServices = [...servicesSection.services];
                  newServices[index] = {...service, title: value};
                  setServicesSection({...servicesSection, services: newServices});
                }} 
              />
              
              <TextEditor 
                label="Descrição" 
                value={service.description} 
                onChange={(value) => {
                  const newServices = [...servicesSection.services];
                  newServices[index] = {...service, description: value};
                  setServicesSection({...servicesSection, services: newServices});
                }} 
                multiline 
                height="h-16"
              />
              
              <ImageUploader 
                label="Ícone" 
                previewUrl={service.iconUrl} 
                onChange={(url) => {
                  const newServices = [...servicesSection.services];
                  newServices[index] = {...service, iconUrl: url};
                  setServicesSection({...servicesSection, services: newServices});
                }} 
              />
            </div>
          ))}
          
          <button 
            className="bg-primary/20 text-primary px-4 py-2 rounded hover:bg-primary/30 transition-colors w-full"
            onClick={() => {
              const newService = {
                id: Date.now(),
                title: 'Novo Serviço',
                description: 'Descrição do novo serviço.',
                iconUrl: '',
              };
              setServicesSection({
                ...servicesSection, 
                services: [...servicesSection.services, newService]
              });
            }}
          >
            + Adicionar Novo Serviço
          </button>
        </section>
        
        {/* Seção Depoimentos */}
        <section id="testimonials" className="bg-secondary/70 p-6 rounded-lg border border-primary/20 mb-8">
          <h2 className="text-xl font-bold mb-6 border-b border-primary/30 pb-2">Seção Depoimentos</h2>
          
          <TextEditor 
            label="Título" 
            value={testimonialsSection.title} 
            onChange={(value) => setTestimonialsSection({...testimonialsSection, title: value})} 
          />
          
          <TextEditor 
            label="Descrição" 
            value={testimonialsSection.description} 
            onChange={(value) => setTestimonialsSection({...testimonialsSection, description: value})} 
            multiline 
            height="h-20"
          />
          
          <h3 className="text-lg font-medium text-gray-200 mt-6 mb-4">Depoimentos</h3>
          
          {testimonialsSection.testimonials.map((testimonial, index) => (
            <div key={testimonial.id} className="border border-gray-700 rounded-md p-4 mb-4">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-medium text-gray-200">Depoimento {index + 1}</h4>
                <button 
                  className="text-red-400 hover:text-red-300 text-sm"
                  onClick={() => {
                    const newTestimonials = [...testimonialsSection.testimonials];
                    newTestimonials.splice(index, 1);
                    setTestimonialsSection({...testimonialsSection, testimonials: newTestimonials});
                  }}
                >
                  Remover
                </button>
              </div>
              
              <TextEditor 
                label="Nome" 
                value={testimonial.name} 
                onChange={(value) => {
                  const newTestimonials = [...testimonialsSection.testimonials];
                  newTestimonials[index] = {...testimonial, name: value};
                  setTestimonialsSection({...testimonialsSection, testimonials: newTestimonials});
                }} 
              />
              
              <TextEditor 
                label="Data" 
                value={testimonial.date} 
                onChange={(value) => {
                  const newTestimonials = [...testimonialsSection.testimonials];
                  newTestimonials[index] = {...testimonial, date: value};
                  setTestimonialsSection({...testimonialsSection, testimonials: newTestimonials});
                }} 
              />
              
              <TextEditor 
                label="Conteúdo" 
                value={testimonial.content} 
                onChange={(value) => {
                  const newTestimonials = [...testimonialsSection.testimonials];
                  newTestimonials[index] = {...testimonial, content: value};
                  setTestimonialsSection({...testimonialsSection, testimonials: newTestimonials});
                }} 
                multiline 
              />
              
              <ImageUploader 
                label="Foto do Cliente" 
                previewUrl={testimonial.imageUrl} 
                onChange={(url) => {
                  const newTestimonials = [...testimonialsSection.testimonials];
                  newTestimonials[index] = {...testimonial, imageUrl: url};
                  setTestimonialsSection({...testimonialsSection, testimonials: newTestimonials});
                }} 
              />
            </div>
          ))}
          
          <button 
            className="bg-primary/20 text-primary px-4 py-2 rounded hover:bg-primary/30 transition-colors w-full"
            onClick={() => {
              const newTestimonial = {
                id: Date.now(),
                name: 'Nome do Cliente',
                date: 'Mês Ano',
                content: 'Depoimento do cliente sobre o serviço prestado.',
                imageUrl: '',
              };
              setTestimonialsSection({
                ...testimonialsSection, 
                testimonials: [...testimonialsSection.testimonials, newTestimonial]
              });
            }}
          >
            + Adicionar Novo Depoimento
          </button>
        </section>
        
        <div className="flex justify-end">
          <button
            onClick={handleSave}
            className="bg-primary hover:bg-primary/90 text-secondary px-6 py-3 rounded-md transition-colors"
          >
            Salvar Todas as Alterações
          </button>
        </div>
      </div>
    </div>
  );
} 