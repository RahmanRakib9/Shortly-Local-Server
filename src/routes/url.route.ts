import express from 'express';
import { urlControllers } from '../controllers/url.controller';
import { apiRateLimit } from '../middlewares/apiRateLimit';
import { authorize } from '../middlewares/authorization';
import { User_Role } from '../constants/user.constant';

const router = express.Router();

router.post(
  '/',
  apiRateLimit,
  authorize(User_Role.USER, User_Role.ADMIN, User_Role.SUPER_ADMIN),
  urlControllers.handleCreateNewShortURL,
);

router.get(
  '/',
  apiRateLimit,
  authorize(User_Role.ADMIN, User_Role.SUPER_ADMIN),
  urlControllers.handleGetShortURLs,
);

router.get(
  '/:shortId',
  apiRateLimit,
  authorize(User_Role.USER, User_Role.ADMIN, User_Role.SUPER_ADMIN),
  urlControllers.handleRedirectUserToGivenURL,
);

router.get(
  '/analytics/:shortId',
  apiRateLimit,
  authorize(User_Role.ADMIN, User_Role.SUPER_ADMIN),
  urlControllers.handleGetAnalytics,
);

router.delete(
  '/:id',
  apiRateLimit,
  authorize(User_Role.ADMIN, User_Role.SUPER_ADMIN),
  urlControllers.handleDeleteShortURL,
);

const urlRoutes = router;
export default urlRoutes;
