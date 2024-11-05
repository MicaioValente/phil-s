import { z } from 'zod';

import type { confirmPasswordResetCodeSchema } from '@modules/account/business/forms/useConfirmPasswordResetCodeForm/schema';

export type ConfirmPasswordResetCodeSchema = z.infer<
  typeof confirmPasswordResetCodeSchema
>;
