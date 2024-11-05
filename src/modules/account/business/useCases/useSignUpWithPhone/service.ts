import { signUp } from 'aws-amplify/auth';

import type {
  SignUpWithPhoneParams,
  SignUpWithPhoneRequest,
} from '@modules/account/business/useCases/useSignUpWithPhone/interfaces';

export async function signUpWithPhoneService(params: SignUpWithPhoneParams) {
    const paramsAdapter: SignUpWithPhoneRequest = {
      username: params.username,
      password: params.password,
    };

    await signUp(paramsAdapter);
}
