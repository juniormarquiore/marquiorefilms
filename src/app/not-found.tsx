import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black p-4">
      <div className="max-w-lg text-center">
        <h1 className="text-4xl font-bold text-primary mb-6">Página não encontrada</h1>
        <p className="text-gray-300 mb-8">
          A página que você está procurando pode ter sido removida ou está temporariamente indisponível.
        </p>
        <p className="text-gray-300 mb-8">
          Este é um site estático hospedado no GitHub Pages. Para acessar as páginas dinâmicas, 
          por favor visite o site original.
        </p>
        <Link 
          href="/"
          className="bg-primary hover:bg-primary/80 text-white px-6 py-3 rounded-md transition-all"
        >
          Voltar para a página inicial
        </Link>
      </div>
    </div>
  );
} 