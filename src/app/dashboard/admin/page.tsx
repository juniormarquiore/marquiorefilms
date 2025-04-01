import React from 'react';
import Link from 'next/link';

// Componente para o status do projeto
const ProjectStatus = ({ status }: { status: string }) => {
  const getStatusColor = () => {
    switch (status) {
      case 'Concluído':
        return 'bg-green-500/20 text-green-400';
      case 'Em andamento':
        return 'bg-yellow-500/20 text-yellow-400';
      case 'Aguardando início':
        return 'bg-blue-500/20 text-blue-400';
      case 'Atrasado':
        return 'bg-red-500/20 text-red-400';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <div className={`inline-block px-3 py-1 rounded text-sm ${getStatusColor()}`}>
      {status}
    </div>
  );
};

export default function AdminDashboard() {
  // Dados mockados para demonstração
  const projects = [
    {
      id: 1,
      title: 'Casamento Maria e João',
      client: 'Maria Silva e João Santos',
      date: '15/04/2023',
      status: 'Em andamento',
      progress: 65,
      deadline: '30/06/2023',
    },
    {
      id: 2,
      title: 'Casamento Ana e Pedro',
      client: 'Ana Oliveira e Pedro Souza',
      date: '22/05/2023',
      status: 'Aguardando início',
      progress: 0,
      deadline: '15/07/2023',
    },
    {
      id: 3,
      title: 'Casamento Luciana e Rafael',
      client: 'Luciana Martins e Rafael Costa',
      date: '10/03/2023',
      status: 'Concluído',
      progress: 100,
      deadline: '25/05/2023',
    },
    {
      id: 4,
      title: 'Casamento Fernanda e Eduardo',
      client: 'Fernanda Lima e Eduardo Santos',
      date: '05/06/2023',
      status: 'Atrasado',
      progress: 40,
      deadline: '20/07/2023',
    },
  ];

  // Estatísticas
  const stats = {
    total: projects.length,
    inProgress: projects.filter(p => p.status === 'Em andamento').length,
    completed: projects.filter(p => p.status === 'Concluído').length,
    pending: projects.filter(p => p.status === 'Aguardando início').length,
    delayed: projects.filter(p => p.status === 'Atrasado').length,
  };

  return (
    <div className="container-custom py-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="title mb-2">Dashboard do Administrador</h1>
            <p className="text-gray-400">
              Gerencie todos os projetos da Marquiore Films
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex flex-wrap gap-4">
            <Link
              href="/dashboard/admin/site-editor"
              className="bg-secondary text-white px-4 py-2 rounded hover:bg-secondary/80 transition-colors border border-primary/20 flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 mr-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
              </svg>
              Editor do Site
            </Link>
            <Link
              href="/dashboard/admin/site-editor/upload"
              className="bg-secondary text-white px-4 py-2 rounded hover:bg-secondary/80 transition-colors border border-primary/20 flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 mr-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
              </svg>
              Gerenciar Arquivos
            </Link>
            <Link
              href="/dashboard/admin/novo-projeto"
              className="btn-primary flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 mr-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              Novo Projeto
            </Link>
          </div>
        </div>
        
        {/* Estatísticas */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          <div className="bg-secondary/70 p-4 rounded-lg border border-primary/20">
            <h2 className="text-sm font-semibold mb-1 text-gray-400">Total</h2>
            <p className="text-2xl font-bold text-white">{stats.total}</p>
          </div>
          <div className="bg-secondary/70 p-4 rounded-lg border border-primary/20">
            <h2 className="text-sm font-semibold mb-1 text-gray-400">Em andamento</h2>
            <p className="text-2xl font-bold text-yellow-400">{stats.inProgress}</p>
          </div>
          <div className="bg-secondary/70 p-4 rounded-lg border border-primary/20">
            <h2 className="text-sm font-semibold mb-1 text-gray-400">Concluídos</h2>
            <p className="text-2xl font-bold text-green-400">{stats.completed}</p>
          </div>
          <div className="bg-secondary/70 p-4 rounded-lg border border-primary/20">
            <h2 className="text-sm font-semibold mb-1 text-gray-400">Aguardando</h2>
            <p className="text-2xl font-bold text-blue-400">{stats.pending}</p>
          </div>
          <div className="bg-secondary/70 p-4 rounded-lg border border-primary/20">
            <h2 className="text-sm font-semibold mb-1 text-gray-400">Atrasados</h2>
            <p className="text-2xl font-bold text-red-400">{stats.delayed}</p>
          </div>
        </div>
        
        {/* Barra de filtros e pesquisa */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div className="flex space-x-2 mb-4 md:mb-0">
            <select className="bg-secondary border border-gray-700 rounded-md px-3 py-2 text-sm">
              <option value="">Todos os status</option>
              <option value="em-andamento">Em andamento</option>
              <option value="concluido">Concluído</option>
              <option value="aguardando">Aguardando início</option>
              <option value="atrasado">Atrasado</option>
            </select>
            <select className="bg-secondary border border-gray-700 rounded-md px-3 py-2 text-sm">
              <option value="">Ordenar por</option>
              <option value="data-recente">Data (mais recente)</option>
              <option value="data-antiga">Data (mais antiga)</option>
              <option value="prazo-proximo">Prazo (mais próximo)</option>
              <option value="nome">Nome (A-Z)</option>
            </select>
          </div>
          <div className="w-full md:w-64">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar projeto..."
                className="w-full bg-secondary border border-gray-700 rounded-md pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </div>
          </div>
        </div>
        
        {/* Lista de projetos */}
        <div className="bg-secondary/70 rounded-lg border border-primary/20 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-700">
              <thead className="bg-secondary">
                <tr>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Projeto
                  </th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Cliente
                  </th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Data do Evento
                  </th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Progresso
                  </th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Prazo
                  </th>
                  <th scope="col" className="px-6 py-4 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {projects.map((project) => (
                  <tr key={project.id} className="hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium">{project.title}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-300">{project.client}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-300">{project.date}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <ProjectStatus status={project.status} />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-full bg-gray-700 rounded-full h-2 mr-2 w-24">
                          <div
                            className="bg-primary h-2 rounded-full"
                            style={{ width: `${project.progress}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-300">{project.progress}%</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-300">{project.deadline}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex items-center justify-end space-x-2">
                        <Link 
                          href={`/dashboard/admin/projeto/${project.id}`}
                          className="text-primary hover:text-primary/80"
                        >
                          Editar
                        </Link>
                        <span className="text-gray-600">|</span>
                        <Link 
                          href={`/dashboard/admin/projeto/${project.id}/arquivos`}
                          className="text-primary hover:text-primary/80"
                        >
                          Arquivos
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Paginação */}
        <div className="flex items-center justify-between mt-6">
          <div className="text-sm text-gray-400">
            Mostrando <span className="font-medium">1</span> a <span className="font-medium">4</span> de <span className="font-medium">4</span> projetos
          </div>
          <div className="flex items-center space-x-2">
            <button
              className="bg-secondary px-3 py-1 rounded border border-gray-700 text-gray-400 hover:bg-gray-800 transition-colors"
              disabled
            >
              Anterior
            </button>
            <button className="bg-primary/10 px-3 py-1 rounded border border-primary/30 text-primary">
              1
            </button>
            <button
              className="bg-secondary px-3 py-1 rounded border border-gray-700 text-gray-400 hover:bg-gray-800 transition-colors"
              disabled
            >
              Próximo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 