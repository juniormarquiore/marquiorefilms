'use client';

import { useState } from 'react';

export default function ImageEditor() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  // Lista de imagens do site (simulado)
  const siteImages = [
    { id: 1, name: 'Banner Principal', path: '/images/banner.jpg' },
    { id: 2, name: 'Fundo Sobre', path: '/images/about-bg.jpg' },
    { id: 3, name: 'Portfolio 1', path: '/images/portfolio-1.jpg' },
    { id: 4, name: 'Portfolio 2', path: '/images/portfolio-2.jpg' },
  ];

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Criar URL temporária para preview
      const imageUrl = URL.createObjectURL(file);
      setPreviewImage(imageUrl);
    }
  };

  const handleImageSave = () => {
    // Aqui implementaria lógica para salvar a imagem
    alert('Imagem salva com sucesso!');
    setPreviewImage(null);
  };

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Editor de Imagens</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Lista de imagens do site */}
        <div className="col-span-1 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Imagens do Site</h2>
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
        
        {/* Preview e upload */}
        <div className="col-span-2 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            {selectedImage ? 'Substituir Imagem' : 'Upload de Nova Imagem'}
          </h2>
          
          {/* Imagem selecionada */}
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
          
          {/* Preview da nova imagem */}
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
          
          {/* Upload de imagem */}
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
          
          {/* Botão de salvar */}
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
  );
} 