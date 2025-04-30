"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.counterServices = void 0;
const counter_model_1 = require("./counter.model");
const createCounterIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield counter_model_1.counterModel.create(payload);
    return result;
});
const getAllCounterFromDB = (search) => __awaiter(void 0, void 0, void 0, function* () {
    const searchDate = new Date(search.date);
    console.log(searchDate);
    const startOfDay = new Date(searchDate.toISOString().split('T')[0] + 'T00:00:00.000Z');
    const endOfDay = new Date(searchDate.toISOString().split('T')[0] + 'T23:59:59.999Z');
    console.log(startOfDay, "  ", endOfDay);
    const query = {
        $and: [
            { from: { $regex: "^" + search.from + "$", $options: "i" } },
            { to: { $regex: "^" + search.to + "$", $options: "i" } },
            { date: { $gte: startOfDay, $lt: endOfDay } }
        ]
    };
    const result = yield counter_model_1.counterModel.find(query);
    return result;
});
const getSingleCounterFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield counter_model_1.counterModel.findById(id);
    return result;
});
exports.counterServices = {
    createCounterIntoDB, getSingleCounterFromDB,
    getAllCounterFromDB
};
