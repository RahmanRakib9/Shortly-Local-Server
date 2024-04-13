import { NextFunction, Request, Response } from 'express';
import userServices from '../services/user.service';
import httpStatus = require('http-status');

async function handleCreateNewUser(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const { name, email, password } = req.body;
    const user = await userServices.createNewUser(name, email, password);

    res.status(httpStatus.CREATED).json({
      success: true,
      message: 'User Created Successfully!',
      payload: user,
    });
  } catch (error) {
    next(error);
  }
}

async function handleSignInUser(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const { email, password } = req.body;
    const user = await userServices.signInUser(email, password);

    res.status(httpStatus.OK).json({
      success: true,
      message: 'User loggedIn Successfully!',
      payload: user,
    });
  } catch (error) {
    next(error);
  }
}

const userControllers = { handleCreateNewUser, handleSignInUser };
export default userControllers;
