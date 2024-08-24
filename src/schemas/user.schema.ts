import { z } from 'zod';

const createUserSchema = z.object({
  name: z.string(),
  email: z.string(),
  password: z.string(),
});

const updateUserSchema = z.object({
  name: z.string().optional(),
  email: z.string().optional(),
});

const userValidations = {
  createUserSchema,
  updateUserSchema,
};
export default userValidations;
