/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { NextFunction, Request, Response } from 'express';

export function notFoundHandler(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  res.status(404).json({
    success: false,
    message: 'Provided Credential is False!',
  });
}
