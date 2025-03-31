export default function Sobre() {
  return (
    <section className="section bg-secondary">
      <div className="container-custom">
        <h1 className="title">Sobre a Marquiore Filmes</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-gray-300 mb-6">
              A Marquiore Filmes nasceu da paixão por capturar momentos especiais e transformá-los em memórias inesquecíveis. Nossa equipe é formada por profissionais apaixonados pela arte da cinematografia, especializados em filmagem de casamentos.
            </p>
            <p className="text-gray-300 mb-6">
              Acreditamos que cada casamento tem uma história única para contar, e nossa missão é capturar essa história da forma mais autêntica e emocionante possível. Utilizamos equipamentos de última geração e técnicas cinematográficas avançadas para criar filmes que vão além do simples registro - criamos narrativas visuais que transmitem a essência e o sentimento do seu dia especial.
            </p>
            <p className="text-gray-300">
              Trabalhamos de forma discreta e profissional, garantindo que você e seus convidados possam aproveitar o momento sem interrupções, enquanto nós cuidamos de capturar cada detalhe importante.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden">
            <div className="aspect-video w-full bg-gray-800"></div>
          </div>
        </div>
      </div>
    </section>
  );
} 