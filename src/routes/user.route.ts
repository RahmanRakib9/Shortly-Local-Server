import express from 'express';
import userControllers from '../controllers/user.controllers';

const router = express.Router();

router.post('/register', userControllers.handleCreateNewUser);

const userRoutes = router;
export default userRoutes;
