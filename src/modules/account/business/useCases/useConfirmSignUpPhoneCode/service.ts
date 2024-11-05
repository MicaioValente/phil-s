import { confirmSignUp } from 'aws-amplify/auth';

import type {
  ConfirmSignUpPhoneCodeParams,
  ConfirmSignUpPhoneCodeResponse,
} from '@modules/account/business/useCases/useConfirmSignUpPhoneCode/interfaces';

export async function confirmSignUpPhoneCodeService(
  params: ConfirmSignUpPhoneCodeParams,
): Promise<ConfirmSignUpPhoneCodeResponse> {
  await confirmSignUp({
    username: params.username,
    confirmationCode: params.confirmationCode,
  });
}
