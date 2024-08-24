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

const userServices = { getAllUser, getUser, deleteUser };
export default userServices;
