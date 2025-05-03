import { RequestHandler } from "express";
import { counterServices, TSearch } from "./counter.services";

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

const getAllCounter:RequestHandler=async (req,res)=>{
   try{
    const query=req.query as unknown as TSearch
    const result=await counterServices.getAllCounterFromDB(query)
    res.status(200).json({
        success: true,
        message: "Counter getted successfully",
        data: result,
      });
   }
   catch(err:any){
     Error(err)
   }
}

const getSingleCounter:RequestHandler=async (req,res)=>{
    try{
      const id=req.params.id
    const result = await counterServices.getSingleCounterFromDB(id)
    res.status(200).json({
      success: true,
      message: "Single counter getted successfully",
      data: result,
    });
    }
    catch(err:any){
      Error(err)
    }
}
export const counterController={
    createCounter,getAllCounter,
    getSingleCounter
}