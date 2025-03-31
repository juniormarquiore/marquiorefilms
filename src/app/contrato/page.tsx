'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Link from 'next/link';

const contratoSchema = z.object({
  // Dados do casal
  nomeNoiva: z.string().min(3, 'Nome da noiva é obrigatório'),
  nomeNoivo: z.string().min(3, 'Nome do noivo é obrigatório'),
  emailContato: z.string().email('Email inválido'),
  telefoneContato: z.string().min(10, 'Telefone inválido'),
  
  // Dados do evento
  dataCasamento: z.string().min(1, 'Data é obrigatória'),
  horarioCerimonia: z.string().min(1, 'Horário é obrigatório'),
  localCerimonia: z.string().min(3, 'Local da cerimônia é obrigatório'),
  enderecoLocalCerimonia: z.string().min(3, 'Endereço é obrigatório'),
  localRecepcao: z.string().min(3, 'Local da recepção é obrigatório'),
  enderecoLocalRecepcao: z.string().min(3, 'Endereço é obrigatório'),
  
  // Dados do pacote
  pacote: z.enum(['basico', 'intermediario', 'premium']),
  valorTotal: z.string().min(1, 'Valor é obrigatório'),
  formaPagamento: z.enum(['avista', 'parcelado']),
  parcelas: z.string().optional(),
});

type ContratoFormData = z.infer<typeof contratoSchema>;

export default function ContratoPage() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  
  const { register, handleSubmit, watch, formState: { errors } } = useForm<ContratoFormData>({
    resolver: zodResolver(contratoSchema),
    defaultValues: {
      pacote: 'basico',
      formaPagamento: 'avista',
    }
  });

  const pacoteSelecionado = watch('pacote');
  const formaPagamento = watch('formaPagamento');

  const getValorPacote = () => {
    switch (pacoteSelecionado) {
      case 'basico':
        return 'R$ 3.500,00';
      case 'intermediario':
        return 'R$ 5.000,00';
      case 'premium':
        return 'R$ 7.500,00';
      default:
        return 'R$ 0,00';
    }
  };

  const nextStep = () => {
    setStep(step + 1);
    window.scrollTo(0, 0);
  };

  const prevStep = () => {
    setStep(step - 1);
    window.scrollTo(0, 0);
  };

  const onSubmit = (data: ContratoFormData) => {
    setIsSubmitting(true);
    
    // Simulação de envio para API
    console.log('Dados do contrato:', data);
    
    setTimeout(() => {
      setIsSubmitting(false);
      router.push('/contrato/confirmacao');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-secondary py-16">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto bg-gray-900 rounded-lg p-8">
          <h1 className="title mb-6">Contrato de Serviço</h1>
          
          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex justify-between">
              <div className={`text-sm ${step >= 1 ? 'text-primary' : 'text-gray-400'}`}>Dados do Casal</div>
              <div className={`text-sm ${step >= 2 ? 'text-primary' : 'text-gray-400'}`}>Detalhes do Evento</div>
              <div className={`text-sm ${step >= 3 ? 'text-primary' : 'text-gray-400'}`}>Pacote e Pagamento</div>
              <div className={`text-sm ${step >= 4 ? 'text-primary' : 'text-gray-400'}`}>Confirmação</div>
            </div>
            <div className="mt-2 w-full bg-gray-700 rounded-full h-2">
              <div 
                className="bg-primary h-full rounded-full transition-all duration-500" 
                style={{ width: `${(step / 4) * 100}%` }}
              ></div>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Step 1: Dados do Casal */}
            {step === 1 && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-primary mb-4">Dados do Casal</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Nome da Noiva
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Nome completo da noiva"
                      {...register('nomeNoiva')}
                    />
                    {errors.nomeNoiva && (
                      <p className="mt-1 text-sm text-red-400">{errors.nomeNoiva.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Nome do Noivo
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Nome completo do noivo"
                      {...register('nomeNoivo')}
                    />
                    {errors.nomeNoivo && (
                      <p className="mt-1 text-sm text-red-400">{errors.nomeNoivo.message}</p>
                    )}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Email para Contato
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="email@exemplo.com"
                      {...register('emailContato')}
                    />
                    {errors.emailContato && (
                      <p className="mt-1 text-sm text-red-400">{errors.emailContato.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Telefone para Contato
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="(00) 00000-0000"
                      {...register('telefoneContato')}
                    />
                    {errors.telefoneContato && (
                      <p className="mt-1 text-sm text-red-400">{errors.telefoneContato.message}</p>
                    )}
                  </div>
                </div>
                
                <div className="flex justify-end pt-4">
                  <button
                    type="button"
                    onClick={nextStep}
                    className="bg-primary text-secondary font-bold py-2 px-6 rounded-md transition-all hover:bg-opacity-90"
                  >
                    Próximo
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Detalhes do Evento */}
            {step === 2 && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-primary mb-4">Detalhes do Evento</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Data do Casamento
                    </label>
                    <input
                      type="date"
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      {...register('dataCasamento')}
                    />
                    {errors.dataCasamento && (
                      <p className="mt-1 text-sm text-red-400">{errors.dataCasamento.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Horário da Cerimônia
                    </label>
                    <input
                      type="time"
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      {...register('horarioCerimonia')}
                    />
                    {errors.horarioCerimonia && (
                      <p className="mt-1 text-sm text-red-400">{errors.horarioCerimonia.message}</p>
                    )}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Local da Cerimônia
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Nome do local"
                    {...register('localCerimonia')}
                  />
                  {errors.localCerimonia && (
                    <p className="mt-1 text-sm text-red-400">{errors.localCerimonia.message}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Endereço do Local da Cerimônia
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Endereço completo"
                    {...register('enderecoLocalCerimonia')}
                  />
                  {errors.enderecoLocalCerimonia && (
                    <p className="mt-1 text-sm text-red-400">{errors.enderecoLocalCerimonia.message}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Local da Recepção/Festa
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Nome do local"
                    {...register('localRecepcao')}
                  />
                  {errors.localRecepcao && (
                    <p className="mt-1 text-sm text-red-400">{errors.localRecepcao.message}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Endereço do Local da Recepção/Festa
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Endereço completo"
                    {...register('enderecoLocalRecepcao')}
                  />
                  {errors.enderecoLocalRecepcao && (
                    <p className="mt-1 text-sm text-red-400">{errors.enderecoLocalRecepcao.message}</p>
                  )}
                </div>
                
                <div className="flex justify-between pt-4">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="border border-gray-600 text-gray-300 font-bold py-2 px-6 rounded-md transition-all hover:bg-gray-800"
                  >
                    Voltar
                  </button>
                  <button
                    type="button"
                    onClick={nextStep}
                    className="bg-primary text-secondary font-bold py-2 px-6 rounded-md transition-all hover:bg-opacity-90"
                  >
                    Próximo
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Pacote e Pagamento */}
            {step === 3 && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-primary mb-4">Pacote e Pagamento</h2>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    Selecione o Pacote
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="relative">
                      <input
                        type="radio"
                        id="pacote-basico"
                        value="basico"
                        className="sr-only"
                        {...register('pacote')}
                      />
                      <label
                        htmlFor="pacote-basico"
                        className={`block p-4 border rounded-lg cursor-pointer h-full ${
                          pacoteSelecionado === 'basico'
                            ? 'bg-primary/20 border-primary text-white'
                            : 'bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700'
                        }`}
                      >
                        <div className="font-medium text-lg mb-1">Básico</div>
                        <div className="text-2xl font-bold mb-2">R$ 3.500,00</div>
                        <ul className="text-sm space-y-1">
                          <li>• 6 horas de cobertura</li>
                          <li>• 1 cinegrafista</li>
                          <li>• Vídeo completo (até 1h)</li>
                          <li>• Versão resumida (até 15min)</li>
                        </ul>
                      </label>
                    </div>
                    
                    <div className="relative">
                      <input
                        type="radio"
                        id="pacote-intermediario"
                        value="intermediario"
                        className="sr-only"
                        {...register('pacote')}
                      />
                      <label
                        htmlFor="pacote-intermediario"
                        className={`block p-4 border rounded-lg cursor-pointer h-full ${
                          pacoteSelecionado === 'intermediario'
                            ? 'bg-primary/20 border-primary text-white'
                            : 'bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700'
                        }`}
                      >
                        <div className="font-medium text-lg mb-1">Intermediário</div>
                        <div className="text-2xl font-bold mb-2">R$ 5.000,00</div>
                        <ul className="text-sm space-y-1">
                          <li>• 8 horas de cobertura</li>
                          <li>• 2 cinegrafistas</li>
                          <li>• Vídeo completo (até 1h30)</li>
                          <li>• Versão resumida (até 20min)</li>
                          <li>• Teaser para redes sociais</li>
                        </ul>
                      </label>
                    </div>
                    
                    <div className="relative">
                      <input
                        type="radio"
                        id="pacote-premium"
                        value="premium"
                        className="sr-only"
                        {...register('pacote')}
                      />
                      <label
                        htmlFor="pacote-premium"
                        className={`block p-4 border rounded-lg cursor-pointer h-full ${
                          pacoteSelecionado === 'premium'
                            ? 'bg-primary/20 border-primary text-white'
                            : 'bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700'
                        }`}
                      >
                        <div className="font-medium text-lg mb-1">Premium</div>
                        <div className="text-2xl font-bold mb-2">R$ 7.500,00</div>
                        <ul className="text-sm space-y-1">
                          <li>• 12 horas de cobertura</li>
                          <li>• 2 cinegrafistas</li>
                          <li>• Drone</li>
                          <li>• Vídeo completo (até 2h)</li>
                          <li>• Versão resumida (até 30min)</li>
                          <li>• Teaser para redes sociais</li>
                          <li>• Same Day Edit</li>
                        </ul>
                      </label>
                    </div>
                  </div>
                  {errors.pacote && (
                    <p className="mt-1 text-sm text-red-400">{errors.pacote.message}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Valor Total
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    value={getValorPacote()}
                    readOnly
                    {...register('valorTotal')}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    Forma de Pagamento
                  </label>
                  <div className="flex space-x-4">
                    <div className="relative">
                      <input
                        type="radio"
                        id="pagamento-avista"
                        value="avista"
                        className="sr-only"
                        {...register('formaPagamento')}
                      />
                      <label
                        htmlFor="pagamento-avista"
                        className={`block px-4 py-2 border rounded-lg cursor-pointer ${
                          formaPagamento === 'avista'
                            ? 'bg-primary/20 border-primary text-white'
                            : 'bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700'
                        }`}
                      >
                        À Vista (5% de desconto)
                      </label>
                    </div>
                    
                    <div className="relative">
                      <input
                        type="radio"
                        id="pagamento-parcelado"
                        value="parcelado"
                        className="sr-only"
                        {...register('formaPagamento')}
                      />
                      <label
                        htmlFor="pagamento-parcelado"
                        className={`block px-4 py-2 border rounded-lg cursor-pointer ${
                          formaPagamento === 'parcelado'
                            ? 'bg-primary/20 border-primary text-white'
                            : 'bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700'
                        }`}
                      >
                        Parcelado
                      </label>
                    </div>
                  </div>
                  {errors.formaPagamento && (
                    <p className="mt-1 text-sm text-red-400">{errors.formaPagamento.message}</p>
                  )}
                </div>
                
                {formaPagamento === 'parcelado' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Número de Parcelas
                    </label>
                    <select
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      {...register('parcelas')}
                    >
                      <option value="2">2x sem juros</option>
                      <option value="3">3x sem juros</option>
                      <option value="4">4x com juros</option>
                      <option value="5">5x com juros</option>
                      <option value="6">6x com juros</option>
                    </select>
                    {errors.parcelas && (
                      <p className="mt-1 text-sm text-red-400">{errors.parcelas.message}</p>
                    )}
                  </div>
                )}
                
                <div className="flex justify-between pt-4">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="border border-gray-600 text-gray-300 font-bold py-2 px-6 rounded-md transition-all hover:bg-gray-800"
                  >
                    Voltar
                  </button>
                  <button
                    type="button"
                    onClick={nextStep}
                    className="bg-primary text-secondary font-bold py-2 px-6 rounded-md transition-all hover:bg-opacity-90"
                  >
                    Próximo
                  </button>
                </div>
              </div>
            )}

            {/* Step 4: Confirmação */}
            {step === 4 && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-primary mb-4">Confirme as Informações</h2>
                
                <div className="bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-lg font-medium text-primary mb-4">Termos do Contrato</h3>
                  <div className="max-h-60 overflow-y-auto text-gray-300 text-sm mb-4 bg-gray-900 p-4 rounded">
                    <p className="mb-2">Este contrato estabelece os termos e condições pelos quais a Marquiore Filmes prestará serviços de filmagem para o evento de casamento especificado neste formulário.</p>
                    <p className="mb-2">A Marquiore Filmes se compromete a:</p>
                    <ul className="list-disc pl-5 mb-2 space-y-1">
                      <li>Comparecer no evento na data e hora combinados</li>
                      <li>Utilizar equipamentos profissionais e adequados</li>
                      <li>Entregar o material editado dentro do prazo estipulado</li>
                      <li>Manter backup seguro de todos os arquivos gravados</li>
                    </ul>
                    <p className="mb-2">Os contratantes se comprometem a:</p>
                    <ul className="list-disc pl-5 mb-2 space-y-1">
                      <li>Fornecer todas as informações necessárias sobre o evento</li>
                      <li>Efetuar os pagamentos nas datas previstas</li>
                      <li>Garantir acesso da equipe a todos os locais de filmagem</li>
                    </ul>
                    <p className="mb-2">O prazo para entrega do material é de até 60 dias após o evento, podendo ser estendido em casos excepcionais mediante comunicação prévia.</p>
                    <p className="mb-2">Os contratantes terão direito a solicitar até 2 revisões no material editado, desde que não alterem significativamente a estrutura do filme.</p>
                    <p>Ao assinar este contrato, as partes declaram estar de acordo com todos os termos e condições aqui estabelecidos.</p>
                  </div>
                  
                  <div className="flex items-start mb-4">
                    <input
                      id="termos"
                      type="checkbox"
                      className="mt-1 h-4 w-4 bg-gray-700 border-gray-600 rounded text-primary focus:ring-primary"
                      required
                    />
                    <label htmlFor="termos" className="ml-2 text-sm text-gray-300">
                      Li e concordo com os termos e condições do contrato de serviço.
                    </label>
                  </div>
                </div>
                
                <div className="flex justify-between pt-4">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="border border-gray-600 text-gray-300 font-bold py-2 px-6 rounded-md transition-all hover:bg-gray-800"
                  >
                    Voltar
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-primary text-secondary font-bold py-2 px-6 rounded-md transition-all hover:bg-opacity-90 disabled:opacity-50"
                  >
                    {isSubmitting ? 'Enviando...' : 'Finalizar Contrato'}
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
} 