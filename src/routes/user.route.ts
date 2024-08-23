import express from 'express';
import userControllers from '../controllers/user.controllers';

const router = express.Router();

router.get('/users', userControllers.handleGetAllUsers);

router.post('/login', userControllers.handleSignInUser);

const userRoutes = router;
export default userRoutes;
