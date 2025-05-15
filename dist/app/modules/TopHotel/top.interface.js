"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopModel = void 0;
const mongoose_1 = require("mongoose");
const TopHotelSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    ratingStatus: { type: String, required: true },
    rating: { type: Number, required: true },
    bdt: { type: Number, required: true },
});
exports.TopModel = (0, mongoose_1.model)('tophotels', TopHotelSchema);
