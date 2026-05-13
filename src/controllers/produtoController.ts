import { Request, Response } from "express";

import { ProdutoModel } from "../model/produtoModel"

const produtoModel = new ProdutoModel()


export const getProdutos = async (req: Request, res: Response) => {

    try {

        const produtos = await produtoModel.getAll();
        res.json(produtos)

    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar produto', error })
    }
}
export const createProduto = async (req: Request, res: Response) => {
    try {
        const { nome, preco } = req.body;
        await produtoModel.create({ nome, preco });
        res.status(201).json({ message: 'Produto criado com sucesso' })
    } catch (error) {
        res.status(500).json({ message: 'Erro ao criar produto', error })
    }
}
export const updateProduto = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { nome, preco } = req.body;
        await produtoModel.update(Number(id), { nome, preco });
        res.json({ message: 'Produto atualizado com sucesso' });
    } catch (error) {
res.status(500).json({message: 'Erro ao atualiza produto'});
    }
}

