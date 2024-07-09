import { z } from "zod";

const createOrderValidation = z.object({
  body: z.object({
    name: z.string({
      required_error: "Name must be provided",
    }),
    email: z
      .string({
        required_error: "Email must be provided",
      })
      .email("Invalid email format"),
    phoneNumber: z.string({
      required_error: "Phone number must be provided",
    }),
    deliveryAddress: z.string({
      required_error: "Delivery address must be provided",
    }),
    totalPrice: z
      .number({
        required_error: "Total price must be provided",
      })
      .nonnegative("Total price must be a non negative number"),
    payment: z.enum(["pending", "complete"]).default("pending"),
    productId: z
      .string({
        required_error: "Product ID must be provided",
      })
      .regex(/^[0-9a-fA-F]{24}$/, "Invalid product ID format"),
    quantity: z
      .number({
        required_error: "Quantity must be provided",
      })
      .nonnegative("Quantity must be a non negative number"),
  }),
});

export const OrderValidations = {
  createOrderValidation,
};
