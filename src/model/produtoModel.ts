import { getProdutos } from './../controllers/produtoController';
import { pool } from './../config/database';

export interface Produto {
  id?: number;
  nome: string;
  preco: number
}

export class ProdutoModel {
  async getAll(): Promise<Produto[]> {
    const [rows] = await pool.query('select * from produtos');
    return rows as Produto[]
  }

  async create(produto: Produto): Promise<void> {
    await pool.query('INSERT INTO products (nome, preco) VALUE (?.?',
      [produto.nome, produto.preco]);
  }

  async update(id: number, produto: Produto): Promise<void> {
    await pool.query('UPDATE getProdutos SET nome = ?, preco = ?, WHERE id = ?',
      [produto.nome, produto.preco, id]
    )
  }

  async delete(id: number): Promise<void>{
    await pool.query('DELETE FROM produtos WHERE id = ?', 
      [id])
  }
}