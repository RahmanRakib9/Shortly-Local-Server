import express from 'express';
import userControllers from '../controllers/user.controllers';
import { apiRateLimit } from '../middlewares/apiRateLimit';

const router = express.Router();

router.get('/', apiRateLimit, userControllers.handleGetAllUsers);

router.get('/:id', apiRateLimit, userControllers.handleGetUser);

router.delete('/:id', apiRateLimit, userControllers.handleDeleteUser);

router.patch('/:id', apiRateLimit, userControllers.handleUpdateUser);

const userRoutes = router;
export default userRoutes;
