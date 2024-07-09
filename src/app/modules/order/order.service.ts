/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from "mongoose";
import { Product } from "../products/product.model";
import { TOrder } from "./order.interface";
import { Order } from "./order.model";

const createOrderIntoDb = async (payload: TOrder) => {
  const product = await Product.findById(payload.productId);

  if (!product) {
    throw new Error("Product not found");
  }

  if (product?.stock === "out-stock") {
    throw new Error("Product is out of stock now");
  }

  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    if (payload?.quantity > product?.quantity) {
      throw new Error("Order quantity exceeds available product quantity");
    }

    const order = await Order.create([payload], { session });

    const updatedProductQuantity = product?.quantity - payload?.quantity;

    await Product.findByIdAndUpdate(
      product?._id,
      { quantity: updatedProductQuantity },
      { new: true },
    );

    await session.commitTransaction();
    await session.endSession();

    return order[0];
  } catch (error: any) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error(error);
  }
};

export const OrderServices = {
  createOrderIntoDb,
};
