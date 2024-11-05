import { z } from 'zod';

import type { createProfileSchema } from '@modules/profile/business/forms/useCreateProfileForm/schema';

export type CreateProfileSchema = z.infer<typeof createProfileSchema>;
