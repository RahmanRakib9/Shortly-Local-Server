import { IUrl } from '../interfaces/url.interface';
import URL from '../models/url.model';
import { generateUniqueRandomString } from '../utils/generateUniqueRandomString';

const createShortURL = async (payload: IUrl) => {
  const shortId = generateUniqueRandomString(6);
  const shortURL = await URL.create({
    shortId,
    redirectUrl: payload.redirectUrl,
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
  const analytics = await URL.findOne({ shortId });
  return analytics;
};

const deleteShortURL = async (id: string) => {
  await URL.deleteOne({ id });
  return null;
};

export const urlServices = {
  createShortURL,
  getShortURLs,
  redirectUserToGivenURL,
  getAnalytics,
  deleteShortURL,
};
