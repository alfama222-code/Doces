import { Link } from 'react-router-dom';

export function Navbar() {
    return (
        <nav className="flex justify-between items-center px-8  py-4 bg-white shadow-sm sticky top-0  z-50 ">
            <Link to="/" className="text-2xl font-bold text-orange-600">
                Sabor<span className="text-gray-800">&Arte</span>
            </Link>


            <ul className="hidden md:flex gap-8 text-gray-600 font-medium">
                <li><Link to="/" className="hover:text-orange-500 cursor-pointer transition-colors">Início</Link></li>
                <li className="hover:text-orange-500 cursor-pointer transition-colors">Produtos</li>
                <li className="hover:text-orange-500 cursor-pointer transition-colors">Contato</li>
            </ul>

            <button className="bg-orange-500 text-white px-5 py-2 rounded-full hover:bg-orange-600 transition-all shadow-md">
                Meu Carrinho (0)
            </button>
        </nav>
    );
}
