import type { Produto } from '../types';

interface Props {
  produto: Produto;
}

export function ProductCard({ produto }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group">
      <div className="relative overflow-hidden">
        <img 
          src={produto.imagem} 
          alt={produto.nome} 
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <span className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase text-orange-600">
          {produto.categoria}
        </span>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-800">{produto.nome}</h3>
        <p className="text-gray-500 text-sm mt-1 line-clamp-2">{produto.descricao}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-bold text-orange-600">
            R$ {produto.preco.toFixed(2)}
          </span>
          <button className="bg-gray-900 text-white p-2 rounded-lg hover:bg-orange-600 transition-colors">
            +
          </button>
        </div>
      </div>
    </div>
  );
}