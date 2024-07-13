/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from "mongoose";
import { Product } from "../products/product.model";
import { TPayment } from "./order.interface";

const createPaymentIntoDB = async (payload: TPayment) => {
  const updatedProducts = [];

  for (const item of payload.cart) {
    const productId = item._id;
    const orderQuantity = item.orderQuantity;

    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      { $inc: { quantity: -orderQuantity } },
      { new: true },
    );

    if (!updatedProduct) {
      throw new Error(`Product not found with ID: ${productId}`);
    }

    updatedProducts.push(updatedProduct);
  }

  return updatedProducts;
};

export const OrderServices = {
  createPaymentIntoDB,
};
