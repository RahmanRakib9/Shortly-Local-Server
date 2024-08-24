import { NextFunction, Request, Response } from 'express';
import userValidations from '../schemas/user.schema';
import httpStatus from 'http-status';
import authServices from '../services/auth.service';
import authValidations from '../schemas/auth.schema';
import config from '../app/config/config';

async function handleRegisterUser(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const userPayload = req.body;
    userValidations.createUserSchema.parse(userPayload);
    const user = await authServices.registerUser(userPayload);

    const responsePayload = {
      name: user.name,
      email: user.email,
      role: user.role,
    };

    res.status(httpStatus.CREATED).json({
      success: true,
      message: 'User Registration Successfully!',
      payload: responsePayload,
    });
  } catch (error) {
    next(error);
  }
}

async function handleLoginUser(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const userLoginPayload = req.body;
    authValidations.loginUserSchema.parse(userLoginPayload);
    const { accessToken, refreshToken } =
      await authServices.loginUser(userLoginPayload);

    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      secure: config.env == 'production',
    });

    res.status(httpStatus.OK).json({
      success: true,
      message: 'User Logged In Successfully!',
      accessToken,
    });
  } catch (error) {
    next(error);
  }
}

// if existing refresh token is expired then this refresh token route will call from the client side
async function handleGenerateNewRefreshToken(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const { refreshToken } = req.cookies;
    const newRefreshToken =
      await authServices.generateNewRefreshToken(refreshToken);

    res.status(httpStatus.OK).json({
      success: true,
      message: 'New Refresh Token Generated Successfully!',
      refreshToken: newRefreshToken,
    });
  } catch (error) {
    next(error);
  }
}

const authControllers = {
  handleRegisterUser,
  handleLoginUser,
  handleGenerateNewRefreshToken,
};
export default authControllers;
