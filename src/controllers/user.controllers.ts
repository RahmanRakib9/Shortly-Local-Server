import { NextFunction, Request, Response } from 'express';
import userServices from '../services/user.service';
import httpStatus from 'http-status';
import userValidations from '../schemas/user.schema';

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

async function handleDeleteUser(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    await userServices.deleteUser(req.params.id);

    res.end();
  } catch (error) {
    next(error);
  }
}

async function handleUpdateUser(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const updateUserPayload = req.body;
    userValidations.updateUserSchema.parse(updateUserPayload);

    await userServices.updateUser(req.params.id, updateUserPayload);

    res.status(httpStatus.OK).json({
      success: true,
      message: 'User Updated Successfully!',
    });
  } catch (error) {
    next(error);
  }
}

async function handleCreateAdmin(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const userPayload = req.body;
    userValidations.createUserSchema.parse(userPayload);
    const admin = await userServices.createAdmin(userPayload);

    const responsePayload = {
      name: admin.name,
      email: admin.email,
      role: admin.role,
    };

    res.status(httpStatus.CREATED).json({
      success: true,
      message: 'Admin Created Successfully!',
      payload: responsePayload,
    });
  } catch (error) {
    next(error);
  }
}

const userControllers = {
  handleGetAllUsers,
  handleGetUser,
  handleDeleteUser,
  handleUpdateUser,
  handleCreateAdmin,
};
export default userControllers;
