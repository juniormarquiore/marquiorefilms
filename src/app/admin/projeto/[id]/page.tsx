'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface ProjetoDetails {
  id: string;
  casal: {
    noiva: string;
    noivo: string;
    email: string;
    telefone: string;
  };
  evento: {
    data: string;
    local: string;
    cidade: string;
    estado: string;
  };
  pacote: {
    tipo: string;
    valor: number;
  };
  progresso: number;
  prazoEntrega: string;
  status: 'em andamento' | 'concluído' | 'arquivado';
  etapas: {
    id: number;
    nome: string;
    concluida: boolean;
    dataConclusao?: string;
  }[];
  entregas: {
    id: number;
    tipo: 'vídeo' | 'foto';
    titulo: string;
    url: string;
    dataEnvio: string;
    aprovado: boolean;
  }[];
  pagamentos: {
    id: number;
    valor: number;
    data: string;
    status: 'pendente' | 'pago';
    metodo: string;
  }[];
}

export default function ProjetoDetalhesPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [projeto, setProjeto] = useState<ProjetoDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('informacoes');
  const [novaEtapa, setNovaEtapa] = useState('');
  const [novoVideo, setNovoVideo] = useState({ titulo: '', url: '' });

  useEffect(() => {
    // Simular busca do projeto pelo ID
    const fetchProjeto = async () => {
      try {
        // Em produção, esta seria uma chamada API real
        setLoading(true);
        
        // Simular atraso de carregamento
        setTimeout(() => {
          // Dados fictícios para demonstração
          const mockProjeto: ProjetoDetails = {
            id: params.id,
            casal: {
              noiva: 'Ana Silva',
              noivo: 'Carlos Mendes',
              email: 'anasilva@exemplo.com',
              telefone: '(11) 98765-4321',
            },
            evento: {
              data: '2024-10-15',
              local: 'Espaço Jardins',
              cidade: 'São Paulo',
              estado: 'SP',
            },
            pacote: {
              tipo: 'Premium',
              valor: 5000,
            },
            progresso: 60,
            prazoEntrega: '2024-12-15',
            status: 'em andamento',
            etapas: [
              { id: 1, nome: 'Contrato assinado', concluida: true, dataConclusao: '2023-12-10' },
              { id: 2, nome: 'Filmagem realizada', concluida: true, dataConclusao: '2024-10-15' },
              { id: 3, nome: 'Seleção de material', concluida: true, dataConclusao: '2024-10-30' },
              { id: 4, nome: 'Primeiro corte', concluida: false },
              { id: 5, nome: 'Revisão do cliente', concluida: false },
              { id: 6, nome: 'Edição final', concluida: false },
              { id: 7, nome: 'Entrega', concluida: false },
            ],
            entregas: [
              { 
                id: 1, 
                tipo: 'vídeo', 
                titulo: 'Prévia - Cerimônia', 
                url: 'https://exemplo.com/video1', 
                dataEnvio: '2024-10-20', 
                aprovado: true 
              },
              { 
                id: 2, 
                tipo: 'vídeo', 
                titulo: 'Teaser', 
                url: 'https://exemplo.com/video2', 
                dataEnvio: '2024-11-05', 
                aprovado: false 
              },
            ],
            pagamentos: [
              { 
                id: 1, 
                valor: 1000, 
                data: '2023-12-01', 
                status: 'pago', 
                metodo: 'Pix' 
              },
              { 
                id: 2, 
                valor: 500, 
                data: '2024-01-01', 
                status: 'pago', 
                metodo: 'Cartão de Crédito' 
              },
              { 
                id: 3, 
                valor: 500, 
                data: '2024-02-01', 
                status: 'pendente', 
                metodo: 'Cartão de Crédito' 
              },
            ],
          };
          
          setProjeto(mockProjeto);
          setLoading(false);
        }, 1000);
      } catch (err) {
        console.error('Erro ao carregar projeto:', err);
        setError('Não foi possível carregar os dados do projeto. Tente novamente mais tarde.');
        setLoading(false);
      }
    };

    fetchProjeto();
  }, [params.id]);

  const handleToggleEtapa = (etapaId: number) => {
    if (projeto) {
      const etapasAtualizadas = projeto.etapas.map(etapa => {
        if (etapa.id === etapaId) {
          return {
            ...etapa,
            concluida: !etapa.concluida,
            dataConclusao: !etapa.concluida ? new Date().toISOString().split('T')[0] : undefined
          };
        }
        return etapa;
      });

      // Calcular novo progresso
      const etapasConcluidas = etapasAtualizadas.filter(e => e.concluida).length;
      const novoProgresso = Math.round((etapasConcluidas / etapasAtualizadas.length) * 100);

      setProjeto({
        ...projeto,
        etapas: etapasAtualizadas,
        progresso: novoProgresso
      });
    }
  };

  const handleAdicionarEtapa = () => {
    if (projeto && novaEtapa.trim()) {
      const novoId = Math.max(...projeto.etapas.map(e => e.id)) + 1;
      const etapasAtualizadas = [
        ...projeto.etapas,
        { id: novoId, nome: novaEtapa, concluida: false }
      ];
      
      // Recalcular progresso
      const etapasConcluidas = etapasAtualizadas.filter(e => e.concluida).length;
      const novoProgresso = Math.round((etapasConcluidas / etapasAtualizadas.length) * 100);

      setProjeto({
        ...projeto,
        etapas: etapasAtualizadas,
        progresso: novoProgresso
      });
      
      setNovaEtapa('');
    }
  };

  const handleAdicionarVideo = () => {
    if (projeto && novoVideo.titulo.trim() && novoVideo.url.trim()) {
      const novoId = projeto.entregas.length > 0 ? 
        Math.max(...projeto.entregas.map(e => e.id)) + 1 : 1;
      
      const entregasAtualizadas = [
        ...projeto.entregas,
        { 
          id: novoId, 
          tipo: 'vídeo', 
          titulo: novoVideo.titulo, 
          url: novoVideo.url, 
          dataEnvio: new Date().toISOString().split('T')[0], 
          aprovado: false 
        }
      ];

      setProjeto({
        ...projeto,
        entregas: entregasAtualizadas
      });
      
      setNovoVideo({ titulo: '', url: '' });
    }
  };

  const formatarData = (dataString: string) => {
    const [ano, mes, dia] = dataString.split('-');
    return `${dia}/${mes}/${ano}`;
  };

  const formatarValor = (valor: number) => {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  if (loading) {
    return (
      <div className="container mx-auto p-6 max-w-6xl">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-300 rounded w-3/4 mb-6"></div>
          <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-5/6 mb-8"></div>
          <div className="grid grid-cols-2 gap-6">
            <div className="h-40 bg-gray-300 rounded"></div>
            <div className="h-40 bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto p-6 max-w-6xl">
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded mb-6" role="alert">
          <p>{error}</p>
        </div>
        <button
          onClick={() => router.back()}
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        >
          Voltar
        </button>
      </div>
    );
  }

  if (!projeto) {
    return (
      <div className="container mx-auto p-6 max-w-6xl">
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded mb-6" role="alert">
          <p>Projeto não encontrado.</p>
        </div>
        <Link 
          href="/admin"
          className="bg-primary hover:bg-primary/90 text-white font-bold py-2 px-4 rounded"
        >
          Voltar ao Dashboard
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 max-w-6xl">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-primary">
          Projeto #{projeto.id} - {projeto.casal.noiva} & {projeto.casal.noivo}
        </h1>
        <Link 
          href="/admin"
          className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
        >
          Voltar
        </Link>
      </div>

      <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6">
        <div className="bg-primary text-white p-4">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl font-semibold">Status: {projeto.status}</h2>
              <p>Data do evento: {formatarData(projeto.evento.data)}</p>
            </div>
            <div className="text-right">
              <p>Progresso: {projeto.progresso}%</p>
              <p>Prazo de entrega: {formatarData(projeto.prazoEntrega)}</p>
            </div>
          </div>
        </div>

        <div className="w-full bg-gray-200 h-2">
          <div 
            className={`h-2 ${projeto.progresso < 50 ? 'bg-yellow-500' : projeto.progresso < 100 ? 'bg-blue-500' : 'bg-green-500'}`}
            style={{ width: `${projeto.progresso}%` }}
          ></div>
        </div>

        <div className="p-4">
          <div className="flex border-b mb-4">
            <button
              className={`py-2 px-4 ${activeTab === 'informacoes' ? 'border-b-2 border-primary text-primary font-medium' : 'text-gray-500'}`}
              onClick={() => setActiveTab('informacoes')}
            >
              Informações
            </button>
            <button
              className={`py-2 px-4 ${activeTab === 'etapas' ? 'border-b-2 border-primary text-primary font-medium' : 'text-gray-500'}`}
              onClick={() => setActiveTab('etapas')}
            >
              Etapas do Projeto
            </button>
            <button
              className={`py-2 px-4 ${activeTab === 'entregas' ? 'border-b-2 border-primary text-primary font-medium' : 'text-gray-500'}`}
              onClick={() => setActiveTab('entregas')}
            >
              Entregas
            </button>
            <button
              className={`py-2 px-4 ${activeTab === 'pagamentos' ? 'border-b-2 border-primary text-primary font-medium' : 'text-gray-500'}`}
              onClick={() => setActiveTab('pagamentos')}
            >
              Pagamentos
            </button>
          </div>

          {activeTab === 'informacoes' && (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="border rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-3 text-primary">Dados do Casal</h3>
                  <p><strong>Noivos:</strong> {projeto.casal.noiva} & {projeto.casal.noivo}</p>
                  <p><strong>Email:</strong> {projeto.casal.email}</p>
                  <p><strong>Telefone:</strong> {projeto.casal.telefone}</p>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-3 text-primary">Dados do Evento</h3>
                  <p><strong>Data:</strong> {formatarData(projeto.evento.data)}</p>
                  <p><strong>Local:</strong> {projeto.evento.local}</p>
                  <p><strong>Cidade/Estado:</strong> {projeto.evento.cidade}/{projeto.evento.estado}</p>
                </div>
              </div>

              <div className="border rounded-lg p-4 mb-6">
                <h3 className="text-lg font-semibold mb-3 text-primary">Pacote Contratado</h3>
                <p><strong>Tipo:</strong> {projeto.pacote.tipo}</p>
                <p><strong>Valor Total:</strong> {formatarValor(projeto.pacote.valor)}</p>
              </div>

              <div className="flex justify-end space-x-4">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                  Editar Informações
                </button>
                <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
                  Enviar Email ao Cliente
                </button>
              </div>
            </div>
          )}

          {activeTab === 'etapas' && (
            <div>
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-primary">Etapas do Projeto</h3>
                <ul className="space-y-2">
                  {projeto.etapas.map((etapa) => (
                    <li key={etapa.id} className="flex items-center border rounded-lg p-3">
                      <input
                        type="checkbox"
                        checked={etapa.concluida}
                        onChange={() => handleToggleEtapa(etapa.id)}
                        className="h-5 w-5 text-primary focus:ring-primary border-gray-300 rounded"
                      />
                      <span className={`ml-3 flex-1 ${etapa.concluida ? 'line-through text-gray-500' : ''}`}>
                        {etapa.nome}
                      </span>
                      {etapa.concluida && etapa.dataConclusao && (
                        <span className="text-sm text-gray-500">
                          Concluído em {formatarData(etapa.dataConclusao)}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-primary">Adicionar Nova Etapa</h3>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={novaEtapa}
                    onChange={(e) => setNovaEtapa(e.target.value)}
                    placeholder="Nome da etapa"
                    className="flex-1 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary"
                  />
                  <button
                    onClick={handleAdicionarEtapa}
                    className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded"
                    disabled={!novaEtapa.trim()}
                  >
                    Adicionar
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'entregas' && (
            <div>
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-primary">Vídeos e Fotos Enviados</h3>
                {projeto.entregas.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {projeto.entregas.map((entrega) => (
                      <div key={entrega.id} className="border rounded-lg p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-medium">{entrega.titulo}</h4>
                          <span className={`text-sm px-2 py-1 rounded ${entrega.aprovado ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                            {entrega.aprovado ? 'Aprovado' : 'Aguardando aprovação'}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">Enviado em: {formatarData(entrega.dataEnvio)}</p>
                        <div className="flex items-center space-x-2">
                          <a 
                            href={entrega.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:text-blue-700"
                          >
                            Visualizar {entrega.tipo === 'vídeo' ? 'Vídeo' : 'Foto'}
                          </a>
                          {!entrega.aprovado && (
                            <button className="text-sm bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded">
                              Marcar como aprovado
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500">Nenhuma entrega realizada ainda.</p>
                )}
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-primary">Adicionar Novo Vídeo</h3>
                <div className="space-y-3">
                  <input
                    type="text"
                    value={novoVideo.titulo}
                    onChange={(e) => setNovoVideo({...novoVideo, titulo: e.target.value})}
                    placeholder="Título do vídeo"
                    className="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary"
                  />
                  <input
                    type="text"
                    value={novoVideo.url}
                    onChange={(e) => setNovoVideo({...novoVideo, url: e.target.value})}
                    placeholder="URL do vídeo"
                    className="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary"
                  />
                  <button
                    onClick={handleAdicionarVideo}
                    className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded"
                    disabled={!novoVideo.titulo.trim() || !novoVideo.url.trim()}
                  >
                    Adicionar Vídeo
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'pagamentos' && (
            <div>
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-primary">Histórico de Pagamentos</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Data
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Valor
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Método
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Ações
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {projeto.pagamentos.map((pagamento) => (
                        <tr key={pagamento.id}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {formatarData(pagamento.data)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {formatarValor(pagamento.valor)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {pagamento.metodo}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${pagamento.status === 'pago' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                              {pagamento.status === 'pago' ? 'Pago' : 'Pendente'}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            {pagamento.status === 'pendente' && (
                              <button className="text-green-600 hover:text-green-900 mr-3">
                                Marcar como pago
                              </button>
                            )}
                            <button className="text-blue-600 hover:text-blue-900">
                              Detalhes
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="flex justify-between mb-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-primary">Resumo Financeiro</h3>
                  <p><strong>Valor total do projeto:</strong> {formatarValor(projeto.pacote.valor)}</p>
                  <p><strong>Total pago:</strong> {formatarValor(projeto.pagamentos.filter(p => p.status === 'pago').reduce((acc, p) => acc + p.valor, 0))}</p>
                  <p><strong>Valor pendente:</strong> {formatarValor(projeto.pacote.valor - projeto.pagamentos.filter(p => p.status === 'pago').reduce((acc, p) => acc + p.valor, 0))}</p>
                </div>
                <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded h-fit">
                  Registrar Novo Pagamento
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 