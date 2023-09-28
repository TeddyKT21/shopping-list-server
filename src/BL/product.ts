import { CartModel } from "../Dal/cart.js";
import { Product, ProductModel } from "../Dal/product.js";

export const addToCart = async (cartId: string, productData: Product) => {
  const product = new ProductModel(productData);
  await product.save();
  const cart = await CartModel.findByIdAndUpdate(
    cartId,
    { $push: { products: product } },
    { new: true }
  );
  return product;
};

export const editProduct = async (productId: string, productData: Product) =>
  await ProductModel.findByIdAndUpdate(productId, productData, {
    new: true,
  });

export const deleteFromCart = async (cartId: string, productId: string) =>{
    await CartModel.findByIdAndUpdate(cartId,{$pop:{_id:productId}});
    return await ProductModel.findByIdAndDelete(productId);
}

export const getProduct = async (productId: string) =>
  await ProductModel.findById(productId);
