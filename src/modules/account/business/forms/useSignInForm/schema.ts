import { z } from 'zod';

const minPassword = 0;

export const signInSchema = z
  .object({
    username: z
      .string({ required_error: 'requiredEmailOrPhone' })
      .min(3, 'requiredEmailOrPhone')
      .trim(),
    password: z
      .string({ required_error: 'requiredPassword' })
      .min(minPassword, 'requiredPassword')
      .trim()
  });
