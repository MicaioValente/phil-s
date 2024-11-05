import { z } from 'zod';

import type { searchSchema } from '@modules/profile/business/forms/useSearchFollowing/schema';

export type SearchSchema = z.infer<typeof searchSchema>;
