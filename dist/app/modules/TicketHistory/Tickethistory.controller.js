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
exports.ticketHistoryController = void 0;
const Ticketmodel_1 = require("./Ticketmodel");
const createTicketHistory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const ticketHistory = req.body;
        const result = yield Ticketmodel_1.ticketModel.create(ticketHistory);
        res.status(200).json({
            success: true,
            message: "Tciket history created successfully",
            data: result,
        });
    }
    catch (err) {
        Error(err);
    }
});
const getTicketHistory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const email = req.params.email;
        if (!email) {
            return res.status(400).json({
                success: false,
                message: "Email parameter is missing",
            });
        }
        const result = yield Ticketmodel_1.ticketModel.find({ email: email });
        res.status(200).json({
            success: true,
            message: "Tciket history geted successfully",
            data: result,
        });
    }
    catch (err) {
        Error(err);
    }
});
exports.ticketHistoryController = {
    createTicketHistory, getTicketHistory
};
