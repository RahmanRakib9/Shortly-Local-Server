import config from '../app/config/config';
import { User_Role } from '../constants/user.constant';
import User from '../models/user.model';

const superAdmin = {
  name: config.superAdmin_name as string,
  email: config.superAdmin_email as string,
  password: config.superAdmin_password as string,
  role: User_Role.SUPER_ADMIN,
};

const seedSuperAdmin = async () => {
  const isSuperAdminExist = await User.findOne({ role: superAdmin.role });

  if (!isSuperAdminExist) {
    await User.create(superAdmin);
  }
};
export default seedSuperAdmin;
