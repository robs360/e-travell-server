import { model, Schema } from "mongoose";
import { TCounter } from "./counter.interface";

const counterShema=new Schema<TCounter>({
    name:{type:String,required:true},
    busNumber:{type:String,required:true},
    logo:{type:String,required:true},
    category:{type:String,required:true},
    date:{type:Date,required:true},
    from:{type:String,required:true},
    to:{type:String,required:true},
    time:{type:String,required:true},
    rent:{type:Number,required:true},
    rating:{type:Number,required:true},
    seat:{type:Number,required:true},
})

export const counterModel=model<TCounter>('Counter',counterShema)