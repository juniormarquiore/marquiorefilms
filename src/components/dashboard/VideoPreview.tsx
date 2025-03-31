'use client';

import { useState } from 'react';

type VideoPreviewProps = {
  preview: {
    id: string;
    title: string;
    url: string;
    date: string;
    approved: boolean;
  };
};

export default function VideoPreview({ preview }: VideoPreviewProps) {
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmitFeedback = () => {
    if (!feedback.trim()) return;
    
    setIsSubmitting(true);
    
    // Simulação de envio para API
    setTimeout(() => {
      setIsSubmitting(false);
      setFeedback('');
      setShowFeedback(false);
      alert('Feedback enviado com sucesso!');
    }, 1000);
  };

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden">
      {/* Video Thumbnail */}
      <div className="aspect-video bg-gray-900 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center">
            <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Video Info */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-medium text-gray-100">{preview.title}</h3>
          {preview.approved ? (
            <span className="px-2 py-1 bg-green-900/30 text-green-400 rounded-full text-xs font-medium">
              Aprovado
            </span>
          ) : (
            <span className="px-2 py-1 bg-yellow-900/30 text-yellow-400 rounded-full text-xs font-medium">
              Aguardando Aprovação
            </span>
          )}
        </div>
        <p className="text-gray-400 text-sm mb-4">
          Compartilhado em: {new Date(preview.date).toLocaleDateString('pt-BR')}
        </p>

        <div className="flex space-x-2">
          <a 
            href={preview.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 bg-primary text-secondary font-medium py-2 px-4 rounded text-center hover:bg-primary/90 transition-colors"
          >
            Assistir
          </a>
          
          {!preview.approved && (
            <button 
              onClick={() => setShowFeedback(!showFeedback)}
              className="flex-1 bg-gray-700 text-white font-medium py-2 px-4 rounded hover:bg-gray-600 transition-colors"
            >
              {showFeedback ? 'Fechar' : 'Feedback'}
            </button>
          )}
        </div>

        {showFeedback && !preview.approved && (
          <div className="mt-4">
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Compartilhe sua opinião ou solicitações de alteração..."
              className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-primary"
              rows={3}
            />
            <div className="flex justify-end mt-2">
              <button
                onClick={handleSubmitFeedback}
                disabled={isSubmitting || !feedback.trim()}
                className="bg-primary text-secondary py-1 px-4 rounded text-sm font-medium hover:bg-primary/90 transition-colors disabled:opacity-50"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Feedback'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 