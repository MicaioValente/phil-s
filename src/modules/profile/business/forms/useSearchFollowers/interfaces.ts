import { z } from 'zod';

import type { searchSchema } from '@modules/profile/business/forms/useSearchFollowers/schema';

export type SearchSchema = z.infer<typeof searchSchema>;
