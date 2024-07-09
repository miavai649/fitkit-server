import express from "express";
import validateRequest from "../../middleware/validateRequest";
import { ProductValidations } from "./product.validation";
import { ProductControllers } from "./product.controller";

const router = express.Router();

router.post(
  "/",
  validateRequest(ProductValidations.createProductValidation),
  ProductControllers.createProduct,
);

export const ProductRoutes = router;
