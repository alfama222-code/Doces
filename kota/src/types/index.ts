export interface Produto {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  categoria: 'doces' | 'salgados';
  imagem: string;
}