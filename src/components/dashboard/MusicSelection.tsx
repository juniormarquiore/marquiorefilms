'use client';

import { useState } from 'react';

type MusicOption = {
  id: string;
  title: string;
  selected: boolean;
};

type MusicSelectionProps = {
  musicOptions: MusicOption[];
};

export default function MusicSelection({ musicOptions: initialOptions }: MusicSelectionProps) {
  const [musicOptions, setMusicOptions] = useState<MusicOption[]>(initialOptions);
  const [customMusic, setCustomMusic] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleMusicSelection = (id: string) => {
    setMusicOptions(
      musicOptions.map((option) => ({
        ...option,
        selected: option.id === id,
      }))
    );
  };

  const handleAddCustomMusic = () => {
    if (!customMusic.trim()) return;
    
    const newId = `custom-${Date.now()}`;
    const newOption = {
      id: newId,
      title: customMusic,
      selected: true,
    };
    
    setMusicOptions(
      musicOptions.map((option) => ({
        ...option,
        selected: false,
      })).concat(newOption)
    );
    
    setCustomMusic('');
  };

  const handleSaveSelections = () => {
    setIsSubmitting(true);
    
    // Simulação de envio para API
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Preferências musicais salvas com sucesso!');
    }, 1000);
  };

  const selectedMusic = musicOptions.find((option) => option.selected);

  return (
    <div className="space-y-6">
      <div>
        <h3 className="subtitle text-gray-200">Escolha de Música para o Vídeo</h3>
        <p className="text-gray-400 mb-4">
          Selecione uma das músicas sugeridas ou adicione sua própria sugestão.
        </p>
      </div>

      <div className="space-y-4">
        <div className="bg-gray-800 p-4 rounded-lg">
          <h4 className="text-primary font-medium mb-3">Música Selecionada</h4>
          {selectedMusic ? (
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="mr-3 bg-primary/20 p-2 rounded-full">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                  </svg>
                </div>
                <div>
                  <p className="text-white">{selectedMusic.title}</p>
                </div>
              </div>
              <button
                className="text-red-400 hover:text-red-300"
                onClick={() => handleMusicSelection('')}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          ) : (
            <p className="text-gray-400">Nenhuma música selecionada</p>
          )}
        </div>

        <div>
          <h4 className="text-gray-200 font-medium mb-3">Músicas Sugeridas</h4>
          <div className="space-y-2">
            {musicOptions.map((option) => (
              <div
                key={option.id}
                onClick={() => handleMusicSelection(option.id)}
                className={`p-3 rounded-lg cursor-pointer flex items-center justify-between ${
                  option.selected ? 'bg-primary/20 border border-primary/50' : 'bg-gray-800 hover:bg-gray-700'
                }`}
              >
                <div className="flex items-center">
                  <div className="mr-3">
                    {option.selected ? (
                      <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                  </div>
                  <span className={option.selected ? 'text-primary' : 'text-gray-300'}>
                    {option.title}
                  </span>
                </div>
                <button className="text-gray-400 hover:text-primary">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-800 p-4 rounded-lg">
          <h4 className="text-gray-200 font-medium mb-3">Sugira Sua Própria Música</h4>
          <div className="flex space-x-2">
            <input
              type="text"
              value={customMusic}
              onChange={(e) => setCustomMusic(e.target.value)}
              className="flex-1 px-3 py-2 bg-gray-900 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="Nome da música e artista"
            />
            <button
              onClick={handleAddCustomMusic}
              disabled={!customMusic.trim()}
              className="bg-primary text-secondary py-2 px-4 rounded font-medium hover:bg-primary/90 transition-colors disabled:opacity-50"
            >
              Adicionar
            </button>
          </div>
          <p className="mt-2 text-sm text-gray-400">
            Nota: A disponibilidade da música dependerá dos direitos autorais e licenças.
          </p>
        </div>

        <div className="flex justify-end">
          <button
            onClick={handleSaveSelections}
            disabled={isSubmitting || !selectedMusic}
            className="bg-primary text-secondary py-2 px-6 rounded font-medium hover:bg-primary/90 transition-colors disabled:opacity-50"
          >
            {isSubmitting ? 'Salvando...' : 'Salvar Preferências'}
          </button>
        </div>
      </div>
    </div>
  );
} 