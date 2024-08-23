import User from '../models/user.model';

const getAllUser = async () => {
  const users = await User.find();
  return users;
};

const signInUser = async (email: string, password: string) => {
  const user = await User.findOne({ email, password });
  return user;
};

const userServices = { signInUser, getAllUser };
export default userServices;
