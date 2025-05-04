import { RequestHandler } from "express";
import { ticketModel } from "./Ticketmodel";

const createTicketHistory: RequestHandler = async (req, res) => {
    try {
        const ticketHistory = req.body
        const result = await ticketModel.create(ticketHistory)
        res.status(200).json({
            success: true,
            message: "Tciket history created successfully",
            data: result,
        });
    }
    catch (err: any) {
        Error(err)
    }
}

const getTicketHistory: RequestHandler = async (req: any, res: any) => {
    try {
        const email = req.params.email;
        if (!email) {
            return res.status(400).json({
                success: false,
                message: "Email parameter is missing",
            });
        }
        const result = await ticketModel.find({ email: email })
        res.status(200).json({
            success: true,
            message: "Tciket history geted successfully",
            data: result,
        });
    }
    catch (err: any) {
        Error(err)
    }
}

export const ticketHistoryController = {
    createTicketHistory, getTicketHistory
}