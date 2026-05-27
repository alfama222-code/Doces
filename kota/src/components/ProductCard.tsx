import { useCart } from '../contes/CartContext';
import type { Produto } from '../types';

export function ProductCard({ produto }: { produto: Produto }) {
  const { carrinho, adicionarProduto, removerProduto } = useCart();

  const itemNoCarrinho = carrinho.find(item => item.id === produto.id);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 flex flex-col relative">
      
      {/* Badge de quantidade atualizada */}
      {itemNoCarrinho && (
        <span className="absolute top-2 right-2 bg-orange-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg z-10">
          {itemNoCarrinho.quantidade}x no carrinho
        </span>
      )}

      <img src={produto.imagem} alt={produto.nome} className="w-full h-48 object-cover" />
      
      <div className="p-4 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg text-gray-800">{produto.nome}</h3>
          <span className="text-orange-600 font-bold">R$ {produto.preco.toFixed(2)}</span>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 flex-1">{produto.descricao}</p>

        <div className="flex flex-col gap-2">
          {/* Se não tem no carrinho, mostra botão normal */}
          {!itemNoCarrinho ? (
            <button 
              onClick={() => adicionarProduto(produto)}
              className="w-full bg-orange-500 text-white py-2 rounded-lg font-medium hover:bg-orange-600 transition-all active:scale-95"
            >
              Adicionar ao Carrinho
            </button>
          ) : (
            /* Se já tem no carrinho, mostra os controles de + e - */
            <div className="flex items-center gap-2">
              <button 
                onClick={() => removerProduto(produto.id)}
                className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg font-bold hover:bg-red-100 hover:text-red-600 transition-all"
              >
                -
              </button>
              
              <span className="px-4 font-bold text-gray-800">
                {itemNoCarrinho.quantidade}
              </span>

              <button 
                onClick={() => adicionarProduto(produto)}
                className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg font-bold hover:bg-green-100 hover:text-green-600 transition-all"
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}