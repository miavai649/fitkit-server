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
router.get("/:id", ProductControllers.getSingleProduct);
router.get("/category/:category", ProductControllers.getCategoryProducts);
router.get("/", ProductControllers.getAllProduct);
router.patch(
  "/:id",
  validateRequest(ProductValidations.updateProductValidation),
  ProductControllers.updateProduct,
);
router.delete("/:id", ProductControllers.deleteProduct);

export const ProductRoutes = router;
