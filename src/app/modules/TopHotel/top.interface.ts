import { model, Schema } from "mongoose";
import { TTopHotel } from "./TopHotel.interface";

const TopHotelSchema=new Schema<TTopHotel>({
     name:{type:String,required:true},
     image:{type:String,required:true},
     description:{type:String,required:true},
     location:{type:String,required:true},
     ratingStatus:{type:String,required:true},
     rating:{type:Number,required:true},
     bdt:{type:Number,required:true},
})

export const TopModel=model<TTopHotel>('tophotels',TopHotelSchema)