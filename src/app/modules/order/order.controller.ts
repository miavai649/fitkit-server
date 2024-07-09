import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { OrderServices } from "./order.service";

const createOrder = catchAsync(async (req, res) => {
  const orderData = req.body;

  const result = await OrderServices.createOrderIntoDb(orderData);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Order created successfully",
    data: result,
  });
});

export const OrderControllers = {
  createOrder,
};
