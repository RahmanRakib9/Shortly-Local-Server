import { NextFunction, Request, Response } from 'express';
import { urlServices } from '../services/url.service';
import httpstatus from 'http-status';
import shortUrlValidations from '../schemas/url.schema';

async function handleCreateNewShortURL(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const payload = req.body;
    shortUrlValidations.createShortUrlSchema.parse(payload);

    const shortURL = await urlServices.createShortURL(payload);
    res.status(httpstatus.CREATED).json({
      success: true,
      message: 'Short URL Generated Successfully!',
      payload: shortURL,
    });
  } catch (error) {
    next(error);
  }
}

async function handleGetShortURLs(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const urls = await urlServices.getShortURLs();
    res.status(httpstatus.OK).json({
      success: true,
      message: 'successfully retrieved urls',
      payload: urls,
    });
  } catch (error) {
    next(error);
  }
}

async function handleRedirectUserToGivenURL(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const shortId = req.params.shortId;
    const result = await urlServices.redirectUserToGivenURL(shortId);

    // if(!result)
    //   {
    //   TODO: handle api error
    //   }

    res.redirect(result?.redirectUrl as string);
  } catch (error) {
    next(error);
  }
}

async function handleGetAnalytics(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const shortId = req.params.shortId;
    const analytics = await urlServices.getAnalytics(shortId);

    res.status(httpstatus.OK).json({
      success: true,
      message: 'Users Analytics Retrieved Successfully!',
      payload: {
        totalClicks: analytics?.visitHistory.length,
        timestamp: analytics?.visitHistory,
      },
    });
  } catch (error) {
    next(error);
  }
}

export const urlControllers = {
  handleCreateNewShortURL,
  handleRedirectUserToGivenURL,
  handleGetShortURLs,
  handleGetAnalytics,
};
