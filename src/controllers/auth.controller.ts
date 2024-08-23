import { NextFunction, Request, Response } from 'express';
import userValidations from '../schemas/user.schema';
import httpStatus from 'http-status';
import authServices from '../services/auth.service';

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

const authControllers = {
  handleRegisterUser,
};
export default authControllers;
