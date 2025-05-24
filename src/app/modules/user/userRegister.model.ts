import { model, Schema } from "mongoose";
import { TUser } from "./userregister.interface";

const userSchema=new Schema<TUser>({
   name:{type:String,required:true},
   email:{type:String,required:true},
   password:{type:String,required:true}
})

export const userModel=model<TUser>('user', userSchema)