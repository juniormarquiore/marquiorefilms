'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface ContentSection {
  id: string;
  title: string;
  content: string;
  type: 'text' | 'image';
  imageUrl?: string;
}

export default function AdminPage() {
  const router = useRouter();
  const [sections, setSections] = useState<ContentSection[]>([
    {
      id: 'hero',
      title: 'Hero Section',
      content: 'Transformando momentos em arte cinematográfica',
      type: 'text',
    },
    {
      id: 'about',
      title: 'Sobre Nós',
      content: 'A Marquiore Films é uma empresa especializada em filmagem de casamentos, transformando momentos especiais em arte cinematográfica.',
      type: 'text',
    },
    {
      id: 'services',
      title: 'Nossos Serviços',
      content: 'Oferecemos pacotes personalizados para capturar cada momento especial do seu casamento.',
      type: 'text',
    },
  ]);

  const handleSave = async () => {
    try {
      // Aqui você implementaria a lógica para salvar no backend
      console.log('Salvando alterações:', sections);
      alert('Alterações salvas com sucesso!');
    } catch (error) {
      console.error('Erro ao salvar:', error);
      alert('Erro ao salvar alterações');
    }
  };

  const handleSectionChange = (id: string, field: keyof ContentSection, value: string) => {
    setSections(sections.map(section => 
      section.id === id ? { ...section, [field]: value } : section
    ));
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Gerenciador de Conteúdo</h1>
            <button
              onClick={handleSave}
              className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition-colors"
            >
              Salvar Alterações
            </button>
          </div>

          <div className="space-y-6">
            {sections.map(section => (
              <div key={section.id} className="border rounded-lg p-4">
                <h2 className="text-lg font-semibold mb-4">{section.title}</h2>
                
                {section.type === 'text' ? (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Conteúdo
                      </label>
                      <textarea
                        value={section.content}
                        onChange={(e) => handleSectionChange(section.id, 'content', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        rows={4}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        URL da Imagem
                      </label>
                      <input
                        type="text"
                        value={section.imageUrl || ''}
                        onChange={(e) => handleSectionChange(section.id, 'imageUrl', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 