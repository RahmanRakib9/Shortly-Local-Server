import express from 'express';
import { urlControllers } from '../controllers/url.controller';
import { apiRateLimit } from '../middlewares/apiRateLimit';

const router = express.Router();

router.post('/', apiRateLimit, urlControllers.handleCreateNewShortURL);

router.get('/', apiRateLimit, urlControllers.handleGetShortURLs);

router.get(
  '/:shortId',
  apiRateLimit,
  urlControllers.handleRedirectUserToGivenURL,
);

router.get(
  '/analytics/:shortId',
  apiRateLimit,
  urlControllers.handleGetAnalytics,
);

router.delete('/:id', apiRateLimit, urlControllers.handleDeleteShortURL);

const urlRoutes = router;
export default urlRoutes;
