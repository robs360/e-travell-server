import { RequestHandler } from "express";
import { TopModel } from "./top.interface";
import express from 'express'
const getTopHotelFromDB:RequestHandler=async (req,res)=>{
      const result=await TopModel.find()
        res.status(200).json({
            success: true,
            message: "Top Hotel Geted successfully",
            data: result,
          });
}

const router=express.Router()
router.get('/',getTopHotelFromDB)
export const topHotelRoutes=router
