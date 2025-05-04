"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketRoutes = void 0;
const express_1 = __importDefault(require("express"));
const Tickethistory_controller_1 = require("./Tickethistory.controller");
const router = express_1.default.Router();
router.post('/', Tickethistory_controller_1.ticketHistoryController.createTicketHistory);
router.get('/:email', Tickethistory_controller_1.ticketHistoryController.getTicketHistory);
exports.TicketRoutes = router;
