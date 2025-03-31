export default function ContatoPage() {
  return (
    <div className="container-custom py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="title mb-8">Entre em Contato</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div className="bg-secondary/70 p-6 rounded-lg border border-primary/10">
            <h2 className="text-xl font-bold text-primary mb-4">Informações de Contato</h2>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <span className="mr-2">📧</span>
                <span>juniormarquiore@gmail.com</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">📱</span>
                <span>WhatsApp: (21) 99475-8400</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">📸</span>
                <span>Instagram: @marquiore.films</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-secondary/70 p-6 rounded-lg border border-primary/10">
            <h2 className="text-xl font-bold text-primary mb-4">Horário de Atendimento</h2>
            <p className="text-gray-300 mb-4">
              Estamos disponíveis para atendê-lo nos seguintes horários:
            </p>
            <ul className="space-y-2 text-gray-300">
              <li>Segunda a Sexta: 9h às 18h</li>
              <li>Sábado: 9h às 12h</li>
              <li>Domingo: Fechado</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-black/50 p-8 rounded-lg border border-primary/10">
          <h2 className="text-xl font-bold text-primary mb-6">Envie-nos uma Mensagem</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-300 mb-2">Nome</label>
                <input 
                  type="text" 
                  className="w-full bg-secondary/70 border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Seu nome completo"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-secondary/70 border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="seu@email.com"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-gray-300 mb-2">Assunto</label>
              <input 
                type="text" 
                className="w-full bg-secondary/70 border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Assunto da mensagem"
              />
            </div>
            
            <div>
              <label className="block text-gray-300 mb-2">Mensagem</label>
              <textarea 
                className="w-full bg-secondary/70 border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary h-32"
                placeholder="Sua mensagem"
              ></textarea>
            </div>
            
            <div>
              <button 
                type="submit"
                className="bg-primary text-secondary font-bold py-3 px-8 rounded-md hover:bg-primary/90 transition-all"
              >
                Enviar Mensagem
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 