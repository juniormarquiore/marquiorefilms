'use client';

import { useState } from 'react';

// Componentes e tipos para as diferentes funcionalidades
interface TextContent {
  id: string;
  title: string;
  content: string;
  location: string;
}

interface ThemeConfig {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  textColor: string;
  backgroundColor: string;
  fontHeading: string;
  fontBody: string;
}

interface ImageItem {
  id: number;
  name: string;
  path: string;
}

export default function AdminDashboard() {
  // Estado para controlar a aba ativa
  const [activeTab, setActiveTab] = useState<'dashboard' | 'images' | 'texts' | 'theme'>('dashboard');

  // Estado para os projetos (simulado)
  const [projects] = useState([
    {
      id: 1,
      title: 'Casamento Maria e João',
      date: '15/04/2023',
      progress: 65,
      status: 'Em andamento',
      deadline: '30/06/2023'
    },
    {
      id: 2,
      title: 'Casamento Ana e Pedro',
      date: '22/05/2023',
      progress: 90,
      status: 'Aguardando aprovação',
      deadline: '15/07/2023'
    },
    {
      id: 3,
      title: 'Casamento Luciana e Rafael',
      date: '10/03/2023',
      progress: 100,
      status: 'Concluído',
      deadline: '05/05/2023'
    }
  ]);
  
  // Estado para as imagens
  const [siteImages] = useState<ImageItem[]>([
    { id: 1, name: 'Banner Principal', path: '/images/banner.jpg' },
    { id: 2, name: 'Fundo Sobre', path: '/images/about-bg.jpg' },
    { id: 3, name: 'Portfolio 1', path: '/images/portfolio-1.jpg' },
    { id: 4, name: 'Portfolio 2', path: '/images/portfolio-2.jpg' },
  ]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  // Estado para os textos
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

  // Estado para o tema
  const [theme, setTheme] = useState<ThemeConfig>({
    primaryColor: '#a67c52',
    secondaryColor: '#0f1013',
    accentColor: '#d4af7a',
    textColor: '#ffffff',
    backgroundColor: '#0f1013',
    fontHeading: 'Playfair Display',
    fontBody: 'Inter',
  });

  // Funções para manipulação dos estados
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreviewImage(imageUrl);
    }
  };

  const handleImageSave = () => {
    alert('Imagem salva com sucesso!');
    setPreviewImage(null);
  };

  const handleTextChange = (id: string, field: keyof TextContent, value: string) => {
    setTextContents(prevContents => 
      prevContents.map(content => 
        content.id === id ? { ...content, [field]: value } : content
      )
    );
  };

  const handleTextSave = () => {
    alert('Texto salvo com sucesso!');
  };

  const handleThemeChange = (field: keyof ThemeConfig, value: string) => {
    setTheme(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleThemeSave = () => {
    alert('Configurações de tema salvas com sucesso!');
  };

  const selectedText = selectedTextId 
    ? textContents.find(text => text.id === selectedTextId) 
    : null;

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Cabeçalho */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-800">Painel Administrativo Marquiore Films</h1>
        </div>
      </header>

      {/* Navegação por abas */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <nav className="flex space-x-4">
            <button 
              onClick={() => setActiveTab('dashboard')}
              className={`py-4 px-2 font-medium ${activeTab === 'dashboard' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
              Dashboard de Projetos
            </button>
            <button 
              onClick={() => setActiveTab('images')}
              className={`py-4 px-2 font-medium ${activeTab === 'images' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
              Gerenciar Imagens
            </button>
            <button 
              onClick={() => setActiveTab('texts')}
              className={`py-4 px-2 font-medium ${activeTab === 'texts' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
              Editar Textos
            </button>
            <button 
              onClick={() => setActiveTab('theme')}
              className={`py-4 px-2 font-medium ${activeTab === 'theme' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
              Configurar Tema
            </button>
          </nav>
        </div>
      </div>

      {/* Conteúdo da aba ativa */}
      <div className="container mx-auto px-4 py-8">
        {/* Dashboard de Projetos */}
        {activeTab === 'dashboard' && (
          <div>
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Seus Projetos</h2>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Título</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Progresso</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prazo</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ações</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {projects.map((project) => (
                    <tr key={project.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{project.title}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{project.date}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${project.progress}%` }}></div>
                        </div>
                        <span className="text-xs">{project.progress}%</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                          ${project.status === 'Concluído' ? 'bg-green-100 text-green-800' : 
                          project.status === 'Em andamento' ? 'bg-blue-100 text-blue-800' : 
                          'bg-yellow-100 text-yellow-800'}`}>
                          {project.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{project.deadline}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button className="text-blue-600 hover:text-blue-900 mr-3">Ver</button>
                        <button className="text-blue-600 hover:text-blue-900">Editar</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Gerenciador de Imagens */}
        {activeTab === 'images' && (
          <div>
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Gerenciar Imagens</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="col-span-1 bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">Imagens do Site</h3>
                <ul className="space-y-2">
                  {siteImages.map((image) => (
                    <li 
                      key={image.id}
                      className={`p-3 rounded cursor-pointer hover:bg-gray-100 ${selectedImage === image.path ? 'bg-gray-200' : ''} text-gray-700`}
                      onClick={() => setSelectedImage(image.path)}
                    >
                      {image.name}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="col-span-2 bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">
                  {selectedImage ? 'Substituir Imagem' : 'Upload de Nova Imagem'}
                </h3>
                
                {selectedImage && (
                  <div className="mb-4">
                    <p className="text-sm text-gray-500 mb-2">Imagem atual:</p>
                    <div className="w-full h-48 bg-gray-200 rounded-lg overflow-hidden">
                      <img 
                        src={selectedImage} 
                        alt="Imagem selecionada" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                )}
                
                {previewImage && (
                  <div className="mb-4">
                    <p className="text-sm text-gray-500 mb-2">Preview:</p>
                    <div className="w-full h-48 bg-gray-200 rounded-lg overflow-hidden">
                      <img 
                        src={previewImage} 
                        alt="Preview" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                )}
                
                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Selecione uma nova imagem
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="w-full p-2 border border-gray-300 rounded-md text-gray-700"
                  />
                </div>
                
                {previewImage && (
                  <button
                    onClick={handleImageSave}
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                  >
                    Salvar Alterações
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Editor de Textos */}
        {activeTab === 'texts' && (
          <div>
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Editar Textos do Site</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="col-span-1 bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">Textos do Site</h3>
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
              
              <div className="col-span-2 bg-white p-6 rounded-lg shadow-md">
                {selectedText ? (
                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-gray-800">
                      Editar: {selectedText.title}
                    </h3>
                    
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
                        onClick={handleTextSave}
                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                      >
                        Salvar Alterações
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-64">
                    <p className="text-gray-500">Selecione um texto para editar</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Configuração de Tema */}
        {activeTab === 'theme' && (
          <div>
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Configurar Tema do Site</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">Cores e Fontes</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Cor Primária
                    </label>
                    <div className="flex items-center space-x-2">
                      <input
                        type="color"
                        value={theme.primaryColor}
                        onChange={(e) => handleThemeChange('primaryColor', e.target.value)}
                        className="w-12 h-8"
                      />
                      <input
                        type="text"
                        value={theme.primaryColor}
                        onChange={(e) => handleThemeChange('primaryColor', e.target.value)}
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
                        onChange={(e) => handleThemeChange('secondaryColor', e.target.value)}
                        className="w-12 h-8"
                      />
                      <input
                        type="text"
                        value={theme.secondaryColor}
                        onChange={(e) => handleThemeChange('secondaryColor', e.target.value)}
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
                        onChange={(e) => handleThemeChange('accentColor', e.target.value)}
                        className="w-12 h-8"
                      />
                      <input
                        type="text"
                        value={theme.accentColor}
                        onChange={(e) => handleThemeChange('accentColor', e.target.value)}
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
                      onChange={(e) => handleThemeChange('fontHeading', e.target.value)}
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
                      onChange={(e) => handleThemeChange('fontBody', e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-md text-gray-700"
                    >
                      <option value="Inter">Inter</option>
                      <option value="Roboto">Roboto</option>
                      <option value="Open Sans">Open Sans</option>
                      <option value="Lato">Lato</option>
                    </select>
                  </div>
                  
                  <button
                    onClick={handleThemeSave}
                    className="w-full mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                  >
                    Salvar Configurações
                  </button>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">Visualização</h3>
                
                <div 
                  className="rounded-lg p-6 h-64 overflow-hidden"
                  style={{
                    backgroundColor: theme.backgroundColor,
                    color: theme.textColor,
                    fontFamily: theme.fontBody
                  }}
                >
                  <h4 
                    className="text-2xl mb-4"
                    style={{ 
                      color: theme.primaryColor,
                      fontFamily: theme.fontHeading
                    }}
                  >
                    Marquiore Films
                  </h4>
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
        )}
      </div>
    </div>
  );
} 