import { Request, Response } from "express";

import { ProdutoModel } from "../model/produtoModel"

const produtoModel = new ProdutoModel()


export const getProdutos = async(req: Request,res: Response)=> {

    try {

const produtos = await produtoModel.getAll();
res.json(produtos)
    
    } catch(error)
     {
        res.status(500).json({message: 'Erro ao buscar produto', error})
    }
}