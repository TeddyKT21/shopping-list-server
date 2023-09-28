import { Document, Schema, model } from "mongoose";

export interface Product {
    name:string;
    quantity:number;
    amountPerUnit:string | undefined;
    description:string | undefined;
}

interface ProductDocument extends Product, Document{}

const productSchema = new Schema<Product>({
    name:{
        type:String,
        required:true,
    },
    quantity:{
        type:Number,
        required:true,
    },
    amountPerUnit:{
        type:String,
    },
    description:{
        type:String,
    }
})

export const ProductModel = model('Product',productSchema);