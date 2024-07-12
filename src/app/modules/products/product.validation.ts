import { z } from 'zod'

const createProductValidation = z.object({
  body: z.object({
    name: z.string({
      required_error: 'Product name must be provided'
    }),
    price: z
      .number({
        required_error: 'Product price must be provided'
      })
      .nonnegative('Price must be a non negative number'),
    description: z.string({
      required_error: 'Product description must be provided'
    }),
    images: z
      .array(z.string(), {
        required_error: 'At least one image must be provided'
      })
      .nonempty('At least one image must be provided'),
    category: z.enum(['weights', 'cardio', 'gear', 'apparel'], {
      required_error: 'Product category must be provided'
    }),
    quantity: z
      .number({
        required_error: 'Product quantity must be provided'
      })
      .nonnegative('Quantity must be a non negative number'),
    stock: z.enum(['in-stock', 'out-stock']).default('in-stock')
  })
})

const updateProductValidation = z.object({
  body: z.object({
    name: z
      .string({
        required_error: 'Product name must be provided'
      })
      .optional(),
    price: z
      .number({
        required_error: 'Product price must be provided'
      })
      .nonnegative('Price must be a non negative number')
      .optional(),
    description: z
      .string({
        required_error: 'Product description must be provided'
      })
      .optional(),
    images: z
      .array(z.string(), {
        required_error: 'At least one image must be provided'
      })
      .nonempty('At least one image must be provided')
      .optional(),
    category: z.enum(['weights', 'cardio', 'gear', 'apparel']).optional(),
    quantity: z
      .number({
        required_error: 'Product quantity must be provided'
      })
      .nonnegative('Quantity must be a non negative number')
      .optional(),
    stock: z.enum(['in-stock', 'out-stock']).optional()
  })
})

export const ProductValidations = {
  createProductValidation,
  updateProductValidation
}
