import jwt from 'jsonwebtoken';
import { IUser } from '../interfaces/user.interface';
import config from '../app/config/config';

const generateAccessToken = (user: IUser) => {
  const userPayload = {
    name: user.name,
    email: user.email,
    password: user.password,
  };
  jwt.sign(userPayload, config.jwt_access_token_secret_key as string, {
    expiresIn: '90m',
  });
};

const generateRefreshToken = (user: IUser) => {
  const userPayload = {
    name: user.name,
    email: user.email,
    password: user.password,
  };
  jwt.sign(userPayload, config.jwt_refresh_token_secret_key as string, {
    expiresIn: '15d',
  });
};

const authenticationTokens = { generateAccessToken, generateRefreshToken };
export default authenticationTokens;
