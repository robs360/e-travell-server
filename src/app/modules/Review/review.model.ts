import { model, Schema } from "mongoose";
import { TReview } from "./Review.interface";

const reviewShema=new Schema<TReview>({
    name:{type:String,required:true},
    image:{type:String,required:true},
    review:{type:String,required:true},
    nationality:{type:String,required:true},
    status:{type:String,required:true},
    rating:{type:Number,required:true}
})
export const reviewModel=model<TReview>('review',reviewShema)