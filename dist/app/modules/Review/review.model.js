"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reviewModel = void 0;
const mongoose_1 = require("mongoose");
const reviewShema = new mongoose_1.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    review: { type: String, required: true },
    nationality: { type: String, required: true },
    status: { type: String, required: true },
    rating: { type: Number, required: true }
});
exports.reviewModel = (0, mongoose_1.model)('review', reviewShema);
