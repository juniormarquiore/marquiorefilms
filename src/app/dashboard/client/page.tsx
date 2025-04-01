import React from 'react';
import Link from 'next/link';

// Componente de exemplo para o status de um projeto
const ProjectStatusIndicator = ({ status }: { status: string }) => {
  const getStatusColor = () => {
    switch (status) {
      case 'Em andamento':
        return 'bg-yellow-500';
      case 'Concluído':
        return 'bg-green-500';
      case 'Aguardando aprovação':
        return 'bg-blue-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="flex items-center">
      <div className={`w-3 h-3 rounded-full ${getStatusColor()} mr-2`}></div>
      <span>{status}</span>
    </div>
  );
};

// Componente para exibir o progresso da edição
const EditingProgress = ({ progress }: { progress: number }) => {
  return (
    <div className="w-full">
      <div className="flex justify-between mb-1 text-sm">
        <span>Progresso da edição</span>
        <span>{progress}%</span>
      </div>
      <div className="w-full bg-secondary h-2 rounded-full">
        <div 
          className="bg-primary h-2 rounded-full" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default function ClientDashboard() {
  // Dados mockados para demonstração
  const projects = [
    {
      id: 1,
      title: 'Casamento Maria e João',
      date: '15/04/2023',
      status: 'Em andamento',
      progress: 65,
      deadline: '30/06/2023',
      hasPreview: true,
    },
    {
      id: 2,
      title: 'Casamento Ana e Pedro',
      date: '22/05/2023',
      status: 'Aguardando aprovação',
      progress: 90,
      deadline: '15/07/2023',
      hasPreview: true,
    },
    {
      id: 3,
      title: 'Casamento Luciana e Rafael',
      date: '10/03/2023',
      status: 'Concluído',
      progress: 100,
      deadline: '25/05/2023',
      hasPreview: true,
    }
  ];

  return (
    <div className="container-custom py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="title text-center mb-8">Meus Projetos</h1>
        
        {/* Resumo */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-secondary/70 p-6 rounded-lg border border-primary/20">
            <h2 className="text-lg font-semibold mb-1">Projetos Ativos</h2>
            <p className="text-3xl font-bold text-primary">2</p>
          </div>
          <div className="bg-secondary/70 p-6 rounded-lg border border-primary/20">
            <h2 className="text-lg font-semibold mb-1">Entregas Próximas</h2>
            <p className="text-3xl font-bold text-primary">1</p>
          </div>
          <div className="bg-secondary/70 p-6 rounded-lg border border-primary/20">
            <h2 className="text-lg font-semibold mb-1">Projetos Concluídos</h2>
            <p className="text-3xl font-bold text-primary">1</p>
          </div>
        </div>
        
        {/* Lista de projetos */}
        <div className="space-y-6">
          {projects.map((project) => (
            <div key={project.id} className="bg-secondary/70 p-6 rounded-lg border border-primary/20">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h2 className="text-xl font-bold">{project.title}</h2>
                  <p className="text-gray-400">Data do evento: {project.date}</p>
                </div>
                <ProjectStatusIndicator status={project.status} />
              </div>
              
              <EditingProgress progress={project.progress} />
              
              <div className="mt-4 mb-6">
                <p className="text-gray-400">Prazo de entrega: <span className="font-semibold text-white">{project.deadline}</span></p>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {project.hasPreview && (
                  <Link 
                    href={`/dashboard/client/project/${project.id}`}
                    className="btn-primary"
                  >
                    Ver Detalhes
                  </Link>
                )}
                
                <Link 
                  href={`/dashboard/client/contract/${project.id}`}
                  className="bg-secondary text-white px-4 py-2 rounded hover:bg-secondary/80 transition-colors border border-primary/20"
                >
                  Ver Contrato
                </Link>
                
                <Link 
                  href={`/dashboard/client/payment/${project.id}`}
                  className="bg-secondary text-white px-4 py-2 rounded hover:bg-secondary/80 transition-colors border border-primary/20"
                >
                  Pagamentos
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 