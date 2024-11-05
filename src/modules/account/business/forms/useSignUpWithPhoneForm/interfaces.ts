import { z } from 'zod';

import type { signUpWithPhoneSchema } from '@modules/account/business/forms/useSignUpWithPhoneForm/schema';

export type SignUpWithPhoneSchema = z.infer<typeof signUpWithPhoneSchema>;
