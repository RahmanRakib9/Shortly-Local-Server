import { User_Role } from '../constants/user.constant';

export interface IUser {
  name: string;
  email: string;
  password: string;
  role: keyof typeof User_Role;
}

export interface IUpdateUser {
  name: string;
  email: string;
}
