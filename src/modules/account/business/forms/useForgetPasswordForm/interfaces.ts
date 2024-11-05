import { z } from 'zod';

import type { forgetPasswordSchema } from '@modules/account/business/forms/useForgetPasswordForm/schema';

export type ForgetPasswordSchema = z.infer<typeof forgetPasswordSchema>;
