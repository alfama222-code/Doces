import { useState } from 'react';
import { ProductCard } from '../components/ProductCard';
import type { Produto } from '../types';

// Dados de exemplo (No futuro, virão da sua API Express)
const PRODUTOS_MOCK: Produto[] = [
  {
    id: 1,
    nome: "Coxinha Especial",
    descricao: "Massa de batata com recheio de frango super cremoso.",
    preco: 120,
    categoria: 'salgados',
    imagem: "https://tse4.mm.bing.net/th/id/OIP.NEXtvI9R0nTNUcncL-3j7wHaEO?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 2,
    nome: "Brigadeiro Gourmet",
    descricao: "Chocolate belga 50% cacau e granulado premium.",
    preco: 100,
    categoria: 'doces',
    imagem: "https://tse2.mm.bing.net/th/id/OIP.n0FTX4_UhX1Xx0W7SD-p7QHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 3,
    nome: "Bolinho de queijo",
    descricao: "Massa de batata com recheio de frango super cremoso.",
    preco: 100,
    categoria: 'salgados',
    imagem: "https://revistacafe.com.br/wp-content/uploads/2023/04/Bolinha-de-Queijo-com-apenas-3-ingredientes-1-930x600.jpg"
  },

  {
    id: 5,
    nome: "Risoles",
    descricao: "Massa com recheio de presunto e queijo cremoso.",
    preco: 100,
    categoria: 'salgados',
    imagem: "https://tse2.mm.bing.net/th/id/OIP.9-5F9M-cdlB5Q4f0BvHpowHaE8?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 6,
    nome: "Empadinha de frango",
    descricao: "Massa com recheio de frango cremoso.",
    preco: 100,
    categoria: 'salgados',
    imagem: "https://th.bing.com/th/id/R.adf3618d6f4f23f8129a99fb0e91e605?rik=IMM%2bSvARO5GItA&pid=ImgRaw&r=0"
  },
  {
    id: 7,
    nome: "Enroladinho de salsicha",
    descricao: "Massa com recheio de salsicha cremoso.",
    preco: 100,
    categoria: 'salgados',
    imagem: "https://tse2.mm.bing.net/th/id/OIP.pvK4jbUlruyS3CXS13PJ0QHaE0?w=768&h=500&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 8,
    nome: "Croquete",
    descricao: "Massa com recheio de peixe desfiado.",
    preco: 100,
    categoria: 'salgados',
    imagem: "https://receitasdebemcasado.com/wp-content/uploads/2025/02/Croquete-de-carne.png"
  },
  {
    id: 9,
    nome: "Pão de queijo",
    descricao: "Pão de queijo quentinho feito com queijo .",
    preco: 100,
    categoria: 'salgados',
    imagem: "https://tse2.mm.bing.net/th/id/OIP.N24EUO_Q5ZPp6fAO3FZbRgHaE7?w=1600&h=1064&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 10,
    nome: "Cachorro quente",
    descricao: "Cachorro quente cremoso feito com molho especial.",
    preco: 100,
    categoria: 'salgados',
    imagem: "https://tse1.mm.bing.net/th/id/OIP.Vh0oRU_J8MQxf3zF5Cp3tQHaEJ?w=3497&h=1960&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 11,
    nome: "Quiche de frango",
    descricao: "Deliciosa quiche de frango feita com ingredientes frescos.",
    preco: 100,
    categoria: 'salgados',
    imagem: "https://th.bing.com/th/id/R.8780e224a42b6ad06ff9d6b5139706b2?rik=wRknoetTxTzO9g&pid=ImgRaw&r=0"
  },
  {
    id: 12,
    nome: "Pizza",
    descricao: "Deliciosa pizza feita com ingredientes frescos.",
    preco: 100,
    categoria: 'salgados',
    imagem: "https://tse1.mm.bing.net/th/id/OIP.D4lCG7dGjMJwO07EHm1uIQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 13,
    nome: "Beijinho",
    descricao: "Deliciosa beijinho de coco cremoso.",
    preco: 50,
    categoria: 'doces',
    imagem: "https://th.bing.com/th/id/R.67d8785f3968561b2491a68a17c43f4e?rik=VE9zYC4tyLJlFQ&pid=ImgRaw&r=0"
  },
  {
    id: 14,
    nome: "Bolo de Cenoura",
    descricao: "Deliciosa bolo de cenoura.",
    preco: 80,
    categoria: 'doces',
    imagem: "https://tse4.mm.bing.net/th/id/OIP.p5YiYrlE_3cwGbVMLQDijAHaFj?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 15,
    nome: "Bolo deChocolate",
    descricao: "Deliciosa bolo de chocolate com cobertura de ganache.",
    preco: 100,
    categoria: 'doces',
    imagem: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 16,
    nome: "Torta de Limão",
    descricao: "Deliciosa torta de limão com cobertura de merengue.",
    preco: 120,
    categoria: 'doces',
    imagem: "https://guiadacozinha.com.br/wp-content/uploads/2018/04/torta-de-limao-facil.jpg"
  },
  {
    id: 17,
    nome: "Pudim de Leite Condensado",
    descricao: "Delicioso pudim de leite condensado.",
    preco: 80,
    categoria: 'doces',
    imagem: "https://tse1.mm.bing.net/th/id/OIP.m8qHU2IVsaC6K3Asb6yVmAHaE8?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 18,
    nome: "Donuts",
    descricao: "Deliciosos Donuts.",
    preco: 50,
    categoria: 'doces',
    imagem: "https://tse1.mm.bing.net/th/id/OIP.jxb4U_I-Rs0QP_iZIskaUQHaE8?w=1024&h=683&rs=1&pid=ImgDetMain&o=7&rm=3"
  },


  {
    id: 19,
    nome: "Churros",
    descricao: "Delicioso churros.",
    preco: 50,
    categoria: 'doces',
    imagem: "https://vivirlatina.com/wp-content/uploads/2024/11/receta-de-churros-para-disfrutar.-.jpg"
  },
  {
    id: 20,
    nome: "Cupcake",
    descricao: "Deliciosos Cupcakes.",
    preco: 50,
    categoria: 'doces',
    imagem: "https://tse1.mm.bing.net/th/id/OIP.6emupj-Ab-0p9W-a6vNFawHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 21,
    nome: "Trouxinhas",
    descricao: "Deliciosas trouxinhas.",
    preco: 100,
    categoria: 'doces',
    imagem: "https://1.bp.blogspot.com/-DaMD3bvN_40/UZlarDwOUTI/AAAAAAAAIck/sZj5lTQjS9w/s1600/salgado1.jpg"
  }



];

export function Produtos() {
  const [categoriaAtiva, setCategoriaAtiva] = useState<'todos' | 'doces' | 'salgados'>('todos');

  const produtosFiltrados = PRODUTOS_MOCK.filter(produto => {
    if (categoriaAtiva === 'todos') return true;
    return produto.categoria === categoriaAtiva;
  });

  return (
    <>
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

            <button onClick={() => setCategoriaAtiva('doces')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${categoriaAtiva === 'doces' ? 'bg-orange-600 text-white' : 'bg-white text-gray-600 border border-gray-200'
                }`}
            >
              Doces
            </button>
            <button onClick={() => setCategoriaAtiva('salgados')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${categoriaAtiva === 'salgados' ? 'bg-orange-600 text-white' : 'bg-white text-gray-600 border border-gray-200'
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
    </>
  );
}   