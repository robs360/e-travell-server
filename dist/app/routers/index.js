"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const counter_routes_1 = require("../modules/counter/counter.routes");
const ticketRoute_1 = require("../modules/TicketHistory/ticketRoute");
const router = express_1.default.Router();
const modulesRouter = [
    {
        path: "/counter",
        route: counter_routes_1.counterRoutes,
    },
    {
        path: "/ticket",
        route: ticketRoute_1.TicketRoutes
    },
];
modulesRouter.forEach((route) => router.use(route.path, route.route));
exports.default = router;
