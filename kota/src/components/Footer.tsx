import { Clock, MapPin, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { InstagramIcones } from '../assets/instagran';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          {/* Coluna 1: Logo e Bio */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="text-2xl font-bold text-orange-600 mb-4 block">
              Sabor<span className="text-gray-800">&Arte</span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed">
              Transformando ingredientes selecionados em momentos inesquecíveis desde 2020. O melhor sabor da região na sua mesa.
            </p>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div>
            <h4 className="font-bold text-gray-800 mb-6">Explorar</h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li><Link to="/" className="hover:text-orange-600 transition-colors">Início</Link></li>
              <li><Link to="/produtos" className="hover:text-orange-600 transition-colors">Cardápio</Link></li>
            </ul>
          </div>


          {/* Coluna 3: Horários */}
          <div>
            <h4 className="font-bold text-gray-800 mb-6">Funcionamento/Horários</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <Clock size={16} className="text-orange-600"/>
                Ter - Sex: 09h às 19h
              </li>
              <li className="flex items-center gap-2">
                <Clock size={16} className="text-orange-600"/>
                Sáb - Dom: 10h às 16h
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-orange-600" />
                Rua das Flores, 123 - Centro
              </li>
            </ul>
          </div>

          {/* Coluna 4: Redes Sociais */}
          <div>
            <h4 className="font-bold text-gray-800 mb-6">Conecte-se</h4>
            <div className="flex gap-4">

              <a
                href="https://wa.me/9814798"
                target="_blank"
                className="bg-gray-100 p-3 rounded-full text-gray-600 hover:bg-green-100 hover:text-green-600 transition-all"
              >
                <MessageCircle size={20} />
              </a>
              <br>
              </br>
              <a
                href="https://instagram.com"
                target="_blank"
                className="bg-gray-100 p-3 rounded-full text-gray-600 hover:bg-orange-100 hover:text-orange-600 transition-all"
              >
                <InstagramIcones />
              </a>
            </div>
          </div>
        </div>

        {/* Linha Inferior: Copyright */}
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© {currentYear} Sabor&Arte. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-600">Privacidade</a>
            <a href="#" className="hover:text-gray-600">Termos de uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}