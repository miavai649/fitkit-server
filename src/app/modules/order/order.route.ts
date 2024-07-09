import express from "express";
import validateRequest from "../../middleware/validateRequest";
import { OrderValidations } from "./order.validation";
import { OrderControllers } from "./order.controller";

const router = express.Router();

router.post(
  "/",
  validateRequest(OrderValidations.createOrderValidation),
  OrderControllers.createOrder,
);

export const OrderRoutes = router;
