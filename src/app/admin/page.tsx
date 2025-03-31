'use client';

import { useState } from 'react';
import Link from 'next/link';
import AdminSidebar from '@/components/admin/AdminSidebar';

// Dados simulados para demonstração
const clientes = [
  { 
    id: '1',
    casal: 'Ana & Pedro',
    dataEvento: '2024-05-15',
    pacote: 'Premium',
    valorTotal: 5000,
    progresso: 60,
    email: 'ana.pedro@exemplo.com',
    telefone: '(11) 98765-4321',
    prazoEntrega: '2024-07-15'
  },
  { 
    id: '2',
    casal: 'Mariana & Lucas',
    dataEvento: '2024-06-22',
    pacote: 'Essencial',
    valorTotal: 3500,
    progresso: 30,
    email: 'mariana.lucas@exemplo.com',
    telefone: '(11) 91234-5678',
    prazoEntrega: '2024-08-22'
  },
  { 
    id: '3',
    casal: 'Carolina & Rafael',
    dataEvento: '2024-07-08',
    pacote: 'Renascimento',
    valorTotal: 7500,
    progresso: 15,
    email: 'carolina.rafael@exemplo.com',
    telefone: '(11) 95555-6666',
    prazoEntrega: '2024-09-08'
  },
];

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState('projetos');
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filtrar clientes com base no termo de pesquisa
  const filteredClientes = clientes.filter(cliente => 
    cliente.casal.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cliente.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Barra lateral */}
      <AdminSidebar activeItem="Dashboard" />
      
      {/* Conteúdo principal */}
      <div className="lg:pl-64">
        <div className="px-4 py-6 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="pb-5 border-b border-gray-700 mb-5">
            <h3 className="text-2xl font-medium leading-6 text-primary">Dashboard Administrativo</h3>
          </div>
          
          {/* Quick Access Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <Link href="/admin/projeto/novo" className="bg-indigo-900/20 border border-indigo-500/30 p-5 rounded-lg hover:bg-indigo-900/30 transition-colors">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-indigo-400">Novo Projeto</h4>
                  <p className="text-sm text-gray-400">Adicionar um novo projeto</p>
                </div>
              </div>
            </Link>
            
            <Link href="/admin/cliente/novo" className="bg-emerald-900/20 border border-emerald-500/30 p-5 rounded-lg hover:bg-emerald-900/30 transition-colors">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-emerald-400">Novo Cliente</h4>
                  <p className="text-sm text-gray-400">Adicionar um novo cliente</p>
                </div>
              </div>
            </Link>
            
            <Link href="/admin/gerenciar-arquivos" className="bg-amber-900/20 border border-amber-500/30 p-5 rounded-lg hover:bg-amber-900/30 transition-colors">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-amber-400">Gerenciar Arquivos</h4>
                  <p className="text-sm text-gray-400">Fazer upload de imagens e PDFs</p>
                </div>
              </div>
            </Link>
            
            <Link href="/admin/configuracoes" className="bg-purple-900/20 border border-purple-500/30 p-5 rounded-lg hover:bg-purple-900/30 transition-colors">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-purple-400">Configurações</h4>
                  <p className="text-sm text-gray-400">Ajustar preferências do sistema</p>
                </div>
              </div>
            </Link>
          </div>
          
          {/* Tabs */}
          <div className="border-b border-gray-700 mb-5">
            <div className="flex space-x-8">
              <button
                className={`py-4 px-1 ${activeTab === 'projetos' ? 'border-b-2 border-primary text-primary font-medium' : 'text-gray-400 hover:text-gray-300'}`}
                onClick={() => setActiveTab('projetos')}
              >
                Projetos em Andamento
              </button>
              <button
                className={`py-4 px-1 ${activeTab === 'contratos' ? 'border-b-2 border-primary text-primary font-medium' : 'text-gray-400 hover:text-gray-300'}`}
                onClick={() => setActiveTab('contratos')}
              >
                Contratos
              </button>
              <button
                className={`py-4 px-1 ${activeTab === 'calendario' ? 'border-b-2 border-primary text-primary font-medium' : 'text-gray-400 hover:text-gray-300'}`}
                onClick={() => setActiveTab('calendario')}
              >
                Calendário
              </button>
            </div>
          </div>
          
          {/* Barra de pesquisa */}
          <div className="mb-5">
            <div className="max-w-md">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="search"
                  className="bg-gray-800 border border-gray-700 text-gray-300 text-sm rounded-lg block w-full pl-10 p-2.5 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                  placeholder="Buscar por nome ou email"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
          
          {/* Tabela de Clientes */}
          {activeTab === 'projetos' && (
            <div className="overflow-x-auto">
              <table className="min-w-full bg-gray-800 rounded-lg overflow-hidden">
                <thead className="bg-gray-700">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Casal
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Data do Evento
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Pacote
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Progresso
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Contato
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Prazo de Entrega
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Ações
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  {filteredClientes.map((cliente) => (
                    <tr key={cliente.id} className="hover:bg-gray-750">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium text-white">{cliente.casal}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-300">
                        {new Date(cliente.dataEvento).toLocaleDateString('pt-BR')}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-primary/20 text-primary">
                          {cliente.pacote}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-full bg-gray-700 rounded-full h-2.5 mr-2">
                            <div 
                              className={`h-2.5 rounded-full ${
                                cliente.progresso < 30 ? 'bg-yellow-500' : 
                                cliente.progresso < 70 ? 'bg-blue-500' : 
                                'bg-green-500'
                              }`}
                              style={{ width: `${cliente.progresso}%` }}
                            ></div>
                          </div>
                          <span className="text-xs text-gray-300">{cliente.progresso}%</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-gray-300">{cliente.email}</div>
                        <div className="text-gray-400">{cliente.telefone}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-300">
                        {new Date(cliente.prazoEntrega).toLocaleDateString('pt-BR')}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <Link href={`/admin/projeto/${cliente.id}`} className="text-primary hover:text-primary/80 mr-3">
                          Editar
                        </Link>
                        <button className="text-red-500 hover:text-red-400">
                          Excluir
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          
          {activeTab === 'contratos' && (
            <div className="bg-gray-800 rounded-lg p-6">
              <p className="text-gray-300">Seção de Contratos em desenvolvimento.</p>
            </div>
          )}
          
          {activeTab === 'calendario' && (
            <div className="bg-gray-800 rounded-lg p-6">
              <p className="text-gray-300">Seção de Calendário em desenvolvimento.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 