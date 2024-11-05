import { z } from 'zod';

export const confirmPasswordResetCodeSchema = z.object({
  confirmationCode: z
    .string({ required_error: 'isRequiredCode' })
    .min(6, 'isRequiredCode')
    .trim(),
});
