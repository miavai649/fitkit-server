import { model, Schema } from 'mongoose'
import { TProduct } from './product.interface'

const productSchema = new Schema<TProduct>({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  images: {
    type: [String],
    required: true
  },
  category: {
    type: String,
    required: true
  },
  stock: {
    type: String,
    required: true
  }
})

export const Product = model<TProduct>('Product', productSchema)
