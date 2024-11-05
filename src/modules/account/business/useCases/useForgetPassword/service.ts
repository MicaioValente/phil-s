import { resetPassword } from 'aws-amplify/auth';

import type {
  ForgetPasswordParams,
  ForgetPasswordResponse,
} from '@modules/account/business/useCases/useForgetPassword/interfaces';
import { isEmail } from '@shared/validations';

export async function forgetPasswordService(
  params: ForgetPasswordParams,
): ForgetPasswordResponse {
  const isUsernameAnEmail = isEmail(params.username);

  await resetPassword({
    username: isUsernameAnEmail
      ? params.username
      : params.username.startsWith('+')
      ? params.username
      : `+${params.username}`,
  });
}
