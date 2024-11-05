import { z } from 'zod';

import type { signInSchema } from '@modules/account/business/forms/useSignInForm/schema';

export type SignInUserNameSchema = z.infer<typeof signInSchema>;
