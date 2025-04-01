'use client';

import { useState } from 'react';

interface TextContent {
  id: string;
  title: string;
  content: string;
  location: string;
}

export default function TextEditor() {
  const [textContents, setTextContents] = useState<TextContent[]>([
    {
      id: 'hero',
      title: 'Título Principal',
      content: 'Transformando momentos em arte cinematográfica',
      location: 'Home / Hero'
    },
    {
      id: 'about',
      title: 'Sobre Nós',
      content: 'A Marquiore Films é uma empresa especializada em filmagem de casamentos, com 8 anos de experiência transformando momentos especiais em arte cinematográfica.',
      location: 'Home / Sobre'
    },
    {
      id: 'services',
      title: 'Nossos Serviços',
      content: 'Oferecemos pacotes personalizados para capturar cada momento especial do seu casamento.',
      location: 'Home / Serviços'
    },
  ]);

  const [selectedTextId, setSelectedTextId] = useState<string | null>(null);
  
  const handleTextChange = (id: string, field: keyof TextContent, value: string) => {
    setTextContents(prevContents => 
      prevContents.map(content => 
        content.id === id ? { ...content, [field]: value } : content
      )
    );
  };

  const handleSave = () => {
    // Aqui implementaria lógica para salvar as alterações
    alert('Texto salvo com sucesso!');
  };

  const selectedText = selectedTextId 
    ? textContents.find(text => text.id === selectedTextId) 
    : null;

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Editor de Texto</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Lista de textos */}
        <div className="col-span-1 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Textos do Site</h2>
          <ul className="space-y-2">
            {textContents.map((text) => (
              <li 
                key={text.id}
                className={`p-3 rounded cursor-pointer hover:bg-gray-100 ${selectedTextId === text.id ? 'bg-gray-200' : ''} text-gray-700`}
                onClick={() => setSelectedTextId(text.id)}
              >
                <div className="font-medium">{text.title}</div>
                <div className="text-xs text-gray-500">{text.location}</div>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Editor de texto */}
        <div className="col-span-2 bg-white p-6 rounded-lg shadow-md">
          {selectedText ? (
            <div>
              <h2 className="text-xl font-semibold mb-4 text-gray-800">
                Editar: {selectedText.title}
              </h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Título
                  </label>
                  <input
                    type="text"
                    value={selectedText.title}
                    onChange={(e) => handleTextChange(selectedText.id, 'title', e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md text-gray-700"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Conteúdo
                  </label>
                  <textarea
                    value={selectedText.content}
                    onChange={(e) => handleTextChange(selectedText.id, 'content', e.target.value)}
                    rows={6}
                    className="w-full p-2 border border-gray-300 rounded-md text-gray-700"
                  />
                </div>
                
                <button
                  onClick={handleSave}
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                >
                  Salvar Alterações
                </button>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full">
              <p className="text-gray-500">Selecione um texto para editar</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 