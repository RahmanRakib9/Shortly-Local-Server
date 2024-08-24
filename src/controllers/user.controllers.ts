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

async function handleGetUser(req: Request, res: Response, next: NextFunction) {
  try {
    const user = await userServices.getUser(req.params.id);

    const responsePayload = {
      name: user?.name,
      email: user?.email,
      role: user?.role,
    };

    res.status(httpStatus.OK).json({
      success: true,
      message: 'User Retrieved Successfully!',
      payload: responsePayload,
    });
  } catch (error) {
    next(error);
  }
}

const userControllers = {
  handleGetAllUsers,
  handleGetUser,
};
export default userControllers;
