import express from 'express';
import { urlControllers } from '../controllers/url.controller';

const router = express.Router();

router.post('/url', urlControllers.handleGenerateNewShortURL);

router.get('/:shortId', urlControllers.handleRedirectUserToGivenURL);

const urlRoutes = router;
export default urlRoutes;
