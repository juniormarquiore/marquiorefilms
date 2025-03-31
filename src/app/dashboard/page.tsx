'use client';

import { useState } from 'react';
import Link from 'next/link';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import ProjectProgress from '@/components/dashboard/ProjectProgress';
import VideoPreview from '@/components/dashboard/VideoPreview';
import MusicSelection from '@/components/dashboard/MusicSelection';

// Dados simulados para demonstração
const projectData = {
  id: '123456',
  title: 'Casamento Ana & João',
  date: '2023-11-15',
  status: 'em_progresso', // 'pendente', 'em_progresso', 'finalizado'
  progress: 60, // porcentagem de conclusão
  deadlineEstimate: '2023-12-15',
  previews: [
    { id: '1', title: 'Cerimônia - Preview', url: '#', date: '2023-11-25', approved: true },
    { id: '2', title: 'Festa - Preview', url: '#', date: '2023-12-01', approved: false },
  ],
  musicOptions: [
    { id: '1', title: 'Perfect - Ed Sheeran', selected: true },
    { id: '2', title: 'Can\'t Help Falling in Love - Elvis Presley', selected: false },
    { id: '3', title: 'All of Me - John Legend', selected: false },
    { id: '4', title: 'Thinking Out Loud - Ed Sheeran', selected: false },
  ],
  payments: [
    { id: '1', description: 'Entrada', amount: 'R$ 1.500,00', date: '2023-10-15', status: 'pago' },
    { id: '2', description: 'Parcela 1', amount: 'R$ 1.000,00', date: '2023-11-15', status: 'pago' },
    { id: '3', description: 'Parcela 2', amount: 'R$ 1.000,00', date: '2023-12-15', status: 'pendente' },
  ],
};

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('progresso');

  return (
    <div className="min-h-screen bg-secondary flex flex-col md:flex-row">
      <DashboardSidebar activeItem="dashboard" />
      
      <main className="flex-1 p-6 md:p-10 mt-16 md:mt-0 md:ml-64">
        <div className="mb-8">
          <h1 className="title">Dashboard</h1>
          <p className="text-gray-300">Bem-vindo ao seu painel de controle, acompanhe seu projeto aqui.</p>
        </div>

        <div className="bg-gray-900 rounded-lg p-4 mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-2xl font-semibold text-primary">{projectData.title}</h2>
              <p className="text-gray-400">Data do evento: {new Date(projectData.date).toLocaleDateString('pt-BR')}</p>
            </div>
            <div className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">
              {projectData.status === 'pendente' && 'Pendente'}
              {projectData.status === 'em_progresso' && 'Em Progresso'}
              {projectData.status === 'finalizado' && 'Finalizado'}
            </div>
          </div>

          <div className="border-t border-gray-800 pt-4">
            <div className="flex flex-wrap mb-4">
              <button
                onClick={() => setActiveTab('progresso')}
                className={`mr-4 pb-2 ${
                  activeTab === 'progresso'
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-gray-400 hover:text-gray-300'
                }`}
              >
                Progresso
              </button>
              <button
                onClick={() => setActiveTab('previews')}
                className={`mr-4 pb-2 ${
                  activeTab === 'previews'
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-gray-400 hover:text-gray-300'
                }`}
              >
                Prévias
              </button>
              <button
                onClick={() => setActiveTab('musicas')}
                className={`mr-4 pb-2 ${
                  activeTab === 'musicas'
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-gray-400 hover:text-gray-300'
                }`}
              >
                Seleção de Músicas
              </button>
              <button
                onClick={() => setActiveTab('pagamentos')}
                className={`mr-4 pb-2 ${
                  activeTab === 'pagamentos'
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-gray-400 hover:text-gray-300'
                }`}
              >
                Pagamentos
              </button>
            </div>

            <div className="mt-6">
              {activeTab === 'progresso' && (
                <ProjectProgress 
                  progress={projectData.progress} 
                  deadline={projectData.deadlineEstimate} 
                />
              )}
              
              {activeTab === 'previews' && (
                <div className="space-y-6">
                  <h3 className="subtitle text-gray-200">Prévias do Vídeo</h3>
                  {projectData.previews.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {projectData.previews.map(preview => (
                        <VideoPreview key={preview.id} preview={preview} />
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-400">Nenhuma prévia disponível no momento.</p>
                  )}
                </div>
              )}
              
              {activeTab === 'musicas' && (
                <MusicSelection musicOptions={projectData.musicOptions} />
              )}
              
              {activeTab === 'pagamentos' && (
                <div className="space-y-6">
                  <h3 className="subtitle text-gray-200">Controle de Pagamentos</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-800">
                      <thead>
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                            Descrição
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                            Valor
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                            Data
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                            Status
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-800">
                        {projectData.payments.map(payment => (
                          <tr key={payment.id}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                              {payment.description}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                              {payment.amount}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                              {new Date(payment.date).toLocaleDateString('pt-BR')}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                payment.status === 'pago' 
                                  ? 'bg-green-900/30 text-green-400' 
                                  : 'bg-yellow-900/30 text-yellow-400'
                              }`}>
                                {payment.status === 'pago' ? 'Pago' : 'Pendente'}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="bg-gray-900 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-semibold text-primary mb-4">Precisa de ajuda?</h3>
          <p className="text-gray-300 mb-4">
            Tem alguma dúvida ou gostaria de fazer alguma solicitação específica para o seu vídeo?
          </p>
          <Link 
            href="/dashboard/contato" 
            className="inline-flex items-center text-primary hover:underline"
          >
            Entre em contato
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </main>
    </div>
  );
} 