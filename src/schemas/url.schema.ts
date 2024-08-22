import { z } from 'zod';

const createShortUrlSchema = z.object({
  shortId: z.string().optional(),
  redirectUrl: z.string(),
  visitHistory: z.array(z.number()).optional(),
  user: z.string().optional(),
});

const updateShortUrlSchema = z.object({
  shortId: z.string().optional(),
  redirectUrl: z.string().optional(),
  visitHistory: z.array(z.number()).optional(),
  user: z.string().optional(),
});

const shortUrlValidations = {
  createShortUrlSchema,
  updateShortUrlSchema,
};
export default shortUrlValidations;
