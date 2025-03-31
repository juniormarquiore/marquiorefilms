'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface ContratoDetails {
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
  pagamento: {
    metodo: string;
    parcelas: number;
    entrada: number;
  };
  status: 'pendente' | 'assinado' | 'pago' | 'concluído';
  dataCriacao: string;
  dataAtualizacao: string;
}

export default function ContratoPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [contrato, setContrato] = useState<ContratoDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simular busca do contrato pelo ID
    const fetchContrato = async () => {
      try {
        // Em produção, esta seria uma chamada API real
        // await fetch(`/api/contratos/${params.id}`)
        setLoading(true);
        
        // Simulando um atraso de carregamento
        setTimeout(() => {
          // Dados fictícios para demonstração
          const mockContrato: ContratoDetails = {
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
            pagamento: {
              metodo: 'Cartão de Crédito',
              parcelas: 10,
              entrada: 1000,
            },
            status: 'pendente',
            dataCriacao: '2023-12-01',
            dataAtualizacao: '2023-12-01',
          };
          
          setContrato(mockContrato);
          setLoading(false);
        }, 1000);
      } catch (err) {
        console.error('Erro ao carregar contrato:', err);
        setError('Não foi possível carregar os dados do contrato. Tente novamente mais tarde.');
        setLoading(false);
      }
    };

    fetchContrato();
  }, [params.id]);

  const handleAssinarContrato = () => {
    // Lógica para assinar o contrato
    if (contrato) {
      const contratoAtualizado = {
        ...contrato,
        status: 'assinado' as const,
        dataAtualizacao: new Date().toISOString().split('T')[0],
      };
      
      setContrato(contratoAtualizado);
      
      // Exibir mensagem de sucesso
      alert('Contrato assinado com sucesso!');
      
      // Em produção, enviaria para a API
      // await fetch(`/api/contratos/${params.id}`, {
      //   method: 'PUT',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(contratoAtualizado),
      // });
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto p-6 max-w-4xl">
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
      <div className="container mx-auto p-6 max-w-4xl">
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

  if (!contrato) {
    return (
      <div className="container mx-auto p-6 max-w-4xl">
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded mb-6" role="alert">
          <p>Contrato não encontrado.</p>
        </div>
        <Link 
          href="/contrato"
          className="bg-primary hover:bg-primary/90 text-white font-bold py-2 px-4 rounded"
        >
          Criar Novo Contrato
        </Link>
      </div>
    );
  }

  // Formatação de data
  const formatarData = (dataString: string) => {
    const [ano, mes, dia] = dataString.split('-');
    return `${dia}/${mes}/${ano}`;
  };

  // Formatação de valor em reais
  const formatarValor = (valor: number) => {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  // Obter valor da parcela
  const valorParcela = contrato.pacote.valor / contrato.pagamento.parcelas;

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6">
        <div className="bg-primary text-white p-6">
          <h1 className="text-2xl font-bold flex justify-between items-center">
            <span>Contrato #{contrato.id}</span>
            <span className="text-sm bg-white text-primary rounded-full px-3 py-1">
              {contrato.status === 'pendente' && 'Pendente'}
              {contrato.status === 'assinado' && 'Assinado'}
              {contrato.status === 'pago' && 'Pago'}
              {contrato.status === 'concluído' && 'Concluído'}
            </span>
          </h1>
          <p className="text-gray-200 mt-2">Criado em: {formatarData(contrato.dataCriacao)}</p>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="border rounded-lg p-4">
              <h2 className="text-lg font-semibold mb-3 text-primary">Dados do Casal</h2>
              <p><strong>Noivos:</strong> {contrato.casal.noiva} & {contrato.casal.noivo}</p>
              <p><strong>Email:</strong> {contrato.casal.email}</p>
              <p><strong>Telefone:</strong> {contrato.casal.telefone}</p>
            </div>

            <div className="border rounded-lg p-4">
              <h2 className="text-lg font-semibold mb-3 text-primary">Dados do Evento</h2>
              <p><strong>Data:</strong> {formatarData(contrato.evento.data)}</p>
              <p><strong>Local:</strong> {contrato.evento.local}</p>
              <p><strong>Cidade/Estado:</strong> {contrato.evento.cidade}/{contrato.evento.estado}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="border rounded-lg p-4">
              <h2 className="text-lg font-semibold mb-3 text-primary">Pacote Contratado</h2>
              <p><strong>Tipo:</strong> {contrato.pacote.tipo}</p>
              <p><strong>Valor Total:</strong> {formatarValor(contrato.pacote.valor)}</p>
            </div>

            <div className="border rounded-lg p-4">
              <h2 className="text-lg font-semibold mb-3 text-primary">Condições de Pagamento</h2>
              <p><strong>Método:</strong> {contrato.pagamento.metodo}</p>
              <p><strong>Entrada:</strong> {formatarValor(contrato.pagamento.entrada)}</p>
              <p><strong>Parcelas:</strong> {contrato.pagamento.parcelas}x de {formatarValor(valorParcela)}</p>
            </div>
          </div>

          <div className="border-t pt-6">
            <h2 className="text-lg font-semibold mb-4 text-primary">Termos do Contrato</h2>
            <div className="text-sm text-gray-700 bg-gray-50 p-4 rounded-lg mb-6 h-48 overflow-y-auto">
              <p className="mb-3">1. <strong>OBJETO DO CONTRATO:</strong> Este contrato tem como objeto a prestação de serviços de fotografia e filmagem pelo CONTRATADO para o evento do CONTRATANTE, conforme descrito acima.</p>
              <p className="mb-3">2. <strong>PRAZO DE ENTREGA:</strong> O prazo para entrega do material editado será de até 90 (noventa) dias úteis, contados a partir da data do evento.</p>
              <p className="mb-3">3. <strong>ALTERAÇÕES E CANCELAMENTOS:</strong> Qualquer alteração de data deverá ser comunicada com antecedência mínima de 30 dias, sujeita a disponibilidade. Em caso de cancelamento, os valores já pagos não serão reembolsados.</p>
              <p className="mb-3">4. <strong>TRABALHO FINAL:</strong> O CONTRATADO possui liberdade criativa para a seleção e edição das imagens, respeitando o estilo apresentado em seu portfólio.</p>
              <p className="mb-3">5. <strong>DIREITOS AUTORAIS:</strong> O CONTRATADO mantém os direitos autorais sobre as imagens, podendo utilizá-las para divulgação de seu trabalho, salvo acordo em contrário estabelecido por escrito.</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between gap-4 mt-6">
            {contrato.status === 'pendente' && (
              <button
                onClick={handleAssinarContrato}
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg"
              >
                Assinar Contrato
              </button>
            )}
            <Link
              href="/dashboard"
              className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg text-center"
            >
              Voltar ao Dashboard
            </Link>
            <button
              onClick={() => window.print()}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg"
            >
              Imprimir Contrato
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 