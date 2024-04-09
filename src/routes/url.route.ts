import express from 'express';
import { urlControllers } from '../controllers/url.controller';

const router = express.Router();

router.post('/url', urlControllers.handleGenerateNewShortURL);

router.get('/urls', urlControllers.handleGetShortURLs);

router.get('/:shortId', urlControllers.handleRedirectUserToGivenURL);

router.get('/analytics/:shortId', urlControllers.handleGetAnalytics);

const urlRoutes = router;
export default urlRoutes;
