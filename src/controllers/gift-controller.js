"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGift = getGift;
exports.updateGiftDisabled = updateGiftDisabled;
const client_1 = __importDefault(require("../client"));
async function getGift(req, res) {
    const list = await client_1.default.category.findMany({
        include: {
            items: true
        }
    });
    res.json(list);
}
async function updateGiftDisabled(req, res) {
    const { id } = req.params; // O id do item é passado como parâmetro da rota
    const { disabled } = req.body; // O novo valor de disabled é enviado no corpo da requisição
    try {
        const updatedItem = await client_1.default.item.update({
            where: { id: id }, // Não é necessário converter para número, pois id é uma string
            data: { disabled }, // Atualiza o campo disabled
        });
        res.json(updatedItem); // Retorna o item atualizado
    }
    catch (error) {
        res.status(500).json({ error: 'Error updating item' });
    }
}
