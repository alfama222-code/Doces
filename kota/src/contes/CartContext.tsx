import { createContext, useContext, useState, type ReactNode } from 'react';
import type { Produto } from '../types';

interface CartItem extends Produto {
    quantidade: number;
}

interface CartContextData {
    carrinho: CartItem[];
    adicionarProduto: (produto: Produto) => void;
    removerProduto: (id: number) => void;
    removerTotalmente: (id: number) => void;
    total: number;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: { children: ReactNode }) {
    const [carrinho, setCarrinho] = useState<CartItem[]>([]);

  const adicionarProduto = (produto: Produto) => {
  setCarrinho(prev => {
    const itemExiste = prev.find(item => item.id === produto.id);
    if (itemExiste) {
      return prev.map(item =>
        item.id === produto.id ? { ...item, quantidade: item.quantidade + 1 } : item
      );
    }
    return [...prev, { ...produto, quantidade: 1 }];
  });
};

    const removerProduto = (id: number) => {
        setCarrinho(prev => {
            const itemExiste = prev.find(item => item.id === id);

            if (itemExiste && itemExiste.quantidade > 1) {
                // Se tiver mais de 1, apenas diminui a quantidade mas mantem um na lista
                return prev.map(item =>
                    item.id === id ? { ...item, quantidade: item.quantidade - 1 } : item
                );
            }
            // Se a quantidade for 1, remove o item totalmente da lista
            return prev.filter(item => item.id !== id);
        });
    };
    // Adicione esta função dentro do seu CartProvider
    const removerTotalmente = (id: number) => {
        setCarrinho(prev => prev.filter(item => item.id !== id));
    };

    // Lembre-se de incluir no return do Provider:
    // value={{ carrinho, adicionarProduto, removerProduto, removerTotalmente, total }}

    const total = carrinho.reduce((acc, item) => acc + (item.preco * item.quantidade), 0);

    return (
        <CartContext.Provider value={{ carrinho, adicionarProduto, removerProduto, removerTotalmente, total }}>
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => useContext(CartContext);
