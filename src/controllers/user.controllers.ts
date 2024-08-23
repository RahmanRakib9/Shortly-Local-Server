import { NextFunction, Request, Response } from 'express';
import userServices from '../services/user.service';
import httpStatus from 'http-status';

async function handleGetAllUsers(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const users = await userServices.getAllUser();

    res.status(httpStatus.OK).json({
      success: true,
      message: 'All Users Retrieved Successfully!',
      payload: users,
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

const userControllers = {
  handleGetAllUsers,
  handleSignInUser,
};
export default userControllers;
