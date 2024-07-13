import { IParsedQuery } from "../../interface";
import { TProduct } from "./product.interface";
import { Product } from "./product.model";

const createProductIntoDb = async (payload: TProduct) => {
  const product = await Product.findOne({ name: payload?.name });

  if (product) {
    const updatedQuantity = payload?.quantity + product.quantity;
    const result = await Product.findOneAndUpdate(
      { name: payload?.name },
      { quantity: updatedQuantity },
      { new: true },
    );
    return result;
  }

  const result = await Product.create(payload);
  return result;
};

//
const getSingleProductFromDb = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};

const getCategoriesProducts = async (category: string) => {
  const result = await Product.find({ category });
  return result;
};

const getAllProductFromDb = async (query: IParsedQuery) => {
  const { searchTerm, categories, sort } = query;

  // search query
  const searchQuery = {
    name: { $regex: searchTerm, $options: "i" },
  };

  // filter query
  let categoryFilter = {};

  if (categories && categories.length) {
    categoryFilter = {
      category: { $in: categories },
    };
  }

  // ultimate query
  const products = {
    $and: [searchQuery, categoryFilter],
  };

  // sorting by price
  const sortOrder = sort === "asc" ? 1 : -1;

  if (!sort) {
    const result = await Product.find(products).sort({
      createdAt: -1,
    });

    return result;
  } else {
    const result = await Product.find(products).sort({ price: sortOrder });

    return result;
  }
};

const updateProductIntoDb = async (id: string, payload: Partial<TProduct>) => {
  const result = await Product.findByIdAndUpdate(id, payload, { new: true });

  return result;
};

const deleteProductFromDb = async (id: string) => {
  const result = await Product.findByIdAndDelete(id);
  return result;
};

export const ProductServices = {
  createProductIntoDb,
  getAllProductFromDb,
  updateProductIntoDb,
  getSingleProductFromDb,
  deleteProductFromDb,
  getCategoriesProducts,
};
