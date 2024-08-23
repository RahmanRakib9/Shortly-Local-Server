import { User_Role } from '../constants/user.constant';
import { IUser } from '../interfaces/user.interface';
import User from '../models/user.model';
import bcrypt from 'bcrypt';
import config from '../app/config/config';

const registerUser = async (userPayload: IUser) => {
  const user = await User.findOne({ email: userPayload.email });

  if (user) {
    throw new Error('User with this email already exist!');
  }

  userPayload.role = User_Role.USER;

  const hashedPassword = await bcrypt.hash(
    userPayload.password,
    Number(config.bcrypt_salt_round),
  );
  userPayload.password = hashedPassword;

  const newUser = await User.create(userPayload);
  return newUser;
};

const authServices = {
  registerUser,
};
export default authServices;
