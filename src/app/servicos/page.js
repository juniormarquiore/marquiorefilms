import Link from 'next/link';

export default function ServicosPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Nossos Serviços</h1>
        
        <div className="max-w-6xl mx-auto">
          {/* Introdução */}
          <div className="text-center mb-12">
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Oferecemos diferentes pacotes para atender às necessidades específicas de cada casal, 
              garantindo que cada momento especial seja capturado com precisão e sensibilidade.
            </p>
          </div>

          {/* Pacotes Principais */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Pacote Basic */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-primary mb-4">Plano Basic</h3>
              <div className="text-3xl font-bold mb-6">R$ 3.900</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Filme de 4 a 6 minutos</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>1 Reel para redes sociais</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Making of da noiva</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>2 câmeras + drone</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Cobertura de 7 horas</span>
                </li>
              </ul>
              <Link 
                href="/contato" 
                className="block w-full py-3 px-4 bg-gray-800 text-center text-white hover:bg-gray-700 transition-colors rounded-md"
              >
                Escolher Pacote
              </Link>
            </div>

            {/* Pacote Excellence */}
            <div className="bg-white p-8 rounded-lg shadow-lg transform scale-105 border-2 border-primary">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white text-xs font-bold py-1 px-4 rounded-full">
                MAIS POPULAR
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Plano Excellence</h3>
              <div className="text-3xl font-bold mb-6">R$ 4.900</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Filme de 7 a 12 minutos</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>2 Reels para redes sociais</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Making of da noiva</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>2 câmeras + drone</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Cobertura de 8 horas</span>
                </li>
              </ul>
              <Link 
                href="/contato" 
                className="block w-full py-3 px-4 bg-primary text-center text-white hover:bg-primary-dark transition-colors rounded-md"
              >
                Escolher Pacote
              </Link>
            </div>

            {/* Pacote Deluxe */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-primary mb-4">Plano Deluxe</h3>
              <div className="text-3xl font-bold mb-6">R$ 6.300</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Filme de 12 a 18 minutos</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Ensaio pré-wedding</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>3 Reels para redes sociais</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Making of dos noivos</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>3 câmeras + drone</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Cobertura de 12 horas</span>
                </li>
              </ul>
              <Link 
                href="/contato" 
                className="block w-full py-3 px-4 bg-gray-800 text-center text-white hover:bg-gray-700 transition-colors rounded-md"
              >
                Escolher Pacote
              </Link>
            </div>
          </div>

          {/* Serviços Extras */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-center mb-8">Serviços Extras</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Same Day Edit */}
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Same Day Edit</h3>
                <p className="text-gray-600 mb-3">Exibição do vídeo no telão no dia do casamento.</p>
                <p className="text-xl font-bold">R$ 2.500</p>
              </div>
              
              {/* Pré-Wedding */}
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Pré-Wedding</h3>
                <p className="text-gray-600 mb-3">Ensaio romântico do casal.</p>
                <p className="text-xl font-bold">R$ 1.300</p>
              </div>
              
              {/* Fast Edit */}
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Fast Edit</h3>
                <p className="text-gray-600 mb-3">Vídeo principal entregue em até 7 dias.</p>
                <p className="text-xl font-bold">R$ 1.500</p>
              </div>
              
              {/* Story Maker */}
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Story Maker</h3>
                <p className="text-gray-600 mb-3">Cobertura para Stories em tempo real.</p>
                <p className="text-xl font-bold">R$ 1.500</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-6">
              Quer saber mais sobre nossos serviços ou tem alguma dúvida específica?
            </p>
            <Link
              href="/contato"
              className="inline-block bg-primary text-white px-8 py-3 rounded-md hover:bg-primary-dark transition-colors"
            >
              Entre em Contato
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 