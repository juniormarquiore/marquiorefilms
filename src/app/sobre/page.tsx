import Image from 'next/image';

export default function SobrePage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Sobre a Marquiore Films</h1>
        
        <div className="max-w-3xl mx-auto">
          {/* História */}
          <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
            <h2 className="text-2xl font-semibold mb-6">Nossa História</h2>
            <div className="prose max-w-none">
              <p className="text-gray-600 mb-4">
                A Marquiore Films nasceu do sonho de transformar momentos especiais em arte cinematográfica. 
                Fundada por Junior Marquiore, nossa empresa tem 8 anos de experiência em filmagem de casamentos, 
                capturando não apenas imagens, mas sentimentos e emoções que tornam cada vídeo único.
              </p>
              <p className="text-gray-600">
                Com uma abordagem artística e visão cinematográfica, eternizamos cada momento importante 
                do seu grande dia, transformando-os em lembranças que durarão para sempre.
              </p>
            </div>
          </div>

          {/* Missão e Valores */}
          <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
            <h2 className="text-2xl font-semibold mb-6">Nossa Missão</h2>
            <p className="text-gray-600 mb-8">
              Transformar casamentos em verdadeiras obras de arte cinematográfica, capturando a essência 
              e a emoção de cada momento especial, criando memórias que serão apreciadas por gerações.
            </p>

            <h3 className="text-xl font-semibold mb-4">Nossos Valores</h3>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <span className="mr-2">🎥</span>
                <span>Excelência em cada detalhe da produção</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">❤️</span>
                <span>Dedicação e cuidado com cada projeto</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✨</span>
                <span>Criatividade e inovação em cada trabalho</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">🤝</span>
                <span>Compromisso com a satisfação dos clientes</span>
              </li>
            </ul>
          </div>

          {/* Equipamentos */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">Nossos Equipamentos</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium mb-2">Câmeras</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Câmeras profissionais 4K</li>
                  <li>• Lentes de alta qualidade</li>
                  <li>• Estabilizadores</li>
                  <li>• Iluminação profissional</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Drones</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Drones 4K</li>
                  <li>• Pilotos certificados</li>
                  <li>• Capturas aéreas</li>
                  <li>• Imagens panorâmicas</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Áudio</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Microfones profissionais</li>
                  <li>• Gravadores de áudio</li>
                  <li>• Sistemas de captação</li>
                  <li>• Mixagem de áudio</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Edição</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Software profissional</li>
                  <li>• Estações de trabalho</li>
                  <li>• Color grading</li>
                  <li>• Efeitos especiais</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 