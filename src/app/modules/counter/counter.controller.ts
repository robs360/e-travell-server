import { RequestHandler } from "express";
import { counterServices } from "./counter.services";

const createCounter:RequestHandler=async (req,res)=>{
     try{
         const counterData=req.body
         const result=await counterServices.createCounterIntoDB(counterData)
         res.status(200).json({
            success: true,
            message: "Counter created successfully",
            data: result,
          });
     }
     catch(err:any){
        Error(err)
     }
}

export const counterController={
    createCounter
}