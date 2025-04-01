import Link from 'next/link';

export default function ServicosPage() {
  return (
    <div className="container-custom py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="title mb-8">Nossos Serviços</h1>
        <p className="text-gray-300 mb-8 text-lg">
          Na Marquiore Films, oferecemos uma variedade de serviços de filmagem para capturar os momentos especiais do seu casamento.
          Cada pacote é personalizado para atender às suas necessidades específicas.
        </p>
        
        <div className="space-y-12 mb-16">
          {/* Serviço 1 */}
          <div className="bg-secondary/70 p-8 rounded-lg border border-primary/10">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-primary">Filme do Casamento</h2>
            </div>
            <p className="text-gray-300 mb-6">
              Nosso serviço principal inclui a filmagem completa do seu casamento, desde os preparativos até a festa, com edição profissional e trilha sonora personalizada.
            </p>
            <ul className="space-y-2 text-gray-300 mb-6">
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Filmagem com múltiplas câmeras e drone</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Edição cinematográfica profissional</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Trilha sonora licenciada e personalizada</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Entrega em alta definição</span>
              </li>
            </ul>
            <Link href="/contrato" className="btn-primary inline-block">Solicitar Orçamento</Link>
          </div>
          
          {/* Serviço 2 */}
          <div className="bg-secondary/70 p-8 rounded-lg border border-primary/10">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-primary">Same Day Edit</h2>
            </div>
            <p className="text-gray-300 mb-6">
              Um filme curto editado no mesmo dia do casamento, que pode ser exibido durante a festa para todos os convidados, criando um momento especial de reviver os momentos do dia.
            </p>
            <ul className="space-y-2 text-gray-300 mb-6">
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Equipe dedicada para edição em tempo real</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Vídeo de 3-5 minutos pronto para exibição na festa</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Inclui momentos da cerimônia e preparativos</span>
              </li>
            </ul>
            <Link href="/contrato" className="btn-primary inline-block">Solicitar Orçamento</Link>
          </div>
          
          {/* Serviço 3 */}
          <div className="bg-secondary/70 p-8 rounded-lg border border-primary/10">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-primary">Ensaio Pré-Wedding</h2>
            </div>
            <p className="text-gray-300 mb-6">
              Uma sessão de filmagem em locais especiais para o casal, criando um filme que pode ser exibido durante a cerimônia ou festa, contando a história de amor dos noivos.
            </p>
            <ul className="space-y-2 text-gray-300 mb-6">
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Filmagem em locais especiais escolhidos pelo casal</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Edição cinematográfica com narrativa romântica</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Possibilidade de incluir depoimentos e histórias</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Filme de 3-7 minutos para exibição no casamento</span>
              </li>
            </ul>
            <Link href="/contrato" className="btn-primary inline-block">Solicitar Orçamento</Link>
          </div>
        </div>
        
        <div className="text-center">
          <h2 className="text-2xl font-bold text-primary mb-6">Seu Casamento Merece um Filme Inesquecível</h2>
          <p className="text-gray-300 mb-8">
            Não deixe as memórias do seu grande dia desaparecerem. Entre em contato conosco para criarmos juntos um filme que eternizará cada momento especial.
          </p>
          <Link href="/contato" className="btn-primary px-8 py-3 text-lg">Fale Conosco</Link>
        </div>
      </div>
    </div>
  );
} 