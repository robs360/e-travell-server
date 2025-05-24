import { RequestHandler } from "express";
import { userModel } from "./userRegister.model";

const createUserIntoDB:RequestHandler = async (req, res) => {
    const result = await userModel.create(req.body)
    res.status(200).json({
        success: true,
        message: "User created successfully",
        data: result,
    });
}
export const userController={
    createUserIntoDB
}