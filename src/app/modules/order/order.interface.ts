import { Types } from "mongoose";

export type TOrder = {
  name: string;
  email: string;
  phoneNumber: string;
  deliveryAddress: string;
  totalPrice: number;
  payment: "pending" | "complete";
  productId: Types.ObjectId;
  quantity: number;
};
