import { IUpdateUser } from '../interfaces/user.interface';
import User from '../models/user.model';

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

const userServices = { getAllUser, getUser, deleteUser, updateUser };
export default userServices;
