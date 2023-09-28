import { Request, Response } from "express"
import * as cartBL from '../BL/cart.js' 

export const createCart = async (req:Request,res:Response) => {
    try {
        const {title} = req.body;
        const cart = await cartBL.createCart(title);
        res.status(201).send(cart);
    } 
    catch (error) {
        
    }
}

export  const deleteCart = async (req:Request,res:Response) => {
    try {
        const {cardId} = req.body;
        const cart = await cartBL.deleteCart(cardId);
        res.status(201).send(cart);
    } 
    catch (error) {
        
    }
}