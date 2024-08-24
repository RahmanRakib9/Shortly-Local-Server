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

const userControllers = {
  handleGetAllUsers,
};
export default userControllers;
