import URL from '../models/url.model';
import { generateUniqueRandomString } from '../utils/generateUniqueRandomString';

const createShortId = async (redirectURL: string) => {
  const shortId = generateUniqueRandomString(6);
  const result = await URL.create({
    shortId: shortId,
    redirectUrl: redirectURL,
    visitHistory: [],
  });
  return result;
};

export const urlServices = { createShortId };
