import { z } from 'zod';

import type { editProfileSchema } from '@modules/profile/business/forms/useEditProfileForm/schema';

export type EditProfileSchema = z.infer<typeof editProfileSchema>;
