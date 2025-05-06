import { RequestHandler } from "express";
import { reviewModel } from "./review.model";

const getAllReview:RequestHandler=async (req,res)=>{
     const result=await reviewModel.find()
     res.status(200).json({
        success: true,
        message: "Review getted successfully",
        data: result,
    });
}

export const reviewController={
    getAllReview
}