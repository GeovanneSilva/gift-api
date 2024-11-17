import { Request, Response } from "express";
import prisma from "../client";

// Função para buscar categorias e itens relacionados
export async function getGift(req: Request, res: Response) {
    const list = await prisma.category.findMany({
        include: {
            items: true,
        },
    });
    res.json(list);
}

// Função para atualizar o campo "disabled" de um item
export async function updateGiftDisabled(req: Request, res: Response) {
    const { id } = req.params; // O id do item é passado como parâmetro da rota
    const { disabled } = req.body; // O novo valor de disabled é enviado no corpo da requisição

    try {
        const updatedItem = await prisma.item.update({
            where: { id: id }, // Atualiza o item com base no id
            data: { disabled }, // Atualiza o campo disabled
        });

        res.json(updatedItem); // Retorna o item atualizado
    } catch (error) {
        res.status(500).json({ error: 'Error updating item' });
    }
}

// Função para adicionar um novo guest
export async function addGuest(req: Request, res: Response) {
    const { name, gift } = req.body; // Espera receber "name" e "gift" no corpo da requisição

    try {
        const newGuest = await prisma.guest.create({
            data: {
                name,
                gift,
            },
        });

        res.status(201).json(newGuest); // Retorna o guest criado com status 201 (Created)
    } catch (error) {
        res.status(500).json({ error: "Error creating guest" });
    }
}
