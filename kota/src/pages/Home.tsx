import { BookOpen, Heart, Star } from 'lucide-react';
import { Hero } from '../components/Hero';

export function Home() {

  return (
    <>
      <Hero />

{/* Nova Seção: Sobre Nós / Nossa História */}
      <section id="historia" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex flex-col md:flex-row items-center gap-16">
            
            {/* Lado Esquerdo: Imagem Decorativa Ajustada para Baixo */}
            {/* 1. Removi a margem negativa e o animate-pulse totalmente.
                2. Adicionei 'md:mt-16' para empurrá-la para baixo no desktop.
                3. Mantive 'z-10' e 'relative' apenas por segurança de empilhamento. */}
            <div className="flex-1 relative md:mt-16 z-10"> 
              
              {/* Imagem Principal - Limpa, sem adereços, com borda branca e sombra */}
              <img 
                src="public\WhatsApp Image 2026-05-27 at 09.03.42.jpeg"
                alt="Nossa Cozinha" 
                className="rounded-3xl shadow-2xl relative object-cover h-[500px] w-full border-8 border-white"
              />
            </div>

            {/* Lado Direito: Texto da História */}
            <div className="flex-1 space-y-6 pt-4"> {/* pt-4 para manter o alinhamento com o topo da imagem subida */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 text-orange-600 rounded-full text-sm font-bold uppercase tracking-wider">
                <BookOpen size={16} />
                Nossa Jornada
              </div>
              
              <h2 className="text-4xl font-black text-gray-800 leading-tight">
                Como a <span className="text-orange-600">Sabor&Arte</span> começou...
              </h2>

              <p className="text-gray-600 leading-relaxed text-lg">
                Tudo começou em 2020, em uma pequena cozinha familiar. O que era apenas um hobby de fim de semana para presentear amigos, logo se transformou em uma paixão avassaladora pela confeitaria e pelos salgados artesanais.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                <div className="flex gap-4">
                  <div className="bg-orange-100 p-3 rounded-xl h-fit text-orange-600">
                    <Heart size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Feito com Amor</h4>
                    <p className="text-sm text-gray-500">Cada receita carrega o carinho de gerações da nossa família.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-orange-100 p-3 rounded-xl h-fit text-orange-600">
                    <Star size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Qualidade Premium</h4>
                    <p className="text-sm text-gray-500">Usamos apenas ingredientes selecionados e chocolate nobre.</p>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed">
                Hoje, o <strong>Sabor&Arte</strong> não é apenas uma empresa, é a realização do sonho de entregar felicidade em forma de comida. Nossa missão é fazer parte das suas celebrações, levando sabor e beleza para a sua mesa.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Uma seção extra de CTA (Call to Action) com Tailwind */}
      <section className="bg-orange-600 py-12 px-8 text-center text-white">
        <h3 className="text-2xl font-bold mb-4">Ficou com dúvida sobre nosso trabalho?</h3>
        <p className="mb-6 opacity-90">Chame a nossa equipe agora mesmo no WhatsApp!</p>
        <button
          onClick={() => window.open('https://wa.me/9814798', '_blank')}
          type="button"
          className=" bg-white text-orange-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-all shadow-lg">
          Falar com Atendimento
        </button>
      </section>
    </>
  );
}
