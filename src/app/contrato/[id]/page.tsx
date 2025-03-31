// Função necessária para exportação estática no GitHub Pages
export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
  ];
}

export default function ContratoPage() {
  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded mb-6" role="alert">
        <h2 className="text-xl font-bold mb-2">Versão Estática do GitHub Pages</h2>
        <p>Esta página requer funcionalidades dinâmicas que não estão disponíveis na versão estática hospedada no GitHub Pages.</p>
        <p className="mt-2">Para acessar todas as funcionalidades, por favor visite o site em produção.</p>
      </div>
    </div>
  );
} 