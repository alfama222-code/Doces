import { Link } from 'react-router-dom';
import bgImage from '../assets/image_5383e7.jpg';

export function Hero() {
  return (
    <section
      className="relative w-full min-h-[600px] flex items-center px-8 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bgImage})`
      }}
    >
      {/* Overlay Escuro: 'inset-0' preenche tudo, 'bg-black/50' escurece */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* Conteúdo: 'relative z-10' para ficar acima do fundo escuro */}
      <div className="relative z-10 w-full max-w-4xl text-start">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
          <span className="text-orange-500">Sabor</span>&Arte
        </h1>

        <p className="text-lg text-gray-200 max-w-2xl mb-10 leading-relaxed">
          Aqui você encontra a melhor qualidade e os melhores sabores, tudo feito com dedicação e carinho para você.
        </p>

        <div className="flex justify-start gap-4">
          <Link to="/produtos" className="bg-orange-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-orange-700 transition-all shadow-lg">
            Ver Cardápio
          </Link>
        </div>


      </div>
    </section>
  );
}





