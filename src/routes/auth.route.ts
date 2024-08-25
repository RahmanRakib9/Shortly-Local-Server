import express from 'express';
import authControllers from '../controllers/auth.controller';
import { apiRateLimit } from '../middlewares/apiRateLimit';

const router = express.Router();

router.post('/register', apiRateLimit, authControllers.handleRegisterUser);

router.get('/login', apiRateLimit, authControllers.handleLoginUser);

router.post(
  '/refresh-token',
  apiRateLimit,
  authControllers.handleGenerateNewRefreshToken,
);

const authRoutes = router;
export default authRoutes;
