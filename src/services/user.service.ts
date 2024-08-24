import User from '../models/user.model';

const getAllUser = async () => {
  const users = await User.find();
  return users;
};

const userServices = { getAllUser };
export default userServices;
