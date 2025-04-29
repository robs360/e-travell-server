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
exports.counterController = void 0;
const counter_services_1 = require("./counter.services");
const createCounter = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const counterData = req.body;
        const result = yield counter_services_1.counterServices.createCounterIntoDB(counterData);
        res.status(200).json({
            success: true,
            message: "Counter created successfully",
            data: result,
        });
    }
    catch (err) {
        Error(err);
    }
});
exports.counterController = {
    createCounter
};
