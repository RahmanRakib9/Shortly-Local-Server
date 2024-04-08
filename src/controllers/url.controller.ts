import { NextFunction, Request, Response } from 'express';
import { urlServices } from '../services/url.service';

async function handleGenerateNewShortURL(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const redirectURL = req.body.redirectURL;

    // if (!redirectURL) {
    //   TODO: handle api error
    // }

    const result = await urlServices.createShortId(redirectURL);
    res.json({
      success: true,
      message: 'successfully generate short unique url',
      payload: result,
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

    res.redirect(result?.redirectUrl);
  } catch (error) {
    next(error);
  }
}

export const urlControllers = {
  handleGenerateNewShortURL,
  handleRedirectUserToGivenURL,
};
