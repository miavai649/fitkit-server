/* eslint-disable @typescript-eslint/no-unused-vars */
import { ErrorRequestHandler } from "express";

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  const statusCode = 500;
  const message = err.message || "Something went wrong";
  const stack = err.stack;

  res.status(statusCode).json({
    success: false,
    message,
    err,
    stack,
  });
};

export default globalErrorHandler;
