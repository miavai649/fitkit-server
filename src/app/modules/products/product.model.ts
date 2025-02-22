import { model, Schema } from "mongoose";
import { TProduct } from "./product.interface";

const productSchema = new Schema<TProduct>(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
      required: true,
    },
    category: {
      type: String,
      enum: ["weights", "cardio", "gear", "apparel"],
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    stock: {
      type: String,
      enum: ["in-stock", "out-stock"],
      default: "in-stock",
    },
  },
  {
    timestamps: true,
  },
);

export const Product = model<TProduct>("Product", productSchema);
