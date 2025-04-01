'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSiteConfigStore } from '@/store/site-config';

export default function SettingsEditorPage() {
  const { config, setConfig, setTheme, saveConfig, loadConfig, isLoading, error } = useSiteConfigStore();

  useEffect(() => {
    // Carrega as configurações quando o componente é montado
    loadConfig();
  }, [loadConfig]);

  const handleSaveChanges = async () => {
    await saveConfig();
  };

  return (
    <div className="container-custom py-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="title mb-2">Configurações Gerais</h1>
            <p className="text-gray-400">
              Personalize elementos visuais e informações gerais do site
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
        
        {error && (
          <div className="bg-red-500/20 border border-red-600 text-red-200 px-4 py-3 rounded mb-6">
            {error}
          </div>
        )}
        
        {/* Logo e Favicon */}
        <div className="bg-secondary/70 p-6 rounded-lg border border-primary/20 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Logo e Favicon</h2>
            <button 
              className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/80 transition-colors"
              onClick={handleSaveChanges}
              disabled={isLoading}
            >
              {isLoading ? 'Salvando...' : 'Salvar Alterações'}
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Logo Principal</label>
              <div className="bg-gray-900 p-4 rounded-lg border border-gray-700 text-center">
                <div className="mb-4 h-20 flex items-center justify-center">
                  <div className="relative h-16 w-48">
                    {config.logoUrl ? (
                      <Image 
                        src={config.logoUrl} 
                        alt="Logo do site"
                        fill
                        className="object-contain"
                      />
                    ) : (
                      <div className="text-gray-400 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 mx-auto mb-2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                        </svg>
                        <p>Nenhuma logo carregada</p>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="mt-2 flex justify-center flex-col space-y-2">
                  <button className="inline-flex items-center justify-center bg-gray-800 hover:bg-gray-700 text-gray-300 px-4 py-2 rounded-md text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                    </svg>
                    Selecionar Logo
                  </button>
                  
                  <div className="text-xs text-gray-400">
                    Formato recomendado: PNG ou SVG com fundo transparente<br />
                    Tamanho recomendado: 240x80px
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Favicon</label>
              <div className="bg-gray-900 p-4 rounded-lg border border-gray-700 text-center">
                <div className="mb-4 h-20 flex items-center justify-center">
                  <div className="relative h-16 w-16">
                    {config.faviconUrl ? (
                      <Image 
                        src={config.faviconUrl} 
                        alt="Favicon do site"
                        fill
                        className="object-contain"
                      />
                    ) : (
                      <div className="text-gray-400 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 mx-auto mb-2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                        </svg>
                        <p>Nenhum favicon carregado</p>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="mt-2 flex justify-center flex-col space-y-2">
                  <button className="inline-flex items-center justify-center bg-gray-800 hover:bg-gray-700 text-gray-300 px-4 py-2 rounded-md text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                    </svg>
                    Selecionar Favicon
                  </button>
                  
                  <div className="text-xs text-gray-400">
                    Formato: ICO, PNG ou SVG<br />
                    Tamanho recomendado: 32x32px ou 64x64px
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-300 mb-2">Logo Alternativa (Versão para fundo claro)</label>
            <div className="bg-gray-100 p-4 rounded-lg border border-gray-700 text-center">
              <div className="mb-4 h-20 flex items-center justify-center">
                <div className="relative h-16 w-48">
                  <Image 
                    src="https://via.placeholder.com/240x80/333333/FFFFFF?text=Logo+Dark" 
                    alt="Logo alternativa"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              
              <div className="mt-2 flex justify-center flex-col space-y-2">
                <button className="inline-flex items-center justify-center bg-gray-800 hover:bg-gray-700 text-gray-300 px-4 py-2 rounded-md text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                  </svg>
                  Selecionar Logo Alternativa
                </button>
                
                <div className="text-xs text-gray-600">
                  Versão da logo para uso em fundos claros<br />
                  Mesmas dimensões da logo principal
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Cores do Site */}
        <div className="bg-secondary/70 p-6 rounded-lg border border-primary/20 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Cores do Site</h2>
            <button 
              className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/80 transition-colors"
              onClick={handleSaveChanges}
              disabled={isLoading}
            >
              {isLoading ? 'Salvando...' : 'Salvar Alterações'}
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Cor Primária</label>
              <div className="flex space-x-2">
                <div className="w-12 h-12 rounded bg-primary flex items-center justify-center overflow-hidden">
                  <input 
                    type="color" 
                    className="w-16 h-16 transform scale-150 cursor-pointer opacity-0" 
                    value={config.theme.primaryColor}
                    onChange={(e) => setTheme({ primaryColor: e.target.value })}
                  />
                </div>
                <input 
                  type="text" 
                  className="flex-1 bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                  value={config.theme.primaryColor}
                  onChange={(e) => setTheme({ primaryColor: e.target.value })}
                />
              </div>
              <p className="mt-1 text-xs text-gray-400">Usada para botões, links e elementos de destaque</p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Cor Secundária</label>
              <div className="flex space-x-2">
                <div className="w-12 h-12 rounded bg-secondary flex items-center justify-center overflow-hidden">
                  <input 
                    type="color" 
                    className="w-16 h-16 transform scale-150 cursor-pointer opacity-0" 
                    value={config.theme.secondaryColor}
                    onChange={(e) => setTheme({ secondaryColor: e.target.value })}
                  />
                </div>
                <input 
                  type="text" 
                  className="flex-1 bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                  value={config.theme.secondaryColor}
                  onChange={(e) => setTheme({ secondaryColor: e.target.value })}
                />
              </div>
              <p className="mt-1 text-xs text-gray-400">Usada para fundos, seções e elementos secundários</p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Cor de Texto Principal</label>
              <div className="flex space-x-2">
                <div className="w-12 h-12 rounded bg-white flex items-center justify-center overflow-hidden">
                  <input 
                    type="color" 
                    className="w-16 h-16 transform scale-150 cursor-pointer opacity-0" 
                    value={config.theme.textColor}
                    onChange={(e) => setTheme({ textColor: e.target.value })}
                  />
                </div>
                <input 
                  type="text" 
                  className="flex-1 bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                  value={config.theme.textColor}
                  onChange={(e) => setTheme({ textColor: e.target.value })}
                />
              </div>
              <p className="mt-1 text-xs text-gray-400">Cor do texto principal do site</p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Cor de Fundo</label>
              <div className="flex space-x-2">
                <div className="w-12 h-12 rounded bg-gray-900 flex items-center justify-center overflow-hidden">
                  <input 
                    type="color" 
                    className="w-16 h-16 transform scale-150 cursor-pointer opacity-0" 
                    value={config.theme.backgroundColor}
                    onChange={(e) => setTheme({ backgroundColor: e.target.value })}
                  />
                </div>
                <input 
                  type="text" 
                  className="flex-1 bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                  value={config.theme.backgroundColor}
                  onChange={(e) => setTheme({ backgroundColor: e.target.value })}
                />
              </div>
              <p className="mt-1 text-xs text-gray-400">Cor de fundo geral do site</p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Cor de Destaque</label>
              <div className="flex space-x-2">
                <div className="w-12 h-12 rounded bg-amber-600 flex items-center justify-center overflow-hidden">
                  <input 
                    type="color" 
                    className="w-16 h-16 transform scale-150 cursor-pointer opacity-0" 
                    value={config.theme.accentColor}
                    onChange={(e) => setTheme({ accentColor: e.target.value })}
                  />
                </div>
                <input 
                  type="text" 
                  className="flex-1 bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                  value={config.theme.accentColor}
                  onChange={(e) => setTheme({ accentColor: e.target.value })}
                />
              </div>
              <p className="mt-1 text-xs text-gray-400">Usada para elementos que precisam de atenção</p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Cor de Borda</label>
              <div className="flex space-x-2">
                <div className="w-12 h-12 rounded bg-gray-700 flex items-center justify-center overflow-hidden">
                  <input 
                    type="color" 
                    className="w-16 h-16 transform scale-150 cursor-pointer opacity-0" 
                    value={config.theme.borderColor}
                    onChange={(e) => setTheme({ borderColor: e.target.value })}
                  />
                </div>
                <input 
                  type="text" 
                  className="flex-1 bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                  value={config.theme.borderColor}
                  onChange={(e) => setTheme({ borderColor: e.target.value })}
                />
              </div>
              <p className="mt-1 text-xs text-gray-400">Usada para bordas e separadores</p>
            </div>
          </div>
        </div>
        
        {/* Rodapé e Informações Legais */}
        <div className="bg-secondary/70 p-6 rounded-lg border border-primary/20 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Rodapé e Informações Legais</h2>
            <button 
              className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/80 transition-colors"
              onClick={handleSaveChanges}
              disabled={isLoading}
            >
              {isLoading ? 'Salvando...' : 'Salvar Alterações'}
            </button>
          </div>
          
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-300 mb-2">Texto de Copyright</label>
            <input 
              type="text" 
              className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
              value={config.footerText || ''}
              onChange={(e) => setConfig({ footerText: e.target.value })}
              placeholder="© 2023 Marquiore Films. Todos os direitos reservados." 
            />
            <p className="mt-1 text-xs text-gray-400">Substitua o ano conforme necessário. O ano atual é adicionado automaticamente.</p>
          </div>
          
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-300 mb-2">Termos de Uso</label>
            <textarea 
              className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary min-h-[200px]"
              value={config.termsOfService || ''}
              onChange={(e) => setConfig({ termsOfService: e.target.value })}
            />
          </div>
          
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-300 mb-2">Política de Privacidade</label>
            <textarea 
              className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary min-h-[200px]"
              value={config.privacyPolicy || ''}
              onChange={(e) => setConfig({ privacyPolicy: e.target.value })}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Links Adicionais do Rodapé</label>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <input 
                  type="text" 
                  className="flex-1 bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                  value={config.footerLinks?.[0]?.text || ''}
                  onChange={(e) => {
                    const newLinks = [...(config.footerLinks || []), { text: e.target.value, url: config.footerLinks?.[0]?.url || '' }];
                    setConfig({ footerLinks: newLinks });
                  }}
                  placeholder="Texto do link"
                />
                <input 
                  type="text" 
                  className="flex-1 bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                  value={config.footerLinks?.[0]?.url || ''}
                  onChange={(e) => {
                    const newLinks = [...(config.footerLinks || []), { text: config.footerLinks?.[0]?.text || '', url: e.target.value }];
                    setConfig({ footerLinks: newLinks });
                  }}
                  placeholder="URL"
                />
                <button className="text-gray-400 hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="flex items-center space-x-4">
                <input 
                  type="text" 
                  className="flex-1 bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                  value={config.footerLinks?.[1]?.text || ''}
                  onChange={(e) => {
                    const newLinks = [...(config.footerLinks || []), { text: e.target.value, url: config.footerLinks?.[1]?.url || '' }];
                    setConfig({ footerLinks: newLinks });
                  }}
                  placeholder="Texto do link"
                />
                <input 
                  type="text" 
                  className="flex-1 bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                  value={config.footerLinks?.[1]?.url || ''}
                  onChange={(e) => {
                    const newLinks = [...(config.footerLinks || []), { text: config.footerLinks?.[1]?.text || '', url: e.target.value }];
                    setConfig({ footerLinks: newLinks });
                  }}
                  placeholder="URL"
                />
                <button className="text-gray-400 hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            
            <button className="mt-4 text-primary hover:text-primary/80 text-sm flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              Adicionar link
            </button>
          </div>
        </div>
        
        {/* Scripts Analytics */}
        <div className="bg-secondary/70 p-6 rounded-lg border border-primary/20 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Scripts de Analytics</h2>
            <button 
              className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/80 transition-colors"
              onClick={handleSaveChanges}
              disabled={isLoading}
            >
              {isLoading ? 'Salvando...' : 'Salvar Alterações'}
            </button>
          </div>
          
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-300 mb-2">Google Analytics ID</label>
            <input 
              type="text" 
              className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
              value={config.googleAnalyticsId || ''}
              onChange={(e) => setConfig({ googleAnalyticsId: e.target.value })}
              placeholder="G-XXXXXXXXXX ou UA-XXXXXXXX-X"
            />
            <p className="mt-1 text-xs text-gray-400">ID de acompanhamento do Google Analytics</p>
          </div>
          
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-300 mb-2">Meta Pixel ID</label>
            <input 
              type="text" 
              className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
              value={config.metaPixelId || ''}
              onChange={(e) => setConfig({ metaPixelId: e.target.value })}
              placeholder="XXXXXXXXXXXXXXXXXXX"
            />
            <p className="mt-1 text-xs text-gray-400">ID do Facebook/Meta Pixel</p>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Outros Scripts de Analytics</label>
            <textarea 
              className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary font-mono text-sm min-h-[150px]"
              value={config.otherAnalyticsScripts || ''}
              onChange={(e) => setConfig({ otherAnalyticsScripts: e.target.value })}
              placeholder="<!-- Cole aqui outros scripts de acompanhamento -->"
            />
            <p className="mt-1 text-xs text-gray-400">Cole o código de outras ferramentas de analytics (HotJar, Clarity, etc)</p>
          </div>
        </div>
      </div>
    </div>
  );
} 