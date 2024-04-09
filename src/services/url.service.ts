import URL from '../models/url.model';
import { generateUniqueRandomString } from '../utils/generateUniqueRandomString';

const createShortURL = async (redirectURL: string) => {
  const shortId = generateUniqueRandomString(6);
  const shortURL = await URL.create({
    shortId: shortId,
    redirectUrl: redirectURL,
    visitHistory: [],
  });
  return shortURL;
};

const getShortURLs = async () => {
  const urls = await URL.find();
  return urls;
};

const redirectUserToGivenURL = async (shortId: string) => {
  const foundDocument = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    },
  );
  return foundDocument;
};

const getAnalytics = async (shortId: string) => {
  const result = await URL.findOne({ shortId });
  return result;
};

export const urlServices = {
  createShortURL,
  getShortURLs,
  redirectUserToGivenURL,
  getAnalytics,
};
