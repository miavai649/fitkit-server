import { model, Schema, Document } from 'mongoose'
import { TPayment, TProductCart } from './order.interface'

// Create the ProductCart schema
const productCartSchema = new Schema<TProductCart>(
  {
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
      enum: ['weights', 'cardio', 'gear', 'apparel'],
      required: true
    },
    quantity: {
      type: Number,
      required: true
    },
    stock: {
      type: String,
      enum: ['in-stock', 'out-stock'],
      required: true
    },
    orderQuantity: {
      type: Number,
      required: true
    },
    orderPrice: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: true
  }
)

// Create the Payment schema
const paymentSchema = new Schema<TPayment>(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    cart: {
      type: [productCartSchema],
      required: true
    },
    totalPrice: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: true
  }
)

export const Payment = model<TPayment>('Payment', paymentSchema)
