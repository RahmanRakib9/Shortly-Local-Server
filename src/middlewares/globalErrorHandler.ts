/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express';
import { TErrorSources } from '../error/error.interface';
import ApiError from '../error/apiError';
import config from '../app/config/config';
import { ZodError } from 'zod';
import zodErrorHandler from '../error/zodErrorHandler';
import mongooseErrorHandler from '../error/mongooseErrorHandler';
import castErrorHandler from '../error/castErrorHandler';

export function globalErrorHandler(
  error: any,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  // default statusCode,message and errorSource
  let statusCode = 500;
  let message = 'Error From Global Error Handler';
  let errorSources: TErrorSources = [
    {
      path: '',
      message: "Message From Default Error Sources'",
    },
  ];

  if (error instanceof ZodError) {
    const customErrorFormat = zodErrorHandler(error);
    statusCode = customErrorFormat.statusCode;
    message = customErrorFormat.message;
    errorSources = customErrorFormat.errorSources;
  } else if (error.name === 'ValidationError') {
    const customErrorFormat = mongooseErrorHandler(error);
    statusCode = customErrorFormat.statusCode;
    message = customErrorFormat.message;
    errorSources = customErrorFormat.errorSources;
  } else if (error.name === 'CastError') {
    const customErrorFormat = castErrorHandler(error);
    statusCode = customErrorFormat.statusCode;
    message = customErrorFormat.message;
    errorSources = customErrorFormat.errorSources;
  } else if (error instanceof ApiError) {
    statusCode = error?.statusCode;
    message = error?.message;
    errorSources = [
      {
        path: '',
        message: error?.message,
      },
    ];
  }

  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
    error: config.env == 'development' ? error.stack : null,
  });
}
