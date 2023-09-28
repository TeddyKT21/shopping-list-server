import { Router } from "express";
import { addProduct, deleteProduct, updateProduct } from "../controllers/product.js";

export const productRouter = Router();


productRouter.post('',addProduct);
productRouter.put('',updateProduct);
productRouter.delete('',deleteProduct)

