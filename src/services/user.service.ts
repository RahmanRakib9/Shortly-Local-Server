import User from '../models/user.model';

const createNewUser = async (name: string, email: string, password: string) => {
  const user = await User.create({
    name,
    email,
    password,
  });
  return user;
};

const signInUser = async (email: string, password: string) => {
  const user = await User.findOne({ email, password });
  return user;
};

const userServices = { createNewUser, signInUser };
export default userServices;
