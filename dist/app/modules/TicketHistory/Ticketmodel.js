"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ticketModel = void 0;
const mongoose_1 = require("mongoose");
const TicketHistory = new mongoose_1.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    from: { type: String, required: true },
    to: { type: String, required: true },
    busName: { type: String, required: true },
    busNumber: { type: String, required: true },
    time: { type: String, required: true },
    phone: { type: Number, required: true },
    BDT: { type: Number, required: true },
    ticket: { type: [String], required: true },
    date: { type: Date, required: true }
});
exports.ticketModel = (0, mongoose_1.model)('ticketHistory', TicketHistory);
