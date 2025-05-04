import { model, Schema } from "mongoose";
import { TTicket } from "./Ticket.interface";


const TicketHistory =new Schema<TTicket>({
    name:{type:String,required:true},
    email:{type:String,required:true},
    from:{type:String,required:true},
    to:{type:String,required:true},
    busName:{type:String,required:true},
    busNumber:{type:String,required:true},
    time:{type:String,required:true},
    phone:{type:Number,required:true},
    BDT:{type:Number,required:true},
    ticket:{type:[String],required:true},
    date:{type:Date,required:true}
})

export const ticketModel=model<TTicket>('ticketHistory',TicketHistory)