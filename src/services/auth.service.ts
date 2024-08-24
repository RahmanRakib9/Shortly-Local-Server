import { User_Role } from '../constants/user.constant';
import { IUser } from '../interfaces/user.interface';
import User from '../models/user.model';
import bcrypt from 'bcrypt';
import config from '../app/config/config';
import { ILoginUser } from '../interfaces/auth.interface';
import { comparePassword } from '../utils/comparePassword';
import jwt, { JwtPayload } from 'jsonwebtoken';
import ApiError from '../error/apiError';
import httpStatus from 'http-status';

const registerUser = async (userPayload: IUser) => {
  const user = await User.findOne({ email: userPayload.email });

  if (user) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      'User with this email already exist!',
    );
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

const loginUser = async (userLoginPayload: ILoginUser) => {
  const user = await User.findOne({ email: userLoginPayload.email });

  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User with this email Not Found!');
  }

  const isPasswordMatched = await comparePassword(
    userLoginPayload.password,
    user.password,
  );

  if (!isPasswordMatched) {
    throw new Error('Password not matched!');
  }

  const jwtPayload = {
    email: user.email,
    role: user.role,
  };

  const accessToken = jwt.sign(
    jwtPayload,
    config.jwt_access_token_secret_key as string,
    { expiresIn: '10m' },
  );

  const refreshToken = jwt.sign(
    jwtPayload,
    config.jwt_access_token_secret_key as string,
    { expiresIn: '10d' },
  );

  return {
    accessToken,
    refreshToken,
  };
};

const generateNewRefreshToken = async (token: string) => {
  const verifiedToken = jwt.verify(
    token,
    config.jwt_refresh_token_secret_key as string,
  ) as JwtPayload;

  const { email } = verifiedToken;

  const user = await User.findOne({ email });

  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User with this email Not Found!');
  }

  //create jwt payload for regenerating refresh token
  const jwtPayload = {
    email: user.email,
    role: user.role,
  };

  const refreshToken = jwt.sign(
    jwtPayload,
    config.jwt_refresh_token_secret_key as string,
    { expiresIn: '10d' },
  );

  return { refreshToken };
};

const authServices = {
  registerUser,
  loginUser,
  generateNewRefreshToken,
};
export default authServices;
