import { signUp } from 'aws-amplify/auth';

import type {
  SignUpWithEmailParams,
  SignUpWithEmailRequest,
} from '@modules/account/business/useCases/useSignUpWithEmail/interfaces';

export async function signUpWithEmailService(params: SignUpWithEmailParams) {
  const paramsAdapter: SignUpWithEmailRequest = {
    username: params.email,
    password: params.password,
  };

  await signUp(paramsAdapter);
}
