import express from 'express';
import userControllers from '../controllers/user.controllers';
import { apiRateLimit } from '../middlewares/apiRateLimit';
import { authorize } from '../middlewares/authorization';
import { User_Role } from '../constants/user.constant';

const router = express.Router();

router.get(
  '/',
  apiRateLimit,
  authorize(User_Role.ADMIN, User_Role.SUPER_ADMIN),
  userControllers.handleGetAllUsers,
);

router.get(
  '/:id',
  apiRateLimit,
  authorize(User_Role.ADMIN, User_Role.SUPER_ADMIN),
  userControllers.handleGetUser,
);

router.delete(
  '/:id',
  apiRateLimit,
  authorize(User_Role.ADMIN, User_Role.SUPER_ADMIN),
  userControllers.handleDeleteUser,
);

router.patch(
  '/:id',
  apiRateLimit,
  authorize(User_Role.ADMIN, User_Role.SUPER_ADMIN),
  userControllers.handleUpdateUser,
);

router.post(
  '/create-admin',
  apiRateLimit,
  authorize(User_Role.SUPER_ADMIN),
  userControllers.handleCreateAdmin,
);

const userRoutes = router;
export default userRoutes;
