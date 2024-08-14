import mongoose from 'mongoose';
import { IUser } from '../interfaces/user.interface';
import { User_Role } from '../constants/user.constant';

const userSchema = new mongoose.Schema<IUser>({
  name: {
    type: String,
    required: [true, 'user name is required!'],
  },
  email: {
    type: String,
    required: [true, 'email is required!'],
  },
  password: {
    type: String,
    required: [true, 'password is required!'],
  },
  role: {
    type: String,
    enum: Object.keys(User_Role),
  },
});

const User = mongoose.model('User', userSchema);
export default User;
