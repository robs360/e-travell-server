"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.counterRoutes = void 0;
const express_1 = __importDefault(require("express"));
const counter_controller_1 = require("./counter.controller");
const router = express_1.default.Router();
router.post('/create', counter_controller_1.counterController.createCounter);
exports.counterRoutes = router;
