import { Router } from "express";
import { createCart, deleteCart } from "../controllers/cart.js";

export const cartRouter = Router();

cartRouter.post('/cart',createCart);
cartRouter.delete('/cart',deleteCart);

