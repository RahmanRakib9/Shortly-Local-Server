import { z } from 'zod';

const loginUserSchema = z.object({
  email: z.string(),
  password: z.string(),
});

const authValidations = {
  loginUserSchema,
};
export default authValidations;
