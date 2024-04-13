import express from 'express';
import userControllers from '../controllers/user.controllers';

const router = express.Router();

router.post('/register', userControllers.handleCreateNewUser);

router.post('/login', userControllers.handleSignInUser);

const userRoutes = router;
export default userRoutes;
