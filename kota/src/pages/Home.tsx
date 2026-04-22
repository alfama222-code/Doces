import { Hero } from '../components/hero';
import { ProductCard } from '../components/ProductCard';
import { useState } from 'react';
import type { Produto } from '../types';



// Dados de exemplo (No futuro, virão da sua API Express)
const PRODUTOS_MOCK: Produto[] = [
  {
    id: 1,
    nome: "Coxinha Especial",
    descricao: "Massa de batata com recheio de frango super cremoso.",
    preco: 8.50,
    categoria: 'salgado',
    imagem: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 2,
    nome: "Brigadeiro Gourmet",
    descricao: "Chocolate belga 50% cacau e granulado premium.",
    preco: 5.00,
    categoria: 'doce',
    imagem: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 3,
    nome: "Coxinha Especial",
    descricao: "Massa de batata com recheio de frango super cremoso.",
    preco: 8.50,
    categoria: 'salgado',
    imagem: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 4,
    nome: "Brigadeiro Gourmet",
    descricao: "Massa de batata com recheio de frango super cremoso.",
    preco: 8.50,
    categoria: 'doce',
    imagem: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 5,
    nome: "Coxinha Especial",
    descricao: "Massa de batata com recheio de frango super cremoso.",
    preco: 8.50,
    categoria: 'salgado',
    imagem: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 6,
    nome: "Brigadeiro Gourmet",
    descricao: "Massa de batata com recheio de frango super cremoso.",
    preco: 8.50,
    categoria: 'doce',
    imagem: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&q=80&w=400"
  }

];

export function Home() {
  const [categoriaAtiva, setCategoriaAtiva] = useState<'todos' | 'doce' | 'salgado' | 'bebida'>('todos');

  // 2. Criamos uma lista filtrada baseada na categoria escolhida
  const produtosFiltrados = PRODUTOS_MOCK.filter(produto => {
    if (categoriaAtiva === 'todos') return true;
    return produto.categoria === categoriaAtiva;
  });

  return (
    <>
      <Hero />

      <section className="max-w-6xl mx-auto py-16 px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Nosso Cardápio</h2>
            <p className="text-gray-500">Produtos feitos artesanalmente para você</p>
          </div>

          {/* Exemplo de filtro rápido com Tailwind */}
          <div className="flex gap-2">
            <button onClick={() => setCategoriaAtiva('todos')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${categoriaAtiva === 'todos' ? 'bg-orange-600 text-white' : 'bg-white text-gray-600 border border-gray-200'
                }`}
            >
              Todos
            </button>

            <button onClick={() => setCategoriaAtiva('doce')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${categoriaAtiva === 'doce' ? 'bg-orange-600 text-white' : 'bg-white text-gray-600 border border-gray-200'
                }`}
            >
              Doces
            </button>
            <button onClick={() => setCategoriaAtiva('salgado')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${categoriaAtiva === 'salgado' ? 'bg-orange-600 text-white' : 'bg-white text-gray-600 border border-gray-200'
                }`}
            >
              Salgados
            </button>
          </div>
        </div>

        {/* Grid Responsivo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {produtosFiltrados.map(item => (
            <ProductCard key={item.id} produto={item} />
          ))}
        </div>
        {/* Mensagem caso não encontre nada */}
        {produtosFiltrados.length === 0 && (
          <p className="text-center text-gray-500 py-10">Nenhum produto encontrado nesta categoria.</p>
        )}
      </section>

      {/* Uma seção extra de CTA (Call to Action) com Tailwind */}
      <section className="bg-orange-600 py-12 px-8 text-center text-white">
        <h3 className="text-2xl font-bold mb-4">Ficou com dúvida sobre algum ingrediente?</h3>
        <p className="mb-6 opacity-90">Chame a nossa equipe agora mesmo no WhatsApp!</p>
        <button className="bg-white text-orange-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-all shadow-lg">
          Falar com Atendimento
        </button>
      </section>
    </>
  );
}