import express, { Application, Request, Response } from "express";
import cors from "cors";
import { ProductRoutes } from "./app/modules/products/product.route";
import globalErrorHandler from "./app/middleware/globalErrorHandler";

const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// root application route
app.use("/api/product", ProductRoutes);

// test routes
app.get("/", (req: Request, res: Response) => {
  const a = "hello world";

  res.send(a);
});

// global error handler
app.use(globalErrorHandler);

export default app;
