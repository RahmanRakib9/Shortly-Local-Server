import User from '../models/user.model';
import config from '../app/config/config';


const createNewUser = async (name: string, email: string, password: string) => {
  const hashedPassword = await bcrypt.hash(
    password,
    config.bcryptSaltRounds as string,
  );

  const user = await User.create({
    name,
    email,
    password:hashedPassword,
  });
  return user;
};

const signInUser = async (email: string, password: string) => {
  const user = await User.findOne({ email, password });
  return user;
};

const userServices = { createNewUser, signInUser };
export default userServices;
