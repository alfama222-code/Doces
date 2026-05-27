import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../contes/CartContext';
import { Mail, MapPin, User, Send, ShoppingCart, X, Phone } from 'lucide-react';

export function Navbar() {
  const { carrinho, total } = useCart();
  const location = useLocation(); // Para saber em qual página estamos
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dadosCliente, setDadosCliente] = useState({ nome: '', morada: '', email: '', Telefone: '' });

  const totalItens = carrinho.reduce((acc, item) => acc + item.quantidade, 0);

  // Função para verificar se o link está ativo e aplicar estilo
  const linkAtivo = (path: string) =>
    location.pathname === path
      ? "text-orange-600 border-b-2 border-orange-600"
      : "text-gray-600 hover:text-orange-500 transition-colors";

  const enviarParaWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const numeroTelefone = "9814798";

    const itensFatura = carrinho
      .map(item => `📦 *${item.nome}*\n   ${item.quantidade}x CVE$ ${item.preco.toFixed(2)} = *CVE$ ${(item.quantidade * item.preco).toFixed(2)}*`)
      .join('\n\n');

    const mensagem = encodeURIComponent(
      `🧾 *FATURA ELETRÔNICA - SABOR&ARTE*
------------------------------------------
👤 *CLIENTE:* ${dadosCliente.nome}
📍 *ENTREGA:* ${dadosCliente.morada}
📧 *EMAIL:* ${dadosCliente.email}
📱 *TELEFONE:* ${dadosCliente.Telefone}
------------------------------------------
🛒 *PEDIDO:*

CVE${itensFatura}

------------------------------------------
💰 *TOTAL A PAGAR: CVE$ ${total.toFixed(2)}*
------------------------------------------
_Obrigado pela preferência!_`
    );

    window.open(`https://wa.me/${numeroTelefone}?text=${mensagem}`, '_blank');
    setIsModalOpen(false);
    setDadosCliente({ nome: '', morada: '', email: '', Telefone: '' });
  };

  return (
    <>
      <nav className="flex justify-between items-center px-6 md:px-12 py-4 bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        {/* LOGO */}
        <Link to="/" className="text-2xl font-black text-orange-600 tracking-tighter">
          Sabor<span className="text-gray-800">&Arte</span>
        </Link>

        {/* LINKS DE NAVEGAÇÃO */}
        <ul className="hidden md:flex gap-8 font-semibold">
          <li>
            <Link to="/" className={`pb-1 ${linkAtivo('/')}`}>
              Início
            </Link>
          </li>
          <li>
            <Link to="/produtos" className={`pb-1 ${linkAtivo('/produtos')}`}>
              Produtos
            </Link>
          </li>
        </ul>

        {/* BOTÃO DO CARRINHO */}
        <button
          onClick={() => carrinho.length > 0 ? setIsModalOpen(true) : alert("Adicione produtos primeiro no seu carrinho para realizar a sua encomenda!")}
          className="relative bg-orange-600 text-white p-2 md:px-6 md:py-2.5 rounded-full hover:bg-orange-700 transition-all shadow-lg flex items-center gap-2 group"
        >
          <ShoppingCart size={20} className="group-hover:scale-110 transition-transform" />
          <span className="hidden md:inline font-bold">Meu Carrinho</span>

          {totalItens > 0 && (
            <span className="absolute -top-1 -right-1 bg-gray-900 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
              {totalItens}
            </span>
          )}
        </button>
      </nav>

      {/* MODAL DO FORMULÁRIO (FATURA) */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm flex items-center justify-center z-[100] p-4">
          <div className="bg-white rounded-3xl p-6 md:p-10 max-w-md w-full shadow-2xl relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X size={24} />
            </button>

            <div className="text-center mb-8">
              <h2 className="text-2xl font-extrabold text-gray-800">Finalizar Pedido</h2>
              <p className="text-gray-500 text-sm">Quase lá! Precisamos de alguns dados.</p>
            </div>

            <form onSubmit={enviarParaWhatsApp} className="space-y-5">
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-500 uppercase ml-1">Seu Nome</label>
                <div className="relative">
                  <User className="absolute left-4 top-3 text-orange-500" size={18} />
                  <input required type="text" placeholder="Ex: João Silva"
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-orange-500 outline-none transition-all"
                    onChange={(e) => setDadosCliente({ ...dadosCliente, nome: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-500 uppercase ml-1">Endereço de Entrega</label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-3 text-orange-500" size={18} />
                  <input required type="text" placeholder="Rua, número e bairro"
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-orange-500 outline-none transition-all"
                    onChange={(e) => setDadosCliente({ ...dadosCliente, morada: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-500 uppercase ml-1">E-mail</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-3 text-orange-500" size={18} />
                  <input required type="email" placeholder="seu@email.com"
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-orange-500 outline-none transition-all"
                    onChange={(e) => setDadosCliente({ ...dadosCliente, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-500 uppercase ml-1">Telefone</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-3 text-orange-500" size={18} />
                  <input required type="tel" placeholder="Seu Telefone"
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-orange-500 outline-none transition-all"
                    onChange={(e) => setDadosCliente({ ...dadosCliente, Telefone: e.target.value })}
                  />
                </div>
              </div>

              <div className="pt-4 flex flex-col gap-3">
                <button type="submit"
                  className="w-full bg-green-600 text-white py-4 rounded-xl font-black text-lg hover:bg-green-700 shadow-xl shadow-green-200 transition-all flex items-center justify-center gap-3 active:scale-95"
                >
                  <Send size={20} /> ENVIAR E GERAR FATURA
                </button>
                <p className="text-[10px] text-center text-gray-400">
                  Ao clicar, abriremos seu WhatsApp com o pedido pronto.
                </p>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}