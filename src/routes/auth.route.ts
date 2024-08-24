import express from 'express';
import authControllers from '../controllers/auth.controller';

const router = express.Router();

router.post('/register', authControllers.handleRegisterUser);

router.get('/login', authControllers.handleLoginUser);

const authRoutes = router;
export default authRoutes;
