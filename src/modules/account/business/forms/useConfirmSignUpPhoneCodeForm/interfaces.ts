import { z } from 'zod';

import type { confirmSignUpPhoneCodeSchema } from '@modules/account/business/forms/useConfirmSignUpPhoneCodeForm/schema';

export type ConfirmSignUpPhoneCodeSchema = z.infer<
  typeof confirmSignUpPhoneCodeSchema
>;
