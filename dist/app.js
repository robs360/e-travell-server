"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routers_1 = __importDefault(require("./app/routers"));
const app = (0, express_1.default)();
// http://localhost:3000
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: ['https://e-ticket-client-robs360-shahadats-projects-55bc8ce7.vercel.app', 'http://localhost:3000', 'https://e-booking.vercel.app/'],
    credentials: true,
}));
app.use("/api/v1", routers_1.default);
app.get("/", (req, res) => {
    res.send("e-tour server is running");
});
exports.default = app;
