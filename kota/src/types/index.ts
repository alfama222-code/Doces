export interface Produto {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  categoria: 'doce' | 'salgado';
  imagem: string;
}