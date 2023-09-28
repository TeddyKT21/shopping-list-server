import { CartModel } from "../Dal/cart.js"

export const createCart = async (title:string) => {
    const cart = new CartModel({title,createdAt:new Date(),cartCode: String(Math.random() * 99999)});
    await cart.save();
    return cart;
}

export  const deleteCart = async (cartId:string) => {
    const cart = await CartModel.findByIdAndDelete(cartId);
    return cart;
}