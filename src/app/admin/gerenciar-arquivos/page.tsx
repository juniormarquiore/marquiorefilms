'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';

type FileType = 'image' | 'pdf';

interface FileUploadState {
  isUploading: boolean;
  progress: number;
  error: string;
  success: string;
}

export default function GerenciarArquivosPage() {
  const [fileType, setFileType] = useState<FileType>('image');
  const [uploadState, setUploadState] = useState<FileUploadState>({
    isUploading: false,
    progress: 0,
    error: '',
    success: '',
  });
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [destination, setDestination] = useState<string>('/images/portfolio');
  const [fileName, setFileName] = useState<string>('');

  const handleFileTypeChange = (type: FileType) => {
    setFileType(type);
    
    // Atualizar o destino com base no tipo de arquivo
    if (type === 'image') {
      setDestination('/images/portfolio');
    } else {
      setDestination('/docs');
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      setSelectedFile(file);
      
      // Gerar um nome de arquivo padrão baseado no nome original
      const originalName = file.name;
      const extension = originalName.split('.').pop();
      const baseName = originalName.split('.').slice(0, -1).join('.');
      
      // Remover acentos e caracteres especiais
      const cleanBaseName = baseName
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-zA-Z0-9]/g, '-')
        .toLowerCase();
      
      setFileName(`${cleanBaseName}.${extension}`);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setUploadState({
        ...uploadState,
        error: 'Nenhum arquivo selecionado',
      });
      return;
    }

    if (!fileName) {
      setUploadState({
        ...uploadState,
        error: 'Nome do arquivo inválido',
      });
      return;
    }

    // Simular o upload
    setUploadState({
      isUploading: true,
      progress: 0,
      error: '',
      success: '',
    });

    // Em um ambiente real, aqui você usaria uma API para fazer o upload do arquivo
    // Esta é apenas uma simulação
    const interval = setInterval(() => {
      setUploadState((prev) => {
        const newProgress = prev.progress + 10;
        
        if (newProgress >= 100) {
          clearInterval(interval);
          return {
            isUploading: false,
            progress: 100,
            error: '',
            success: `Arquivo "${fileName}" enviado com sucesso para ${destination}`,
          };
        }
        
        return {
          ...prev,
          progress: newProgress,
        };
      });
    }, 500);
  };

  const resetForm = () => {
    setSelectedFile(null);
    setFileName('');
    setUploadState({
      isUploading: false,
      progress: 0,
      error: '',
      success: '',
    });
    
    // Limpar o input de arquivo
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="min-h-screen bg-secondary pt-24 pb-16">
      <div className="container-custom mb-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-primary font-serif">Gerenciar Arquivos</h1>
          <Link 
            href="/admin" 
            className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md text-sm transition-colors"
          >
            Voltar ao Dashboard
          </Link>
        </div>

        <div className="bg-black/50 p-8 rounded-lg">
          <div className="mb-8">
            <h2 className="text-xl font-medium text-primary mb-6">Upload de Arquivos</h2>
            
            {/* Tipo de arquivo */}
            <div className="mb-6">
              <label className="block text-gray-300 text-sm font-medium mb-2">Tipo de Arquivo</label>
              <div className="flex space-x-4">
                <button
                  className={`px-4 py-2 rounded-md transition-colors ${
                    fileType === 'image' 
                      ? 'bg-primary text-secondary' 
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                  onClick={() => handleFileTypeChange('image')}
                >
                  Imagens
                </button>
                <button
                  className={`px-4 py-2 rounded-md transition-colors ${
                    fileType === 'pdf' 
                      ? 'bg-primary text-secondary' 
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                  onClick={() => handleFileTypeChange('pdf')}
                >
                  PDFs
                </button>
              </div>
            </div>
            
            {/* Destino */}
            <div className="mb-6">
              <label htmlFor="destination" className="block text-gray-300 text-sm font-medium mb-2">
                Destino
              </label>
              <input
                type="text"
                id="destination"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            
            {/* Seleção de arquivo */}
            <div className="mb-6">
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Selecionar Arquivo
              </label>
              <div className="flex items-center justify-center w-full">
                <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-600 border-dashed rounded-lg cursor-pointer bg-gray-800 hover:bg-gray-700 transition-colors">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                    </svg>
                    <p className="mb-2 text-sm text-gray-400">
                      <span className="font-semibold">Clique para fazer upload</span> ou arraste e solte
                    </p>
                    <p className="text-xs text-gray-400">
                      {fileType === 'image' ? 'PNG, JPG ou GIF (máx. 10MB)' : 'PDF (máx. 20MB)'}
                    </p>
                  </div>
                  <input 
                    ref={fileInputRef}
                    type="file"
                    className="hidden"
                    accept={fileType === 'image' ? "image/*" : "application/pdf"}
                    onChange={handleFileChange}
                  />
                </label>
              </div>
              {selectedFile && (
                <div className="mt-3 text-sm text-gray-400">
                  Arquivo selecionado: {selectedFile.name} ({Math.round(selectedFile.size / 1024)} KB)
                </div>
              )}
            </div>
            
            {/* Nome do arquivo */}
            <div className="mb-6">
              <label htmlFor="fileName" className="block text-gray-300 text-sm font-medium mb-2">
                Nome do Arquivo (como será salvo)
              </label>
              <input
                type="text"
                id="fileName"
                value={fileName}
                onChange={(e) => setFileName(e.target.value)}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Ex: casamento-ana-pedro.jpg"
              />
            </div>
            
            {/* Barra de progresso */}
            {uploadState.isUploading && (
              <div className="mb-6">
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div
                    className="bg-primary h-2.5 rounded-full"
                    style={{ width: `${uploadState.progress}%` }}
                  ></div>
                </div>
                <p className="mt-2 text-sm text-gray-400">
                  Enviando... {uploadState.progress}%
                </p>
              </div>
            )}
            
            {/* Mensagens de erro ou sucesso */}
            {uploadState.error && (
              <div className="mb-6 p-4 bg-red-900/50 border border-red-500 text-red-100 rounded-md">
                {uploadState.error}
              </div>
            )}
            
            {uploadState.success && (
              <div className="mb-6 p-4 bg-green-900/50 border border-green-500 text-green-100 rounded-md">
                {uploadState.success}
              </div>
            )}
            
            {/* Botões */}
            <div className="flex space-x-4">
              <button
                onClick={handleUpload}
                disabled={uploadState.isUploading || !selectedFile}
                className="bg-primary hover:bg-primary/90 text-secondary px-4 py-2 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {uploadState.isUploading ? 'Enviando...' : 'Enviar Arquivo'}
              </button>
              <button
                onClick={resetForm}
                className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md transition-colors"
              >
                Limpar
              </button>
            </div>
          </div>
          
          <div>
            <h2 className="text-xl font-medium text-primary mb-6">Instruções</h2>
            <div className="bg-gray-800/50 p-4 rounded-lg text-gray-300 text-sm leading-relaxed">
              <h3 className="font-medium mb-2">Como adicionar seus arquivos:</h3>
              <ol className="list-decimal list-inside space-y-2">
                <li>Selecione o tipo de arquivo que deseja enviar (imagem ou PDF)</li>
                <li>Verifique o diretório de destino correto</li>
                <li>Escolha o arquivo clicando ou arrastando para a área indicada</li>
                <li>Dê um nome adequado para o arquivo (sem espaços, acentos ou caracteres especiais)</li>
                <li>Clique em "Enviar Arquivo" e aguarde o término do upload</li>
              </ol>
              
              <h3 className="font-medium mt-4 mb-2">Observações importantes:</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Imagens devem ser enviadas para a pasta <code className="bg-gray-900 px-1 rounded">/images/portfolio</code></li>
                <li>PDFs devem ser enviados para a pasta <code className="bg-gray-900 px-1 rounded">/docs</code></li>
                <li>O tamanho máximo para imagens é de 10MB</li>
                <li>O tamanho máximo para PDFs é de 20MB</li>
                <li>Use nomes descritivos para facilitar a organização</li>
              </ul>
              
              <p className="mt-4">
                Uma vez que os arquivos estejam enviados, eles estarão disponíveis no site para download ou visualização.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 