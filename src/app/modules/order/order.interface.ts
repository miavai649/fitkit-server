export type TProductCart = {
  _id: string
  name: string
  price: number
  description: string
  images: string[]
  category: 'weights' | 'cardio' | 'gear' | 'apparel'
  quantity: number
  stock: 'in-stock' | 'out-stock'
  orderQuantity: number
  orderPrice: number
}

export type TPayment = {
  name: string
  email: string
  phone: string
  address: string
  cart: TProductCart[]
  totalPrice: number
}
