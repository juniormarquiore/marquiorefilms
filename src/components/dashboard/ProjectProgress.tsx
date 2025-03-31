'use client';

import { useState, useEffect } from 'react';

type ProjectProgressProps = {
  progress: number;
  deadline: string;
};

export default function ProjectProgress({ progress, deadline }: ProjectProgressProps) {
  const [timeLeft, setTimeLeft] = useState<string>('');

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(deadline).getTime() - new Date().getTime();
      
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        return `${days} dias`;
      } else {
        return 'Prazo finalizado';
      }
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 86400000); // Atualiza a cada dia

    return () => clearInterval(timer);
  }, [deadline]);

  // Determinar a cor do progresso com base no valor
  const getProgressColor = () => {
    if (progress < 30) return 'bg-yellow-500';
    if (progress < 70) return 'bg-blue-500';
    return 'bg-green-500';
  };

  const stages = [
    { id: 1, name: 'Planejamento', complete: progress >= 20 },
    { id: 2, name: 'Filmagem', complete: progress >= 40 },
    { id: 3, name: 'Edição Inicial', complete: progress >= 60 },
    { id: 4, name: 'Edição Final', complete: progress >= 80 },
    { id: 5, name: 'Entrega', complete: progress >= 100 },
  ];

  const milestones = [
    { name: 'Reunião inicial', date: '20/10/2023', complete: true },
    { name: 'Evento', date: '15/11/2023', complete: true },
    { name: 'Primeira prévia', date: '25/11/2023', complete: true },
    { name: 'Segunda prévia', date: '05/12/2023', complete: false },
    { name: 'Entrega final', date: '15/12/2023', complete: false },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h3 className="subtitle text-gray-200">Status do Projeto</h3>
        <div className="mt-2">
          <div className="flex justify-between mb-2">
            <span className="text-gray-300">{progress}% Concluído</span>
            <span className="text-gray-300">Previsão de entrega: {new Date(deadline).toLocaleDateString('pt-BR')}</span>
          </div>
          <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden">
            <div 
              className={`h-full ${getProgressColor()} rounded-full transition-all duration-500`} 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="mt-2 text-gray-400">Tempo restante: {timeLeft}</p>
        </div>
      </div>

      <div>
        <h3 className="subtitle text-gray-200">Etapas do Processo</h3>
        <div className="relative mt-4">
          <div className="absolute top-5 left-5 h-full w-0.5 bg-gray-700" />
          <ul className="space-y-8">
            {stages.map((stage) => (
              <li key={stage.id} className="relative pl-10">
                <div className={`absolute left-4 w-3 h-3 rounded-full top-1.5 transform -translate-x-1/2 ${
                  stage.complete ? 'bg-primary' : 'bg-gray-600'
                }`} />
                <div className={`font-medium ${stage.complete ? 'text-primary' : 'text-gray-400'}`}>
                  {stage.name}
                </div>
                {stage.complete && (
                  <span className="text-xs text-green-400 mt-1 inline-block">Concluído</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <h3 className="subtitle text-gray-200">Marcos Importantes</h3>
        <div className="mt-4 overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-800">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Evento
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
              {milestones.map((milestone, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    {milestone.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    {milestone.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    {milestone.complete ? (
                      <span className="px-2 py-1 bg-green-900/30 text-green-400 rounded-full text-xs font-medium">
                        Concluído
                      </span>
                    ) : (
                      <span className="px-2 py-1 bg-blue-900/30 text-blue-400 rounded-full text-xs font-medium">
                        Pendente
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
} 