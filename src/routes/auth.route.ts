import express from 'express';
import authControllers from '../controllers/auth.controller';
import { apiRateLimit } from '../middlewares/apiRateLimit';
import { authorize } from '../middlewares/authorization';
import { User_Role } from '../constants/user.constant';

const router = express.Router();

router.post('/register', apiRateLimit, authControllers.handleRegisterUser);

router.get('/login', apiRateLimit, authControllers.handleLoginUser);

router.post(
  '/refresh-token',
  apiRateLimit,
  authorize(User_Role.USER, User_Role.ADMIN, User_Role.SUPER_ADMIN),
  authControllers.handleGenerateNewRefreshToken,
);

const authRoutes = router;
export default authRoutes;
