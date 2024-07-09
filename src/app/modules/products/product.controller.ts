import { Request, Response } from 'express'
import { ProductServices } from './product.service'

const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body

    const result = await ProductServices.createProductIntoDb(productData)
    res.status(200).json({
      success: true,
      message: 'Product created successfully',
      data: result
    })
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Internal Server Error'
    })
  }
}

export const ProductControllers = {
  createProduct
}
