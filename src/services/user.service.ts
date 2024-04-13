import User from '../models/user.model';

const createNewUser = async (name: string, email: string, password: string) => {
  const user = await User.create({
    name,
    email,
    password,
  });
  return user;
};

const userServices = { createNewUser };
export default userServices;
