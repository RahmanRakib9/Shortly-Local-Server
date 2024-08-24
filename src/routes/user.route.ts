import express from 'express';
import userControllers from '../controllers/user.controllers';

const router = express.Router();

router.get('/', userControllers.handleGetAllUsers);

router.get('/:id', userControllers.handleGetUser);

router.delete('/:id', userControllers.handleDeleteUser);

const userRoutes = router;
export default userRoutes;
