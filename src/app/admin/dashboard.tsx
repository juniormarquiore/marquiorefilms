'use client';

import Link from 'next/link';

export default function AdminDashboard() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8">Painel de Administração</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Link href="/admin/images">
          <a className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
            <h2 className="text-xl font-semibold">Editor de Imagens</h2>
            <p>Gerencie e faça upload de imagens.</p>
          </a>
        </Link>
        <Link href="/admin/texts">
          <a className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
            <h2 className="text-xl font-semibold">Editor de Texto</h2>
            <p>Edite textos e legendas do site.</p>
          </a>
        </Link>
        <Link href="/admin/theme">
          <a className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
            <h2 className="text-xl font-semibold">Configurações de Tema</h2>
            <p>Altere fontes e cores do site.</p>
          </a>
        </Link>
      </div>
    </div>
  );
} 