"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gift_controller_1 = require("../controllers/gift-controller");
const giftRoute = (0, express_1.Router)();
giftRoute.get('/gift', gift_controller_1.getGift);
giftRoute.put('/gift/:id', gift_controller_1.updateGiftDisabled);
exports.default = giftRoute;
