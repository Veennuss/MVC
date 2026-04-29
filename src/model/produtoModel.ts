import {pool} from './../config/database';

export interface Produto{
    id?: number;
    nome: string;
    preco: number
}

export class ProdutoModel {
  async getAll(): Promise<Produto []>{
    const [rows] = await pool.query('select * from produtos');
    return rows as Produto[]
  }  
}