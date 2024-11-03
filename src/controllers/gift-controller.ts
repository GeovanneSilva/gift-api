import { Request, Response } from "express";
import prisma from "../client";


export async function getGift(req: Request, res: Response) {
    const list = await prisma.category.findMany({
        include: {
            items: true
        }
    })
    res.json(list);
}

export async function updateGiftDisabled(req: Request, res: Response) {
    const { id } = req.params; // O id do item é passado como parâmetro da rota
    const { disabled } = req.body; // O novo valor de disabled é enviado no corpo da requisição

    try {
        const updatedItem = await prisma.item.update({
            where: { id: id }, // Não é necessário converter para número, pois id é uma string
            data: { disabled }, // Atualiza o campo disabled
        });
        
        res.json(updatedItem); // Retorna o item atualizado
    } catch (error) {
        res.status(500).json({ error: 'Error updating item' });
    }
}