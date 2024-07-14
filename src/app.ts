import express, { Application, Request, Response } from "express";
import cors from "cors";
import { ProductRoutes } from "./app/modules/products/product.route";
import globalErrorHandler from "./app/middleware/globalErrorHandler";
import { OrderRoutes } from "./app/modules/order/order.route";

const app: Application = express();

// parsers
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173", "https://fitkit-client.vercel.app"],
  }),
);

// product all routes
app.use("/api/product", ProductRoutes);

// order all routes
app.use("/api/order", OrderRoutes);

// test routes
app.get("/", (req: Request, res: Response) => {
  const a = "hello world";

  res.send(a);
});

// global error handler
app.use(globalErrorHandler);

export default app;
