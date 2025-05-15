"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const counter_routes_1 = require("../modules/counter/counter.routes");
const ticketRoute_1 = require("../modules/TicketHistory/ticketRoute");
const Review_route_1 = require("../modules/Review/Review.route");
const TopHotel_controller_1 = require("../modules/TopHotel/TopHotel.controller");
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
    {
        path: "/review",
        route: Review_route_1.reviewRoutes
    },
    {
        path: '/top',
        route: TopHotel_controller_1.topHotelRoutes
    }
];
modulesRouter.forEach((route) => router.use(route.path, route.route));
exports.default = router;
