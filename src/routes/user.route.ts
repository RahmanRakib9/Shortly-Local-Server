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
  authorize(User_Role.ADMIN, User_Role.SUPER_ADMIN),
  apiRateLimit,
  userControllers.handleGetUser,
);

router.delete(
  '/:id',
  authorize(User_Role.ADMIN, User_Role.SUPER_ADMIN),
  apiRateLimit,
  userControllers.handleDeleteUser,
);

router.patch(
  '/:id',
  authorize(User_Role.ADMIN, User_Role.SUPER_ADMIN),
  apiRateLimit,
  userControllers.handleUpdateUser,
);

const userRoutes = router;
export default userRoutes;
