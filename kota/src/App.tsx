import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import type { Produto } from './types';
import { Home } from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50  flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Aqui você adicionará novas rotas no futuro, ex: */}
            {/* <Route path="/produto/:id" element={<DetalhesProduto />} /> */}
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

{/* Seção de Exemplo de Conteúdo */ }
<div className="max-w-6xl mx-auto py-16 px-8 text-center">
  <h2 className="text-3xl font-bold text-gray-800 mb-8">Nossas Categorias</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <span className="text-4xl">🍰</span>
      <h3 className="mt-4 font-bold text-xl">Doces</h3>
    </div>
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <span className="text-4xl">🍕</span>
      <h3 className="mt-4 font-bold text-xl">Salgados</h3>
    </div>
  </div>
</div>
  ;


export default App;