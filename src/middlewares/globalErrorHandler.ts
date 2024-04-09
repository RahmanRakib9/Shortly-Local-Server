/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express';

export function globalErrorHandler(
  error: any,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const statusCode = 500;
  const message = 'Server side Error' || error.message;

  return res.status(statusCode).json({
    success: false,
    message: message,
    error: error,
  });
}
