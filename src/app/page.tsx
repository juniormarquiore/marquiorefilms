import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden bg-black">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full flex items-center justify-center">
            {/* Fundo com as mãos da Criação de Adão */}
            <div className="w-full md:w-3/4 max-w-4xl relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black z-10"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10"></div>
              <Image 
                src="https://i.imgur.com/UOp1HkX.jpg" 
                alt="A Criação de Adão - Mãos" 
                width={1200} 
                height={600}
                priority
                className="w-full h-auto relative opacity-90"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container-custom relative z-10">
          <div className="max-w-3xl flex flex-col items-start">
            <div className="w-24 h-1 bg-primary mb-8"></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 font-serif">
              <span className="block text-primary">Marquiore Films</span>
              <span className="block">Filmagem de Casamentos</span>
            </h1>
            <p className="text-xl text-gray-200 mb-10 max-w-2xl">
              Capturamos emoções, transformamos momentos em lembranças eternas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/portfolio" className="btn-primary px-8 py-3 text-lg">Ver Portfólio</Link>
              <Link href="/contato" className="border border-primary text-primary hover:bg-primary/10 px-8 py-3 rounded-md transition-all text-lg">Fale Conosco</Link>
            </div>
          </div>
        </div>

        {/* Elemento decorativo inspirado na Criação de Adão */}
        <div className="absolute bottom-10 right-10 md:bottom-20 md:right-20 z-10 hidden md:block">
          <div className="text-primary font-serif italic text-lg md:text-xl relative before:content-[''] before:absolute before:w-20 before:h-1 before:bg-primary/30 before:-left-24 before:top-1/2">
            "A arte nasce onde o divino toca o humano"
          </div>
        </div>
        
        {/* Elemento decorativo adicional */}
        <div className="absolute top-1/4 left-10 transform -rotate-90 hidden lg:block">
          <div className="text-gray-500 font-serif tracking-widest text-sm">MARQUIORE FILMS</div>
        </div>
      </section>

      {/* About Section */}
      <section className="section bg-secondary">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="title flex items-center">
                <span className="mr-3">Sobre a Marquiore Films</span>
                <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 20C16.418 20 20 16.418 20 12C20 7.582 16.418 4 12 4C7.582 4 4 7.582 4 12C4 16.418 7.582 20 12 20Z" fill="currentColor"/>
                  <path d="M12 17L12 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="12" cy="7.5" r="1.5" fill="currentColor"/>
                </svg>
              </h2>
              <p className="text-gray-300 mb-6">
                A Marquiore Films, fundada por Junior Marquiore, tem 8 anos de experiência em filmagem de casamentos. Nosso diferencial é capturar não apenas imagens, mas sentimentos, criando filmes autênticos e emocionantes.
              </p>
              <p className="text-gray-300 mb-8">
                Com uma abordagem artística e visão cinematográfica, eternizamos cada momento importante do seu grande dia, transformando-os em lembranças que durarão para sempre.
              </p>
              <Link href="/sobre" className="btn-primary">Conheça Nossa História</Link>
            </div>
            <div className="rounded-lg overflow-hidden relative">
              {/* Imagem substituída por uma com elementos inspirados em arte renascentista */}
              <div className="aspect-video w-full bg-gray-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center" 
                  style={{ backgroundImage: "url('https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg')" }}>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-primary font-serif italic text-lg">
                  "A verdadeira arte nasce quando o momento e a eternidade se encontram"
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-black">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="title">Nossos Serviços</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Oferecemos diferentes pacotes para atender às necessidades específicas de cada casal, garantindo que cada momento especial seja capturado com precisão e sensibilidade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-secondary/50 p-8 rounded-lg">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Filme do Casamento</h3>
              <p className="text-gray-300 mb-6">
                Produzimos um filme completo do seu casamento, desde os preparativos até a festa, com edição profissional e trilha sonora personalizada.
              </p>
              <Link href="/servicos" className="text-primary hover:underline inline-flex items-center">
                Saiba mais
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Service 2 */}
            <div className="bg-secondary/50 p-8 rounded-lg">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Same Day Edit</h3>
              <p className="text-gray-300 mb-6">
                Um filme curto editado no mesmo dia do casamento, que pode ser exibido durante a festa para todos os convidados.
              </p>
              <Link href="/servicos" className="text-primary hover:underline inline-flex items-center">
                Saiba mais
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Service 3 */}
            <div className="bg-secondary/50 p-8 rounded-lg">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Ensaio Pré-Wedding</h3>
              <p className="text-gray-300 mb-6">
                Filmagem em locais especiais para o casal, criando um filme que pode ser exibido durante a cerimônia ou festa.
              </p>
              <Link href="/servicos" className="text-primary hover:underline inline-flex items-center">
                Saiba mais
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="section bg-secondary">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="title">Nossos Trabalhos</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Confira alguns dos nossos filmes mais recentes e deixe-se inspirar pela magia que podemos criar no seu grande dia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Video 1 */}
            <div className="group">
              <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden relative mb-4">
                {/* Placeholder para thumbnail do vídeo */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center">
                    <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-medium text-primary">Ana & Pedro</h3>
              <p className="text-gray-400">Casamento na Praia - Florianópolis</p>
            </div>

            {/* Video 2 */}
            <div className="group">
              <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden relative mb-4">
                {/* Placeholder para thumbnail do vídeo */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center">
                    <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-medium text-primary">Mariana & Lucas</h3>
              <p className="text-gray-400">Casamento no Campo - São Paulo</p>
            </div>

            {/* Video 3 */}
            <div className="group">
              <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden relative mb-4">
                {/* Placeholder para thumbnail do vídeo */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center">
                    <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-medium text-primary">Carolina & Rafael</h3>
              <p className="text-gray-400">Casamento Noturno - Rio de Janeiro</p>
            </div>
          </div>

          <div className="text-center">
            <Link href="/portfolio" className="btn-primary">Ver Mais Trabalhos</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-black">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="title">O Que Nossos Clientes Dizem</h2>
            <div className="h-1 w-24 bg-primary/50 mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Veja o que os casais que confiaram em nosso trabalho têm a dizer sobre a experiência com a Marquiore Films.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-secondary/50 p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <div className="mr-4">
                  <div className="w-16 h-16 rounded-full bg-gray-700 flex items-center justify-center text-primary">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="text-gray-400">Cliente</p>
                </div>
              </div>
              <p className="text-gray-300 italic">
                "Marquiore, eu não consigo parar de assistir! Parece um filme, sério!"
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-secondary/50 p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <div className="mr-4">
                  <div className="w-16 h-16 rounded-full bg-gray-700 flex items-center justify-center text-primary">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="text-gray-400">Cliente</p>
                </div>
              </div>
              <p className="text-gray-300 italic">
                "Nunca vi um vídeo de casamento tão lindo na minha vida!"
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-secondary/50 p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <div className="mr-4">
                  <div className="w-16 h-16 rounded-full bg-gray-700 flex items-center justify-center text-primary">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="text-gray-400">Cliente</p>
                </div>
              </div>
              <p className="text-gray-300 italic">
                "O sorriso não saiu do rosto um só minuto! Queria 8 horas de vídeo!"
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section className="section bg-black relative overflow-hidden">
        {/* Elemento decorativo inspirado em arte renascentista */}
        <div className="absolute top-0 right-0 w-64 h-64 opacity-5 bg-contain bg-no-repeat transform rotate-180"
          style={{ backgroundImage: "url('https://i.imgur.com/UOp1HkX.jpg')" }}>
        </div>
        
        <div className="container-custom">
          <div className="text-center mb-16 relative">
            <h2 className="title">Nossos Pacotes</h2>
            <div className="h-1 w-24 bg-primary/50 mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Escolha o pacote que melhor se adapta às suas necessidades e deixe-nos transformar o seu casamento em uma verdadeira obra cinematográfica.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pacote Basic */}
            <div className="bg-secondary/50 p-8 rounded-lg border border-gray-800 hover:border-primary/30 transition-all">
              <h3 className="text-xl font-bold text-primary mb-4">Plano Basic</h3>
              <div className="text-3xl font-bold text-white mb-6">R$ 3.900</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Filme de 4 a 6 minutos</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>1 Reel para redes sociais</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Making of da noiva</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>2 câmeras + drone</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Cobertura de 7 horas</span>
                </li>
              </ul>
              <Link 
                href="/contrato" 
                className="block w-full py-3 px-4 bg-gray-800 text-center text-primary hover:bg-gray-700 transition-colors rounded-md font-medium"
              >
                Escolher Pacote
              </Link>
            </div>

            {/* Pacote Excellence */}
            <div className="bg-secondary/50 p-8 rounded-lg transform scale-105 border-2 border-primary/30 shadow-lg shadow-primary/5 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-secondary text-xs font-bold py-1 px-4 rounded-full">
                MAIS POPULAR
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Plano Excellence</h3>
              <div className="text-3xl font-bold text-white mb-6">R$ 4.900</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Filme de 7 a 12 minutos</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>2 Reels para redes sociais</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Making of da noiva</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>2 câmeras + drone</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Cobertura de 8 horas</span>
                </li>
              </ul>
              <Link 
                href="/contrato" 
                className="block w-full py-3 px-4 bg-primary text-center text-secondary hover:bg-primary/90 transition-colors rounded-md font-medium"
              >
                Escolher Pacote
              </Link>
            </div>

            {/* Pacote Deluxe */}
            <div className="bg-secondary/50 p-8 rounded-lg border border-gray-800 hover:border-primary/30 transition-all relative overflow-hidden">
              {/* Elemento artístico */}
              <div className="absolute -right-5 -top-5 opacity-5 w-32 h-32 bg-contain bg-no-repeat"
                style={{ backgroundImage: "url('https://i.imgur.com/UOp1HkX.jpg')" }}>
              </div>
            
              <h3 className="text-xl font-bold text-primary mb-4">Plano Deluxe</h3>
              <div className="text-3xl font-bold text-white mb-6">R$ 6.300</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Filme de 12 a 18 minutos</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Ensaio pré-wedding</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>3 Reels para redes sociais</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Making of dos noivos</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>3 câmeras + drone</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Cobertura de 12 horas</span>
                </li>
              </ul>
              <Link 
                href="/contrato" 
                className="block w-full py-3 px-4 bg-gray-800 text-center text-primary hover:bg-gray-700 transition-colors rounded-md font-medium"
              >
                Escolher Pacote
              </Link>
            </div>
          </div>
          
          {/* Serviços Extras */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-primary mb-8 text-center">Serviços Extras</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Same Day Edit */}
              <div className="bg-secondary/30 p-6 rounded-lg border border-gray-800">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-primary">Same Day Edit</h4>
                </div>
                <p className="text-gray-300 mb-3">Exibição do vídeo no telão no dia do casamento.</p>
                <p className="text-xl font-bold text-white">R$ 2.500</p>
              </div>
              
              {/* Pré-Wedding */}
              <div className="bg-secondary/30 p-6 rounded-lg border border-gray-800">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-primary">Pré-Wedding</h4>
                </div>
                <p className="text-gray-300 mb-3">Ensaio romântico do casal.</p>
                <p className="text-xl font-bold text-white">R$ 1.300</p>
              </div>
              
              {/* Fast Edit */}
              <div className="bg-secondary/30 p-6 rounded-lg border border-gray-800">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-primary">Fast Edit</h4>
                </div>
                <p className="text-gray-300 mb-3">Vídeo principal entregue em até 7 dias.</p>
                <p className="text-xl font-bold text-white">R$ 1.500</p>
              </div>
              
              {/* Story Maker */}
              <div className="bg-secondary/30 p-6 rounded-lg border border-gray-800">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-primary">Story Maker</h4>
                </div>
                <p className="text-gray-300 mb-3">Cobertura para Stories em tempo real.</p>
                <p className="text-xl font-bold text-white">R$ 1.500</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-black relative overflow-hidden">
        {/* Padrão decorativo inspirado em arte renascentista */}
        <div className="absolute inset-0 opacity-5 bg-repeat"
          style={{ backgroundImage: "url('https://img.freepik.com/free-vector/renaissance-pattern-background-vector-elegant-floral-ornament_53876-136590.jpg')" }}>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-12">
            <h2 className="title">Entre em Contato</h2>
            <div className="h-1 w-24 bg-primary/50 mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Entre em contato para conversarmos sobre como podemos transformar o seu casamento em lembranças eternas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contato - Email */}
            <div className="bg-secondary/30 backdrop-blur-sm p-8 rounded-lg border border-gray-800 hover:border-primary/20 transition-all text-center relative overflow-hidden group">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-primary mb-4">Email</h3>
              <p className="text-gray-300">juniormarquiore@gmail.com</p>
              <p className="text-gray-300 mt-2">Resposta em até 24 horas</p>
              
              {/* Elemento decorativo pilar grego */}
              <div className="w-full h-8 mt-8 bg-bottom bg-contain bg-no-repeat opacity-20"
                style={{ backgroundImage: "url('https://www.pngkey.com/png/full/419-4191728_column-pillar-png-greek-column-png.png')" }}>
              </div>
            </div>

            {/* Contato - WhatsApp */}
            <div className="bg-secondary/30 backdrop-blur-sm p-8 rounded-lg border border-gray-800 hover:border-primary/20 transition-all text-center relative overflow-hidden group">
              {/* Elemento decorativo inspirado na Criação de Adão (sutil) */}
              <div className="absolute -right-12 -top-12 w-24 h-24 opacity-10 bg-contain bg-no-repeat transform rotate-45 group-hover:rotate-90 transition-transform duration-700"
                style={{ backgroundImage: "url('https://i.imgur.com/UOp1HkX.jpg')" }}>
              </div>
              
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-primary mb-4">WhatsApp</h3>
              <p className="text-gray-300">Solicite um orçamento</p>
              <p className="text-gray-300 mt-2 mb-4">Resposta rápida</p>
              
              <a 
                href="https://api.whatsapp.com/send?phone=5521994758400&text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-colors"
              >
                Enviar Mensagem
              </a>
              
              {/* Elemento decorativo pilar grego */}
              <div className="w-full h-8 mt-8 bg-bottom bg-contain bg-no-repeat opacity-20"
                style={{ backgroundImage: "url('https://www.pngkey.com/png/full/419-4191728_column-pillar-png-greek-column-png.png')" }}>
              </div>
            </div>

            {/* Contato - Instagram */}
            <div className="bg-secondary/30 backdrop-blur-sm p-8 rounded-lg border border-gray-800 hover:border-primary/20 transition-all text-center relative overflow-hidden group">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-primary mb-4">Instagram</h3>
              <p className="text-gray-300">@marquiore.films</p>
              <p className="text-gray-300 mt-2 mb-4">Confira nossos trabalhos</p>
              
              <a 
                href="https://www.instagram.com/marquiore.films" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded-lg transition-colors hover:from-purple-600 hover:to-pink-600"
              >
                Seguir
              </a>
              
              {/* Elemento decorativo pilar grego */}
              <div className="w-full h-8 mt-8 bg-bottom bg-contain bg-no-repeat opacity-20"
                style={{ backgroundImage: "url('https://www.pngkey.com/png/full/419-4191728_column-pillar-png-greek-column-png.png')" }}>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 