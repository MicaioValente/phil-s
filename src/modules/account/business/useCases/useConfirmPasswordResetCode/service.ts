import { confirmResetPassword } from 'aws-amplify/auth';

import type {
  ConfirmPasswordResetCodeParams,
  ConfirmPasswordResetCodeResponse,
} from '@modules/account/business/useCases/useConfirmPasswordResetCode/interfaces';

export async function confirmPasswordResetCodeService(
  params: ConfirmPasswordResetCodeParams,
): Promise<ConfirmPasswordResetCodeResponse> {
  await confirmResetPassword({
    username: params.username,
    confirmationCode: params.confirmationCode,
    newPassword: params.newPassword,
  });
}
