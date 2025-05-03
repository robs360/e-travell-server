"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.counterModel = void 0;
const mongoose_1 = require("mongoose");
const counterShema = new mongoose_1.Schema({
    name: { type: String, required: true },
    busNumber: { type: String, required: true, unique: true },
    logo: { type: String, required: true },
    endTime: { type: String, required: true },
    travellTime: { type: String, required: true },
    category: { type: String, required: true },
    date: { type: Date, required: true },
    from: { type: String, required: true },
    to: { type: String, required: true },
    time: { type: String, required: true },
    rent: { type: Number, required: true },
    rating: { type: Number, required: true },
    seat: { type: Number, required: true },
});
exports.counterModel = (0, mongoose_1.model)('Counter', counterShema);
