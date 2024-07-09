import { IParsedQuery } from '../../interface'
import { TProduct } from './product.interface'
import { Product } from './product.model'

const createProductIntoDb = async (payload: TProduct) => {
  const result = await Product.create(payload)
  return result
}

const getAllProductFromDb = async (query: IParsedQuery) => {
  const { searchTerm, categories, sort } = query

  // search query
  const searchQuery = {
    name: { $regex: searchTerm, $options: 'i' }
  }

  // filter query
  let categoryFilter = {}

  if (categories && categories.length) {
    categoryFilter = {
      category: { $in: categories }
    }
  }

  // ultimate query
  const products = {
    $and: [searchQuery, categoryFilter]
  }

  // sorting by price
  const sortOrder = sort === 'asc' ? 1 : -1

  const result = await Product.find(products).sort({ price: sortOrder })

  return result
}

export const ProductServices = {
  createProductIntoDb,
  getAllProductFromDb
}
