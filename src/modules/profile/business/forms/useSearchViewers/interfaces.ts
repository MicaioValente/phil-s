import { z } from 'zod';

import type { searchSchema } from '@modules/profile/business/forms/useSearchViewers/schema';

export type SearchSchema = z.infer<typeof searchSchema>;
