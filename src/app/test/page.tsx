import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black">
      <h1 className="text-3xl font-bold text-primary mb-8">Minha Imagem</h1>
      <div className="relative w-full max-w-lg overflow-hidden rounded-lg border-2 border-primary/30">
        <Image 
          src="/images/fotos/minha-imagem.jpg" 
          alt="Descrição da imagem" 
          width={1200} 
          height={800}
          className="w-full h-auto" 
        />
      </div>
      <p className="text-gray-300 mt-4 text-center max-w-md">
        Coloque sua imagem no diretório <code className="bg-gray-800 px-2 py-1 rounded text-primary">public/images/fotos/minha-imagem.jpg</code> para visualizá-la aqui.
      </p>
    </div>
  );
} 