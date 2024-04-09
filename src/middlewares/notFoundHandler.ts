/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';

export function notFoundHandler(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Provided Credential is False!',
  });
}
