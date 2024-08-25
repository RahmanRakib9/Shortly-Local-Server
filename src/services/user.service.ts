import httpStatus from 'http-status';
import ApiError from '../error/apiError';
import { IUpdateUser, IUser } from '../interfaces/user.interface';
import User from '../models/user.model';
import { User_Role } from '../constants/user.constant';
import bcrypt from 'bcrypt';
import config from '../app/config/config';

const getAllUser = async () => {
  const users = await User.find();
  return users;
};

const getUser = async (id: string) => {
  const user = await User.findById({ _id: id });
  return user;
};

const deleteUser = async (id: string) => {
  await User.deleteOne({ _id: id });
};

const updateUser = async (id: string, updateUserPayload: IUpdateUser) => {
  const updatedUser = await User.updateOne(
    { _id: id },
    { updateUserPayload },
    { new: true },
  );
  return updatedUser;
};

const createAdmin = async (userPayload: IUser) => {
  const user = await User.findOne({ email: userPayload.email });

  if (user) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      'User with this email already exist!',
    );
  }

  userPayload.role = User_Role.ADMIN;

  const hashedPassword = await bcrypt.hash(
    userPayload.password,
    Number(config.bcrypt_salt_round),
  );
  userPayload.password = hashedPassword;

  const admin = await User.create(userPayload);
  return admin;
};

const userServices = {
  getAllUser,
  getUser,
  deleteUser,
  updateUser,
  createAdmin,
};
export default userServices;
