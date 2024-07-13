/* eslint-disable @typescript-eslint/no-explicit-any */

import { ProductServices } from "./product.service";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";

const createProduct = catchAsync(async (req, res) => {
  const productData = req.body;

  const result = await ProductServices.createProductIntoDb(productData);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Product created successfully",
    data: result,
  });
});

const getSingleProduct = catchAsync(async (req, res) => {
  const productId = req.params.id;

  const result = await ProductServices.getSingleProductFromDb(productId);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Product retrieved successfully",
    data: result,
  });
});
const getCategoryProducts = catchAsync(async (req, res) => {
  const category = req.params.category;

  const result = await ProductServices.getCategoriesProducts(category);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Products retrieved successfully",
    data: result,
  });
});

const getAllProduct = catchAsync(async (req, res) => {
  const result = await ProductServices.getAllProductFromDb(req.parsedQuery);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Products retrieved successfully",
    data: result,
  });
});

const updateProduct = catchAsync(async (req, res) => {
  const productId = req.params.id;
  const productData = req.body;

  const result = await ProductServices.updateProductIntoDb(
    productId,
    productData,
  );
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Product updated successfully",
    data: result,
  });
});

const deleteProduct = catchAsync(async (req, res) => {
  const productId = req.params.id;

  const result = await ProductServices.deleteProductFromDb(productId);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Product deleted successfully",
    data: result,
  });
});

export const ProductControllers = {
  createProduct,
  getAllProduct,
  updateProduct,
  getSingleProduct,
  deleteProduct,
  getCategoryProducts,
};
