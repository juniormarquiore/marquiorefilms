import React from 'react';
import Link from 'next/link';

// Componente para exibir as etapas de edição
const EditingStage = ({ 
  title, 
  description, 
  isCompleted, 
  isActive 
}: { 
  title: string; 
  description: string; 
  isCompleted: boolean; 
  isActive: boolean;
}) => {
  return (
    <div className={`p-4 rounded-lg border ${
      isActive 
        ? 'border-primary bg-primary/10' 
        : isCompleted 
          ? 'border-green-500/30 bg-green-500/5' 
          : 'border-gray-500/30 bg-secondary/30'
    }`}>
      <div className="flex items-center mb-2">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
          isCompleted 
            ? 'bg-green-500 text-black' 
            : isActive 
              ? 'bg-primary text-white' 
              : 'bg-gray-700 text-gray-400'
        }`}>
          {isCompleted ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          ) : (
            <span>{isActive ? '●' : '○'}</span>
          )}
        </div>
        <h3 className={`font-bold ${
          isActive 
            ? 'text-primary' 
            : isCompleted 
              ? 'text-green-400' 
              : 'text-gray-400'
        }`}>
          {title}
        </h3>
      </div>
      <p className="ml-11 text-gray-400 text-sm">{description}</p>
    </div>
  );
};

export default function ProjectDetails({ params }: { params: { id: string } }) {
  // Dados mockados para demonstração
  const project = {
    id: parseInt(params.id),
    title: 'Casamento Maria e João',
    date: '15/04/2023',
    status: 'Em andamento',
    progress: 65,
    deadline: '30/06/2023',
    description: 'Filmagem do casamento realizado no Sítio Santa Maria em Mairiporã.',
    editingStages: [
      {
        id: 1,
        title: 'Importação',
        description: 'Importação e organização do material bruto',
        isCompleted: true,
        isActive: false,
      },
      {
        id: 2,
        title: 'Seleção e Corte',
        description: 'Seleção das melhores cenas e montagem inicial',
        isCompleted: true,
        isActive: false,
      },
      {
        id: 3,
        title: 'Colorização',
        description: 'Ajustes de cor e tonalidade para estética cinematográfica',
        isCompleted: false,
        isActive: true,
      },
      {
        id: 4,
        title: 'Edição de Áudio',
        description: 'Mixagem de áudio, adição de trilha sonora e efeitos',
        isCompleted: false,
        isActive: false,
      },
      {
        id: 5,
        title: 'Finalização',
        description: 'Ajustes finais, renderização em alta definição',
        isCompleted: false,
        isActive: false,
      },
    ],
    previewVideos: [
      {
        id: 1,
        title: 'Primeira Prévia - Cerimônia',
        date: '02/05/2023',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      },
      {
        id: 2,
        title: 'Segunda Prévia - Recepção',
        date: '15/05/2023',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      }
    ],
    musicOptions: [
      {
        id: 1,
        title: 'Perfect - Ed Sheeran',
        selected: true,
      },
      {
        id: 2,
        title: 'Can\'t Help Falling in Love - Elvis Presley',
        selected: false,
      },
      {
        id: 3,
        title: 'A Thousand Years - Christina Perri',
        selected: false,
      }
    ]
  };

  return (
    <div className="container-custom py-12">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <Link href="/dashboard/client" className="flex items-center text-primary hover:underline">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 mr-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Voltar para Dashboard
          </Link>
          <div className="text-sm bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded">
            Em andamento
          </div>
        </div>
        
        <h1 className="title mb-2">{project.title}</h1>
        <p className="text-gray-400 mb-8">{project.description}</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="bg-secondary/70 p-6 rounded-lg border border-primary/20 mb-8">
              <h2 className="text-xl font-bold mb-6">Pré-visualização</h2>
              
              {project.previewVideos.length > 0 ? (
                <div className="space-y-6">
                  {project.previewVideos.map(video => (
                    <div key={video.id}>
                      <h3 className="font-semibold mb-2">{video.title}</h3>
                      <p className="text-gray-400 text-sm mb-3">Adicionado em: {video.date}</p>
                      <div className="aspect-video rounded overflow-hidden bg-black">
                        <iframe
                          className="w-full h-full"
                          src={video.url}
                          title={video.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-400">Ainda não há prévias disponíveis para este projeto.</p>
              )}
            </div>
            
            <div className="bg-secondary/70 p-6 rounded-lg border border-primary/20">
              <h2 className="text-xl font-bold mb-6">Escolha da Trilha Sonora</h2>
              
              <div className="space-y-3">
                {project.musicOptions.map(option => (
                  <div key={option.id} className={`p-3 rounded-lg border ${
                    option.selected 
                      ? 'border-primary bg-primary/10' 
                      : 'border-gray-700 bg-secondary/50'
                  }`}>
                    <div className="flex items-center">
                      <div className={`w-5 h-5 rounded-full border ${
                        option.selected 
                          ? 'border-primary' 
                          : 'border-gray-600'
                      } flex items-center justify-center mr-3`}>
                        {option.selected && (
                          <div className="w-3 h-3 rounded-full bg-primary"></div>
                        )}
                      </div>
                      <span className={option.selected ? 'text-primary' : ''}>{option.title}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6">
                <button className="btn-primary">
                  Salvar Escolha
                </button>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-secondary/70 p-6 rounded-lg border border-primary/20">
              <h2 className="text-xl font-bold mb-6">Informações</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm text-gray-400">Data do Evento</h3>
                  <p>{project.date}</p>
                </div>
                <div>
                  <h3 className="text-sm text-gray-400">Prazo de Entrega</h3>
                  <p>{project.deadline}</p>
                </div>
                <div>
                  <h3 className="text-sm text-gray-400">Progresso</h3>
                  <p>{project.progress}%</p>
                </div>
              </div>
            </div>
            
            <div className="bg-secondary/70 p-6 rounded-lg border border-primary/20">
              <h2 className="text-xl font-bold mb-6">Etapas da Edição</h2>
              
              <div className="space-y-3">
                {project.editingStages.map(stage => (
                  <EditingStage 
                    key={stage.id}
                    title={stage.title}
                    description={stage.description}
                    isCompleted={stage.isCompleted}
                    isActive={stage.isActive}
                  />
                ))}
              </div>
            </div>
            
            <div className="bg-secondary/70 p-6 rounded-lg border border-primary/20">
              <h2 className="text-xl font-bold mb-6">Ações</h2>
              
              <div className="space-y-3">
                <button className="w-full btn-primary">
                  Solicitar Ajustes
                </button>
                <Link 
                  href={`/dashboard/client/contract/${project.id}`}
                  className="block w-full text-center bg-secondary text-white px-4 py-2 rounded hover:bg-secondary/80 transition-colors border border-primary/20"
                >
                  Ver Contrato
                </Link>
                <Link 
                  href={`/dashboard/client/payment/${project.id}`}
                  className="block w-full text-center bg-secondary text-white px-4 py-2 rounded hover:bg-secondary/80 transition-colors border border-primary/20"
                >
                  Pagamentos
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 