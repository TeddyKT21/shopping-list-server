import { Request, Response } from "express";
import { addToCart, deleteFromCart, editProduct } from "../BL/product.js";


export const addProduct = async (req:Request,res:Response) =>{
    const {name, quantity, amountPerUnit, description, cartId} = req.body;
    const productData = {name, quantity, amountPerUnit, description};
    const product = await addToCart(cartId,productData);
    res.status(201).send(product);
}

export const updateProduct = async (req:Request,res:Response) =>{
    const {name, quantity, amountPerUnit, description, cartId} = req.body;
    const productData = {name, quantity, amountPerUnit, description};
    const product = await editProduct(cartId,productData);
    res.status(202).send(product);
}

export const deleteProduct = async  (req:Request,res:Response) =>{
    const {productId,cartId} = req.body;
    const product = await deleteFromCart(cartId,productId);
    res.status(204).send(product);
}


