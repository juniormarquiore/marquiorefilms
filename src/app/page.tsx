import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Background"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--background)]/90 to-[var(--background)]/80" />
        </div>
        
        <div className="container mx-auto px-4 z-10">
          <div className="text-center">
            <h1 className="elegant-title text-6xl md:text-8xl mb-6">
              Marquiore Films
            </h1>
            <p className="section-content mb-12">
              Transformando momentos em arte cinematográfica
            </p>
            <Link href="/contato" className="elegant-button">
              Entre em Contato
            </Link>
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Sobre Nós</h2>
          <div className="card-luxury max-w-4xl mx-auto text-center">
            <p className="section-content mb-8">
              A Marquiore Films é uma empresa especializada em filmagem de casamentos, 
              transformando momentos especiais em arte cinematográfica.
            </p>
            <Link
              href="/sobre"
              className="elegant-button inline-block"
            >
              Nossa História
            </Link>
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Nossos Serviços</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-luxury">
              <h3 className="elegant-title text-2xl mb-6">Filme do Casamento</h3>
              <p className="section-content">
                Capturamos cada momento especial do seu grande dia com qualidade cinematográfica.
              </p>
            </div>
            <div className="card-luxury">
              <h3 className="elegant-title text-2xl mb-6">Same Day Edit</h3>
              <p className="section-content">
                Edição especial no mesmo dia do evento para compartilhar momentos únicos.
              </p>
            </div>
            <div className="card-luxury">
              <h3 className="elegant-title text-2xl mb-6">Ensaio Pré-Wedding</h3>
              <p className="section-content">
                Sessões exclusivas para capturar a essência do seu amor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfólio Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Nosso Portfólio</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="card-luxury overflow-hidden">
                <div className="relative h-64 mb-4">
                  <Image
                    src={`/images/portfolio-${i}.jpg`}
                    alt={`Portfólio ${i}`}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <h3 className="elegant-title text-xl mb-2">Casamento {i}</h3>
                <p className="section-content">Uma história de amor única</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/portfolio" className="elegant-button">
              Ver Mais Trabalhos
            </Link>
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Entre em Contato</h2>
          <div className="card-luxury max-w-3xl mx-auto text-center">
            <p className="section-content mb-8">
              Estamos prontos para transformar seu casamento em uma obra de arte cinematográfica.
            </p>
            <Link href="/contato" className="elegant-button">
              Fale Conosco
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 