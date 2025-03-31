'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useMediaFilesStore, FileType, FileItem } from '@/store/media-files';

export default function FileManagerPage() {
  const { files, isLoading, error, fetchFiles, addFile, updateFile, deleteFile } = useMediaFilesStore();
  const [fileTypeFilter, setFileTypeFilter] = useState<FileType | 'all'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFile, setSelectedFile] = useState<FileItem | null>(null);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  
  // Estado para novo arquivo
  const [newFile, setNewFile] = useState({
    name: '',
    url: '',
    thumbnail: '',
    type: 'image' as FileType,
    size: '0 KB'
  });
  
  useEffect(() => {
    // Carrega os arquivos quando o componente é montado
    fetchFiles();
  }, [fetchFiles]);
  
  // Filtra os arquivos de acordo com o tipo e termo de busca
  const filteredFiles = files.filter(file => {
    const matchesType = fileTypeFilter === 'all' || file.type === fileTypeFilter;
    const matchesSearch = file.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesSearch;
  });
  
  // Manipuladores de eventos
  const handleFileTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFileTypeFilter(e.target.value as FileType | 'all');
  };
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  
  const handleDelete = async (id: string | number) => {
    if (window.confirm('Tem certeza que deseja excluir este arquivo?')) {
      await deleteFile(id);
    }
  };
  
  const handleCopyUrl = (url: string) => {
    navigator.clipboard.writeText(url).then(() => {
      alert('URL copiada para a área de transferência');
    }).catch(() => {
      alert('Erro ao copiar URL');
    });
  };
  
  const handleSelectFile = (file: FileItem) => {
    setSelectedFile(file);
  };
  
  const handleAddFile = async () => {
    // Validação simples
    if (!newFile.name || !newFile.url || !newFile.type) {
      alert('Por favor, preencha todos os campos obrigatórios');
      return;
    }
    
    await addFile({
      name: newFile.name,
      url: newFile.url,
      thumbnail: newFile.thumbnail || undefined,
      type: newFile.type,
      size: newFile.size
    });
    
    // Limpa o formulário e fecha o modal
    setNewFile({
      name: '',
      url: '',
      thumbnail: '',
      type: 'image' as FileType,
      size: '0 KB'
    });
    setIsUploadModalOpen(false);
  };
  
  // Função para formatar a data
  const formatDate = (dateString: string) => {
    return dateString;
  };
  
  // Ícones para tipos de arquivo
  const FileIcon = ({ type }: { type: FileType }) => {
    switch (type) {
      case 'image':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
          </svg>
        );
      case 'video':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0118 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5" />
          </svg>
        );
      case 'document':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
          </svg>
        );
      default:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
          </svg>
        );
    }
  };
  
  return (
    <div className="container-custom py-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="title mb-2">Gerenciador de Arquivos</h1>
            <p className="text-gray-400">
              Gerencie imagens, vídeos e outros arquivos do site
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <Link
              href="/dashboard/admin/site-editor"
              className="bg-secondary text-white px-4 py-2 rounded hover:bg-secondary/80 transition-colors border border-primary/20 flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 mr-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Voltar
            </Link>
          </div>
        </div>
        
        {/* Painel de arquivo selecionado */}
        {selectedFile && (
          <div className="bg-gray-800 p-6 rounded-lg border border-primary mb-8">
            <h2 className="text-xl font-medium mb-4 flex items-center">
              <span className="bg-primary/20 p-2 rounded mr-3">
                <FileIcon type={selectedFile.type} />
              </span>
              Arquivo Selecionado
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="col-span-1">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Nome do Arquivo</label>
                    <p className="text-white">{selectedFile.name}</p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Tipo</label>
                    <p className="text-white capitalize">{selectedFile.type}</p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Tamanho</label>
                    <p className="text-white">{selectedFile.size}</p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Data de Upload</label>
                    <p className="text-white">{formatDate(selectedFile.dateUploaded)}</p>
                  </div>
                </div>
              </div>
              
              <div className="col-span-2">
                {selectedFile.type === 'image' && (
                  <div className="relative aspect-video w-full overflow-hidden rounded">
                    <Image 
                      src={selectedFile.url}
                      alt={selectedFile.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                )}
                
                {selectedFile.type === 'video' && (
                  <div className="relative aspect-video w-full overflow-hidden rounded">
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-900/50">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-primary">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                      </svg>
                    </div>
                  </div>
                )}
                
                <div className="mt-4 flex justify-between">
                  <div>
                    <input 
                      type="text" 
                      value={selectedFile.url} 
                      readOnly 
                      className="bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white w-full md:w-80"
                    />
                  </div>
                  
                  <div className="flex gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCopyUrl(selectedFile.url);
                      }}
                      className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors"
                    >
                      Copiar URL
                    </button>
                    
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        // Aqui adicionaria a lógica para usar o arquivo no contexto desejado
                        alert(`Arquivo "${selectedFile.name}" selecionado com sucesso!`);
                      }}
                      className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/80 transition-colors"
                    >
                      Usar este arquivo
                    </button>
                    
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedFile(null);
                      }}
                      className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-500 transition-colors"
                    >
                      Desselecionar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {error && (
          <div className="bg-red-500/20 border border-red-600 text-red-200 px-4 py-3 rounded mb-6">
            {error}
          </div>
        )}
        
        <div className="bg-secondary/70 p-6 rounded-lg border border-primary/20 mb-8">
          {/* Barra de pesquisa e filtros */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
            <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
              <div className="relative w-full md:w-80">
                <input
                  type="text"
                  className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 pl-10 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Buscar arquivos..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
                <div className="absolute left-3 top-2.5 text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
                </div>
              </div>
              
              <div className="w-full md:w-auto">
                <select
                  className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                  value={fileTypeFilter}
                  onChange={handleFileTypeChange}
                >
                  <option value="all">Todos os arquivos</option>
                  <option value="image">Imagens</option>
                  <option value="video">Vídeos</option>
                  <option value="document">Documentos</option>
                  <option value="other">Outros</option>
                </select>
              </div>
            </div>
            
            <button
              onClick={() => setIsUploadModalOpen(true)}
              className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/80 transition-colors w-full md:w-auto"
            >
              <div className="flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                </svg>
                Adicionar Arquivo
              </div>
            </button>
          </div>
          
          {/* Mensagem de carregamento */}
          {isLoading && (
            <div className="text-center py-8">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
              <p className="mt-2 text-gray-400">Carregando arquivos...</p>
            </div>
          )}
          
          {/* Lista de arquivos */}
          {!isLoading && filteredFiles.length === 0 && (
            <div className="text-center py-8">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 mx-auto text-gray-500 mb-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z" />
              </svg>
              <p className="text-gray-400">Nenhum arquivo encontrado</p>
            </div>
          )}
          
          {!isLoading && filteredFiles.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredFiles.map((file) => (
                <div
                  key={file.id}
                  className={`bg-gray-800 p-4 rounded-lg border ${selectedFile?.id === file.id ? 'border-primary' : 'border-gray-700'} hover:border-primary/70 transition-all duration-300 ease-in-out cursor-pointer relative ${selectedFile?.id === file.id ? 'shadow-lg shadow-primary/20' : ''}`}
                  onClick={() => handleSelectFile(file)}
                >
                  {selectedFile?.id === file.id && (
                    <div className="absolute -top-2 -right-2 bg-primary text-white text-xs font-bold py-1 px-2 rounded-full shadow-md animate-pulse">
                      Selecionado
                    </div>
                  )}
                  <div className="flex items-start mb-3">
                    <div className="flex-shrink-0 bg-gray-700 p-2 rounded mr-3">
                      <FileIcon type={file.type} />
                    </div>
                    <div className="flex-1 overflow-hidden">
                      <h3 className="text-white font-medium truncate">{file.name}</h3>
                      <p className="text-gray-400 text-sm">
                        {file.size} • {formatDate(file.dateUploaded)}
                      </p>
                    </div>
                  </div>
                  
                  {file.type === 'image' && file.thumbnail && (
                    <div className="relative aspect-video w-full overflow-hidden rounded mb-3">
                      <Image 
                        src={file.thumbnail}
                        alt={file.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  
                  <div className="flex justify-between mt-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCopyUrl(file.url);
                      }}
                      className="text-gray-400 hover:text-white text-sm flex items-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z" />
                      </svg>
                      Copiar URL
                    </button>
                    
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSelectFile(file);
                      }}
                      className={`text-sm flex items-center ${selectedFile?.id === file.id ? 'text-primary font-medium' : 'text-gray-400 hover:text-white'}`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {selectedFile?.id === file.id ? 'Selecionado' : 'Selecionar'}
                    </button>
                    
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDelete(file.id);
                      }}
                      className="text-red-400 hover:text-red-300 text-sm flex items-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                      </svg>
                      Excluir
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      
      {/* Modal de Upload */}
      {isUploadModalOpen && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-gray-800 rounded-lg max-w-lg w-full p-6 border border-gray-700">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Adicionar Arquivo</h2>
              <button
                onClick={() => setIsUploadModalOpen(false)}
                className="text-gray-400 hover:text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Nome do Arquivo *</label>
                <input
                  type="text"
                  className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                  value={newFile.name}
                  onChange={(e) => setNewFile({...newFile, name: e.target.value})}
                  placeholder="Exemplo: banner-principal.jpg"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">URL do Arquivo *</label>
                <input
                  type="text"
                  className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                  value={newFile.url}
                  onChange={(e) => setNewFile({...newFile, url: e.target.value})}
                  placeholder="https://example.com/arquivos/imagem.jpg"
                />
                <p className="mt-1 text-xs text-gray-400">Cole o link completo do arquivo já hospedado</p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Tipo de Arquivo *</label>
                <select
                  className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                  value={newFile.type}
                  onChange={(e) => setNewFile({...newFile, type: e.target.value as FileType})}
                >
                  <option value="image">Imagem</option>
                  <option value="video">Vídeo</option>
                  <option value="document">Documento</option>
                  <option value="other">Outro</option>
                </select>
              </div>
              
              {newFile.type === 'image' && (
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">URL da Miniatura (opcional)</label>
                  <input
                    type="text"
                    className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                    value={newFile.thumbnail}
                    onChange={(e) => setNewFile({...newFile, thumbnail: e.target.value})}
                    placeholder="https://example.com/arquivos/miniatura.jpg"
                  />
                  <p className="mt-1 text-xs text-gray-400">Versão reduzida da imagem para exibição em miniaturas</p>
                </div>
              )}
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Tamanho do Arquivo *</label>
                <input
                  type="text"
                  className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                  value={newFile.size}
                  onChange={(e) => setNewFile({...newFile, size: e.target.value})}
                  placeholder="Exemplo: 1.2 MB"
                />
              </div>
            </div>
            
            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setIsUploadModalOpen(false)}
                className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={handleAddFile}
                className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/80 transition-colors"
                disabled={isLoading}
              >
                {isLoading ? 'Adicionando...' : 'Adicionar Arquivo'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 