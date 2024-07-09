import { z } from "zod";

const createProductValidation = z.object({
  body: z.object({
    name: z.string({
      required_error: "Product name must be provided",
    }),
    price: z
      .number({
        required_error: "Product price must be provided",
      })
      .nonnegative("Price must be a non negative number"),
    description: z.string({
      required_error: "Product description must be provided",
    }),
    images: z
      .array(z.string(), {
        required_error: "At least one image must be provided",
      })
      .nonempty("At least one image must be provided"),
    category: z.string({
      required_error: "Product category must be provided",
    }),
    quantity: z
      .number({
        required_error: "Product quantity must be provided",
      })
      .nonnegative("Quantity must be a non negative number"),
    stock: z.string({
      required_error: "Product stock status must be provided",
    }),
    isDeleted: z.boolean().optional(),
  }),
});

export const ProductValidations = {
  createProductValidation,
};
