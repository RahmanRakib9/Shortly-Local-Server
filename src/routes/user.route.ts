import express from 'express';
import userControllers from '../controllers/user.controllers';

const router = express.Router();

router.get('/', userControllers.handleGetAllUsers);

const userRoutes = router;
export default userRoutes;
