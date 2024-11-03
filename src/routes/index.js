"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gift_routes_1 = __importDefault(require("./gift.routes"));
const indexRoute = (0, express_1.Router)();
indexRoute.use('/', gift_routes_1.default);
exports.default = indexRoute;
