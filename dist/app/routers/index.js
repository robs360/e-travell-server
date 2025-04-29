"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const counter_routes_1 = require("../modules/counter/counter.routes");
const router = express_1.default.Router();
const modulesRouter = [
    {
        path: "/counter",
        route: counter_routes_1.counterRoutes,
    },
];
modulesRouter.forEach((route) => router.use(route.path, route.route));
exports.default = router;
