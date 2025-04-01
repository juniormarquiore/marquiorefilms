import React from 'react';
import Link from 'next/link';

export default function ContractPage({ params }: { params: { id: string } }) {
  // Dados mockados para demonstração
  const contract = {
    id: parseInt(params.id),
    projectTitle: 'Casamento Maria e João',
    contractNumber: 'MF-2023-00123',
    dateCreated: '20/03/2023',
    dateSigned: '22/03/2023',
    status: 'Assinado',
    clientDetails: {
      name: 'Maria Silva e João Santos',
      email: 'maria_joao@email.com',
      phone: '(11) 98765-4321',
      address: 'Av. Paulista, 1000, Apto 123, São Paulo/SP',
    },
    eventDetails: {
      date: '15/04/2023',
      time: '16:00',
      venue: 'Sítio Santa Maria',
      address: 'Estrada da Serra, 500, Mairiporã/SP',
    },
    services: [
      {
        id: 1,
        name: 'Filme Completo',
        description: 'Vídeo completo do casamento com duração de 25-30 minutos',
        price: 'R$ 4.900,00',
      },
      {
        id: 2,
        name: 'Same Day Edit',
        description: 'Vídeo curto (3-5 min) editado no mesmo dia para exibição na festa',
        price: 'R$ 1.200,00',
      },
      {
        id: 3,
        name: 'Ensaio Pré-Wedding',
        description: 'Sessão de filmagem em locação especial antes do casamento',
        price: 'R$ 1.500,00',
      },
    ],
    totalValue: 'R$ 7.600,00',
    paymentTerms: {
      method: 'Parcelado',
      installments: '3x',
      details: [
        'Entrada: R$ 3.800,00 (pago em 22/03/2023)',
        '2ª parcela: R$ 1.900,00 (vencimento em 15/04/2023)',
        '3ª parcela: R$ 1.900,00 (vencimento em 15/05/2023)',
      ],
    }
  };

  return (
    <div className="container-custom py-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <Link href="/dashboard/client" className="flex items-center text-primary hover:underline">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 mr-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Voltar para Dashboard
          </Link>
          <div className="flex items-center">
            <div className="text-sm bg-green-500/20 text-green-400 px-3 py-1 rounded">
              {contract.status}
            </div>
            <button className="ml-4 bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition-colors flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 mr-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              Baixar PDF
            </button>
          </div>
        </div>
        
        <div className="bg-secondary/70 p-8 rounded-lg border border-primary/20 mb-8">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">Contrato de Serviço</h1>
              <p className="text-xl mb-2">{contract.projectTitle}</p>
              <p className="text-gray-400">Contrato Nº: {contract.contractNumber}</p>
            </div>
            <div className="text-right">
              <p className="text-gray-400 mb-1">Data do Contrato: {contract.dateCreated}</p>
              <p className="text-gray-400">Data da Assinatura: {contract.dateSigned}</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-xl font-bold mb-4 border-b border-primary/30 pb-2">Dados do Cliente</h2>
              <div className="space-y-2">
                <p><span className="text-gray-400">Nome:</span> {contract.clientDetails.name}</p>
                <p><span className="text-gray-400">Email:</span> {contract.clientDetails.email}</p>
                <p><span className="text-gray-400">Telefone:</span> {contract.clientDetails.phone}</p>
                <p><span className="text-gray-400">Endereço:</span> {contract.clientDetails.address}</p>
              </div>
            </div>
            
            <div>
              <h2 className="text-xl font-bold mb-4 border-b border-primary/30 pb-2">Dados do Evento</h2>
              <div className="space-y-2">
                <p><span className="text-gray-400">Data:</span> {contract.eventDetails.date}</p>
                <p><span className="text-gray-400">Horário:</span> {contract.eventDetails.time}</p>
                <p><span className="text-gray-400">Local:</span> {contract.eventDetails.venue}</p>
                <p><span className="text-gray-400">Endereço:</span> {contract.eventDetails.address}</p>
              </div>
            </div>
          </div>
          
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4 border-b border-primary/30 pb-2">Serviços Contratados</h2>
            <div className="space-y-4">
              {contract.services.map(service => (
                <div key={service.id} className="flex justify-between items-start border-b border-gray-700/30 pb-4">
                  <div>
                    <h3 className="font-bold mb-1">{service.name}</h3>
                    <p className="text-gray-400 text-sm">{service.description}</p>
                  </div>
                  <p className="font-semibold">{service.price}</p>
                </div>
              ))}
              <div className="flex justify-between items-center pt-2">
                <p className="font-bold text-lg">Valor Total</p>
                <p className="font-bold text-lg text-primary">{contract.totalValue}</p>
              </div>
            </div>
          </div>
          
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4 border-b border-primary/30 pb-2">Condições de Pagamento</h2>
            <div className="space-y-2 mb-4">
              <p><span className="text-gray-400">Forma de pagamento:</span> {contract.paymentTerms.method}</p>
              <p><span className="text-gray-400">Parcelamento:</span> {contract.paymentTerms.installments}</p>
            </div>
            <div className="space-y-2">
              {contract.paymentTerms.details.map((detail, index) => (
                <p key={index} className="text-sm">{detail}</p>
              ))}
            </div>
          </div>
          
          <div>
            <h2 className="text-xl font-bold mb-4 border-b border-primary/30 pb-2">Termos e Condições</h2>
            <div className="space-y-4 text-sm text-gray-300">
              <p>1. A Marquiore Films se compromete a entregar o material editado em até 60 dias após a data do evento.</p>
              <p>2. O cliente terá direito a solicitar até 3 (três) ajustes no vídeo final sem custo adicional.</p>
              <p>3. A Marquiore Films se reserva o direito de utilizar imagens do evento para divulgação em suas redes sociais e portfólio, salvo quando expressamente solicitado o contrário pelo cliente.</p>
              <p>4. Em caso de mau tempo ou outras condições adversas que impossibilitem a filmagem, a Marquiore Films se compromete a remanejar o serviço para outra data sem custo adicional.</p>
              <p>5. Para cancelamentos com mais de 30 dias de antecedência, será retido 20% do valor como taxa administrativa. Cancelamentos com menos de 30 dias não darão direito a reembolso do sinal pago.</p>
            </div>
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <Link 
            href={`/dashboard/client/project/${contract.id}`}
            className="bg-secondary text-white px-4 py-2 rounded hover:bg-secondary/80 transition-colors border border-primary/20"
          >
            Ver Projeto
          </Link>
          
          <Link 
            href={`/dashboard/client/payment/${contract.id}`}
            className="bg-secondary text-white px-4 py-2 rounded hover:bg-secondary/80 transition-colors border border-primary/20"
          >
            Ver Pagamentos
          </Link>
        </div>
      </div>
    </div>
  );
} 