import { NextFunction, Request, Response } from 'express';
import { User_Role } from '../constants/user.constant';
import { catchAsync } from '../utils/catchAsync';
import jwt, { JwtPayload } from 'jsonwebtoken';
import ApiError from '../error/apiError';
import httpStatus from 'http-status';
import config from '../app/config/config';
import User from '../models/user.model';

export const authorize = (...requiredRoles: (keyof typeof User_Role)[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const accessToken = req.headers.authorization;

    if (!accessToken) {
      throw new ApiError(
        httpStatus.UNAUTHORIZED,
        'You are not authorized to access this route!',
      );
    }

    const verifyToken = jwt.verify(
      accessToken,
      config.jwt_access_token_secret_key as string,
    );
    const { role, email } = verifyToken as JwtPayload;

    const user = await User.findOne({ email });

    if (!user) {
      throw new ApiError(httpStatus.NOT_FOUND, 'User Not Found!');
    }

    if (!requiredRoles.includes(role)) {
      throw new ApiError(
        httpStatus.UNAUTHORIZED,
        'You are not authorized to access this route!',
      );
    }

    next();
  });
};
