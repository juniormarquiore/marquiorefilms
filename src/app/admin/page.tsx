'use client';

import Link from 'next/link';

export default function AdminPage() {
  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Painel de Administração</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Link href="/admin/images" className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-gray-800">Editor de Imagens</h2>
          <p className="text-gray-600">Gerencie e faça upload de imagens.</p>
        </Link>
        
        <Link href="/admin/texts" className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-gray-800">Editor de Texto</h2>
          <p className="text-gray-600">Edite textos e legendas do site.</p>
        </Link>
        
        <Link href="/admin/theme" className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-gray-800">Configurações de Tema</h2>
          <p className="text-gray-600">Altere fontes e cores do site.</p>
        </Link>
        
        <Link href="/admin/dashboard" className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-gray-800">Dashboard de Projetos</h2>
          <p className="text-gray-600">Gerencie seus projetos ativos.</p>
        </Link>
      </div>
    </div>
  );
} 