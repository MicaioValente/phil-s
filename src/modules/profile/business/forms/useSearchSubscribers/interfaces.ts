import { z } from 'zod';

import type { searchSchema } from '@modules/profile/business/forms/useSearchSubscribers/schema';

export type SearchSchema = z.infer<typeof searchSchema>;
