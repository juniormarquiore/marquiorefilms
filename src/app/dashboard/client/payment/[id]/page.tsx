import React from 'react';
import Link from 'next/link';

// Componente para o status do pagamento
const PaymentStatus = ({ status }: { status: string }) => {
  const getStatusColor = () => {
    switch (status) {
      case 'Pago':
        return 'bg-green-500/20 text-green-400';
      case 'Pendente':
        return 'bg-yellow-500/20 text-yellow-400';
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

export default function PaymentPage({ params }: { params: { id: string } }) {
  // Dados mockados para demonstração
  const payment = {
    id: parseInt(params.id),
    projectTitle: 'Casamento Maria e João',
    contractNumber: 'MF-2023-00123',
    totalValue: 'R$ 7.600,00',
    installments: [
      {
        id: 1,
        description: 'Entrada (50%)',
        value: 'R$ 3.800,00',
        dueDate: '22/03/2023',
        paymentDate: '22/03/2023',
        status: 'Pago',
        method: 'Transferência Bancária',
      },
      {
        id: 2,
        description: '2ª Parcela (25%)',
        value: 'R$ 1.900,00',
        dueDate: '15/04/2023',
        paymentDate: '14/04/2023',
        status: 'Pago',
        method: 'PIX',
      },
      {
        id: 3,
        description: '3ª Parcela (25%)',
        value: 'R$ 1.900,00',
        dueDate: '15/05/2023',
        paymentDate: null,
        status: 'Pendente',
        method: 'Aguardando pagamento',
      },
    ],
    paymentMethods: {
      bankTransfer: {
        bank: 'Banco Itaú',
        agency: '1234',
        account: '56789-0',
        holder: 'Marquiore Filmes Ltda',
        cnpj: '12.345.678/0001-90',
      },
      pix: {
        key: 'financeiro@marquiorefilms.com',
        holder: 'Marquiore Filmes Ltda',
        cnpj: '12.345.678/0001-90',
      },
    },
  };

  // Calcular o valor total pago
  const paidAmount = payment.installments
    .filter(installment => installment.status === 'Pago')
    .reduce((total, installment) => {
      const value = parseFloat(installment.value.replace('R$ ', '').replace('.', '').replace(',', '.'));
      return total + value;
    }, 0);

  // Formatar o valor pago
  const formattedPaidAmount = paidAmount.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  // Calcular a porcentagem paga
  const totalValueNumber = parseFloat(payment.totalValue.replace('R$ ', '').replace('.', '').replace(',', '.'));
  const paidPercentage = Math.round((paidAmount / totalValueNumber) * 100);

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
        </div>
        
        <h1 className="title mb-2">Pagamentos</h1>
        <p className="text-gray-400 mb-8">
          {payment.projectTitle} - Contrato Nº: {payment.contractNumber}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-secondary/70 p-6 rounded-lg border border-primary/20">
            <h2 className="text-lg font-semibold mb-1">Valor Total</h2>
            <p className="text-3xl font-bold text-primary">{payment.totalValue}</p>
          </div>
          <div className="bg-secondary/70 p-6 rounded-lg border border-primary/20">
            <h2 className="text-lg font-semibold mb-1">Valor Pago</h2>
            <p className="text-3xl font-bold text-green-400">{formattedPaidAmount}</p>
          </div>
          <div className="bg-secondary/70 p-6 rounded-lg border border-primary/20">
            <h2 className="text-lg font-semibold mb-1">Progresso</h2>
            <p className="text-3xl font-bold text-primary">{paidPercentage}%</p>
            <div className="w-full bg-secondary h-2 rounded-full mt-2">
              <div 
                className="bg-primary h-2 rounded-full" 
                style={{ width: `${paidPercentage}%` }}
              ></div>
            </div>
          </div>
        </div>
        
        <div className="bg-secondary/70 p-6 rounded-lg border border-primary/20 mb-8">
          <h2 className="text-xl font-bold mb-6">Parcelas</h2>
          
          <div className="space-y-6">
            {payment.installments.map(installment => (
              <div key={installment.id} className="border-b border-gray-700/30 pb-6 last:border-0 last:pb-0">
                <div className="flex flex-col md:flex-row justify-between mb-4">
                  <div>
                    <h3 className="font-bold mb-1">{installment.description}</h3>
                    <p className="text-gray-400 text-sm">Vencimento: {installment.dueDate}</p>
                  </div>
                  <div className="flex flex-col items-start md:items-end mt-2 md:mt-0">
                    <p className="font-bold text-xl mb-1">{installment.value}</p>
                    <PaymentStatus status={installment.status} />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-400">Método de pagamento</p>
                    <p>{installment.method}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Data do pagamento</p>
                    <p>{installment.paymentDate || 'Aguardando pagamento'}</p>
                  </div>
                </div>
                
                {installment.status === 'Pendente' && (
                  <div className="mt-4">
                    <button className="btn-primary">
                      Realizar Pagamento
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-secondary/70 p-6 rounded-lg border border-primary/20 mb-8">
          <h2 className="text-xl font-bold mb-6">Métodos de Pagamento</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold mb-4 border-b border-primary/30 pb-2">Transferência Bancária</h3>
              <div className="space-y-2">
                <p><span className="text-gray-400">Banco:</span> {payment.paymentMethods.bankTransfer.bank}</p>
                <p><span className="text-gray-400">Agência:</span> {payment.paymentMethods.bankTransfer.agency}</p>
                <p><span className="text-gray-400">Conta:</span> {payment.paymentMethods.bankTransfer.account}</p>
                <p><span className="text-gray-400">Titular:</span> {payment.paymentMethods.bankTransfer.holder}</p>
                <p><span className="text-gray-400">CNPJ:</span> {payment.paymentMethods.bankTransfer.cnpj}</p>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold mb-4 border-b border-primary/30 pb-2">PIX</h3>
              <div className="space-y-2">
                <p><span className="text-gray-400">Chave:</span> {payment.paymentMethods.pix.key}</p>
                <p><span className="text-gray-400">Titular:</span> {payment.paymentMethods.pix.holder}</p>
                <p><span className="text-gray-400">CNPJ:</span> {payment.paymentMethods.pix.cnpj}</p>
              </div>
              <div className="mt-4 flex justify-center">
                <div className="bg-white p-2 rounded w-32 h-32 flex items-center justify-center">
                  <div className="text-black text-xs text-center">QR Code do PIX</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <Link 
            href={`/dashboard/client/project/${payment.id}`}
            className="bg-secondary text-white px-4 py-2 rounded hover:bg-secondary/80 transition-colors border border-primary/20"
          >
            Ver Projeto
          </Link>
          
          <Link 
            href={`/dashboard/client/contract/${payment.id}`}
            className="bg-secondary text-white px-4 py-2 rounded hover:bg-secondary/80 transition-colors border border-primary/20"
          >
            Ver Contrato
          </Link>
        </div>
      </div>
    </div>
  );
} 