import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Marquiore Films</h1>
          <p className="text-xl md:text-2xl mb-8">Transformando momentos em arte cinematográfica</p>
          <Link
            href="/contato"
            className="bg-primary text-white px-8 py-3 rounded-md text-lg hover:bg-primary-dark transition-colors"
          >
            Entre em Contato
          </Link>
        </div>
      </section>

      {/* Sobre Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Sobre Nós</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-700 mb-8">
              A Marquiore Films é uma empresa especializada em filmagem de casamentos, 
              transformando momentos especiais em arte cinematográfica.
            </p>
            <Link
              href="/sobre"
              className="text-primary hover:text-primary-dark transition-colors"
            >
              Saiba mais sobre nossa história →
            </Link>
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nossos Serviços</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Filme do Casamento</h3>
              <p className="text-gray-600">
                Capturamos cada momento especial do seu grande dia com qualidade profissional.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Same Day Edit</h3>
              <p className="text-gray-600">
                Edição rápida para compartilhar os melhores momentos do seu casamento no mesmo dia.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Ensaio Pré-Wedding</h3>
              <p className="text-gray-600">
                Sessão fotográfica especial para capturar a essência do casal antes do casamento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfólio Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nosso Portfólio</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src={`/images/portfolio-${i}.jpg`}
                  alt={`Portfólio ${i}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/portfolio"
              className="text-primary hover:text-primary-dark transition-colors"
            >
              Ver mais trabalhos →
            </Link>
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Entre em Contato</h2>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg text-gray-700 mb-8">
              Estamos prontos para transformar seu casamento em uma obra de arte cinematográfica.
            </p>
            <Link
              href="/contato"
              className="bg-primary text-white px-8 py-3 rounded-md text-lg hover:bg-primary-dark transition-colors"
            >
              Fale Conosco
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 