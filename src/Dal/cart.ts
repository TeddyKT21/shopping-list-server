import mongoose, { Document, Schema, model } from "mongoose";
import { Product } from "./product.js";

export interface Cart {
    products:Product[] | mongoose.Schema.Types.ObjectId[];
    createdAt:Date;
    cartCode:string;
    title:string;
}

interface CartDocument extends Cart, Document{}

const cartSchema =  new Schema<CartDocument>({
    createdAt:{
        type:Date,
        required:true
    },
    products:{
        type:[mongoose.Schema.Types.ObjectId],
        ref:'Product',
        required:true
    },
    cartCode:{
        type:String,
        required:true,
        unique:true
    },
    title:{
        type:String,
        required:true,
    }
})

export const CartModel = model('Cart',cartSchema);