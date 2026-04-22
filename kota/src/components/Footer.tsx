export function Footer() {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-8 mt-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-white text-xl font-bold mb-4">Sabor & Arte</h3>
          <p className="text-sm leading-relaxed">
            Levando os melhores doces e salgados até você com ingredientes selecionados e muito carinho.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Links Rápidos</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-orange-400 cursor-pointer">Cardápio</li>
            <li className="hover:text-orange-400 cursor-pointer">Sobre Nós</li>
            <li className="hover:text-orange-400 cursor-pointer">Entregas</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Contato</h4>
          <p className="text-sm">📍 Rua das Flores, 123</p>
          <p className="text-sm mt-2">📞 (11) 99999-9999</p>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-xs">
        © {anoAtual} Sabor & Arte. Todos os direitos reservados.
      </div>
    </footer>
  );
}