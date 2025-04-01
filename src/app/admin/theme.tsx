'use client';

import { useState } from 'react';

interface ThemeConfig {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  textColor: string;
  backgroundColor: string;
  fontHeading: string;
  fontBody: string;
}

export default function ThemeSettings() {
  const [theme, setTheme] = useState<ThemeConfig>({
    primaryColor: '#a67c52',
    secondaryColor: '#0f1013',
    accentColor: '#d4af7a',
    textColor: '#ffffff',
    backgroundColor: '#0f1013',
    fontHeading: 'Playfair Display',
    fontBody: 'Inter',
  });

  const handleChange = (field: keyof ThemeConfig, value: string) => {
    setTheme(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    // Aqui implementaria lógica para salvar as configurações
    alert('Configurações de tema salvas com sucesso!');
  };

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Configurações de Tema</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Configurações */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Cores e Fontes</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Cor Primária
              </label>
              <div className="flex items-center space-x-2">
                <input
                  type="color"
                  value={theme.primaryColor}
                  onChange={(e) => handleChange('primaryColor', e.target.value)}
                  className="w-12 h-8"
                />
                <input
                  type="text"
                  value={theme.primaryColor}
                  onChange={(e) => handleChange('primaryColor', e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md text-gray-700"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Cor Secundária
              </label>
              <div className="flex items-center space-x-2">
                <input
                  type="color"
                  value={theme.secondaryColor}
                  onChange={(e) => handleChange('secondaryColor', e.target.value)}
                  className="w-12 h-8"
                />
                <input
                  type="text"
                  value={theme.secondaryColor}
                  onChange={(e) => handleChange('secondaryColor', e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md text-gray-700"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Cor de Destaque
              </label>
              <div className="flex items-center space-x-2">
                <input
                  type="color"
                  value={theme.accentColor}
                  onChange={(e) => handleChange('accentColor', e.target.value)}
                  className="w-12 h-8"
                />
                <input
                  type="text"
                  value={theme.accentColor}
                  onChange={(e) => handleChange('accentColor', e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md text-gray-700"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Fonte para Títulos
              </label>
              <select
                value={theme.fontHeading}
                onChange={(e) => handleChange('fontHeading', e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md text-gray-700"
              >
                <option value="Playfair Display">Playfair Display</option>
                <option value="Montserrat">Montserrat</option>
                <option value="Roboto">Roboto</option>
                <option value="Merriweather">Merriweather</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Fonte para Textos
              </label>
              <select
                value={theme.fontBody}
                onChange={(e) => handleChange('fontBody', e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md text-gray-700"
              >
                <option value="Inter">Inter</option>
                <option value="Roboto">Roboto</option>
                <option value="Open Sans">Open Sans</option>
                <option value="Lato">Lato</option>
              </select>
            </div>
            
            <button
              onClick={handleSave}
              className="w-full mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            >
              Salvar Configurações
            </button>
          </div>
        </div>
        
        {/* Preview */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Visualização</h2>
          
          <div 
            className="rounded-lg p-6 h-64 overflow-hidden"
            style={{
              backgroundColor: theme.backgroundColor,
              color: theme.textColor,
              fontFamily: theme.fontBody
            }}
          >
            <h3 
              className="text-2xl mb-4"
              style={{ 
                color: theme.primaryColor,
                fontFamily: theme.fontHeading
              }}
            >
              Marquiore Films
            </h3>
            <p className="mb-4" style={{ color: theme.textColor }}>
              Este é um exemplo de como o tema será aplicado ao seu site.
            </p>
            <button
              className="px-4 py-2 rounded-md"
              style={{ 
                backgroundColor: theme.primaryColor,
                color: '#ffffff',
              }}
            >
              Botão de Exemplo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 