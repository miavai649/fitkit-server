import express from "express";
import validateRequest from "../../middleware/validateRequest";
import { ProductValidations } from "./product.validation";
import { ProductControllers } from "./product.controller";
import parseQueryParams from "../../middleware/parshingQueryParams";

const router = express.Router();

router.post(
  "/",
  validateRequest(ProductValidations.createProductValidation),
  ProductControllers.createProduct,
);
router.get("/", parseQueryParams, ProductControllers.getAllProduct);
router.patch(
  "/:id",
  validateRequest(ProductValidations.updateProductValidation),
  ProductControllers.updateProduct,
);

export const ProductRoutes = router;
