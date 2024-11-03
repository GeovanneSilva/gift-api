"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGift = getGift;
exports.updateGiftDisabled = updateGiftDisabled;
const client_1 = __importDefault(require("../client"));
function getGift(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const list = yield client_1.default.category.findMany({
            include: {
                items: true
            }
        });
        res.json(list);
    });
}
function updateGiftDisabled(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params; // O id do item é passado como parâmetro da rota
        const { disabled } = req.body; // O novo valor de disabled é enviado no corpo da requisição
        try {
            const updatedItem = yield client_1.default.item.update({
                where: { id: id }, // Não é necessário converter para número, pois id é uma string
                data: { disabled }, // Atualiza o campo disabled
            });
            res.json(updatedItem); // Retorna o item atualizado
        }
        catch (error) {
            res.status(500).json({ error: 'Error updating item' });
        }
    });
}
//# sourceMappingURL=gift-controller.js.map