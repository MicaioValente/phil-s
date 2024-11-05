import { z } from 'zod';

import type { signUpWithEmailSchema } from '@modules/account/business/forms/useSignUpWithEmailForm/schema';

export type SignUpWithEmailSchema = z.infer<typeof signUpWithEmailSchema>;
