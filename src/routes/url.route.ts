import express from 'express';
import { urlControllers } from '../controllers/url.controller';

const router = express.Router();

router.post('/urls', urlControllers.handleCreateNewShortURL);

router.get('/urls', urlControllers.handleGetShortURLs);

router.get('/urls/:shortId', urlControllers.handleRedirectUserToGivenURL);

router.get('/analytics/:shortId', urlControllers.handleGetAnalytics);

const urlRoutes = router;
export default urlRoutes;
